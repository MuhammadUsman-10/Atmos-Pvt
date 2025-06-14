import Header from './components/Header'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'
import About from './components/About'
import Hero from './components/Hero'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

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
              rgb(255,170,23) ${scrollProgress}%, 
              rgb(98,58,12) ${scrollProgress}%)`
            }}
          >
            <div className="bg-[#111111] rounded-full p-2 transform group-hover:-translate-y-1 transition-transform">
              <img src="/top-icon.svg" type='svg/xml' className="w-5 h-5 text-[#ffaa17] dark:text-[#ffaa17]" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
    </>
  )
}

export default App
