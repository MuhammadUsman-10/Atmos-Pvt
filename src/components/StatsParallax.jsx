import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section ref={ref} className="relative bg-image -z-10 w-full flex flex-col justify-center items-center overflow-hidden py-12 md:py-20">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90 opacity-80 -z-0" />

      {/* Stats Row */}
      <div className="relative z-10 container mx-auto lg:px-16 xl:px-18">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 py-8 px-4 md:px-0 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center text-center">
              <span className="text-white text-4xl md:text-5xl font-bold">
                <CountUp
                  start={inView ? 0 : null}
                  end={parseInt(stat.value, 10)}
                  duration={2}
                  separator="," />
              </span>
              <span className="text-white text-xs md:text-sm font-semibold mt-2 uppercase tracking-wider opacity-80">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className='container mx-auto px-6 lg:px-16 xl:px-18'>
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-0 bg-transparent z-10">
          {/* Left: Commitment & Features */}
          <div className="flex-1 flex flex-col gap-8 md:gap-11">
            {/* Commitment Box */}
            <div className="relative bg-[#ffaa17] rounded-tl-lg rounded-tr-lg rounded-bl-2xl rounded-br-lg shadow-lg px-6 py-8 md:py-12 md:px-8 w-full max-w-sm lg:max-w-md text-left">
              <span className="block text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#111] leading-snug">
                WE'RE COMMITTED TO DELIVER<br />
                HIGH QUALITY PROJECTS.
              </span>
              <span className="absolute -bottom-4 left-0 w-8 h-8 bg-[#ffaa17] clip-path-mypointer" style={{clipPath:'polygon(0 0, 100% 100%, 0 100%)'}}></span>
            </div>
            {/* Features List */}
            <div className="flex flex-col gap-8 mt-4">
              {features.map((feature) => (
                <div key={feature.number} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffaa17] flex items-center justify-center text-black font-bold text-lg border border-[#ffaa17]">
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
          <div className="flex-1 flex flex-col gap-6 xl:gap-5 xxl:gap-4 md:pl-12">
            <div className=''>
              <h2 className="text-white text-2xl sm:text-3xl lg:text-[33px] xl:text-[46px] xxl:text-5xl font-bold leading-tight mb-2">
                WE'RE TRUSTED BY MORE
                THAN <span className="text-[#ffaa17]">6260 CLIENTS</span>.
              </h2>
              <p className="text-[#ffaa17] text-xs sm:text-sm md:text-base xl:text-xl xs:w-[85%] lg:w-[90%] xl:w-full xxl:w-[90%] mb-2">
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
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default StatsParallax; 