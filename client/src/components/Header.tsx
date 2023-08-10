interface Props {
    header: string;
}

const Header = ({ header }: Props) => {
    return (
        <h1 className="center-align teal-text">{ header }</h1>
    )
}

export default Header;