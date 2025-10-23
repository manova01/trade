import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustedDealer from "@/components/trusted-dealer"
import SmartPlatform from "@/components/smart-platform"
import TradeStats from "@/components/trade-stats"
import Services from "@/components/services"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustedDealer />
      <SmartPlatform />
      <TradeStats />
      <Services />
      <Footer />
    </main>
  )
}
