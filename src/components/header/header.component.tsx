// Include a Header as a functional component in a separate file
interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;
