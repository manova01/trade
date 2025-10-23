import { Button } from "@/components/ui/button"
import { Bitcoin, DollarSign, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Bitcoin,
      title: "Bitcoin",
      description: "The best platform to buy and sell your Bitcoin cryptocurrency.",
    },
    {
      icon: DollarSign,
      title: "USDT",
      description: "Change your USDT to cash in your local currency.",
    },
    {
      icon: Zap,
      title: "Ethereum",
      description: "Exchange your Ethereum to cash in a smart way.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-wide mb-2">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Service We Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We deal in Bitcoin, USDT, Ethereum, and other cryptocurrencies exchange.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                  <Icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                  Start Trading Now
                </Button>
              </div>
            )
          })}
        </div>

        {/* Other Cryptocurrency */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 text-accent" />
          <h3 className="text-xl font-bold mb-2">Other Cryptocurrency</h3>
          <p className="text-muted-foreground mb-6">Exchange any cryptocurrency to cash in a click.</p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Start Trading Now</Button>
        </div>
      </div>
    </section>
  )
}
