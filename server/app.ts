import express, { Request, Response } from 'express';
import config from 'config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import Link from './models/Link';

const app = express();

const PORT: number = config.get('port') || 3000;
const DB: string = config.get('mongoURI');
const longDomainURI: string = config.get('longDomainURI');

app.use(cors(
    {
        origin: ['https://clickstrawl.com'],
        methods: ['GET', 'POST', 'OPTIONS'],
    }
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<void> => {
    // redirect to long domain
    res.status(301);
    res.redirect(longDomainURI);
}
);

app.post('/', cors(), (req: Request, res: Response) => {
    // get long domain from request
    const targetLink = req.body.target;
    // check if long domain is valid
    if (!targetLink) {
        res.status(400).json({ message: 'Target link is required' });
    } else {
        // check if long domain is already in DB
        Link.findOne({ to: targetLink }).exec()
            .then((link) => {
                if (link) {
                    // long domain is already in DB
                    res.json({ shortedLink: link.from });
                } else {
                    // target is not in DB
                    // generate shorted link domain
                    generateShortedLink()
                        .then((shortedLink) => {
                            // create new link
                            const newLink = new Link({
                                to: targetLink,
                                from: shortedLink
                            });
                            return newLink;
                        }).then((newLink) => {

                            // save new link to DB
                            newLink.save()
                                .then((link) => {

                                    res.json({ shortedLink: link.from });

                                });

                        }
                        );
                }
            }
            );
    }
});


app.get('/:route', (req, res) => {
    // get route from request
    const route = req.params.route;
    // find link in DB
    Link.findOne({ from: route }).then((link) => {
        console.log(route, link);
        if (!link) {
            res.status(404).send('Link not found');
        } else {
            // redirect to long domain
            res.redirect(301, link.to);
        }
    });
});

const generateShortedLink = async () => {
    // get count of links in DB
    return Link.count({})
        .then((count) => {

            // generate shorted link
            count = count || 0;
            return count.toString(36);

        });
};

const start = async () => {
    try {
        await mongoose.connect(DB);
        console.log('MongoDB Connected...');
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}!`);
        }
        );
    } catch (error) {
        let message: string;
        message = (error instanceof Error) ? error.message : message = String(error)
        // we'll proceed, but let's report it
        console.error( message )
        // Exit process with failure
        process.exit(1);
    }
};

start();



