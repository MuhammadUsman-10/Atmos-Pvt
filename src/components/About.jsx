import React from 'react'
import WhyChooseUs from './WhyChooseUs'
import WhoWeAre from './WhoWeAre'
import CEO from './CEO'

const About = () => {
    return (
        <section id="about" className="py-5">
            <div className="container mx-auto md:px-6">
                <h2 className="text-4xl font-bold text-center uppercase text-black mb-4 relative">
                    <span className="text-orange-400">About</span> Us
                </h2>
                <CEO />
                <WhoWeAre />
                <WhyChooseUs />
            </div>
        </section>
    )
}

export default About
