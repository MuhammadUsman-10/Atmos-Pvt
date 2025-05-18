import React from 'react'

const Services = () => {
    const cardData = [
        {
            title: 'Service 1',
            description: 'Description for service 1',
            icon: '/icon-01.png'
        },
        {
            title: 'Service 2',
            description: 'Description for service 2',
            icon: '/icon-02.png'
        },
        {
            title: 'Service 3',
            description: 'Description for service 3',
            icon: '/icon-03.png'
        },
        {
            title: 'Service 2',
            description: 'Description for service 2',
            icon: '/icon-02.png'
        },
        {
            title: 'Service 3',
            description: 'Description for service 3',
            icon: '/icon-03.png'
        }
    ]
    return (
        <section id="services" className="py-16">
                <div>
            <div className="mb-40">
                <div className="container mx-auto p-4">
                    <div className="bg-white grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {cardData.map((card, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                                <p className="text-gray-400">{card.description}</p>
                                <a className='flex items-center gap-2'>
                                    Learn More 
                                    <i className="fas fa-arrow-right mt-1" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Services
