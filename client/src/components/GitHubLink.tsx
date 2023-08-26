import gitHubLogo from "../assets/github_icon.svg";

/**
 * Generates a GitHub link component.
 *
 * @return {JSX.Element} The GitHub link component.
 */
const gitHubLink = () => {
    const url = "https://github.com/DenisDolgih/clickstrawl";

    return (
        <div style={{
            position: 'fixed', 
            bottom: '3px', 
            right: '3px'
            }}>
            <a href={url} target="_blank" rel="noreferrer">
                <img src={gitHubLogo} alt="GitHub logo" style={{ width: '30px'}}/>
            </a>
        </div>
    )
}

export default gitHubLink;