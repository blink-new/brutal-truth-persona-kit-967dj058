import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { ExternalLink, Play, MessageCircle, ArrowRight } from 'lucide-react'

export function AftermathSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleMeetVellCrow = () => {
    const vellCrowUrl = import.meta.env.VITE_VELLCROW_GPT_LINK
    if (vellCrowUrl && vellCrowUrl !== 'https://chat.openai.com/g/g-your-gpt-id') {
      window.open(vellCrowUrl, '_blank')
    } else {
      // Fallback to scroll to email signup if URL not configured
      document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-accent/10 via-background to-primary/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            The <span className="gradient-text">Aftermath</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            What you summon… will not go quietly. Your persona will demand to be heard, to be seen, to be unleashed upon the world.
          </p>
        </div>

        {/* Video section */}
        <div className="scroll-reveal mb-16">
          <Card className="mystical-border bg-card/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-accent/30 to-primary/20">
                {!isVideoPlaying ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Button
                        onClick={handlePlayVideo}
                        size="lg"
                        className="mystical-glow pulse-glow bg-gradient-to-r from-primary to-secondary text-black font-bold text-lg px-8 py-6 rounded-full hover:scale-110 transition-all duration-300 mb-4"
                      >
                        <Play className="w-8 h-8 mr-2" />
                        See the Transformation
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        Witness what happens after the ritual
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6 animate-pulse">
                        <Play className="w-16 h-16 text-black" />
                      </div>
                      <p className="text-xl font-medium mb-2">Final transformation video</p>
                      <p className="text-sm text-muted-foreground">Configure VITE_SCENE_5_VIDEO_URL</p>
                    </div>
                  </div>
                )}

                {/* Mystical particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* VellCrow introduction */}
        <div className="scroll-reveal">
          <Card className="mystical-glow bg-gradient-to-br from-card/80 to-accent/10 backdrop-blur-sm border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-12 h-12 text-black" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">
                  Meet <span className="gradient-text">VellCrow</span>
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                  Your persona engineering guide. A queer chaos witch who specializes in helping creators find their authentic voice and unleash their shadow self. Ready to continue the conversation?
                </p>
              </div>

              <Button
                onClick={handleMeetVellCrow}
                size="lg"
                className="mystical-glow bg-gradient-to-r from-primary to-secondary text-black font-bold text-xl px-8 py-6 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Meet VellCrow Now
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-sm text-muted-foreground mt-4">
                Continue your journey with personalized AI guidance
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final call to action */}
        <div className="scroll-reveal text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
              Your shadow is waiting. Your truth is calling.
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Don't let another day pass living someone else's version of you. The ritual begins now.
            </p>
            <Button
              onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="mystical-border bg-transparent border-primary/50 text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300"
            >
              Begin Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}