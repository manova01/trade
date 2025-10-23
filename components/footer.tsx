import { BarChart as Snapchat, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">RFX</span>
              </div>
              <span className="font-bold">RFXTRADING</span>
            </div>
            <p className="text-sm opacity-80">The most reliable, trusted, and secure cryptocurrency exchange.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/" className="hover:opacity-100 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-100 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/rates" className="hover:opacity-100 transition">
                  Rates
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:opacity-100 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Lagos, Nigeria</li>
              <li>+234 (0)123-4567</li>
              <li>
                <a href="mailto:support@rfxtrading.com" className="hover:opacity-100 transition">
                  support@rfxtrading.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <Link href="/get-started" className="hover:opacity-100 transition">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">© RFXTRADING 2025. All Rights Reserved | Developed by TechnoHub Ltd</p>
          <div className="flex gap-4">
            <a href="#" className="opacity-80 hover:opacity-100 transition">
              <Snapchat size={20} />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
