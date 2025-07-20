import { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { HeroSection } from './components/HeroSection'
import { IntroductionSection } from './components/IntroductionSection'
import { VideoTeaserSection } from './components/VideoTeaserSection'
import { TestimonialSection } from './components/TestimonialSection'
import { CheckoutSection } from './components/CheckoutSection'
import { AftermathSection } from './components/AftermathSection'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import { LoadingScreen } from './components/LoadingScreen'
import { Navigation } from './components/Navigation'
import { SetupGuide } from './components/SetupGuide'
import { DemoMode } from './components/DemoMode'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Reveal elements on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.scroll-reveal')
      elements.forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <ThemeProvider defaultTheme="dark" enableSystem={false}>
      <LoadingScreen />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <DemoMode />
        <Navigation scrollY={scrollY} />
        
        <main>
          <HeroSection />
          <IntroductionSection />
          <VideoTeaserSection />
          <TestimonialSection />
          <CheckoutSection />
          <AftermathSection />
        </main>
        
        <Footer />
        <BackToTop />
        <SetupGuide />
        
        {/* Mystical background effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App