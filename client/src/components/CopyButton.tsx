import M from 'materialize-css';

interface Props {
    text: string;
}

const CopyButton = ({ text }: Props) => {

    /**
     * Copies the provided text to the clipboard.
     *
     * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} e - The click event that triggers the copy action.
     * @return {void}
     */
    const copyToClipboard = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        e.preventDefault();
        navigator.clipboard.writeText(text).then(
            () => {
                M.toast({ html: 'Text copied to clipboard: ' + text })
                console.log('Text copied to clipboard:', text);
            },
            (err) => {
                console.error('Failed to copy text: ', err);
            }
        );
    }

    return (
        <a className="waves-effect waves-light btn-large btn-margin" onClick={copyToClipboard}>
            <i className="material-icons left" >content_copy</i>Copy
        </a>
    );
}

export default CopyButton;