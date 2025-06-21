import React from 'react';

const testimonialsData = [
    {
        name: 'Robin Singh',
        title: 'Director of Fulfillment, Good Guard Security',
        quote: "Haseeb leads with quiet strength and unwavering resolve. Where others hesitate, Haseeb acts—with clarity, purpose, and full accountability. If you're looking for someone to lead with honor and deliver without fail, Haseeb is that leader.",
        image: '/robin.jpeg'
    },
    {
        name: 'Jasmine Malik',
        title: 'Director of Customer Success, Good Guard Security',
        quote: "Haseeb's hard work and dedication to accuracy are truly commendable. His ability to provide precise, well-researched information makes him an invaluable asset to any team.",
        image: '/jasmine.jpeg'
    }
];

const repeatedTestimonials = Array(4).fill(testimonialsData).flat();

const TestimonialCarousel = () => {
    const scrollableTestimonials = [...repeatedTestimonials, ...repeatedTestimonials];

    return (
        <section id="testimonials" className="bg-[#e1e2e1] py-16 ">
            <div className="container mx-auto px-6 lg:px-16 xl:px-18">
                <h2 className="text-4xl font-semibold text-center uppercase text-black mb-4">
                    Customers Feedback <span className="text-[#ffaa17]"> .</span>
                </h2>
                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex animate-scroll gap-8">
                            {scrollableTestimonials.map((testimonial, index) => (
                                <div 
                                    key={index}
                                    className="w-full md:w-1/2 xl:w-[40%] flex-shrink-0 group relative bg-white hover:bg-[#ffaa17] rounded-lg shadow-md p-6 lg:p-12 cursor-default transition duration-200 ease-in-out"
                                >
                                    <div className="flex gap-5 items-center mb-8">
                                        <div className="flex items-center justify-center">
                                            <img src={testimonial.image} className="w-20 h-16 rounded-full object-cover" alt={testimonial.name} />
                                        </div>
                                        <div>
                                            <h3 className="text-gray-500 group-hover:text-black text-xl font-semibold ">{testimonial.name}</h3>
                                            <p className="text-[#ffaa17] group-hover:text-black text-sm lg:text-lg">{testimonial.title}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 group-hover:text-black text-base lg:text-lg">
                                        {testimonial.quote}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel; 