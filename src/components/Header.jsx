import { useState, useEffect } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const headerClass = isScrolled
        ? 'bg-white shadow-md border-b-[0.5px] fixed top-0'
        : 'bg-transparent absolute top-0'

    const textColorClass = isScrolled
        ? 'text-gray-800'
        : 'text-white'

    const buttonBgClass = isScrolled
        ? 'bg-black text-white hover:text-black hover:bg-orange-400'
        : 'bg-orange-400 text-black hover:bg-orange-300'

    return (
        <header className={`${headerClass} w-full left-0 z-50 transition-all duration-300 ease-in-out`}>
        <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
            {/* Logo */}
            <div className={`text-2xl font-bold transition-colors duration-300 ${textColorClass}`}>
                Atmos
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className={`${textColorClass} hover:text-orange-400 transition-colors duration-300`}>Home</a>
                <a href="#about" className={`${textColorClass} hover:text-orange-400 transition-colors duration-300`}>About</a>
                <a href="#services" className={`${textColorClass} hover:text-orange-400 transition-colors duration-300`}>Services</a>
                <a href="#contact" className={`${textColorClass} hover:text-orange-400 transition-colors duration-300`}>Contact</a>
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
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                    isMenuOpen ? '-translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className='flex items-center justify-between mb-8 p-6'>
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
                <div className="flex flex-col space-y-6 p-6">
                    <a href="#home" className="text-gray-800 hover:text-orange-400 text-lg">Home</a>
                    <a href="#about" className="text-gray-800 hover:text-orange-400 text-lg">About</a>
                    <a href="#services" className="text-gray-800 hover:text-orange-400 text-lg">Services</a>
                    <a href="#contact" className="text-gray-800 hover:text-orange-400 text-lg">Contact</a>
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