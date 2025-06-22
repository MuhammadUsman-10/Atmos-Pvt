import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

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
                console.log("Email Sent Successfully:", result.text);
                alert('Message sent successfully!');
                setIsSending(false);
                form.current.reset();
            },
            (error) => {
                console.log("Error Sending Email", error.text);
                alert('Something went wrong. Please try again later.');
                setIsSending(false);
            }
        );
    };

    return (
        <section id='contact' className="py-16 bg-[#222429]">
        <div className="container mx-auto px-6 lg:px-16 xl:px-18">
            <div className="flex flex-col md:flex-row-reverse md:space-x-12">
            {/* Contact Form */}
            <motion.div 
                className='md:w-1/2 md:px-4'
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                    {/* <div className='flex flex-col md:flex-row gap-3'> */}
                    <div className='flex gap-5'>
                        <div className='w-full'>
                            {/* <label htmlFor="name" className="block text-sm md:text-lg lg:text-xl font-medium text-gray-300">Name</label> */}
                            <input placeholder='Your Name' type="text" id="name" name="name" className="mt-1 block w-full px-3 py-4 border-[0.5px] bg-white border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-[#ffaa17] focus:border-[#ffaa17] text-black" required />
                        </div>
                        <div className='w-full'>
                            {/* <label htmlFor="email" className="block text-sm md:text-lg lg:text-xl font-medium text-gray-300">Email</label> */}
                            <input placeholder='Email Address' type="email" id="email" name="email" className="mt-1 block w-full px-3 py-4 border-[0.5px] bg-white border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-[#ffaa17] focus:border-[#ffaa17] text-black" required />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='w-full'>
                            {/* <label htmlFor="phone" className="block text-sm md:text-lg lg:text-xl font-medium text-gray-300">PHone Number</label> */}
                            <input placeholder='Phone Number' type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-4 border-[0.5px] bg-white border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-[#ffaa17] focus:border-[#ffaa17] text-black" required />
                        </div>
                        <div className='w-full'>
                            {/* <label htmlFor="subject" className="block text-sm md:text-lg lg:text-xl font-medium text-gray-300">Subject</label> */}
                            <input placeholder='Subject'  type="text" id="subject" name="subject" className="mt-1 block w-full px-3 py-4 border-[0.5px] bg-white border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-[#ffaa17] focus:border-[#ffaa17] text-black" required />
                        </div>
                    </div>
                    <div>
                        {/* <label htmlFor="message" className="block text-sm md:text-lg lg:text-xl font-medium text-gray-300">Message</label> */}
                        <textarea placeholder='Your Message' id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-4 border-[0.5px] bg-white border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-[#ffaa17] focus:border-[#ffaa17] text-black" required></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSending}
                        className="w-60 btn-slide-bg justify-center py-5 px-8 border-[0.5px] border-transparent hover:border-[#ffaa17] cursor-pointer text-black hover:text-[#ffaa17] shadow-sm text-sm uppercase font-medium rounded-sm bg-[#ffaa17] transition-colors delay-100 relative"
                    >
                        <span className='relative'>{isSending ? 'Sending...' : 'Send Message'}</span>
                    </button>
                </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
                className='md:w-1/2 mt-12 md:mt-0 relative z-0'
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className='z-0'>
                <motion.div className='-z-0'>
                    <span className="absolute top-[60px] left-[25%] -z-0 rounded-full w-[150px] h-[150px] bg-[#ffaa17] blur-[100px]"></span>
                </motion.div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">Let’s Take the Next <br />Step — Together <span className="text-[#ffaa17]">!</span></h3>
                    <p className="text-xl lg:text-xl text-gray-300 mb-10 lg:w-[450px]">
                        You’ve explored what ATMOS is all about — now let’s bring it to life.
                        If you're thinking, “This could work for us” — you're probably right.
                        Fill the form and we'll reach out soon.
                    </p>
                    <div className="space-y-5">
                        <div className='flex gap-5'>
                            <a href='https://www.facebook.com/atmos' target='_blank' className='flex items-center justify-center p-6 bg-[#ffaa17] rounded-full'>
                                <i className='fab fa-facebook' />
                            </a>
                            <div className="flex flex-col items-left justify-center">
                                <span className="font-medium text-white text-xl">Facebook:</span>
                                <span className="text-gray-300 text-xl">atmospvt.com</span>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <a href='https://www.instagram.com/atmos' target='_blank' className='flex items-center justify-center p-6 bg-[#ffaa17] rounded-full'>
                                <i className='fab fa-instagram' />
                            </a>
                            <div className="flex flex-col items-left justify-center">
                                <span className="font-medium text-white text-xl">Instagram:</span>
                                <span className="text-gray-300 text-xl">+129 455 99554</span>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <a href='https://www.linkedin.com/company/atmos' target='_blank' className='flex items-center justify-center p-6 bg-[#ffaa17] rounded-full'>
                                <i className='fab fa-linkedin-in' />
                            </a>
                            <div className="flex flex-col items-left justify-center">
                                <span className="font-medium text-white text-xl">LinkedIn:</span>
                                <span className="text-gray-300 text-xl">ATMOS Pvt</span>
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