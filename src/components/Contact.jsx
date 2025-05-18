import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className="py-16">
        <div className="container mx-auto px-20">
            <h2 className="text-4xl text-white font-bold text-center uppercase  mb-12 relative">
            Keep in Touch!
            <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-white"></span>
            </h2>
            <div className="flex flex-col md:flex-row md:space-x-12">
            {/* Contact Form */}
            <div className="md:w-1/2">
                <form className="space-y-5">
                {/* <div className='flex flex-col md:flex-row gap-3'> */}
                <div className=''>
                    <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border-[0.5px] border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400 bg-transparent text-white" />
                </div>
                <div className=''>
                    <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border-[0.5px] border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400 bg-transparent text-white" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                    <textarea id="message" name="message" rows="3" className="mt-1 block w-full px-3 py-2 border-[0.5px] border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400 bg-transparent text-white"></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full justify-center py-3 px-4 border-[0.5px] border-gray-400 hover:border-transparent hover:text-black shadow-sm text-sm uppercase font-medium rounded-sm text-gray-400 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 transition-colors delay-300"
                >
                    Send
                </button>
                </form>
            </div>

            {/* Contact Info */}
            <div className="md:w-1/2 mt-12 md:mt-0">
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
            </div>
        </div>
        </section>
    )
}

export default Contact 