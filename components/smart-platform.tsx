'use client'
import { Zap, Lock, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-teal-500 font-semibold text-sm tracking-wide mb-2">BEST CRYPTOCURRENCY AGENCY</p>
              <h2 className="text-3xl md:text-4xl font-bold">Smart and Secure Platform to Trade your Crypto</h2>
            </div>

            <p className="text-muted-foreground">
              At RFXTRADING, we are committed to offering the fastest, most trusted, and most reliable cryptocurrency
              transactions. We deal in Bitcoin, USDT, Ethereum, and other cryptocurrencies exchange.
            </p>

            <p className="font-semibold">No ID needed!</p>

            <Link href="/get-started">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-base">
                Start Trading Now
              </Button>
            </Link>
          </div>

          {/* Right Features */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="flex gap-4 items-start p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-teal-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
