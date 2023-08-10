import { useState } from 'react';
import isValidURL from '../mixins/isValidURL';

interface Props {
    setURL: React.Dispatch<React.SetStateAction<string>>;
    url: string;
}

const URLInput = ({url, setURL}: Props): JSX.Element => {

    const [urlHelperTextColor, setUrlHelperTextColor] = useState<string>('');
    const [urlHelperText, setUrlHelperText] = useState<string>('Enter the link you want to tag');

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