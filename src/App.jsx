import Header from './components/Header'
import { useState, useEffect } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'
import About from './components/About'

const phrases = [
  'Your operations, streamlined.',
  'Your costs, optimized.',
  'Your peace of mind, guaranteed.'
]

function App() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [nextPhraseIndex, setNextPhraseIndex] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

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

  // Helper to split and color after comma
  const renderPhrase = (phrase) => {
    const [first, second] = phrase.split(',')
    return <>{first},{' '}<span className="text-orange-400">{second?.trim()}</span></>
  }

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-16  text-white">
        <div className="w-full flex flex-col items-center mt-30 mb-8">
          {/* Logo */}
          <div className="rounded-full w-32 h-32 flex items-center justify-center mb-8">
            <img src="/icon-01.png" alt="Logo" className="w-40" />
          </div>
          {/* Animated Phrases with vertical slide */}
          <div className="h-16 mt-4 flex items-center justify-center relative overflow-hidden w-full">
            {/* Current phrase */}
            <h1
              className={`absolute w-full text-3xl md:text-4xl font-extrabold text-white text-center tracking-tight uppercase transition-all duration-400 ${
                isAnimating ? '-translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
              }`}
              key={phraseIndex}
            >
              {renderPhrase(phrases[phraseIndex])}
            </h1>
            {/* Next phrase */}
            <h1
              className={`absolute w-full text-3xl md:text-4xl font-extrabold text-white text-center tracking-tight uppercase transition-all duration-400 ${
                isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              key={nextPhraseIndex}
            >
              {renderPhrase(phrases[nextPhraseIndex])}
            </h1>
          </div>
          {/* Subheading */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-400 text-center">
            Advanced Task Management & Outsourcing & Services 
          </h2>
          <p className='w-1/2 text-gray-300'>At ATMOS Pvt, we empower security companies to operate more efficiently by providing professional dispatch, scheduling, monitoring, and back-office support — all through a skilled offshore team you can trust.</p>
          {/* Service Options */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-1 text-white text-xs md:text-base">
            <span className="opacity-80">WEB DESIGN</span>
            <span className="text-orange-400">•</span>
            <span className="opacity-80">ONE PAGE</span>
            <span className="text-orange-400">•</span>
            <span className="opacity-80">ANALYSTIC</span>
            <span className="text-orange-400">•</span>
            <span className="opacity-80">PHOTOGRAPHY</span>
            <span className="text-orange-400">•</span>
            <span className="opacity-80">COOL ANIMATIONS</span>
          </div>
          {/* Down Arrow and What We Do */}
          <a href="#about" className='' onClick={(e) => {
            e.preventDefault();
            document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
          }}>
            <div className="flex flex-col items-center mt-5">
              <svg className='w-14 h-14' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="48px" height="56px"><path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M0.006,0.004 L24.000,10.035 L47.994,0.004 L24.000,55.998 L0.006,0.004 Z"></path></svg>
              <p className="mt-2 text-white font-semibold tracking-wide">WHAT WE DO?</p>
            </div>
          </a>
        </div>
      </section>

      {/* About Section */}
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
