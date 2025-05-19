import React from 'react'
import WhyChooseUs from './WhyChooseUs'
import WhoWeAre from './WhoWeAre'

const About = () => {
    return (
        <section id="about" className="py-5">
            <div className="container mx-auto md:px-6">
                <h2 className="text-4xl font-bold text-center uppercase text-white mb-4 relative">
                <span className="text-orange-400">About</span> Us
                    <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-orange-400"></span>
                </h2>
                <WhoWeAre />
                <WhyChooseUs />
            </div>
        </section>
    )
}

export default About
