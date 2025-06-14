import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {

    const features = [
        {
          title: "Industry-Focused",
          description: "We specialize in the security sector — we understand your operations, language, and pain points.",    
          icon: "/industry-focused.png",
        },
        {
          title: "Cost-Efficient",
          description: "Achieve significant savings compared to in-house staffing without compromising quality.",
          icon: "/budget.svg"
        },
        {
          title: "24/7 Coverage",
          description: "Round-the-clock support tailored to your shift structures, including weekends and holidays.",
          icon: "/24-7-coverage.png",
        },
        {
          title: "Trained Staff",
          description: "All personnel are trained in security protocols and communication etiquette specific to dispatch and monitoring.",  
          icon: "/trained-staff.png",
        },
        {
          title: "Data Security",
          description: "We take your confidentiality seriously, with secure systems and strict access controls.",
          icon: "/data-security.svg",
        },
        {
          title: "Scalable Teams",
          description: "Easily scale up or down based on your needs — without the hassle of hiring and training.",
          icon: "/scalable-team.svg",
        },
      ];

    return (
      <div className="py-10">
        <div className='container mx-auto'>
          <h2 className="text-4xl font-bold text-center uppercase text-black mb-4">
            Why <span className="text-[#ffaa17]">Choose</span> Us
          </h2>
          <p className="text-lg text-center textblack my-12">
            Why Security Companies Trust ATMOS.
          </p>
          <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group flex flex-col items-center text-center p-6 bg-[#1f1f1f] hover:bg-[#ffaa17] rounded-lg shadow-lg">
                <img src={feature.icon} alt="Icon" className="w-20 md:w-16 mb-2 -[#ffaa17]" />
                <h2 className="text-lg font-bold text-black mb-2">{feature.title}</h2>
                <p className="text-sm text-black">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default WhyChooseUs
