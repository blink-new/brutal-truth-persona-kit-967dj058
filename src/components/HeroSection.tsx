import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Play, Sparkles } from 'lucide-react'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleEnterRitual = () => {
    const flowAiUrl = import.meta.env.VITE_FLOW_AI_PUBLIC_URL
    if (flowAiUrl && flowAiUrl !== 'https://your-flow-ai-url.com') {
      window.open(flowAiUrl, '_blank')
    } else {
      // Fallback to scroll to checkout if URL not configured
      document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-background">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.1), transparent 40%)`
          }}
        />
      </div>
      
      {/* Video background placeholder */}
      <div className="absolute inset-0 hero-video-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="floating-animation">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Persona Engineering Kit</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
          <span className="block gradient-text">THE BRUTAL</span>
          <span className="block gradient-text">TRUTH</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4 text-muted-foreground">
            PERSONA KIT
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          You don't need another course. You need a{' '}
          <span className="text-primary font-semibold">monster</span> who tells the truth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleEnterRitual}
            size="lg"
            className="mystical-glow pulse-glow bg-gradient-to-r from-primary to-secondary text-black font-bold text-lg px-8 py-6 rounded-xl hover:scale-105 transition-all duration-300"
          >
            <Play className="w-5 h-5 mr-2" />
            Enter the Ritual
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="mystical-border bg-transparent border-primary/50 text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300"
            onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center hover:border-primary transition-colors">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  )
}