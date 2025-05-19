import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="services" className="py-16">
            <div className="container mx-auto md:px-6">
                <h2 className="text-4xl font-bold text-center uppercase text-white mb-4 relative">
                    Our <span className="text-orange-400">Services</span>
                    <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-orange-400"></span>
                </h2>
                <p className="text-lg text-center text-white my-12">
                    Specialized Outsourcing for the Security Industry
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {/* Card 1: Dispatch Services */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 bg-orange-400 rounded-full mb-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.64.08-1.26.22-1.86l5.62 5.62c.17.17.42.27.68.28.28-.01.53-.11.71-.29l5.62-5.62c.14.6.22 1.22.22 1.86 0 4.08-3.05 7.44-7 7.93zM12 4.07c3.95.49 7 3.85 7 7.93 0 .64-.08 1.26-.22 1.86L13.16 8.84c-.18-.18-.43-.28-.7-.28-.28 0-.53.1-.71.29L5.22 13.86c-.14-.6-.22-1.22-.22-1.86 0-4.08 3.05-7.44 7-7.93z"/></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Dispatch Services</h3>
                        <p className="text-white text-sm">
                        24/7 dispatching support with trained personnel who understand security protocols, urgency, and clear communication.
                        </p>
                    </motion.div>

                    {/* Card 2: Scheduling */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 bg-orange-400 rounded-full mb-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Scheduling</h3>
                        <p className="text-white text-sm">
                            Efficient workforce scheduling, shift coverage, and conflict resolution to keep your operations running smoothly.
                        </p>
                    </motion.div>

                    {/* Card 3: Virtual Assistants */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 bg-orange-400 rounded-full mb-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 14H6V8h12v10zm-2-10H8V6h8v2zm-1 11h2v1h-2zM4 6h16v2H4z"/></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Virtual Assistants</h3>
                        <p className="text-white text-sm">
                            Administrative support tailored for security firms — from report handling to call management.
                        </p>
                    </motion.div>

                    {/* Card 4: Back-Office Support */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 bg-orange-400 rounded-full mb-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-4 0c1.66 0 2.99-1.34 2.99-3S13.66 5 12 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-4 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8 2h-2.97c-.62 0-1.2-.27-1.61-.76-.8-.98-1.9-1.64-3.42-1.64s-2.62.66-3.42 1.64c-.41.49-1 .76-1.61.76H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-4 5H8v-1c0-.68.27-1.33.75-1.88.71-.81 1.7-1.12 2.69-1.12s1.98.31 2.69 1.12c.48.55.75 1.2.75 1.88v1z"/></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Back-Office Support</h3>
                        <p className="text-white text-sm">
                            Data entry, invoicing, reporting, and admin tasks — handled with accuracy and confidentiality.
                        </p>
                    </motion.div>

                    {/* Card 5: Monitoring */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 bg-orange-400 rounded-full mb-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-4 0c1.66 0 2.99-1.34 2.99-3S13.66 5 12 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-4 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8 2h-2.97c-.62 0-1.2-.27-1.61-.76-.8-.98-1.9-1.64-3.42-1.64s-2.62.66-3.42 1.64c-.41.49-1 .76-1.61.76H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-4 5H8v-1c0-.68.27-1.33.75-1.88.71-.81 1.7-1.12 2.69-1.12s1.98.31 2.69 1.12c.48.55.75 1.2.75 1.88v1z"/></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Monitoring</h3>
                        <p className="text-white text-sm">
                            Surveillance assistance and alert management, integrated with your systems for proactive security.
                        </p>
                    </motion.div>

                    {/* Card 6: Quality Workforce */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 bg-orange-400 rounded-full mb-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Quality Workforce</h3>
                        <p className="text-white text-sm">
                            Trained and vetted personnel who understand the nuances of the security industry, ensuring high-quality service.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Services
