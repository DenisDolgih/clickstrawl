# Link Shortener with QR Code Generator

This web app helps to create links with utm_params for Google Analytics, short them via its local link shorten service, and generate QR codes from those links.

## Features

* Create links with utm_params for Google Analytics
* Short links via local link shorten service
* Generate QR codes from links

service is available at https://clickstrawl.com/ 

## Getting Started with your local

To get started, you need to install the following dependencies:


```

# Install front-end dependencies
cd client
npm install

# Install back-end dependencies
cd ../server
npm install

```

You also need to create ./server/config/default.json file with your data:
```
{
    "port": <PORT>,
    "mongoURI": "mongodb+srv://<username>:<password>@<documentCollection>.<zone>.mongodb.net/?retryWrites=true&w=majority",
    "longDomainURI": "http://frontenddomain:<FRONT_END_PORT>"
}
```
And .env in ./client directory
```
LINK_SHORTENER=http://backenddomain:<PORT>
```

The app will be available at http://frontenddomain:<PORT>.

## Usage

To create a link with utm_params, simply enter the URL of the link you want to shorten and the utm_params you want to use in the form. The app will then create a link for you.

To short a link click the button.

To generate a QR code from a link, simply click the button and the app will generate a QR code for you.

## Contributing

Contributions are welcome! Please open a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License.


You can customize this README.md file to fit your specific project. For example, you can add more details about the features of your app, how to use it, and how to contribute to the project. You can also add a license to your project.

I hope this helps!
