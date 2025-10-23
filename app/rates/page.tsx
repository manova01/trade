'use client'

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

interface CryptoRate {
  symbol: string
  name: string
  price: number
  change: number
}

export default function Rates() {
  const [rates, setRates] = useState<CryptoRate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/rates');

        if (!response.ok) throw new Error("Failed to fetch rates")

        const data = await response.json()

        // Map CoinMarketCap response to our format
        const formattedRates: CryptoRate[] = data.data.map(
          (crypto: {
            symbol: string
            name: string
            quote: { USD: { price: number; percent_change_24h: number } }
          }) => ({
            symbol: crypto.symbol,
            name: crypto.name,
            price: crypto.quote.USD.price,
            change: crypto.quote.USD.percent_change_24h,
          }),
        )

        setRates(formattedRates)
        setError(null)
      } catch (err) {
        console.error("[v0] Error fetching rates:", err)
        setError("Failed to load cryptocurrency rates. Please try again later.")
        // Fallback to static data if API fails
        setRates([
          { symbol: "BTC", name: "Bitcoin", price: 109662.85, change: 1.56 },
          { symbol: "ETH", name: "Ethereum", price: 3841.59, change: 0.78 },
          { symbol: "USDT", name: "Tether USDT", price: 1.0, change: 0.0 },
          { symbol: "BNB", name: "BNB", price: 1087.55, change: 1.7 },
          { symbol: "XRP", name: "XRP", price: 2.4, change: 0.68 },
          { symbol: "SOL", name: "Solana", price: 190.7, change: 4.08 },
          { symbol: "USDC", name: "USDC", price: 1.0, change: 0.0 },
          { symbol: "TRX", name: "TRON", price: 0.32, change: 0.09 },
          { symbol: "DOGE", name: "Dogecoin", price: 0.19, change: 2.27 },
          { symbol: "ADA", name: "Cardano", price: 0.64, change: 1.21 },
          { symbol: "HYPE", name: "Hyperliquid", price: 40.65, change: 13.25 },
          { symbol: "LINK", name: "Chainlink", price: 17.31, change: -0.04 },
          { symbol: "USDe", name: "Ethena USDe", price: 1.0, change: 0.0 },
          { symbol: "XLM", name: "Stellar", price: 0.31, change: 0.72 },
          { symbol: "BCH", name: "Bitcoin Cash", price: 485.7, change: 3.05 },
          { symbol: "SUI", name: "Sui", price: 2.45, change: 0.94 },
          { symbol: "AVAX", name: "Avalanche", price: 19.46, change: 0.44 },
          { symbol: "LEO", name: "UNUS SED LEO", price: 8.97, change: -0.06 },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchRates()
    // Refresh rates every 30 seconds
    const interval = setInterval(fetchRates, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm mb-4">Live Rates & Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Real-Time</span>
            <br />
            <span className="text-accent">Cryptocurrency Rates</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get the latest cryptocurrency prices and our competitive trading fees. All rates are updated in real-time
            for accurate trading decisions.
          </p>
        </div>
      </section>

      {/* Rates Table Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Live Cryptocurrency Rates</h2>
            <p className="text-muted-foreground">Updated every 30 seconds for the most accurate trading information</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive">
              {error}
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading live rates...</p>
            </div>
          )}

          {/* Table */}
          {!loading && (
            <div className="bg-background rounded-lg border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Cryptocurrency</th>
                      <th className="px-6 py-4 text-right font-semibold text-foreground">Price</th>
                      <th className="px-6 py-4 text-right font-semibold text-foreground">24h Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rates.map((rate, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/30 transition">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                              <span className="text-accent font-bold text-sm">{rate.symbol}</span>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">{rate.name}</p>
                              <p className="text-sm text-muted-foreground">{rate.symbol}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ${rate.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className={`font-semibold ${rate.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                            {rate.change >= 0 ? "+" : ""}
                            {rate.change.toFixed(2)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className="mt-8 bg-accent/10 border border-accent/20 rounded-lg p-6">
            <p className="text-center text-muted-foreground">
              Prices are updated every 30 seconds from live market data. All rates are subject to market conditions and
              may vary.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Trading Now</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get competitive rates and secure trading on all major cryptocurrencies
          </p>
          <Link href="/get-started">
            <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
