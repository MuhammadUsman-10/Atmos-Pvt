import { Parallax } from 'react-scroll-parallax';

const stats = [
  { number: '8705', label: 'Projects Completed' },
  { number: '480', label: 'Active Clients' },
  { number: '626', label: 'Cups of Coffee' },
  { number: '9704', label: 'Happy Clients' },
];

const features = [
  {
    title: 'Total Design Freedom for Everyone',
    subtitle: 'Core Features',
    number: '01',
  },
  {
    title: 'Basic Rules of Running Web Agency',
    subtitle: 'Core Features',
    number: '02',
  },
];

const ParallaxStatsSection = () => {
  return (
    <div className="relative w-full overflow-hidden text-white">
      {/* Background with Parallax */}
      <Parallax speed={-10}>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/bg-image-1.png')" }}
        />
      </Parallax>

      {/* Overlay */}
      <div className="relative z-10 bg-black/70 py-16 px-4 lg:px-20">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h2 className="text-3xl md:text-4xl font-bold">{stat.number}</h2>
              <p className="text-sm mt-2 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Card */}
          <div className="bg-[#F7A300] text-black p-6 md:p-10 rounded shadow-md relative">
            <h3 className="text-xl md:text-2xl font-bold mb-8 leading-snug">
              We’re committed to deliver <br />
              <span className="text-black">high quality projects.</span>
            </h3>

            {features.map((f, idx) => (
              <div key={idx} className="flex items-start mb-6">
                <div className="text-[#F7A300] font-bold text-xl mr-4 bg-white w-10 h-10 flex items-center justify-center rounded-full">
                  {f.number}
                </div>
                <div>
                  <h4 className="font-semibold">{f.title}</h4>
                  <p className="text-xs uppercase tracking-wide">{f.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              We’re trusted by more <br />
              than <span className="text-[#F7A300]">6260 clients.</span>
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or randomised words.
            </p>

            {/* Checkpoints */}
            <ul className="space-y-3">
              {[
                'Suspe ndisse sagittis leo.',
                'Entum estibulum is posuere.',
                'If you are going to use passage.',
                'Lorem Ipsum on the tend to repeat.',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#F7A300] font-bold mr-2">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParallaxStatsSection;
