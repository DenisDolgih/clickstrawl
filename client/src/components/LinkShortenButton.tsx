interface Props {
    setResultLink: React.Dispatch<React.SetStateAction<string>>;
    target: string;
}

/**
 * Generates a shortened link when the button is clicked.
 *
 * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} e - The event object when the button is clicked.
 * @return {void} This function does not return anything.
 */
const LinkShortenButton = ({ setResultLink, target }: Props) => {

    /**
     * Shortens a link by sending a POST request to the server and updating the result link.
     *
     * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} e - The click event that triggers the function.
     * @return {void} This function does not return a value.
     */
    const shortenLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        e.preventDefault();
        const url: string = 'https://cltrwl.com';
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
