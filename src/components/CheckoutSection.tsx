import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Check, Zap, Download, Users, Clock, Shield } from 'lucide-react'

export function CheckoutSection() {
  const [isHovered, setIsHovered] = useState(false)

  const handleBuyKit = () => {
    const stanStoreUrl = import.meta.env.VITE_STAN_STORE_CHECKOUT_URL
    if (stanStoreUrl && stanStoreUrl !== 'https://stan.store/vellcrow/brutal-truth-persona-kit') {
      window.open(stanStoreUrl, '_blank')
    } else {
      // Show alert with setup instructions if URL not configured
      alert('🔧 Setup Required: Please configure your Stan Store checkout URL in the environment variables to enable purchases. Check the .env.example file for instructions.')
    }
  }

  const features = [
    'PDF ritual guide (20+ pages)',
    'VellCrow prompt templates',
    'AI summoning instructions',
    'Persona archetype framework',
    'Shadow work exercises',
    'Brand voice development',
    'Lifetime access & updates'
  ]

  const bonuses = [
    { icon: Zap, title: 'Instant Access', description: 'Download immediately after purchase' },
    { icon: Users, title: 'Community Access', description: 'Join our private Discord for ongoing support' },
    { icon: Shield, title: '30-Day Guarantee', description: 'Full refund if not completely satisfied' }
  ]

  return (
    <section id="checkout" className="py-24 px-6 bg-gradient-to-br from-background to-accent/10 scroll-mt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="scroll-reveal text-center mb-16">
          <Badge className="bg-gradient-to-r from-primary to-secondary text-black font-semibold mb-4">
            Limited Time Offer
          </Badge>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Make the <span className="gradient-text">Pact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your monster's not going to summon itself. Take the first step into your authentic power.
          </p>
        </div>

        <div className="scroll-reveal">
          <Card className="mystical-glow bg-gradient-to-br from-card/90 to-accent/5 backdrop-blur-sm border-primary/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Pricing */}
                <div className="p-12 text-center lg:text-left">
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-4">
                      <span className="text-6xl md:text-7xl font-serif font-bold gradient-text">$11</span>
                      <span className="text-xl text-muted-foreground line-through">$47</span>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      One-time payment • Instant access • No subscriptions
                    </p>
                  </div>

                  <Button
                    onClick={handleBuyKit}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    size="lg"
                    className={`w-full mystical-glow pulse-glow bg-gradient-to-r from-primary to-secondary text-black font-bold text-xl px-8 py-6 rounded-xl transition-all duration-300 ${
                      isHovered ? 'scale-105 shadow-2xl' : ''
                    }`}
                  >
                    <Download className="w-6 h-6 mr-2" />
                    Buy the Kit Now
                  </Button>

                  <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Offer expires in 48 hours</span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-12 bg-gradient-to-br from-accent/10 to-primary/5">
                  <h3 className="text-2xl font-serif font-semibold mb-6">What's Included:</h3>
                  
                  <ul className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-black" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Bonus Inclusions:</h4>
                    {bonuses.map((bonus, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <bonus.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{bonus.title}</p>
                          <p className="text-sm text-muted-foreground">{bonus.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust indicators */}
        <div className="scroll-reveal mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-primary" />
              <span>Instant Download</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>500+ Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}