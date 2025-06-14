import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Smooth scroll handler
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu after clicking a link
        setIsMenuOpen(false);
    };

    return (
        <header className='z-1 fixed w-full bg-white shadow-xl transition-all duration-300 ease-in-out ml-[-25px] md:ml-0'>
        <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
            {/* Logo */}
            <a href='#home' onClick={(e) => {
                e.preventDefault();
                document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
                }}>
                <img src="logo.png" alt="" className='w-full h-12 object-contain'/>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                <a href="#home" onClick={handleSmoothScroll} className='text-xl text-gray-600 hover:text-black transition-colors duration-300'>Home</a>
                <a href="#about" onClick={handleSmoothScroll} className='text-xl text-gray-600 hover:text-black transition-colors duration-300'>About</a>
                <a href="#services" onClick={handleSmoothScroll} className='text-xl text-gray-600 hover:text-black transition-colors duration-300'>Services</a>
            </div>
            <a href="#contact" className='hidden md:flex bg-[#ffaa17] hover:bg-[#febf51] px-6 py-2 rounded-md cursor-pointer transition-colors duration-300'
                onClick={(e) => {
                e.preventDefault();
                document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
                }}
            >
                Contact Us
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className=' hover:text-[#ffaa17] focus:outline-none transition-colors duration-300'
                >
                <svg className="h-6 w-6" fill="rgb(255,177,44)" viewBox="0 0 24 24" stroke="rgb(255,177,44)">
                    {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
                </button>
            </div>
            </div>

            {/* Mobile Navigation - Side Menu */}
            <div 
                className={`fixed top-0 left-0 min-h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[50] ${
                    isMenuOpen ? '-translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className='flex items-center justify-between p-6'>
                    <div className="">
                        <img src="logo.png" alt="" className='w-full h-12 object-contain'/>
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className=" focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="black" viewBox="0 0 24 24" stroke="rgb(255,177,44)">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="bg-white flex flex-col space-y-6 p-6 mt-[-15px]">
                    <a href="#home" onClick={handleSmoothScroll} className="text-gray-600 hover:text-[#ffaa17] text-lg">Home</a>
                    <a href="#about" onClick={handleSmoothScroll} className="text-gray-600 hover:text-[#ffaa17] text-lg">About</a>
                    <a href="#services" onClick={handleSmoothScroll} className="text-gray-600 hover:text-[#ffaa17] text-lg">Services</a>
                    <a href="#contact" className="bg-[#ffaa17] text-black text-center px-6 py-2 rounded-md transition-colors w-40"onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </nav>
        </header>
    )
}

export default Header 