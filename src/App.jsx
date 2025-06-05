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
    <>
    <div className="max-w-[1536px] container mx-auto px-6 md:px-0 overflow-hidden">
      <Header />
      {/* Hero Section */}
        {/* <div className='hidden hero-section md:inline-block absolute top-[-85px] left-0 w-screen min-h-screen -z-10'>
          <img src="/atmos.gif" alt="Hero Background Image" className="w-full min-h-[800px] object-cover overflow-hidden" />
        </div> */}
      <section id="home" className='hero-section relative z-0 lg:px-2'>
        <div className="max-w-[1440px] container mx-auto text-left md:px-6 pt-20 my-auto text-white">
        <motion.div 
          className="w-full flex flex-col items-start justify-start my-20 lg:my-48"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}>
      
          {/* Subheading */}
          <h2 className="w-full lg:w-[40%] text-xl md:text-2xl lg:text-3xl xxl:text-4xl font-bold text-black md:text-gray-300 text-left">
            Outsourcing Made Easy
          </h2>
          <p className='w-full md:w-[74%] lg:w-[40%] text-base md:text-lg text-black md:text-gray-300 my-4 md:my-2 md:mb-4'>
            Scale your security operations without the overhead.
            <br />24/7 dispatch, scheduling & monitoring—by your dedicated offshore team.</p>
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
    </div>
      <Footer />
    </>
  )
}

export default App
