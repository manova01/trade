'use client'
import { Button } from "@/components/ui/button"
import { Bitcoin, DollarSign, CircleDollarSign, TrendingUp } from "lucide-react"
import Link from "next/link"

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
      icon: CircleDollarSign,
      title: "Ethereum",
      description: "Exchange your Ethereum to cash in a smart way.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-teal-500 font-semibold text-sm tracking-wide mb-2">OUR SERVICES</p>
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
                className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link href="/get-started">
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full">
                    Start Trading Now
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Other Cryptocurrency */}
        <div className="max-w-md mx-auto">
            <div
                className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Other Cryptocurrency</h3>
                <p className="text-muted-foreground mb-6">Exchange any cryptocurrency to cash in a click.</p>
                <Link href="/get-started">
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full">Start Trading Now</Button>
                </Link>
              </div>
        </div>
      </div>
    </section>
  )
}
