import React from 'react'
import WhyChooseUs from './WhyChooseUs'
import WhoWeAre from './WhoWeAre'
import CEO from './CEO'
import Testimonials from './Testimonials'

const About = () => {
    return (
        <section id="about" className="mt-14">
            <div className="">
                <WhoWeAre />
                <CEO />
                <WhyChooseUs />
            </div>
        </section>
    )
}

export default About
