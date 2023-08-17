import { ILinkUpdater } from '../interfaces/interfaces';

interface Props {
    setResultLink: ILinkUpdater;
    parameter: {
        name: string,
        description: string
    };
}

/**
 * Renders an input field for a parameter.
 *
 * @param {Props} props - the component props
 * @return {JSX.Element} the rendered input field
 */
const ParameterInput = (props: Props) => {

    return (

        <div className="input-field col s12 l4">
            <label
                htmlFor={props.parameter.name}
                className="active teal-text"
            >
                {props.parameter.name}:
            </label>
            <input type="text" id={props.parameter.name} onChange={(e) => {
                props.setResultLink(props.parameter.name, e.target.value);
            }
            } />
            <div className="helper-text">{props.parameter.description}</div>
        </div>

    )

}

export default ParameterInput;