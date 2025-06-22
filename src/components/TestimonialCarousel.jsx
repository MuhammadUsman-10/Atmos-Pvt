import React, { useRef, useState, useEffect } from 'react';

const testimonialsData = [
    {
        name: 'Robin Singh',
        title: 'Director of Fulfillment, Good Guard Security',
        quote: "Haseeb leads with quiet strength and unwavering resolve. Where others hesitate, Haseeb acts—with clarity, purpose, and full accountability. If you're looking for someone to lead with honor and deliver without fail, Haseeb is that leader.",
        image: '/robin.png',
        imgClass: 'w12 h-12 rounded-full object-cover'
    },
    {
        name: 'Jasmine Malik',
        title: 'Director of Customer Success, Good Guard Security',
        quote: "Haseeb's hard work and dedication to accuracy are truly commendable. His ability to provide precise, well-researched information makes him an invaluable asset to any team.",
        image: '/jasmine.png',
        imgClass: 'w-12 h-12 rounded-full object-contain'
    },
    {
        name: 'Robin Singh',
        title: 'Director of Fulfillment, Good Guard Security',
        quote: "Haseeb leads with quiet strength and unwavering resolve. Where others hesitate, Haseeb acts—with clarity, purpose, and full accountability. If you're looking for someone to lead with honor and deliver without fail, Haseeb is that leader.",
        image: '/robin.png',
        imgClass: 'w12 h-12 rounded-full object-cover'
    },
    {
        name: 'Jasmine Malik',
        title: 'Director of Customer Success, Good Guard Security',
        quote: "Haseeb's hard work and dedication to accuracy are truly commendable. His ability to provide precise, well-researched information makes him an invaluable asset to any team.",
        image: '/jasmine.png',
        imgClass: 'w-12 h-12 rounded-full object-contain'
    }
];

const TestimonialCarousel = () => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollability = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        checkScrollability();
        window.addEventListener('resize', checkScrollability);
        if (container) {
            container.addEventListener('scroll', checkScrollability);
        }

        return () => {
            window.removeEventListener('resize', checkScrollability);
            if (container) {
                container.removeEventListener('scroll', checkScrollability);
            }
        };
    }, []);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = container.clientWidth * 0.8;
            container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="testimonials" className="relative mx-auto bg-[#e1e2e1] py-16 ">
            <div className="relative container mx-auto px-10 xxsm:px-8 xsm:px-10 md:px-10 lg:px-16 xl:px-18">
                <h2 className="text-4xl font-semibold text-center uppercase text-black mb-4">
                    Customers Feedback <span className="text-[#ffaa17]"> .</span>
                </h2>
                <div className="relative">
                    <div ref={scrollContainerRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide gap-8">
                        {testimonialsData.map((testimonial, index) => (
                            <div 
                                key={index}
                                className="w-full  md:w-[47%] lg:w-[48%] flex-shrink-0 snap-start group relative bg-white hover:bg-[#ffaa17] rounded-lg shadow-md p-6 lg:p-12 cursor-default transition duration-200 ease-in-out"
                            >
                                <div className="flex gap-3 md:gap-5 items-center mb-8">
                                    <div className="flex items-center justify-center">
                                        <img src={testimonial.image} className={testimonial.imgClass} alt={testimonial.name} />
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
                    <div className="w-full max-w-[122rem] mx-auto mt-28 xxsm:mt-20 xsm:mt-18 md:mt-20 lg:mt-24 xl:mt-22 xxl:mt-20 absolute -inset-0 top-1/2  -translate-y-1/2 flex justify-between px-[0rem] sm:px-[0rem] lg:px-[-3rem] xl:px-[-3rem]">
                        <div className=''>
                        <button 
                            onClick={() => scroll(-1)} 
                            disabled={!canScrollLeft}
                            className="bg-white/50 hover:bg-[#ffaa17] disabled:opacity-50 disabled:cursor-not-allowed text-black rounded-full p-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        </div>
                        <div className=''>
                        <button 
                            onClick={() => scroll(1)} 
                            disabled={!canScrollRight}
                            className="bg-white/50 hover:bg-[#ffaa17] disabled:opacity-50 disabled:cursor-not-allowed text-black rounded-full p-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        </div>
                    </div>
        </section>
    );
};

export default TestimonialCarousel; 