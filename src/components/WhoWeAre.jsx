import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto">
                <motion.div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-4'>
                    <motion.div 
                        className='w-full lg:w-1/2'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <img src="/about-us.png" alt="ATMOS Logo" className=" w-[500px]" />
                    </motion.div>
                    <motion.div 
                        className='w-full lg:w-1/2'
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-semibold text-black mb-10 relative">
                            Who We Are
                        </h2>
                        <p className="text-base text-text-black mb-4">
                            <strong>ATMOS Pvt (Advanced Task Management & Outsourcing Services)</strong> was founded by Haseeb Ahmad, a seasoned operations professional who’s worked hands-on with U.S.-based security firms—tackling everything from dispatch gaps and scheduling bottlenecks to overnight coverage and admin overload. Seeing these challenges firsthand, he launched ATMOS to deliver precision-driven, cost-effective support that plugs right into your existing operations.
                        </p>
                        <div className='flex flex-col md:flex-row justify-between gap-4 relative items-center'>
                            <div className='w-full md:w-1/2 text-black'>
                                <div className='flex gap-2'><span className='mt-1 text-orange-400 text-3xl'>&#x2023;</span><p className='mt-3 mb-2'> <strong>24/7 SLA Compliance:</strong> 98% on-time dispatch & scheduling</p></div>
                                <div className='flex gap-2'><span className='mt-1 text-orange-400 text-3xl'>&#x2023;</span><p className='mt-3 mb-2'> <strong>Cost Savings:</strong> Up to 50% lower operational overhead</p></div>
                            </div>
                            <span className="hidden md:inline-block absolute left-1/2 transform -translate-x-1/2 -translate-y-[0%] w-[1px] h-32 mt-4 bg-orange-400"></span>
                            <div className='w-full md:w-1/2 md:pl-2 text-black'>
                                <div className='flex gap-2'><span className='mt-1 text-orange-400 text-3xl'>&#x2023;</span><p className='mt-3 mb-2'> <strong>Dedicated Teams:</strong> U.S-aligned hours, trained for security-sector demands</p></div>
                                <div className='flex gap-2'><span className='mt-1 text-orange-400 text-3xl'>&#x2023;</span><p className='mt-3 mb-2'> <strong>Secure & Scalable:</strong> ISO-grade data practices, rapid team ramp-up</p></div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default WhoWeAre
