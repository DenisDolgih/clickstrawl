interface Props {
    header: string;
}

/**
 * Renders the header component.
 *
 * @param {Props} header - The header to be displayed.
 * @return {JSX.Element} The rendered header component.
 */
const Header = ({ header }: Props) => {
    return (
        <h1 className="center-align teal-text">{ header }</h1>
    )
}

export default Header;