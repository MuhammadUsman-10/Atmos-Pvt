// import React, { useRef, useEffect, useState } from 'react';

// const TeamQuoteParallax = () => {
//     const parallaxRef = useRef(null);
//     const [offset, setOffset] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//         if (!parallaxRef.current) return;
//         const rect = parallaxRef.current.getBoundingClientRect();
//         const windowHeight = window.innerHeight;
//         // Only apply parallax when the component is in view
//         if (rect.top < windowHeight && rect.bottom > 0) {
//             // Calculate how far the component is from the top of the viewport
//             const scrollY = Math.max(0, windowHeight - rect.top);
//             setOffset(scrollY * 0.25); // Adjust parallax speed here
//         }
//         };
//         window.addEventListener('scroll', handleScroll);
//         handleScroll();
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <section
//             ref={parallaxRef}
//             className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[650px] flex items-center justify-center overflow-hidden"
//             style={{
//                 // Parallax effect: move background image up as you scroll
//                 backgroundImage: `url('/bg-image-2.png')`,
//                 backgroundAttachment: 'scroll',
//                 backgroundPosition: `center ${offset}px`,
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//                 willChange: 'background-position',
//                 transition: 'background-position 0.05s linear',
//             }}
//         >
//         {/* Overlay for readability */}
//         <div className="absolute inset-0 bg-black opacity-80 z-10" />
//         {/* Content */}
//         <div className="relative z-20 flex flex-col items-center justify-center w-full px-4">
//             {/* Icon in yellow circle */}
//             <div className="flex items-center justify-center mb-4 md:mb-8 lg:mb-20">
//                 <div className="bg-[#ffaa17] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
//                     {/* SVG icon similar to reference */}
//                     <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <rect x="7" y="7" width="24" height="24" rx="3" stroke="#111" strokeWidth="2.5" fill="none"/>
//                     <rect x="13" y="13" width="12" height="12" rx="1.5" stroke="#111" strokeWidth="2" fill="none"/>
//                     <rect x="17" y="17" width="4" height="4" rx="1" fill="#111"/>
//                     </svg>
//                 </div>
//             </div>
//             {/* Quote */}
//             <h2 className="px-2 xl:px-13 xxl:px-12 2xl:px-18 text-center text-white text-[25px] md:text-[38px] lg:text-[50px] xl:text-[60px] font-bold leading-tight sm:w-[80%] md:w-full lg:w-[90%] xl:w-[80%] xxl:w-[70%] max-w-full">
//                 GREAT THINGS IN BUSINESS ARE NEVER DONE BY ONE PERSON. <span className="text-[#ffaa17]">THEY'RE DONE BY A TEAM OF PEOPLE.</span>
//             </h2>
//         </div>
//         </section>
//     );
// };

// export default TeamQuoteParallax; 

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
        <section ref={sectionRef} className="relative w-full h-[500px] overflow-hidden">
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
        <div className="absolute inset-0 bg-black opacity-80 -z-0" />

        {/* Actual content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
            {/* Icon in yellow circle */}
            <div className="mb-6 md:mb-12 lg:mb-20">
            <div className="bg-[#ffaa17] w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7" y="7" width="24" height="24" rx="3" stroke="#111" strokeWidth="2.5" />
                <rect x="13" y="13" width="12" height="12" rx="1.5" stroke="#111" strokeWidth="2" />
                <rect x="17" y="17" width="4" height="4" rx="1" fill="#111" />
                </svg>
            </div>
            </div>

            {/* Text */}
            <h2 className="px-2 xl:px-13 xxl:px-12 2xl:px-18 text-center text-white text-[25px] md:text-[38px] lg:text-[50px] xl:text-[60px] font-bold leading-tight sm:w-[80%] md:w-full lg:w-[90%] xl:w-[80%] xxl:w-[70%] max-w-full">
            GREAT THINGS IN BUSINESS ARE NEVER DONE BY ONE PERSON.{" "}
            <span className="text-[#ffaa17]">THEY'RE DONE BY A TEAM OF PEOPLE.</span>
            </h2>
        </div>
        </section>
    );
};

export default TeamQuoteParallax;