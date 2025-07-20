import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent } from './ui/card'
import { Mail, CheckCircle, Zap, Target, Brain, Flame } from 'lucide-react'

export function IntroductionSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  const features = [
    {
      icon: Brain,
      title: '20+ Page Ritual',
      description: 'Deep persona crafting process designed for confrontation, not productivity',
      color: 'text-primary'
    },
    {
      icon: Zap,
      title: 'AI Prompt Scaffolds',
      description: 'Built for confrontation and truth-telling, not generic productivity',
      color: 'text-secondary'
    },
    {
      icon: Target,
      title: 'Voice of the Monster',
      description: 'Custom GPT template that speaks your shadow language',
      color: 'text-primary'
    },
    {
      icon: Flame,
      title: 'Neurodivergent Friendly',
      description: 'Designed for kinky, too-much creators who refuse to be tamed',
      color: 'text-secondary'
    }
  ]

  return (
    <section id="why" className="py-24 px-6 relative scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            This is not a download.{' '}
            <span className="gradient-text">It's a possession.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafted by queer chaos witch and persona engineer{' '}
            <span className="text-primary font-semibold">VellCrow</span>, this kit seduces your shadow out of hiding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="scroll-reveal mystical-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Email signup */}
        <div className="scroll-reveal max-w-2xl mx-auto">
          <Card className="mystical-glow bg-gradient-to-br from-card/80 to-accent/5 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                  <Mail className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-2">
                  Join the Ritual
                </h3>
                <p className="text-muted-foreground">
                  Get exclusive insights and early access to new persona engineering tools
                </p>
              </div>

              {isSubscribed ? (
                <div className="flex items-center justify-center gap-2 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Welcome to the coven! Check your email.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email to begin..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-gradient-to-r from-primary to-secondary text-black font-semibold hover:scale-105 transition-transform"
                  >
                    {isLoading ? 'Summoning...' : 'Enter'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}