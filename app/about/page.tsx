import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm mb-4">About RFX Trading</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Precision in Every Trade,</span>
            <br />
            <span className="text-accent">Perfection in Every Transaction</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            RFX Trading is a leading cryptocurrency exchange platform dedicated to providing secure, fast, and reliable
            trading services for digital assets worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-background border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to cryptocurrency trading by providing a secure, user-friendly platform that
                empowers individuals and institutions to participate in the digital economy with confidence.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-background border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted cryptocurrency trading platform, setting the standard for security,
                innovation, and customer satisfaction in the digital asset space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do at RFX Trading</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Security First */}
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Security First</h3>
              <p className="text-muted-foreground">
                Advanced encryption and multi-layer security protocols protect your assets 24/7
              </p>
            </div>

            {/* Transparency */}
            <div className="bg-accent/10 rounded-lg p-8 text-center border border-accent/20">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                Clear pricing, honest communication, and transparent trading processes
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM5.757 15.657a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM2 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.757 4.343a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Cutting-edge technology and continuous improvement for better user experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-muted-foreground">Join our growing community of successful traders</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">50K+</p>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">$2B+</p>
              <p className="text-muted-foreground">Trading Volume</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</p>
              <p className="text-muted-foreground">Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</p>
              <p className="text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of traders who trust RFX Trading for their cryptocurrency needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition">
                Get Started Today
              </button>
            </Link>
            <Link href="/get-started">
              <button className="px-8 py-3 border border-border hover:bg-muted text-foreground font-semibold rounded-lg transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
