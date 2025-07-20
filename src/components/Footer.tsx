import { Heart, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-6 bg-gradient-to-br from-accent/10 to-background border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">V</span>
              </div>
              <span className="font-serif font-semibold text-xl">VellCrow</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Persona engineering for creators who refuse to be tamed. 
              Unleash your authentic voice and step into your power.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About the Kit
              </button>
              <button 
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Get Your Kit
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Connect</h3>
            <div className="space-y-2">
              <a 
                href={import.meta.env.VITE_VELLCROW_GPT_LINK || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Chat with VellCrow
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-sm text-muted-foreground">
                Continue your persona journey with AI guidance
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} VellCrow. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>for authentic creators</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}