import { Badge } from './ui/badge'
import { Info } from 'lucide-react'

export function DemoMode() {
  const isFlowAiConfigured = import.meta.env.VITE_FLOW_AI_PUBLIC_URL && 
    import.meta.env.VITE_FLOW_AI_PUBLIC_URL !== 'https://your-flow-ai-url.com'
  
  const isStanStoreConfigured = import.meta.env.VITE_STAN_STORE_CHECKOUT_URL && 
    import.meta.env.VITE_STAN_STORE_CHECKOUT_URL !== 'https://stan.store/vellcrow/brutal-truth-persona-kit'
  
  const isVellCrowConfigured = import.meta.env.VITE_VELLCROW_GPT_LINK && 
    import.meta.env.VITE_VELLCROW_GPT_LINK !== 'https://chat.openai.com/g/g-your-gpt-id'

  const allConfigured = isFlowAiConfigured && isStanStoreConfigured && isVellCrowConfigured

  if (allConfigured) return null

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2">
        <Info className="w-4 h-4 mr-2" />
        Demo Mode - Configure external services for full functionality
      </Badge>
    </div>
  )
}