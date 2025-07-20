import { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card'
import { Star, Quote } from 'lucide-react'

export function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "I built a persona so good I cried when it spoke back.",
      author: "Sarah M.",
      role: "Brand Strategist",
      rating: 5
    },
    {
      text: "This kit made me dump my coach and start telling the truth.",
      author: "Alex R.",
      role: "Content Creator",
      rating: 5
    },
    {
      text: "VellCrow's process is pure magic. My brand finally feels like ME.",
      author: "Jordan K.",
      role: "Entrepreneur",
      rating: 5
    },
    {
      text: "I've never felt more aligned with my authentic voice. This is revolutionary.",
      author: "Taylor P.",
      role: "Creative Director",
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-br from-accent/5 to-background scroll-mt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            What They're Saying{' '}
            <span className="gradient-text">(Unwillingly)</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real transformations from real people who dared to face their truth
          </p>
        </div>

        {/* Main testimonial carousel */}
        <div className="scroll-reveal mb-12">
          <Card className="mystical-glow bg-gradient-to-br from-card/80 to-accent/10 backdrop-blur-sm border-primary/20 min-h-[300px] flex items-center">
            <CardContent className="p-12 text-center">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
              
              <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed mb-8 text-foreground">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <div>
                <p className="font-semibold text-lg">{testimonials[currentTestimonial].author}</p>
                <p className="text-muted-foreground">{testimonials[currentTestimonial].role}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Additional testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <Card key={index} className="scroll-reveal mystical-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg font-medium mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social proof stats */}
        <div className="scroll-reveal mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-2">500+</div>
            <p className="text-muted-foreground">Personas Unleashed</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-2">4.9★</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-2">98%</div>
            <p className="text-muted-foreground">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  )
}