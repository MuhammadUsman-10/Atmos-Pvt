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

        {/* Actual content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
            {/* Icon in yellow circle */}
            <div className="mb-6 md:mb-12 lg:mb-20">
            <div className="bg-[#ffaa17] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                <img src='/team-2.png' alt='Team Icon' className='w-14 h-14' />
            </div>
            </div>

            {/* Text */}
            <h2 className="px-2 lg:px-1 xl:px-10 xxl:px-12 2xl:px-18 text-center tracking-tighter text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight sm:w-[78%] md:w-full lg:w-[80%] xl:w-[80%] xxl:w-[70%] max-w-full">
            GREAT THINGS IN BUSINESS ARE NEVER DONE BY ONE PERSON.{" "}
            <span className="text-[#ffaa17]">THEY'RE DONE BY A TEAM OF PEOPLE.</span>
            </h2>
        </div>
        </section>
    );
};

export default TeamQuoteParallax;