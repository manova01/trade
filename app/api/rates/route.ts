export async function GET() {
  if (!process.env.COINMARKETCAP_API_KEY) {
    console.error("[v0] COINMARKETCAP_API_KEY is not set!");
    return Response.json({ success: false, error: "COINMARKETCAP_API_KEY is not set" }, { status: 500 });
  }

  try {
    const response = await fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=18&convert=USD",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY || "",
          "X-Debug-API-Key": process.env.COINMARKETCAP_API_KEY ? "API Key Present" : "API Key Missing",
        },
      },
    )

    if (!response.ok) {
      throw new Error("Failed to fetch from CoinMarketCap")
    }

    const data = await response.json()

    // Map CoinMarketCap response to our format
    const formattedRates = data.data.map(
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

    return Response.json({ success: true, data: formattedRates })
  } catch (error) {
    console.error("[v0] Error fetching rates from CoinMarketCap:", error)
    return Response.json({ success: false, error: "Failed to fetch cryptocurrency rates" }, { status: 500 })
  }
}
