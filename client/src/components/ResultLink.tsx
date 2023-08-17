interface Props {
    resultLink: string;
}

/**
 * Renders a result link component.
 *
 * @param {Props} resultLink - The result link to be rendered.
 * @return {JSX.Element} The rendered result link component.
 */
const ResultLink = ({ resultLink }: Props) => {
    return (
        <div className="container center-align section">
            <h5 className="result-link">{resultLink}</h5>
        </div>
    )
}

export default ResultLink;