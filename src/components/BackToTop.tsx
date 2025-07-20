import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
    }`}>
      <Button
        onClick={scrollToTop}
        size="lg"
        className="mystical-glow pulse-glow bg-gradient-to-r from-primary to-secondary text-black font-bold rounded-full w-14 h-14 p-0 hover:scale-110 transition-transform shadow-lg"
      >
        <ArrowUp className="w-6 h-6" />
      </Button>
    </div>
  )
}