import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Sparkles className="w-10 h-10 text-black" />
          </div>
          <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto opacity-30 animate-ping" />
        </div>
        
        <h1 className="text-2xl font-serif font-bold gradient-text mb-4">
          THE BRUTAL TRUTH
        </h1>
        <p className="text-muted-foreground animate-pulse">
          Summoning your persona...
        </p>
        
        <div className="flex justify-center mt-6">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}