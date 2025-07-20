import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  scrollY: number
}

export function Navigation({ scrollY }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(scrollY > 50)
  }, [scrollY])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isVisible 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 translate-y-0' 
        : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">V</span>
            </div>
            <span className="font-serif font-semibold text-lg">VellCrow</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sm hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('why')}
              className="text-sm hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-sm hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('checkout')}
              className="text-sm hover:text-primary transition-colors"
            >
              Pricing
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => scrollToSection('checkout')}
              className="hidden sm:flex bg-gradient-to-r from-primary to-secondary text-black font-semibold hover:scale-105 transition-transform"
            >
              Get Kit
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('why')}
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('checkout')}
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                Pricing
              </button>
              <Button 
                onClick={() => scrollToSection('checkout')}
                className="w-full bg-gradient-to-r from-primary to-secondary text-black font-semibold mt-4"
              >
                Get Kit
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}