import React from 'react';
import { motion } from 'framer-motion';

const CEO = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-4'>
                    <motion.div 
                        className='w-full lg:w-1/2 mt-4 p-5'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-semibold text-white mb-10 relative">
                            <span className="text-orange-400">CEO&apos;</span> Message
                            <span className="absolute bottom-[-20px] left-0 w-24 h-[1px] bg-orange-400"></span>
                        </h2>
                        <p className="text-base text-gray-300 mb-4">
                            <strong>Welcome to ATMOS</strong>, where we're dedicated to providing top-notch outsourcing solutions for security companies. Our team is passionate about delivering exceptional service and support to help you succeed.
                            <br /><br />
                            We're committed to building long-lasting relationships with our clients, and we're excited to have you join our community.
                        </p>
                    </motion.div>
                    <div className='w-full lg:w-1/2 relative'>
                        <motion.div 
                            className="-z-10 rounded-lg absolute top-[20px] md:right-[-65px] lg:right-[-160px] xl:right-[-105px] transform -translate-x-1/2 w-[290px] h-[270px] bg-orange-400"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <motion.div initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                            viewport={{ once: true }}>
                            <img src="/ceo.jpeg" alt="CEO Image" className="rounded-lg mx-auto w-[480px] h-[280px] mt-8" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CEO

