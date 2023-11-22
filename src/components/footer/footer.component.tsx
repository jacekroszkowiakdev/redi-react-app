// Include a Footer as a class component in another file
import { Component } from "react";

interface FooterProps {
    companyName: string;
    year: number;
}

class Footer extends Component<FooterProps> {
    render() {
        const { companyName, year } = this.props;

        return (
            <footer>
                <p>
                    &copy; {year} {companyName}.
                </p>
            </footer>
        );
    }
}

export default Footer;
