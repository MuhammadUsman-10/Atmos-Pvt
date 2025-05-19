import React from 'react'
import { Link } from 'react-router-dom'
import TermsModal from './Terms&Conditions'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-orange-400 mb-4 md:mb-0">
                ATMOS &copy; {currentYear}. All rights reserved.
            </div>

            {/* Navigation Links */}
            {/* <div className="flex flex-wrap justify-center items-center space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-orange-400">Home</a>
            <a href="#" className="hover:text-orange-400">About</a>
            <a href="#" className="hover:text-orange-400">Services</a>
            <a href="#" className="hover:text-orange-400">Contact</a>
            </div> */}

            {/* More Button */}
            <div>
                <TermsModal />
            </div>
        </div>
        </footer>
    )
}

export default Footer 