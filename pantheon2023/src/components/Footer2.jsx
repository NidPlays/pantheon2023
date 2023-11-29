import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import '../index.css'

const navigation = {
    main: [
        { name: 'Home', to: '/' },
        { name: 'Events', to: '/events' },
        { name: 'About Us', to: '/aboutus' },
        { name: 'Gallery', to: '/gallery' },
    ],
    social: [
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/cat_rnsit/',
            icon: <FaInstagram />,
        },
        {
            name: 'Email',
            href: 'mailto:catrnsitofficial@gmail.com',
            icon: <AiOutlineMail />,
        },
    ],
};

export default function Footer2({backgroundColor}) {
    return (
        <>
            <footer className={`z-0 ${backgroundColor ? backgroundColor : 'bg-[#151515]'}`}>
                <div className='bg-gradient-to-t from-yellow-600/[.15] via-transparent'>
                <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-20 lg:px-8">
                    <nav className="relative flex justify-center items-center flex-wrap mx-0 space-x-6 my-2.5" aria-label="Footer">
                        {navigation.main.map((item) => (
                            <div key={item.name} className="pb-6">
                                <Link to={item.to} className="text-normal font-medium leading-6 text-gray-300 hover:text-gray-400">
                                    {item.name}
                                </Link>
                            </div>
                        ))}
                    </nav>
                    <div className="mt-10 flex justify-center space-x-10">
                        {navigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">{item.name}</span>
                                {React.cloneElement(item.icon, { className: 'h-6 w-6' })}
                            </a>
                        ))}
                    </div>
                    <p className="mt-10 text-center text-sm leading-5 text-gray-400">
                        &copy; Pantheon 2023, Inc. All rights reserved.
                    </p>
                </div>
                </div>
            </footer>


        </>
    );
}
