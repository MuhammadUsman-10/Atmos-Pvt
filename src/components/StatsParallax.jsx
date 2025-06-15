import React, { useEffect, useState, useRef } from 'react';

const stats = [
  { value: '8705', label: 'Projects Completed' },
  { value: '480', label: 'Active Clients' },
  { value: '626', label: 'Cups of Coffee' },
  { value: '9704', label: 'Happy Clients' },
];

const features = [
  {
    number: '01',
    title: 'Total Design Freedom For Everyone',
    subtitle: 'Core Features',
  },
  {
    number: '02',
    title: 'Basic Rules Of Running Web Agency',
    subtitle: 'Core Features',
  },
];

const checklist = [
  'Suspe ndisse sagittis leo.',
  'Entum estibulum is posuere.',
  'If you are going to use passage.',
  'Lorem Ipsum on the tend to repeat.',
];

const StatsParallax = () => {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollOffset = (windowHeight - rect.top) * 0.25;
        setOffset(scrollOffset);
      } else {
        setOffset(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[700px] flex flex-col justify-center items-center overflow-hidden py-12 md:py-20"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/bg-image-1.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `center ${-offset}px`,
          transition: 'background-position 0.1s linear',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 -z-0" />

      {/* Stats Row */}
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 py-8 px-4 md:px-0 z-10">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex flex-col items-center justify-center">
            <span className="text-white text-4xl md:text-5xl font-bold">{stat.value}</span>
            <span className="text-white text-xs md:text-sm font-semibold mt-2 uppercase tracking-wider opacity-80">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-0 bg-transparent z-10">
        {/* Left: Commitment & Features */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Commitment Box */}
          <div className="relative bg-[#ffaa17] rounded-tl-lg rounded-tr-lg rounded-bl-2xl rounded-br-lg shadow-lg px-6 py-8 md:py-12 md:px-8 w-full max-w-md text-left">
            <span className="block text-lg md:text-xl font-semibold text-[#111] leading-snug">
              WE'RE COMMITTED TO DELIVER<br />
              HIGH QUALITY PROJECTS.
            </span>
            <span className="absolute -bottom-4 left-0 w-8 h-8 bg-[#ffaa17] clip-path-mypointer" style={{clipPath:'polygon(0 0, 100% 100%, 0 100%)'}}></span>
          </div>
          {/* Features List */}
          <div className="flex flex-col gap-8 mt-4">
            {features.map((feature) => (
              <div key={feature.number} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#fff3d6] flex items-center justify-center text-[#ffaa17] font-bold text-lg border border-[#ffaa17]">
                  {feature.number}
                </div>
                <div>
                  <div className="text-white font-semibold text-base md:text-lg leading-tight">{feature.title}</div>
                  <div className="text-xs text-[#ffaa17] mt-1 uppercase tracking-wider">{feature.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Trust/Testimonial Section */}
        <div className="flex-1 flex flex-col gap-6 md:pl-12">
          <div>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2">
              WE'RE TRUSTED BY MORE<br />
              THAN <span className="text-[#ffaa17]">6260 CLIENTS</span>.
            </h2>
            <p className="text-[#ffaa17] text-xs md:text-sm mb-2">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, simply free text by injected humour, or randomised.
            </p>
          </div>
          {/* Checklist & Image */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1 flex flex-col gap-2">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <svg className="mt-1 flex-shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#ffaa17" />
                    <path d="M5 9l3 3 5-5" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white text-xs md:text-sm">{item}</span>
                </div>
              ))}
            </div>
            <img
              src="/about-image-1.png"
              alt="Team working"
              className="w-full max-w-[140px] md:max-w-[120px] rounded-md object-cover border-2 border-[#ffaa17] shadow-lg mt-4 md:mt-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsParallax; 