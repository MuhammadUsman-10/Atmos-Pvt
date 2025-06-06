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
                            <div className="rounded-full flex items-center justify-center mr-4">
                                {/* Placeholder Icon/Avatar */}
                                <img src="/robin.jpeg" className="w-12 h-12 rounded-full object-cover" />
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
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
                            <img src="/jasmine.jpeg" className="w-12 h-12 rounded-full object-contain" />
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