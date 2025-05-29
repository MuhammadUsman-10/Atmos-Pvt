import Header from './components/Header'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'
import About from './components/About'
import video from '../public/atmos.mp4'
import ReactPlayer from "react-player";

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
    <div className="max-w-[1536px] px-6 lg:px-0 overflow-hidden">
      <Header />
      {/* Hero Section */}
        <div className='hidden hero-section md:inline-block absolute top-0 left-0 w-screen h-[100vh] -z-10'>
          {/* <img src="/hero.png" alt="Hero Background Image" className="w-[1280px] h-[800px] object-contain overflow-hidden" /> */}
          {/* <video src={video} type="video/mp4" alt="Atmos Video" className='w-full min-h-screen' autoPlay loop /> */}
          <ReactPlayer url="/atmos.mp4" type="video/mp4" alt="" className="object-cover pointer-events-none" width="100%" height="100vh" autoplay={true} loop={true} muted={true} playing={true} />
        </div>
      <section id="home" className='w-full md:min-h-screen overflow-hidden'>
        <div className="max-w-[1320px] mx-auto text-left md:px-6 pt-20 text-white">
        <motion.div 
          className="w-full flex flex-col items-start justify-start my-20 lg:my-48"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}>
      
          {/* Subheading */}
          <h2 className="w-full lg:w-[40%] text-xl md:text-2xl lg:text-[28px] font-bold text-black lg:text-gray-300 text-left">
            Advanced Task Management & Outsourcing & Services 
          </h2>
          <p className='w-full md:w-[74%] lg:w-[40%] text-base md:text-lg text-black lg:text-gray-300 my-4 md:my-2 md:mb-4'>At ATMOS Pvt, we empower security companies to operate more efficiently by providing professional dispatch, scheduling, monitoring, and back-office support — all through a skilled offshore team you can trust.</p>
          {/* Down Arrow and What We Do */}
          <div className="flex items-center gap-5 mt-5">
          <a href="#about" className='' onClick={(e) => {
            e.preventDefault();
            document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
          }}>
            <p className="mt-2 text-white rounded-md hover:text-black bg-[#111111] hover:bg-orange-400 border border-orange-400 hover:border-transparent px-3 py-2 font-semibold tracking-wide transition delay-150">Learn More</p>
          </a>
          <a href="#contact" className='' onClick={(e) => {
            e.preventDefault();
            document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
          }}>
            <p className="mt-2 text-black rounded-md hover:text-white bg-orange-400 border border-transparent hover:bg-[#111111] hover:border-orange-400 px-3 py-2 font-semibold tracking-wide transition delay-150">Get In Touch</p>
          </a>
          </div>
        </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed hidden md:flex bottom-20 right-8 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg cursor-pointer group"
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
