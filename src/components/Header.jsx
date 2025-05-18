import { useState, useEffect } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Check if scrolled past threshold for background change
            setIsScrolled(currentScrollY > 40)

            // Determine scroll direction and update visibility
            if (currentScrollY < lastScrollY) {
                // Scrolling up
                setIsVisible(true)
            } else if (currentScrollY > lastScrollY && currentScrollY > 40) {
                // Scrolling down and past threshold
                setIsVisible(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

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

    // Mobile header is always white
    const mobileHeaderClass = 'bg-white shadow-md border-b-[0.5px]';

    // Desktop header is transparent when not scrolled, white when scrolled
    const desktopHeaderClass = isScrolled
        ? 'md:bg-white md:shadow-md md:border-b-[0.5px]'
        : 'md:bg-transparent md:shadow-none md:border-b-transparent';

    const visibilityClass = isVisible
        ? 'translate-y-0 opacity-100'
        : '-translate-y-full opacity-0'

    // Text color: dark on white bg (mobile and scrolled desktop), white on transparent bg (unscrolled desktop)
    const textColorClass = isScrolled
        ? 'text-gray-800'
        : 'md:text-white text-gray-800';

    // Button background/text color: Black on white (mobile and scrolled desktop), Orange on transparent (unscrolled desktop)
    const buttonBgClass = isScrolled
        ? 'bg-black text-white hover:text-black hover:bg-orange-400'
        : 'md:bg-orange-400 md:text-black md:hover:bg-orange-300 bg-black text-white hover:text-black hover:bg-orange-400';

    return (
        <header className={`${mobileHeaderClass} ${desktopHeaderClass} ${visibilityClass} fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out`}>
        <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
            {/* Logo */}
            <div className={`text-2xl font-bold transition-colors duration-300 ${textColorClass}`}>
                Atmos
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                <a href="#home" onClick={handleSmoothScroll} className={`${textColorClass} hover:text-orange-400 transition-colors duration-300`}>Home</a>
                <a href="#about" onClick={handleSmoothScroll} className={`${textColorClass} hover:text-orange-400 transition-colors duration-300`}>About</a>
                <a href="#services" onClick={handleSmoothScroll} className={`${textColorClass} hover:text-orange-400 transition-colors duration-300`}>Services</a>
                <a href="#contact" onClick={handleSmoothScroll} className={`${textColorClass} hover:text-orange-400 transition-colors duration-300`}>Contact</a>
            </div>
            <button className={`hidden md:flex px-6 py-2 rounded-md transition-colors duration-300 ${buttonBgClass}`}>
                More
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${textColorClass} hover:text-orange-400 focus:outline-none transition-colors duration-300`}
                >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
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
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[60] ${
                    isMenuOpen ? '-translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className='flex items-center justify-between p-6'>
                    <div className="text-2xl font-bold text-gray-800">
                        Atmos
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="black" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="bg-white flex flex-col space-y-6 p-6">
                    <a href="#home" onClick={handleSmoothScroll} className="text-gray-800 hover:text-orange-400 text-lg">Home</a>
                    <a href="#about" onClick={handleSmoothScroll} className="text-gray-800 hover:text-orange-400 text-lg">About</a>
                    <a href="#services" onClick={handleSmoothScroll} className="text-gray-800 hover:text-orange-400 text-lg">Services</a>
                    <a href="#contact" onClick={handleSmoothScroll} className="text-gray-800 hover:text-orange-400 text-lg">Contact</a>
                    <button className="bg-black text-white px-6 py-2 rounded-md hover:orange-400 transition-colors w-40">
                        More
                    </button>
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