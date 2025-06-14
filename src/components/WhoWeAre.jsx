import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
    return (
        <div className="pb-60 sm:pb-0 py-16 sm:py-10 lg:mb-36">
            <div className="container mx-auto">
                <motion.div className='flex flex-col-reverse lg:flex-row justify-between gap-8 md:gap-8'>
                    <motion.div 
                        className='w-full lg:w-1/2'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <div className='lg:relative w-full h-[200px] sm:h-[260px] md:h-[280px] lg:h-[200px] xl:h-[100px] 2xl:h-[250px]'>
                            <div className='flex flex-col gap-7 lg:gap-0 sm:flex-row md:justify-center lg:block lg:absolute lg:bottom-0 lg:left-0'>
                                <img src="/about-image-1.png" alt="ATMOS Logo" className="rounded-lg w-[280px] h-[220px] lg:w-[280px] lg:h-[300px] xl:w-[350px] xl:h-[380px] lg:translate-x-40 xl:translate-x-50 lg:translate-y-25 xl:translate-y-70" />
                                <img src="/about-image-2.png" alt="ATMOS Logo" className="rounded-lg w-[300px] h-[220px] lg:w-[280px] xl:w-[350px] lg:absolute xl:-bottom-90 lg:left-15 xl:left-20" />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className='w-full lg:w-1/2'
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-semibold text-black mb-10">
                            Who We Are
                        </h2>
                        <p className="lg:w-[75%] text-base text-text-black mb-4">
                            <strong>ATMOS Pvt (Advanced Task Management & Outsourcing Services)</strong> was founded by Haseeb Ahmad, a seasoned operations professional who’s worked hands-on with U.S.-based security firms—tackling everything from dispatch gaps and scheduling bottlenecks to overnight coverage and admin overload. Seeing these challenges firsthand, he launched ATMOS to deliver precision-driven, cost-effective support that plugs right into your existing operations.
                        </p>
                        <div className='flex flex-col xsm:flex-row justify-between gap-10 lg:gap-20 relative items-center'>
                            <div className='w-full md:w-1/2 text-black'>
                                <div className='flex items-center gap-2'><span className='text-[#ffaa17] text-3xl'>&#x2023;</span><p className=''>24/7 SLA Compliance</p></div>
                                <div className='flex items-center gap-2'><span className='text-[#ffaa17] text-3xl'>&#x2023;</span><p className=''>Cost Savings</p></div>
                                <div className='flex items-center gap-2'><span className='text-[#ffaa17] text-3xl'>&#x2023;</span><p className=''>Dedicated Teams</p></div>
                                <div className='flex items-center gap-2'><span className='text-[#ffaa17] text-3xl'>&#x2023;</span><p className=''>Secure & Scalable</p></div>
                            </div>
                            <span className="absolute top-1/2 xsm:top-0 left-20 xsm:left-1/2 transform -translate-x-1/2 -translate-y-[0%] w-40 xsm:w-[1px] h-[2px] xsm:h-32 mt-4 bg-orange-400"></span>
                            <div className='w-full md:w-1/2 md:pl-2 text-black'>
                            <div className='w-24 h-24 text-white bg-[#1f1f1f] rounded-full text-center flex items-center justify-center shadow-2xl'>
                                <p>Since <br />2024</p>
                            </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default WhoWeAre
