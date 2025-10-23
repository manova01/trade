import { Zap, Lock, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SmartPlatform() {
  const features = [
    {
      icon: Zap,
      title: "Real-time Trading",
      description: "Execute trades instantly with live market data",
    },
    {
      icon: Lock,
      title: "Bank-level Security",
      description: "Your funds are protected with advanced encryption",
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Trade anywhere, anytime with our mobile platform",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-semibold text-sm tracking-wide mb-2">BEST CRYPTOCURRENCY AGENCY</p>
              <h2 className="text-3xl md:text-4xl font-bold">Smart and Secure Platform to Trade your Crypto</h2>
            </div>

            <p className="text-muted-foreground">
              At RFXTRADING, we are committed to offering the fastest, most trusted, and most reliable cryptocurrency
              transactions.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base">
              Start Trading Now →
            </Button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/cryptocurrency-trading-dashboard-interface.jpg"
              alt="Trading platform"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
