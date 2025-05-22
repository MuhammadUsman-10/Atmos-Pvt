import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [responseMsg, setResponseMsg] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,    // replace with your actual service ID
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,   // replace with your actual template ID
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY     // replace with your public key
        )
        .then(
            (result) => {
                console.log(result.text);
                setResponseMsg('Message sent successfully!');
                setIsSending(false);
                form.current.reset();
            },
            (error) => {
                console.log(error.text);
                setResponseMsg('Something went wrong. Please try again later.');
                setIsSending(false);
            }
        );
    };

    return (
        <section id='contact' className="py-16">
        <div className="container mx-auto md:px-6">
            <h2 className="text-4xl text-white font-bold text-center uppercase  mb-12 relative">
            Keep in <span className="text-orange-400">Touch!</span>
            <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-orange-400"></span>
            </h2>
            <div className="flex flex-col md:flex-row md:space-x-12">
            {/* Contact Form */}
            <motion.div 
                className='md:w-1/2'
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                    {/* <div className='flex flex-col md:flex-row gap-3'> */}
                    <div className=''>
                        <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border-[0.5px] border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400 bg-transparent text-white" required />
                    </div>
                    <div className=''>
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border-[0.5px] border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400 bg-transparent text-white" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                        <textarea id="message" name="message" rows="3" className="mt-1 block w-full px-3 py-2 border-[0.5px] border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400 bg-transparent text-white" required></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSending}
                        className="w-full justify-center py-3 px-4 border-[0.5px] hover:border-orange-400 border-transparent cursor-pointer text-black hover:text-orange-400 shadow-sm text-sm uppercase font-medium rounded-sm bg-orange-400 hover:bg-[#111111] transition-colors delay-100"
                    >
                        {isSending ? 'Sending...' : 'Send'}
                    </button>
                    {responseMsg && <p className="text-white text-sm mt-3">{responseMsg}</p>}
                </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
                className='md:w-1/2 mt-12 md:mt-0 relative z-0'
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className='z-0'>
                <motion.div className='-z-0'>
                    <span className="absolute top-[40px] left-[25%] -z-0 rounded-full w-[150px] h-[150px] bg-orange-400 blur-[100px]"></span>
                </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Let's Discuss How We Can Support Your Operations!</h3>
                    <p className="text-white mb-10 lg:w-[480px]">
                        If you like to work with us then drop us a message using the contact form. Or get in touch using email, contact number.
                        <br />
                        See you!
                    </p>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <span className="font-medium text-white mr-2">Email:</span>
                            <span className="text-white">info@atmospvt.com</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-medium text-white mr-2">Phone:</span>
                            <span className="text-white">+129 455 99554</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-medium text-white mr-2">Location:</span>
                            <span className="text-white">Pakistan</span>
                        </div>
                    </div>
                </div>
            </motion.div>
            </div>
        </div>
        </section>
    )
}

export default Contact 