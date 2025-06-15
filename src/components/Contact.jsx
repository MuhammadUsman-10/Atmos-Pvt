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
        <section id='contact' className="py-16 bg-[#222429]">
        <div className="container mx-auto md:px-6">
            <h2 className="text-4xl text-black font-bold text-center uppercase mb-12">
            Keep in <span className="text-[#ffaa17]">Touch!</span>
            </h2>
            <div className="flex flex-col md:flex-row-reverse md:space-x-12">
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
                    <div className='flex gap-5'>
                        <div className='w-full'>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border-[0.5px] border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-[#ffaa17] focus:border-[#ffaa17] bg-transparent text-black" required />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border-[0.5px] border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-[#ffaa17] focus:border-[#ffaa17] bg-transparent text-black" required />
                        </div>
                    </div>
                    <div className=''>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                        <input type="text" id="subject" name="subject" className="mt-1 block w-full px-3 py-2 border-[0.5px] border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-[#ffaa17] focus:border-[#ffaa17] bg-transparent text-black" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                        <textarea id="message" name="message" rows="3" className="mt-1 block w-full px-3 py-2 border-[0.5px] border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-[#ffaa17] focus:border-[#ffaa17] bg-transparent text-black" required></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSending}
                        className="w-44 btn-slide-bg justify-center py-5 px-8 border-[0.5px] border-transparent hover:border-[#ffaa17] cursor-pointer text-black hover:text-[#ffaa17] shadow-sm text-sm uppercase font-medium rounded-sm bg-[#ffaa17] transition-colors delay-100 relative"
                    >
                        <span className='relative'>{isSending ? 'Sending...' : 'Send Message'}</span>
                    </button>
                    {responseMsg && <p className="text-black text-sm mt-3">{responseMsg}</p>}
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
                    <span className="absolute top-[40px] left-[25%] -z-0 rounded-full w-[150px] h-[150px] bg-[#ffaa17] blur-[100px]"></span>
                </motion.div>
                    <h3 className="text-5xl font-bold text-white mb-4">Let’s Take the Next <br />Step — Together <span className="text-[#ffaa17]">!</span></h3>
                    <p className="text-xl text-gray-300 mb-10 lg:w-[460px]">
                        You’ve explored what ATMOS is all about — now let’s bring it to life.
                        If you're thinking, “This could work for us” — you're probably right.
                        Fill the form and we'll reach out soon.
                    </p>
                    <div className="space-y-5">
                        <div className='flex gap-5'>
                            <div className='flex items-center justify-center px-[22px] py-5 bg-[#ffaa17] rounded-full'>
                                <i className='fas fa-map-marker-alt' />
                            </div>
                            <div className="flex flex-col items-left justify-center">
                                <span className="font-medium text-white text-xl">Email:</span>
                                <span className="text-gray-300 text-xl">info@atmospvt.com</span>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex items-center justify-center px-[22px] py-5 bg-[#ffaa17] rounded-full'>
                                <i className='fas fa-map-marker-alt' />
                            </div>
                            <div className="flex flex-col items-left justify-center">
                                <span className="font-medium text-white text-xl">Phone:</span>
                                <span className="text-gray-300 text-xl">+129 455 99554</span>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex items-center justify-center px-[22px] py-5 bg-[#ffaa17] rounded-full'>
                                <i className='fas fa-map-marker-alt' />
                            </div>
                            <div className="flex flex-col items-left justify-center">
                                <span className="font-medium text-white text-xl">Location:</span>
                                <span className="text-gray-300 text-xl">Pakistan</span>
                            </div>
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