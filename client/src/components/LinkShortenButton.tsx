interface Props {
    setResultLink: React.Dispatch<React.SetStateAction<string>>;
    target: string;
}

const LinkShortenButton = ({ setResultLink, target }: Props) => {

    const shortenLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        e.preventDefault();
        const url: string | false = (import.meta.env.LINK_SHORTENER as string) || false;
        if (!url) {
            console.error('No link shortener URL provided');
            return;
        }
        const data = { target };
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'mode': 'no-cors'
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => { setResultLink(url + '/' + data.shortedLink) })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <a className="waves-effect waves-light btn-large btn-margin" onClick={shortenLink}>
            <i className="material-icons left">insert_link</i>Shorten link
        </a>
    );
}

export default LinkShortenButton;
