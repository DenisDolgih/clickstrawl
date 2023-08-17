import { useState } from 'react';
import isValidURL from '../mixins/isValidURL';

interface Props {
    setURL: React.Dispatch<React.SetStateAction<string>>;
    url: string;
}

/**
 * Renders an input field for a URL with a helper text indicating whether the URL is valid or not.
 *
 * @param {Props} url - The current URL value.
 * @param {function} setURL - The function to update the URL value.
 * @return {JSX.Element} The JSX element representing the URL input field.
 */
const URLInput = ({url, setURL}: Props): JSX.Element => {

    const [urlHelperTextColor, setUrlHelperTextColor] = useState<string>('');
    const [urlHelperText, setUrlHelperText] = useState<string>('Enter the link you want to tag');

    /**
     * Updates the URL and performs validation checks.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - The event object representing the change in the input element.
     * @return {void} This function does not return a value.
     */
    const updateURL: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setURL(e.target.value);
        if (isValidURL(e.target.value)) {
            setUrlHelperTextColor('green-text');
            setUrlHelperText('Valid URL');
        } else {
            setUrlHelperTextColor('red-text');
            setUrlHelperText('Invalid URL');
        }

    }

    return (
        <div className="input-field col s12 l4">
            <label htmlFor="target_link" className="active teal-text">target link:</label>
            <input
                type="text"
                value={url}
                onChange={updateURL}
                id="target_link"
            />
            <span className={`helper-text ${urlHelperTextColor}`}>{`${urlHelperText}`}</span>
        </div>
    );
}

export default URLInput;