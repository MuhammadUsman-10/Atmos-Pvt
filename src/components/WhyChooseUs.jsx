import React from 'react';
import { motion } from 'framer-motion';

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

                <div className='flex flex-col items-center justify-center relative mt-26 py-10' style={{ minHeight: '630px' }}>
                    {/* Central Image */}
                    <div className='relative z-10'>
                        <img src="/logo-circle.png" alt="Logo" className="w-56" />
                    </div>

                    {/* Feature Items Container */}
                    <div className='absolute inset-0 flex items-center justify-center my-20'>
                        {/* Item 1: Industry-Focused (Top) */}
                        <motion.div 
                            className='absolute flex flex-col items-center text-center w-60' 
                            initial={{ opacity: 0, x: 0 }}
                            whileInView={{ opacity: 1, x: -120, y: -380 }}
                            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /* Base position */
                        >
                            <div className='mb-2'><img src="/logo-circle.png" alt="Icon" className="w-24" /></div> {/* Placeholder Icon */}
                            <h2 className='text-lg font-bold text-white mb-1'>Industry-Focused</h2>
                            <p className='text-sm text-gray-300'>We specialize in the security sector — we understand your operations, language, and pain points.</p>
                        </motion.div>

                        {/* Item 2: Cost-Efficient (Top Right) */}
                        <motion.div 
                            className='absolute flex flex-col items-center text-center w-60' 
                            initial={{ opacity: 0, x: 150, y: -100 }}
                            whileInView={{ opacity: 1, x: 300, y: -245 }}
                            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                             style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /* Base position */
                        >
                             <div className='mb-2'><img src="/logo-circle.png" alt="Icon" className="w-24" /></div> {/* Placeholder Icon */}
                            <h2 className='text-lg font-bold text-white mb-1'>Cost-Efficient</h2>
                            <p className='text-sm text-gray-300'>Achieve significant savings compared to in-house staffing without compromising quality.</p>
                        </motion.div>

                        {/* Item 3: 24/7 Coverage (Bottom Right) */}
                        <motion.div 
                            className='absolute flex flex-col items-center text-center w-60' 
                            initial={{ opacity: 0, x: 150, y: 100 }}
                            whileInView={{ opacity: 1, x: 300, y: -5 }}
                            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /* Base position */
                        >
                            <div className='mb-2'><img src="/logo-circle.png" alt="Icon" className="w-24" /></div> {/* Placeholder Icon */}
                            <h2 className='text-lg font-bold text-white mb-1'>24/7 Coverage</h2>
                            <p className='text-sm text-gray-300'>Round-the-clock support tailored to your shift structures, including weekends and holidays.</p>
                        </motion.div>

                        {/* Item 4: Trained Staff (Bottom) */}
                        <motion.div 
                            className='absolute flex flex-col items-center text-center w-60' 
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, x: -120, y: 150 }}
                            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /* Base position */
                        >
                            <div className='mb-2'><img src="/logo-circle.png" alt="Icon" className="w-24" /></div> {/* Placeholder Icon */}
                            <h2 className='text-lg font-bold text-white mb-1'>Trained Staff</h2>
                            <p className='text-sm text-gray-300'>All personnel are trained in security protocols and communication etiquette specific to dispatch and monitoring.</p>
                        </motion.div>

                        {/* Item 5: Data Security (Bottom Left) */}
                        <motion.div 
                            className='absolute flex flex-col items-center text-center w-60' 
                            initial={{ opacity: 0, x: -300, y: 100 }}
                            whileInView={{ opacity: 1, x: -500, y: -5 }}
                            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /* Base position */
                        >
                            <div className='mb-2'>
                                <img src="/logo-circle.png" alt="Icon" className="w-24" />
                            </div> {/* Placeholder Icon */}
                            <h2 className='text-lg font-bold text-white mb-1'>Data Security</h2>
                            <p className='text-sm text-gray-300'>We take your confidentiality seriously, with secure systems and strict access controls.</p>
                        </motion.div>

                        {/* Item 6: Scalable Teams (Top Left) */}
                        <motion.div 
                            className='absolute flex flex-col items-center text-center w-60' 
                            initial={{ opacity: 0, x: -300, y: -100 }}
                            whileInView={{ opacity: 1, x: -500, y: -245 }}
                            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /* Base position */
                        >
                            <div className='mb-2'><img src="/logo-circle.png" alt="Icon" className="w-24" /></div> {/* Placeholder Icon */}
                            <h2 className='text-lg font-bold text-white mb-1'>Scalable Teams</h2>
                            <p className='text-sm text-gray-300'>Easily scale up or down based on your needs — without the hassle of hiring and training.</p>
                        </motion.div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default WhyChooseUs
