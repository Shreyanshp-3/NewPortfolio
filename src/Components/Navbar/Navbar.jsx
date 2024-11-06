import React, { useState, useEffect, useRef } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Toggle the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="container-fluid">
            <nav className="flex items-center justify-between bg-[#1c1c1c] p-4 rounded-full w-full max-w-7xl mx-auto mt-8 border-t-[0.5px] border-t-[rgba(255,255,255,0.2)]">
                {/* Logo Section */}
                <div className="text-white font-bold text-3xl ml-6 tracking-wider">SHREYANSH</div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-3 mr-6">
                    <button className="px-6 py-2 text-white rounded-full border border-white hover:bg-white hover:text-gray-800 hover:scale-105 transform transition duration-300 ease-in-out tracking-wide">
                        Home
                    </button>
                    <button className="px-6 py-2 text-white rounded-full border border-white hover:bg-white hover:text-gray-800 hover:scale-105 transform transition duration-300 ease-in-out tracking-wide">
                        About
                    </button>
                    <button className="px-6 py-2 text-white rounded-full border border-white hover:bg-white hover:text-gray-800 hover:scale-105 transform transition duration-300 ease-in-out tracking-wide">
                        Portfolio
                    </button>
                    <button className="px-6 py-2 text-white rounded-full border border-white hover:bg-white hover:text-gray-800 hover:scale-105 transform transition duration-300 ease-in-out tracking-wide">
                        Contact
                    </button>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden flex items-center mr-6">
                    <button
                        onClick={toggleMenu}
                        className={`text-white focus:outline-none transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 scale-105' : 'scale-125'}`}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                                className={`${isOpen ? 'opacity-0' : ''}`}
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                                className={`${isOpen ? 'block' : 'hidden'}`}
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    ref={menuRef}
                    className={`absolute top-16 right-6 w-72 bg-[#1c1c1c] rounded-lg shadow-lg z-20 flex flex-col items-center space-y-6 py-6 md:hidden transition-transform transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                    style={{
                        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-white text-3xl"
                    >
                        &times;
                    </button>

                    <div className="text-white font-bold text-2xl mb-8">SHREYANSH</div>

                    {/* Navigation Buttons */}
                    <button className="w-40 py-2 text-white border border-white rounded-full hover:bg-gray-800 hover:border-gray-500 tracking-wide text-lg">
                        Home
                    </button>
                    <button className="w-40 py-2 text-white border border-white rounded-full hover:bg-gray-800 hover:border-gray-500 tracking-wide text-lg">
                        About
                    </button>
                    <button className="w-40 py-2 text-white border border-white rounded-full hover:bg-gray-800 hover:border-gray-500 tracking-wide text-lg">
                        Portfolio
                    </button>
                    <button className="w-40 py-2 text-white border border-white rounded-full hover:bg-gray-800 hover:border-gray-500 tracking-wide text-lg">
                        Contact
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
