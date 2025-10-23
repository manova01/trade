"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">RFX</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">RFXTRADING</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-accent transition">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition">
              About Us
            </Link>
            <Link href="/rates" className="text-foreground hover:text-accent transition">
              Rates
            </Link>
            <Link href="/faq" className="text-foreground hover:text-accent transition">
              FAQ
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/get-started">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/" className="text-foreground hover:text-accent transition">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition">
              About Us
            </Link>
            <Link href="/rates" className="text-foreground hover:text-accent transition">
              Rates
            </Link>
            <Link href="/faq" className="text-foreground hover:text-accent transition">
              FAQ
            </Link>
            <Link href="/get-started" className="w-full">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">Get Started</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
