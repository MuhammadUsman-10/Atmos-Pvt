import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from './Testimonials';

const CEO = () => {
    return (
        <div className="bg-[#e1e2e1] sm:py-10 py-16 mt-16">
            <div className="container mx-auto px-6">
                <div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-4'>
                    <motion.div 
                        className='w-full lg:w-1/2 mt-4 lg:px-16'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-semibold text-black mb-10">
                            <span className="text-[#ffaa17]">Our Founder</span> & CEO
                        </h2>
                        <p className="text-base md:text-xl text-black mb-4">
                            Haseeb&apos;s hard work and dedication to accuracy are truly commendable. His ability to provide precise, 
                            well-researched information makes him an invaluable asset to any team.
                            <br/> <br />
                            At ATMOS, we’re more than a vendor—we’re a dependable extension of your security operation. From virtual assistance and dispatch to camera monitoring and back-office management, our offshore teams handle the heavy lifting so you can focus on what matters most: protecting people and assets.
                        </p>
                    </motion.div>
                    <div className='w-full lg:w-1/2 relative'>
                        <motion.div 
                            className="absolute rounded-lg top-[20px] max-[425px]:right-[-10px] xs:right-[15px] xsm:right-[95px] sm:right-[45px] md:right-[85px] lg:right-[25px] xl:right-[40px] xxl:right-[30px] 2xl:right-[105px] w-[200px] h-[200px] sm:w-[280px] sm:h-[260px] bg-[#ffaa17]"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <motion.div initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                            viewport={{ once: true }}>
                            <img src="/ceo.jpeg" alt="CEO Image" className="relative rounded-lg mx-auto w-[300px] h-[190px] sm:w-[480px] sm:h-[280px] md:w-[480px] md:h-[280px] lg:w-[400px] xl:w-[480px] mt-8" />
                        </motion.div>
                    </div>
                </div>
            </div>
            <Testimonials />
        </div>
    )
}

export default CEO

