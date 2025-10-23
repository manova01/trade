'use client'

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSection {
  title: string
  items: FAQItem[]
}

const faqData: FAQSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        question: "How do I start trading with RFX Trading?",
        answer:
          "To get started, sign up for an account on our platform, complete the verification process, and deposit funds. Our support team is available 24/7 to guide you through each step.",
      },
      {
        question: "Do I need to create an online account?",
        answer:
          "Yes, you'll need to create an account to access our trading platform. This ensures security and allows us to provide personalized trading features and support.",
      },
      {
        question: "What do I need to begin trading?",
        answer:
          "You'll need a valid email address, identification for verification, and an initial deposit. We accept various payment methods for your convenience.",
      },
    ],
  },
  {
    title: "Trading",
    items: [
      {
        question: "What cryptocurrencies do you trade?",
        answer:
          "We offer trading for Bitcoin, Ethereum, USDT, BNB, XRP, Solana, and many other major cryptocurrencies. Check our Rates page for the complete list of available assets.",
      },
      {
        question: "Is there a minimum amount I can start with?",
        answer:
          "Yes, we have a minimum deposit requirement to ensure efficient trading. Contact our support team for current minimum amounts and special offers.",
      },
      {
        question: "How do I know the current rates?",
        answer:
          "Our Rates page displays live cryptocurrency prices updated every second. All rates are competitive and updated in real-time for accurate trading decisions.",
      },
    ],
  },
  {
    title: "Deposits & Withdrawals",
    items: [
      {
        question: "How do I deposit or withdraw funds?",
        answer:
          "You can deposit and withdraw through multiple channels including bank transfers, mobile money, and cryptocurrency transfers. Visit your account dashboard for available options.",
      },
      {
        question: "How long do transactions take?",
        answer:
          "Most transactions are processed within minutes. Bank transfers may take 1-2 business days depending on your bank. Cryptocurrency transactions are typically faster.",
      },
      {
        question: "Are there any fees?",
        answer:
          "We maintain competitive and transparent fee structures. Specific fees depend on your transaction type and amount. Check our Rates page or contact support for detailed information.",
      },
    ],
  },
  {
    title: "Security & Trust",
    items: [
      {
        question: "Is RFX Trading a registered business?",
        answer:
          "Yes, RFX Trading is a registered and licensed cryptocurrency exchange operating with full compliance to regulatory requirements.",
      },
      {
        question: "How safe are my transactions?",
        answer:
          "We use bank-level encryption and multi-layer security protocols to protect your assets. Your transactions are secured with advanced encryption technology.",
      },
      {
        question: "Can I trade anytime?",
        answer:
          "Yes, our platform operates 24/7, allowing you to trade cryptocurrencies at any time. Markets never close in the crypto space.",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        question: "How can I reach you?",
        answer:
          "You can reach our support team via WhatsApp, email, or through our contact form. We're available 24/7 to assist with any questions or issues.",
      },
      {
        question: "Do you offer trading guidance?",
        answer:
          "Yes, we provide trading guidance and educational resources. Our team can help you understand market trends and develop trading strategies.",
      },
    ],
  },
]

function FAQAccordion() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="space-y-8">
      {faqData.map((section, sectionIdx) => (
        <div key={sectionIdx}>
          <h2 className="text-2xl font-bold text-foreground mb-6">{section.title}</h2>
          <div className="space-y-4">
            {section.items.map((item, itemIdx) => {
              const itemId = `${sectionIdx}-${itemIdx}`
              const isOpen = openItems.includes(itemId)

              return (
                <div
                  key={itemId}
                  className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
                >
                  <button
                    onClick={() => toggleItem(itemId)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-muted/50 hover:bg-muted transition-colors text-left"
                  >
                    <span className="font-semibold text-foreground">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 py-4 bg-background border-t border-border">
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold mb-2">Frequently Asked Questions</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Got <span className="text-accent">Questions?</span> We've Got Answers
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn more about how RFX Trading works — a trusted local crypto business helping traders get started
              safely and easily.
            </p>
          </div>

          <FAQAccordion />

          <div className="mt-16 text-center bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              We're always available to help. Click below to reach us instantly and start your crypto journey with RFX
              Trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Contact Us</Button>
              </Link>
              <Link href="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
