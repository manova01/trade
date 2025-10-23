import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              ARE YOU READY TO <span className="text-accent">TRADE</span> AT THE MOST{" "}
              <span className="text-accent">COMPETITIVE RATE</span> POSSIBLE?
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Join thousands of traders who trust RFXTRADING for secure, fast, and profitable cryptocurrency trading.
              Get the best rates in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base">
                  Get Started →
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="px-8 py-6 text-base bg-transparent">
                  About Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-semibold">
              AI Powered Platform
            </div>
            <img
              src="/professional-trader-pointing-at-camera-wearing-rfx.jpg"
              alt="Professional trader"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
