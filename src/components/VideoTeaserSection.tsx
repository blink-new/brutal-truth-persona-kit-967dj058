import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Play, Volume2, VolumeX } from 'lucide-react'

export function VideoTeaserSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const handlePlayVideo = () => {
    setIsPlaying(true)
    // In a real implementation, this would trigger video playback
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto max-w-5xl">
        <div className="scroll-reveal text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Watch the <span className="gradient-text">Ritual Begin</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose your archetype. Mirror your contradiction. Step into the voice that makes your brand feel dangerous again.
          </p>
        </div>

        <div className="scroll-reveal">
          <Card className="mystical-border bg-card/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-primary/10">
                {/* Video placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {!isPlaying ? (
                    <div className="text-center">
                      <Button
                        onClick={handlePlayVideo}
                        size="lg"
                        className="mystical-glow pulse-glow bg-gradient-to-r from-primary to-secondary text-black font-bold text-lg px-8 py-6 rounded-full hover:scale-110 transition-all duration-300 mb-4"
                      >
                        <Play className="w-8 h-8 mr-2" />
                        Watch Preview
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        See the transformation process in action
                      </p>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 animate-pulse">
                          <Play className="w-12 h-12 text-black" />
                        </div>
                        <p className="text-lg font-medium">Video would play here</p>
                        <p className="text-sm text-muted-foreground">Configure VITE_SCENE_2_VIDEO_URL</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video controls overlay */}
                {isPlaying && (
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsMuted(!isMuted)}
                      className="bg-black/50 border-white/20 text-white hover:bg-black/70"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                  </div>
                )}

                {/* Mystical overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse" />
                <div className="absolute top-8 right-8 w-1 h-1 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to action */}
        <div className="scroll-reveal text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to discover what your shadow has been hiding?
          </p>
          <Button 
            onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            size="lg"
            className="mystical-border bg-transparent border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-3 rounded-xl transition-all duration-300"
          >
            Get Your Kit Now
          </Button>
        </div>
      </div>
    </section>
  )
}