import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    return (
        <section id="testimonials" className="pb-16 ">
            <div className="container mx-auto md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
                    {/* Testimonial Card 1 */}
                    <motion.div className="bg-orange-400 rounded-lg shadow-md p-6"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                                {/* Placeholder Icon/Avatar */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold ">Robin Singh</h3>
                                <p className=" text-sm">Director of Fulfillment, Good Guard Security</p>
                            </div>
                        </div>
                        <p className=" text-base">
                            “Haseeb leads with quiet strength and unwavering resolve. Where others hesitate, Haseeb acts—with clarity, purpose, and full accountability. If you're looking for someone to lead with honor and deliver without fail, Haseeb is that leader.”
                        </p>
                    </motion.div>

                    {/* Testimonial Card 2 - Placeholder */}
                    <motion.div className="bg-orange-400 rounded-lg shadow-md p-6"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut'}}
                        viewport={{ once: true }}>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                {/* Placeholder Icon/Avatar */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Jasmine Malik</h3>
                                <p className=" text-sm">Director of Customer Success, Good Guard Security</p>
                            </div>
                        </div>
                        <p className=" text-base">
                            “Haseeb’s hard work and dedication to accuracy are truly commendable. His ability to provide precise, well-researched information makes him an invaluable asset to any team.”
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 