import { Zap, Shield, Users } from "lucide-react"

export default function TrustedDealer() {
  const features = [
    {
      icon: Zap,
      title: "Fastest",
      description: "We are dedicated to giving swift responses to your cryptocurrency transactions.",
    },
    {
      icon: Shield,
      title: "Trusted",
      description: "We provide a secure service that ensures safety and security of your assets.",
    },
    {
      icon: Users,
      title: "Reliable",
      description: "Reliable and maintained a high availability of performance for our clients without failure.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-wide mb-2">WELCOME TO RFXTRADING</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Most Trusted Digital Asset Dealer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are the most reliable, trusted, and secure cryptocurrency exchange. We exchange Bitcoin, USDT, Ethereum,
            etc.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                    index === 1 ? "bg-accent text-accent-foreground" : "bg-muted text-foreground"
                  }`}
                >
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
