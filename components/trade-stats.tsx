export default function TradeStats() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-semibold">
              $100k Traded
            </div>
            <img
              src="/bitcoin-coin-with-trading-chart-background.jpg"
              alt="Trading statistics"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <p className="text-accent font-semibold text-sm tracking-wide mb-2">WHY CHOOSE US</p>
              <h2 className="text-3xl md:text-4xl font-bold">We've Traded over $10m Worth of Crypto</h2>
            </div>

            <p className="text-muted-foreground">
              With over $10 million in cryptocurrency trades successfully executed, RFXTRADING stands as a trusted
              leader in digital asset transactions.
            </p>

            <div className="space-y-3">
              <p className="text-foreground font-semibold">No Delay ⏱️</p>
              <p className="text-muted-foreground">
                We deal in Bitcoin, USDT, Ethereum, and other cryptocurrencies exchange.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
