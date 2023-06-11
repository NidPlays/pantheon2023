import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
    return (
        <div>
            <footer className="pb-5 footer">
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="social-icon">
                    {/* <li className="social-icon__item">
                        <a className="social-icon__link" href="#">
                            <FaFacebook />
                        </a>
                    </li>
                    <li className="social-icon__item">
                        <a className="social-icon__link" href="#">
                            <FaTwitter />
                        </a>
                    </li> */}
                    <li className="social-icon__item">
                        <a
                            className="social-icon__link"
                            href="mailto:catrnsitofficial@gmail.com
"
                        >
                            <AiOutlineMail />
                        </a>
                    </li>
                    <li className="social-icon__item">
                        <a className="social-icon__link" href="https://www.instagram.com/cat_rnsit/">
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
                <ul className="menu">
                    <li className="menu__item">
                        <a className="menu__link" href="#">
                            Home
                        </a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#">
                            Events
                        </a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#">
                            About us
                        </a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#">
                            Gallery
                        </a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
                <p>Dr. Vishnuvardhana Road Post, RNS Farms Rd, Channasandra, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098</p>
                <p>&copy;2023 CAT TEAM | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Footer;
