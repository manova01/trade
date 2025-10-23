'use client'
export default function TradeStats() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <p className="text-teal-500 font-semibold text-sm tracking-wide mb-2">WHY CHOOSE US</p>
              <h2 className="text-3xl md:text-4xl font-bold">We've Traded over $10m Worth of Crypto</h2>
            </div>

            <p className="text-muted-foreground">
              With over $10 million in cryptocurrency trades successfully executed, RFXTRADING stands as a trusted leader in digital asset transactions. Our commitment to secure and efficient trading makes us the preferred choice for traders worldwide.
            </p>

          </div>

          {/* Left Image */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              $10M+ Traded
            </div>
            <img
              src="/bitcoin-coin-with-trading-chart-background.jpg"
              alt="Trading statistics"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
