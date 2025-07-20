import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { 
  Settings, 
  ExternalLink, 
  CheckCircle, 
  AlertCircle, 
  Copy,
  Eye,
  EyeOff
} from 'lucide-react'

export function SetupGuide() {
  const [isVisible, setIsVisible] = useState(false)
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const copyToClipboard = (text: string, item: string) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(item)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  const services = [
    {
      name: 'Flow AI',
      envVar: 'VITE_FLOW_AI_PUBLIC_URL',
      currentValue: import.meta.env.VITE_FLOW_AI_PUBLIC_URL,
      placeholder: 'https://your-flow-ai-url.com',
      description: 'Powers the "Enter the Ritual" button in the hero section',
      status: import.meta.env.VITE_FLOW_AI_PUBLIC_URL && 
               import.meta.env.VITE_FLOW_AI_PUBLIC_URL !== 'https://your-flow-ai-url.com' ? 'configured' : 'pending',
      instructions: 'Get your Flow AI public URL from your Flow AI dashboard and add it to your environment variables.'
    },
    {
      name: 'Stan Store',
      envVar: 'VITE_STAN_STORE_CHECKOUT_URL',
      currentValue: import.meta.env.VITE_STAN_STORE_CHECKOUT_URL,
      placeholder: 'https://stan.store/your-product',
      description: 'Powers the "Buy the Kit" checkout button',
      status: import.meta.env.VITE_STAN_STORE_CHECKOUT_URL && 
               import.meta.env.VITE_STAN_STORE_CHECKOUT_URL !== 'https://stan.store/vellcrow/brutal-truth-persona-kit' ? 'configured' : 'pending',
      instructions: 'Create your product on Stan Store and get the direct checkout URL.'
    },
    {
      name: 'VellCrow GPT',
      envVar: 'VITE_VELLCROW_GPT_LINK',
      currentValue: import.meta.env.VITE_VELLCROW_GPT_LINK,
      placeholder: 'https://chat.openai.com/g/g-your-gpt-id',
      description: 'Powers the "Meet VellCrow Now" button in the aftermath section',
      status: import.meta.env.VITE_VELLCROW_GPT_LINK && 
               import.meta.env.VITE_VELLCROW_GPT_LINK !== 'https://chat.openai.com/g/g-your-gpt-id' ? 'configured' : 'pending',
      instructions: 'Create your custom GPT in ChatGPT and get the shareable link.'
    }
  ]

  const configuredCount = services.filter(s => s.status === 'configured').length
  const totalServices = services.length

  if (!isVisible) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsVisible(true)}
          className="mystical-glow bg-gradient-to-r from-primary to-secondary text-black font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          <Settings className="w-4 h-4 mr-2" />
          Setup Guide ({configuredCount}/{totalServices})
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto mystical-border bg-card/95 backdrop-blur-sm">
        <CardHeader className="border-b border-border/50">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-serif flex items-center gap-2">
                <Settings className="w-6 h-6 text-primary" />
                External Services Setup
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Configure these services to make your site fully functional
              </p>
            </div>
            <Button
              variant="ghost"
              onClick={() => setIsVisible(false)}
              className="hover:bg-accent"
            >
              <EyeOff className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2 mt-4">
            <Badge variant={configuredCount === totalServices ? "default" : "secondary"}>
              {configuredCount}/{totalServices} Configured
            </Badge>
            {configuredCount === totalServices && (
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                <CheckCircle className="w-3 h-3 mr-1" />
                All Set!
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {services.map((service, index) => (
            <Card key={index} className={`border ${service.status === 'configured' ? 'border-green-500/30 bg-green-500/5' : 'border-orange-500/30 bg-orange-500/5'}`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      service.status === 'configured' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-orange-500/20 text-orange-400'
                    }`}>
                      {service.status === 'configured' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <Badge variant={service.status === 'configured' ? "default" : "secondary"}>
                    {service.status === 'configured' ? 'Ready' : 'Setup Required'}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Environment Variable:
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="bg-accent/50 px-2 py-1 rounded text-sm font-mono flex-1">
                        {service.envVar}
                      </code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(service.envVar, service.envVar)}
                        className="hover:bg-accent"
                      >
                        {copiedItem === service.envVar ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Current Value:
                    </label>
                    <div className="bg-accent/30 px-3 py-2 rounded mt-1">
                      <code className="text-sm font-mono">
                        {service.currentValue || 'Not configured'}
                      </code>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Instructions:
                    </label>
                    <p className="text-sm mt-1 leading-relaxed">
                      {service.instructions}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-primary" />
                Quick Setup Instructions
              </h3>
              <div className="space-y-2 text-sm">
                <p>1. Copy the <code className="bg-accent/50 px-1 rounded">.env.example</code> file to <code className="bg-accent/50 px-1 rounded">.env</code></p>
                <p>2. Replace the placeholder URLs with your actual service URLs</p>
                <p>3. Restart your development server to apply changes</p>
                <p>4. Test each button to ensure they work correctly</p>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}