// Include a Header as a functional component in a separate file
import "./header.styles.css";
interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header>
            {/* Logo Left */}
            <div className="header-logo-container">
                <img
                    // src="../../resources/img/jr_dev.png"
                    alt="site-logo"
                    width="150"
                    className="relative mx-auto rounded-md bg-black"
                />
            </div>
            <h1>{title}</h1>
            {/* Right The Menu */}

            <nav className="navbar">
                {/* Nav Links */}
                <div className="navbar-home">
                    <a href="../index.html" target="_parent">
                        Home
                    </a>
                </div>
                <div className="navbar-about">
                    <a href="about.html" target="_parent">
                        About me
                    </a>
                </div>

                <div className="navbar-projects">
                    <a href="projects.html" target="_parent">
                        Projects
                    </a>
                </div>

                <div className="navbar-gallery">
                    <a href="../gallery/index.html" target="_parent">
                        Gallery
                    </a>
                </div>
                <div className="navbar-contact">
                    <a href="contact.html" target="_parent">
                        Contact me
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
