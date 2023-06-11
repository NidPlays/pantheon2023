import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="pt-3">
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
                    <Link to="/" className="menu__item">
                        <a className="menu__link">Home</a>
                    </Link>
                    <Link to="/events" className="menu__item">
                        <a className="menu__link">Events</a>
                    </Link>
                    <Link to="/aboutus" className="menu__item">
                        <a className="menu__link">About us</a>
                    </Link>
                    <Link to="/gallery" className="menu__item">
                        <a className="menu__link">Gallery</a>
                    </Link>
                    {/* <li className="menu__item">
                        <a className="menu__link" href="#contact">
                            Contact
                        </a>
                    </li> */}
                </ul>
                <p>Dr. Vishnuvardhana Road Post, RNS Farms Rd, Channasandra, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098</p>
                <p>&copy;2023 CAT TEAM | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Footer;
