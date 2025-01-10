import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Logo from '@/assets/images/logo.png';

const Navbar: React.FC = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        // Implement your logout logic here
    };

    return (
        <nav className="relative flex justify-between items-center py-6 lg:py-[60px] bg-white px-5 lg:px-[120px]">
            {/* Logo */}
            <Link className="w-full max-w-[87px]" to="/">
                <img className="w-full object-cover h-full" src={Logo} alt="ISO Access" />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-10 text-[#ABADAC]">
                <li>
                    <Link to="/" className="text-[#000] text-xs hover:text-primary transition duration-500 ease-in-out" role="button">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/how-it-works" className="text-xs hover:text-primary transition duration-500 ease-in-out" role="button">
                        How It Works
                    </Link>
                </li>
                <li>
                    <Link to="/services" className="text-xs hover:text-primary transition duration-500 ease-in-out" role="button">
                        Become a Partner
                    </Link>
                </li>
            </ul>

            {/* Get the App Button (Desktop) */}
            <div className="md:flex items-center gap-3 hidden">
                <Link to="/" className="text-[#ABADAC] bg-primary py-[10px] px-[40px] rounded-md" role="button">
                    Get the app
                </Link>
            </div>

            {/* Hamburger Button */}
            <button id="menu-btn" className="block md:hidden" onClick={toggleSideMenu}>
                {isSideMenuOpen ? (
                    <IoClose size={28} className="text-primary relative z-50" />
                ) : (
                    <GiHamburgerMenu size={24} className="text-primary" />
                )}
            </button>

            {/* Overlay */}
            {isSideMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSideMenu}
                />
            )}

            {/* Side Navigation */}
            <div
                id="side-menu"
                className={`fixed top-0 left-0 h-full bg-[#fff] md:hidden shadow-lg transform ${
                    isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 z-30 w-full p-5`}
            >
                <ul className="flex flex-col gap-5 text-[#ABADAC] w-full h-full justify-center items-center">
                    <li>
                        <Link
                            to="/"
                            className="text-[#000] text-sm hover:text-primary transition duration-500 ease-in-out"
                            onClick={toggleSideMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/how-it-works"
                            className="text-sm hover:text-primary transition duration-500 ease-in-out"
                            onClick={toggleSideMenu}
                        >
                            How It Works
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className="text-sm hover:text-primary transition duration-500 ease-in-out"
                            onClick={toggleSideMenu}
                        >
                            Become a Partner
                        </Link>
                    </li>
                    <li className='w-full justify-center items-center flex px-[36px]'>
                        <Link
                            to="/"
                            className="text-sm text-[#ABADAC] bg-primary w-full py-3 px-8 rounded-md  justify-center items-center flex"
                            onClick={toggleSideMenu}
                        >
                            Get the app
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
