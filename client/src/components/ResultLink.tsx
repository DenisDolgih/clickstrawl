interface Props {
    resultLink: string;
}

const ResultLink = ({ resultLink }: Props) => {
    return (
        <div className="container center-align section">
            <h5 className="result-link">{resultLink}</h5>
        </div>
    )
}

export default ResultLink;