import React, { useEffect, useState, useRef } from 'react';

const TeamQuoteParallax = () => {
    const sectionRef = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Only apply parallax if section is visible
        if (rect.top < windowHeight && rect.bottom > 0) {
            const scrollOffset = (windowHeight - rect.top) * 0.25;
            setOffset(scrollOffset);
        } else {
            setOffset(0); // Don't shift if not in view
        }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run once on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        {/* Background Image with parallax */}
        <div
            className="absolute inset-0 -z-10"
            style={{
                backgroundImage: "url('/bg-image-2.png')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `center ${-offset}px`,
                transition: 'background-position 0.1s linear',
            }}
        />

        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black/80 opacity-60 -z-0" />
        {/* <div className='relative z-10 container mx-auto my-auto px-6 lg:px-16 xl:px-18'> */}

        {/* Actual content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
            {/* Icon in yellow circle */}
            <div className="mb-6 md:mb-12 lg:mb-20">
            <div className="bg-[#ffaa17] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                <img src='/team-2.png' alt='Team Icon' className='w-14 h-14' />
            </div>
            </div>

            {/* Text */}
            <h2 className="px-2 xsm:px-6 md:px-0 lg:px-0 xl:px-10 xxl:px-19 2xl:px-26 text-center tracking-tighter text-white text-2xl xsm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight xxs:w-[95%] xs:w-[93%] xsm:w-[85%] sm:w-[78%] md:w-[82%] lg:w-[80%] xl:w-[62%] xxl:w-[60%] 2xl:w-[60%] 3xl:w-[60%] max-w-full">
            GREAT THINGS IN BUSINESS ARE NEVER DONE BY ONE PERSON.{" "}
            <span className="text-[#ffaa17]">THEY'RE DONE BY A TEAM OF PEOPLE.</span>
            </h2>
        </div>
        {/* </div> */}
        </section>
    );
};

export default TeamQuoteParallax;