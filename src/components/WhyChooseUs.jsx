import React from 'react'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
    return (
        <div className="py-10">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center uppercase text-white mb-4 relative">
                    Why <span className="text-orange-400">Choose</span> Us
                    <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-orange-400"></span>
                </h2>
                <p className="text-lg text-center text-white my-12">
                    Why Security Companies Trust ATMOS.
                </p>
                <div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-4'>
                    <div className='w-full lg:w-1/2'>
                        <img src="https://muhammadusman-10.github.io/Link-Building-Website/images/illustrations/creative-team.svg" alt="ATMOS Logo" className="mx-auto w-[380px] mt-2 animate-fade-in-up" />
                    </div>
                    <motion.div 
                        className='w-full lg:w-1/2'
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-base text-gray-300 mb-4">
                            <strong>ATMOS Pvt (Advanced Task Management & Outsourcing Services)</strong>
                            <br /><br />
                            We're not just another outsourcing provider — we're your operations partner.
                        </p>
                        <div className='flex flex-col md:flex-row justify-between gap-6 mt-6'>
                            {/* Left bars */}
                            <div className='w-full md:w-1/2 flex flex-col gap-4'>
                                {[
                                    { label: "Industry-Focused", value: 96 },
                                    { label: "Cost Efficient", value: 95 },
                                    { label: "24/7 Coverage", value: 92 },
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className='flex justify-between mb-1 text-sm text-white'>
                                            <span>{item.label}</span>
                                            <span>{item.value}%</span>
                                        </div>
                                        <div className='w-full bg-gray-200 rounded-full h-2.5'>
                                            <div className='bg-orange-400 h-2.5 rounded-full' style={{ width: `${item.value}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right bars */}
                            <div className='w-full md:w-1/2 flex flex-col gap-4'>
                                {[
                                    { label: "Data Security", value: 98 },
                                    { label: "Trained Staff", value: 95 },
                                    { label: "Scalable Teams", value: 90 },
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className='flex justify-between mb-1 text-sm text-white'>
                                            <span>{item.label}</span>
                                            <span>{item.value}%</span>
                                        </div>
                                        <div className='w-full bg-gray-200 rounded-full h-2.5'>
                                            <div className='bg-orange-400 h-2.5 rounded-full' style={{ width: `${item.value}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
