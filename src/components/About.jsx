import React from 'react'
import WhyChooseUs from './WhyChooseUs'
import WhoWeAre from './WhoWeAre'
import CEO from './CEO'
import Testimonials from './Testimonials'

const About = () => {
    return (
        <section id="about" className="mt-14">
            <div className="">
                {/* <h2 className="text-4xl font-bold text-center uppercase text-black mb-4">
                    <span className="text-[#ffaa17]">About</span> Us
                </h2> */}
                <WhoWeAre />
                <CEO />
                <Testimonials />
                <WhyChooseUs />
            </div>
        </section>
    )
}

export default About
