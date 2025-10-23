import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Instagram, Camera } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get Started with RFX Trading</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Connect with us on your preferred platform to start your trading journey
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp 1 */}
            <Card className="border-2 hover:border-primary transition-colors cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">WhatsApp 1</CardTitle>
                <CardDescription>Instant support and real-time trading updates</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white" asChild>
                  <a href="http://wa.me/+2349071631870" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp 1
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp 2 */}
            <Card className="border-2 hover:border-primary transition-colors cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">WhatsApp 2</CardTitle>
                <CardDescription>Connect with our secondary trading support</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white" asChild>
                  <a href="http://wa.me/+2349169317920" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp 2
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="border-2 hover:border-primary transition-colors cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Instagram</CardTitle>
                <CardDescription>Follow us for trading tips and market insights</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/riley_holy?igsh=YjdoNWh6M2Z6cTds&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on Instagram
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Snapchat */}
            <Card className="border-2 hover:border-primary transition-colors cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Snapchat</CardTitle>
                <CardDescription>Get exclusive trading content and behind-the-scenes updates</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black" asChild>
                  <a href="https://snapchat.com/t/AjKN39Xc" target="_blank" rel="noopener noreferrer">
                    Add on Snapchat
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose RFX Trading?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-primary mb-2">Precision Trading</h3>
                <p className="text-muted-foreground text-sm">
                  Advanced algorithms and real-time market analysis for optimal trading decisions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">24/7 Support</h3>
                <p className="text-muted-foreground text-sm">
                  Round-the-clock customer support through your preferred communication channel.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Secure Platform</h3>
                <p className="text-muted-foreground text-sm">
                  Bank-level security with encrypted transactions and secure wallet integration.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
