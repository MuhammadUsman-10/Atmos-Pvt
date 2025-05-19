import React from 'react'

const WhoWeAre = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-4'>
                    <div className='w-full lg:w-1/2'>
                        <img src="https://muhammadusman-10.github.io/Link-Building-Website/images/illustrations/creative-team.svg" alt="ATMOS Logo" className="mx-auto w-[400px] mt-10" />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Who We Are
                        </h2>
                        <p className="text-base text-gray-300 mb-4">
                            <strong>ATMOS Pvt (Advanced Task Management & Outsourcing Services)</strong> is a professional outsourcing agency built to serve security companies. With a strong foundation in security dispatch and operations, we provide dedicated virtual teams that enhance your efficiency, reduce overhead, and ensure round-the-clock coverage.
                            <br /><br />
                            We're not just another outsourcing provider — we're your operations partner.
                        </p>
                        <div className='flex flex-col md:flex-row justify-between gap-4 relative items-center'>
                            <div className='w-full md:w-1/2 text-gray-300'>
                                <h3 className='text-orange-400 font-semibold mt-3 mb-2'>Our Mission</h3>
                                <span className="w-24 h-[1px] bg-orange-400 block mb-2"></span>
                                <p>To provide reliable, secure, and cost-effective outsourcing solutions tailored to the needs of modern security firms.</p>
                            </div>
                            <span className="hidden md:inline-block absolute left-1/2 transform -translate-x-1/2 -translate-y-[0%] w-[1px] h-22 mt-4 bg-orange-400"></span>
                            <div className='w-full md:w-1/2 md:pl-2 text-gray-300'>
                                <h3 className='text-orange-400 font-semibold mt-3 mb-2'>Our Vision</h3>
                                <span className="w-24 h-[1px] bg-orange-400 block mb-2"></span>
                                <p>To become the go-to offshore operations partner for security companies worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre
