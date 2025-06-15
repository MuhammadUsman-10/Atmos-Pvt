import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        '/slider-1.png', // Replace with your image paths
        '/slider-2.png'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev === 0 ? 1 : 0));
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className='mt-20 lg:px-2 relative overflow-hidden'>
            {/* Background Image Slider */}
            <div className="absolute inset-0 w-full h-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ 
                            opacity: 1, 
                            scale: [1, 1.1],
                            transition: {
                                scale: {
                                    duration: 5,
                                    times: [0, 1.5],
                                    ease: "easeInOut"
                                },
                                opacity: {
                                    duration: 1,
                                    times: [0, 1],
                                    ease: "easeInOut"
                                }
                            }
                        }}
                        exit={{ 
                            opacity: 0,
                            transition: { duration: 1 }
                        }}
                    >
                        <img 
                            src={images[currentImage]} 
                            alt="Background" 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content */}
            <div className="max-w-[1440px] container mx-auto md:px-6 pt-20 my-auto relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={currentImage}
                        className="w-full flex flex-col items-center justify-center my-20 lg:my-48 text-center text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Heading */}
                        <motion.h2 
                            className="w-full lg:w-[40%] text-xl md:text-2xl lg:text-3xl xl:text-5xl xxl:text-4xl font-semibold tracking-wider text-[#ffaa17]"
                            initial={{ opacity: 0, y: 70 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                        >
                            Outsourcing Made Easy
                        </motion.h2>

                        {/* Paragraph */}
                        <motion.p 
                            className='w-full md:w-[74%] lg:w-[45%] text-base md:text-lg lg:text-xl xl:text-2xl text-white my-4 md:my-2 md:mb-4'
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.8, ease: 'easeOut' }}
                        >
                            Scale your security operations without the overhead.
                            <br />24/7 dispatch, scheduling & monitoring—by your dedicated offshore team.
                        </motion.p>
                        
                        {/* Get In Touch button */}
                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 1.2, ease: 'easeOut' }}
                        >
                            <p className="btn-slide-bg mt-2 items-center justify-center text-lg text-black rounded-md hover:text-[#ffaa17] bg-[#ffaa17] border border-transparent hover:border-[#ffaa17] px-14 py-4 font-semibold tracking-wide transition delay-150">
                                <span className="relative">Get In Touch</span>
                            </p>
                        </motion.a>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Hero;