import React from 'react';
import { motion } from 'framer-motion';

const CEO = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-4'>
                    <motion.div 
                        className='w-full lg:w-1/2 mt-4 p-5 lg:px-10'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-semibold text-black mb-10 relative">
                            <span className="text-orange-400">Our Founder</span> & CEO
                        </h2>
                        <p className="text-base text-black mb-4">
                            Haseeb&apos;s hard work and dedication to accuracy are truly commendable. His ability to provide precise, 
                            well-researched information makes him an invaluable asset to any team.
                            <br/> <br />
                            At ATMOS, we’re more than a vendor—we’re a dependable extension of your security operation. From virtual assistance and dispatch to camera monitoring and back-office management, our offshore teams handle the heavy lifting so you can focus on what matters most: protecting people and assets.
                        </p>
                    </motion.div>
                    <div className='w-full lg:w-1/2 relative'>
                        <motion.div 
                            className="absolute -z-10 rounded-lg top-[20px] max-[425px]:right-[-10px] xs:right-[25px] xsm:right-[95px] sm:right-[45px] md:right-[85px] lg:right-[-15px] xl:right-[30px] xxl:right-[30px] 2xl:right-[90px] w-[200px] h-[200px] sm:w-[280px] sm:h-[260px] bg-orange-400"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <motion.div initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                            viewport={{ once: true }}>
                            <img src="/ceo.jpeg" alt="CEO Image" className="rounded-lg mx-auto w-[300px] h-[190px] sm:w-[480px] sm:h-[280px] md:w-[480px] md:h-[280px] mt-8" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CEO

