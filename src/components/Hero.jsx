import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
      <section id="home" className='lg:px-2'>
        <div className="max-w-[1440px] container mx-auto text-left md:px-6 pt-20 my-auto">
          <div className="w-full flex flex-col items-center justify-center my-20 lg:my-48 text-center text-black">
            {/* Heading */}
            <motion.h2 className="w-full lg:w-[40%] text-xl md:text-2xl lg:text-3xl xl:text-5xl xxl:text-4xl font-semibold tracking-wider text-[#ffaa17]"
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Outsourcing Made Easy
            </motion.h2>

            {/* Paragrph */}
            <motion.p className='w-full md:w-[74%] lg:w-[45%] text-base md:text-lg lg:text-xl xl:text-2xl text-black my-4 md:my-2 md:mb-4'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Scale your security operations without the overhead.
              <br />24/7 dispatch, scheduling & monitoring—by your dedicated offshore team.
            </motion.p>
            
            {/* Get In Touch button */}
            <motion.a
              href="#contact"
              className=""
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <p className="btn-slide-bg mt-2 items-center justify-center text-lg text-black rounded-md hover:text-[#ffaa17] bg-[#ffaa17] border border-transparent hover:border-[#ffaa17] px-14 py-4 font-semibold tracking-wide transition delay-150">
                <span className="relative">Get In Touch</span>
              </p>
            </motion.a>
          </div>
        </div>
      </section>
    );
};
export default Hero;