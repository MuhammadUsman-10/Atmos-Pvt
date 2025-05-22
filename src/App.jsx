import Header from './components/Header'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'
import About from './components/About'

const phrases = [
  'Your operations, streamlined',
  'Your costs, optimized',
  'Your peace of mind, guaranteed'
]

function App() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [nextPhraseIndex, setNextPhraseIndex] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
        setNextPhraseIndex((prev) => (prev + 1) % phrases.length)
        setIsAnimating(false)
      }, 400)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Show/hide scroll to top button
      setShowScrollTop(window.pageYOffset > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to split and color after comma
  const renderPhrase = (phrase) => {
    const [first, second] = phrase.split(',')
    return <>{first},{' '}<span className="text-orange-400">{second?.trim()}</span></>
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container mx-auto px-6 min-h-screen overflow-hidden">
      <Header />
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center pt-20 md:px-3 text-white">
        <motion.div 
          className="w-full flex flex-col items-center justify-center mt-14 mb-8"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}>
          {/* Logo */}
          <div className="flex justify-center my-8 relative">
          <span className="absolute top-[0px] -z-0 rounded-full w-[200px] h-[200px] bg-orange-400 blur-3xl"></span>
            <img src="/logo-circle.png" alt="Logo" className="z-0 w-52" />
          </div>
          {/* Animated Phrases with vertical slide */}
          <div className="h-32 md:h-20 mt-4 flex items-center justify-center relative overflow-hidden w-full">
            {/* Current phrase */}
            <h1
              className={`absolute w-full text-3xl md:text-[38px] font-extrabold text-white text-center tracking-tight uppercase transition-all duration-400 ${
                isAnimating ? '-translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
              }`}
              key={phraseIndex}
            >
              {renderPhrase(phrases[phraseIndex])}
            </h1>
            {/* Next phrase */}
            <h1
              className={`absolute w-full text-3xl md:text-[38px] font-extrabold text-white text-center tracking-tight uppercase transition-all duration-400 ${
                isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              key={nextPhraseIndex}
            >
              {renderPhrase(phrases[nextPhraseIndex])}
            </h1>
          </div>
          {/* Subheading */}
          {/* <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold text-gray-300 text-center">
            Advanced Task Management & Outsourcing & Services 
          </h2> */}
          <p className='w-full md:w-[94%] lg:w-[77%] text-base md:text-lg text-gray-300 px-2 sm:px-2 my-4 md:my-2 md:mb-4'>At ATMOS Pvt, we empower security companies to operate more efficiently by providing professional dispatch, scheduling, monitoring, and back-office support — all through a skilled offshore team you can trust.</p>
          {/* Service Options */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-1 text-white text-xs md:text-base">
            <span className="uppercase opacity-80">Dispatch Services</span>
            <span className="text-orange-400">•</span>
            <span className="uppercase opacity-80">Scheduling</span>
            <span className="text-orange-400">•</span>
            <span className="uppercase opacity-80">Virtual Assistants</span>
            <span className="text-orange-400">•</span>
            <span className="uppercase opacity-80">Back-Office Support</span>
            <span className="text-orange-400">•</span>
            <span className="uppercase opacity-80">Monitoring</span>
          </div>
          {/* Down Arrow and What We Do */}
          <div className="flex flex-col sm:flex-row items-center  gap-5 mt-5">
          <a href="#about" className='' onClick={(e) => {
            e.preventDefault();
            document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
          }}>
            <p className="mt-2 text-white rounded-md hover:text-black hover:bg-orange-400 border border-orange-400 hover:border-transparent px-3 py-2 font-semibold tracking-wide transition delay-150">Learn More</p>
          </a>
          <a href="#contact" className='' onClick={(e) => {
            e.preventDefault();
            document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
          }}>
            <p className="mt-2 text-black rounded-md hover:text-white bg-orange-400 border border-transparent hover:bg-black hover:border-orange-400 px-3 py-2 font-semibold tracking-wide transition delay-150">Get In Touch</p>
          </a>
          </div>
        </motion.div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg cursor-pointer group"
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, 
                rgb(255,137,4) ${scrollProgress}%, 
                rgb(98,58,12) ${scrollProgress}%)`
            }}
          >
            <div className="bg-[#111111] rounded-full p-2 transform group-hover:-translate-y-1 transition-transform">
              <img src="/top-icon.svg" type='svg/xml' className="w-5 h-5 text-orange-400 dark:text-orange-500" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* About Section */}
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
