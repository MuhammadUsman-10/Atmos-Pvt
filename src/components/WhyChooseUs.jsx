import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {

    const features = [
        {
          title: "Industry-Focused",
          description: "We specialize in the security sector — we understand your operations, language, and pain points.",
          position: { x: -120, y: -380 },
          icon: "/industry-focused.png",
        },
        {
          title: "Cost-Efficient",
          description: "Achieve significant savings compared to in-house staffing without compromising quality.",
          position: { x: 300, y: -245 },
          icon: "/budget.svg"
        },
        {
          title: "24/7 Coverage",
          description: "Round-the-clock support tailored to your shift structures, including weekends and holidays.",
          position: { x: 300, y: 60 },
          icon: "/24-7-coverage.png",
        },
        {
          title: "Trained Staff",
          description: "All personnel are trained in security protocols and communication etiquette specific to dispatch and monitoring.",
          position: { x: -120, y: 200 },
          icon: "/trained-staff.png",
        },
        {
          title: "Data Security",
          description: "We take your confidentiality seriously, with secure systems and strict access controls.",
          position: { x: -500, y: 60 },
          icon: "/data-security.svg",
        },
        {
          title: "Scalable Teams",
          description: "Easily scale up or down based on your needs — without the hassle of hiring and training.",
          position: { x: -500, y: -245 },
          icon: "/scalable-team.svg", // Example icon path
        },
      ];
      

    return (
        <div className="py-10">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center uppercase text-black mb-4 relative">
                    Why <span className="text-orange-400">Choose</span> Us
                </h2>
                <p className="text-lg text-center textblack my-12">
                    Why Security Companies Trust ATMOS.
                </p>

                <div className='flex flex-col items-center justify-center relative md:mt-26 md:mb-20 lg:py-10 md:h-[630px]' >
                    {/* Central Image */}
                    <div className='hidden md:flex relative'>
                        <span className="-z-0 absolute top-[12px] left-[14px] rounded-full w-[200px] h-[200px] bg-orange-400 blur-3xl"></span>
                        <img src="/logo-circle.png" alt="Logo" className="z-0 w-30 lg:w-48 xl:w-56" />
                    </div>

                    {/* Feature Items Container */}
                    {/* Desktop Layout */}
                    <div className="absolute inset-0 items-center justify-center hidden md:flex">
                    {features.map((feature, index) => (
                        <motion.div
                        key={index}
                        className="absolute flex flex-col items-center text-center w-60"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, x: feature.position.x, y: feature.position.y }}
                        transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        >
                        <div className="w-20 items-center justify-center mb-2 bg-orange-400 px-4 py-4 rounded-full">
                            <img src={feature.icon} alt="Icon" className="w-14" />
                        </div>
                        <h2 className="text-lg font-bold text-black mb-1">{feature.title}</h2>
                        <p className="text-sm text-black">{feature.description}</p>
                        </motion.div>
                    ))}
                    </div>
                    {/* Mobile Layout: Stack all features in column */}
                    <div className="flex flex-col items-center space-y-10 md:hidden z-10">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center w-60">
                        <img src="/logo-circle.png" alt="Icon" className="w-20 md:w-16 mb-2" />
                        <h2 className="text-lg font-bold text-white mb-1">{feature.title}</h2>
                        <p className="text-sm text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
