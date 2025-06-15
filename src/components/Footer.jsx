import React from 'react'
import { Link } from 'react-router-dom'
import TermsModal from './Terms&Conditions'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-300 md:text-xl lg:text-2xl mb-4 md:mb-0">
                ATMOS &copy; {currentYear}. All rights reserved.
            </div>
            <div>
                <TermsModal />
            </div>
        </div>
        </footer>
    )
}

export default Footer 