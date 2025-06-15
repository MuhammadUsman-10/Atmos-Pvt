import React, { useRef, useEffect, useState } from 'react';

const TeamQuoteParallax = () => {
    const parallaxRef = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!parallaxRef.current) return;
            
            const rect = parallaxRef.current.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            const scrollTop = window.scrollY;
            const speed = 0.3; // Adjust speed here (0.1–0.5 usually looks good)

            // Calculate distance scrolled past the element
            const distance = scrollTop - elementTop;

            setOffset(distance * speed);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run on load
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={parallaxRef}
            className="relative w-full h-[420px] md:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden"
            style={{
                // Parallax effect: move background image up as you scroll
                backgroundImage: `url('/bg-image-2.png')`,
                backgroundAttachment: 'scroll',
                backgroundPosition: `center ${offset}px`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                willChange: 'background-position',
                transition: 'background-position 0.05s linear',
            }}
        >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-80 z-10" />
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4">
            {/* Icon in yellow circle */}
            <div className="flex items-center justify-center mb-20">
                <div className="bg-[#ffaa17] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                    {/* SVG icon similar to reference */}
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="7" y="7" width="24" height="24" rx="3" stroke="#111" strokeWidth="2.5" fill="none"/>
                    <rect x="13" y="13" width="12" height="12" rx="1.5" stroke="#111" strokeWidth="2" fill="none"/>
                    <rect x="17" y="17" width="4" height="4" rx="1" fill="#111"/>
                    </svg>
                </div>
            </div>
            {/* Quote */}
            <h2 className="px-2 xl:px-13 xxl:px-12 2xl:px-18 text-center text-white text-[25px] md:text-[38px] lg:text-[50px] xl:text-[60px] font-bold leading-tight sm:w-[80%] md:w-full lg:w-[90%] xl:w-[80%] xxl:w-[70%] max-w-full">
                GREAT THINGS IN BUSINESS ARE NEVER DONE BY ONE PERSON. <span className="text-[#ffaa17]">THEY'RE DONE BY A TEAM OF PEOPLE.</span>
            </h2>
        </div>
        </section>
    );
};

export default TeamQuoteParallax; 