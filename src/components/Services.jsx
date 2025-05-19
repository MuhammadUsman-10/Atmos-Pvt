import React from 'react'

const Services = () => {
    const cardData = [
        {
            title: 'Dispatch Services',
            description: '24/7 dispatching support with trained personnel who understand security protocols, urgency, and clear communication.',
            icon: '/icon-01.png'
        },
        {
            title: 'Scheduling',
            description: 'Efficient workforce scheduling, shift coverage, and conflict resolution to keep your operations running smoothly.',
            icon: '/icon-01.png'
        },
        {
            title: 'Virtual Assistants',
            description: 'Administrative support tailored for security firms — from report handling to call management.',
            icon: '/icon-01.png'
        },
        {
            title: 'Back-Office Support',
            description: 'Data entry, invoicing, reporting, and admin tasks — handled with accuracy and confidentiality.',
            icon: '/icon-01.png'
        },
        {
            title: 'Monitoring',
            description: 'Surveillance assistance and alert management, integrated with your systems for proactive security.',
            icon: '/icon-01.png'
        }
    ]
    return (
        <section id="services" className="py-16">
            <div>
                <div className="container mx-auto md:px-6">
                <h2 className="text-4xl font-bold text-center uppercase text-white mb-4 relative">
                    Our Services
                    <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-orange-400"></span>
                </h2>
                <p className="text-lg text-center text-white my-12">
                    Specialized Outsourcing for the Security Industry
                </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {cardData.map((card, index) => (
                            <div key={index} className="bg-[#1f1f1f] rounded-lg p-6 shadow-lg">
                                <div className="flex items-center justify-center mb-5">
                                    <img src={card.icon} alt={card.title} className="w-16 h-16 bg-orange-400 rounded-full" />
                                </div>
                                <div className='h-36 my-3'>
                                    <h3 className="text-xl text-center font-bold text-white mb-2">{card.title}</h3>
                                    <p className="text-center text-sm text-gray-300">{card.description}</p>
                                </div>
                                <div>
                                    <a className='text-gray-300 flex items-center justify-center gap-2 cursor-pointer hover:text-orange-400 transition duration-300'>
                                        Learn More 
                                        <i className="fas fa-arrow-right mt-1" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
