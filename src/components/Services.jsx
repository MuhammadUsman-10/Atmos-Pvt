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
                <h2 className="text-4xl font-bold text-center uppercase text-black mb-4 relative">
                    Our <span className="text-orange-400">Services</span>
                </h2>
                <p className="text-lg text-center text-black my-12">
                    Specialized Outsourcing for the Security Industry
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {/* Card 1: Dispatch Services */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] hover:bg-orange-400 rounded-lg shadow-md p-6 flex flex-col items-center text-center group transition ease-in-out"
                    >
                        <div className="w-16 h-16 bg-orange-400 group-hover:bg-black rounded-full mb-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black group-hover:text-orange-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.64.08-1.26.22-1.86l5.62 5.62c.17.17.42.27.68.28.28-.01.53-.11.71-.29l5.62-5.62c.14.6.22 1.22.22 1.86 0 4.08-3.05 7.44-7 7.93zM12 4.07c3.95.49 7 3.85 7 7.93 0 .64-.08 1.26-.22 1.86L13.16 8.84c-.18-.18-.43-.28-.7-.28-.28 0-.53.1-.71.29L5.22 13.86c-.14-.6-.22-1.22-.22-1.86 0-4.08 3.05-7.44 7-7.93z"/></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-black mb-3">Dispatch Services</h3>
                        <p className="text-white group-hover:text-black text-sm">
                        24/7 dispatching support with trained personnel who understand security protocols, urgency, and clear communication.
                        </p>
                    </motion.div>

                    {/* Card 2: Scheduling */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] hover:bg-orange-400 rounded-lg shadow-md p-6 flex flex-col items-center text-center group transition ease-in-out"
                    >
                        <div className="w-16 h-16 bg-orange-400 group-hover:bg-black rounded-full mb-4 flex items-center justify-center">
                            <img src="/scheduling.svg" className="h-8 w-8 text-black group-hover:text-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-black mb-3">Scheduling</h3>
                        <p className="text-white group-hover:text-black text-sm">
                            Efficient workforce scheduling, shift coverage, and conflict resolution to keep your operations running smoothly.
                        </p>
                    </motion.div>

                    {/* Card 3: Virtual Assistants */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] hover:bg-orange-400 rounded-lg shadow-md p-6 flex flex-col items-center text-center group transition ease-in-out"
                    >
                        <div className="w-16 h-16 bg-orange-400 group-hover:bg-black rounded-full mb-4 flex items-center justify-center">
                            <img src="/virtual-assistant.svg" className="h-8 w-8 text-black group-hover:text-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-black mb-3">Virtual Assistants</h3>
                        <p className="text-white group-hover:text-black text-sm">
                            Administrative support tailored for security firms — from report handling to call management.
                        </p>
                    </motion.div>

                    {/* Card 4: Back-Office Support */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] hover:bg-orange-400 rounded-lg shadow-md p-6 flex flex-col items-center text-center group transition ease-in-out"
                    >
                        <div className="w-16 h-16 bg-orange-400 group-hover:bg-black rounded-full mb-4 flex items-center justify-center">
                            <img src="/office-team.svg" className="h-8 w-8 text-black group-hover:text-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-black mb-3">Back-Office Support</h3>
                        <p className="text-white group-hover:text-black text-sm">
                            Data entry, invoicing, reporting, and admin tasks — handled with accuracy and confidentiality.
                        </p>
                    </motion.div>

                    {/* Card 5: Monitoring */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] hover:bg-orange-400 rounded-lg shadow-md p-6 flex flex-col items-center text-center group transition ease-in-out"
                    >
                        <div className="w-16 h-16 bg-orange-400 group-hover:bg-black rounded-full mb-4 flex items-center justify-center">
                            <img src="/monitoring.svg" className="h-8 w-8 text-black group-hover:text-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-black mb-3">Monitoring</h3>
                        <p className="text-white group-hover:text-black text-sm">
                            Surveillance assistance and alert management, integrated with your systems for proactive security.
                        </p>
                    </motion.div>

                    {/* Card 6: Quality Workforce */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#1f1f1f] hover:bg-orange-400 rounded-lg shadow-md p-6 flex flex-col items-center text-center group transition ease-in-out"
                    >
                        <div className="w-16 h-16 bg-orange-400 group-hover:bg-black rounded-full mb-4 flex items-center justify-center">
                            <img src="/quality-workforce.svg" className="h-8 w-8 text-black group-hover:text-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-black mb-3">Quality Workforce</h3>
                        <p className="text-white group-hover:text-black text-sm">
                            Trained and vetted personnel who understand the nuances of the security industry, ensuring high-quality service.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Services
