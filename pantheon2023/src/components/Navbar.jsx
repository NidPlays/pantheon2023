import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="relative top-0 z-50 w-full bg-transparent shadow backdrop-blur-sm">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/">
                            <h2 className="text-2xl font-bold logo-text">Pantheon</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {!navbar ? <FaBars size={20} className="text-white" /> : <ImCross size={20} className="text-white" />}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white ">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-white ">
                                <Link to="/events">Events</Link>
                            </li>
                            <li className="text-white ">
                                <Link to="/aboutus">About us</Link>
                            </li>
                            <li className="text-white ">
                                <Link to="/gallery">Gallery</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
