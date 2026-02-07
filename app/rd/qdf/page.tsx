import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { GradientText } from "@/components/gradient-text"
import { StickyNav } from "@/components/sticky-nav"
import { ResearcherCard } from "@/components/researcher-card"
import { FocusCard } from "@/components/focus-card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const stickyNavItems = [
  { label: "Mission", href: "#mission" },
  { label: "Researchers", href: "#researchers" },
  { label: "Focus Areas", href: "#focus-areas" },
  { label: "Join QDF", href: "#join" },
]

const researchers = [
  { name: "Gaurav Dev", initials: "GD" },
  { name: "Indrakshee Mukherjee", initials: "IM" },
  { name: "Shubham Mandawewala", initials: "SM" },
  { name: "Yehor Kubakh", initials: "YK" },
  { name: "Ivan Borisov", initials: "IB" },
  { name: "Haya Agha", initials: "HA" },
  { name: "Ivan von Greiff", initials: "IG" },
]

const focusAreas = [
  { title: "Lending protocol efficiency and solutions", description: "What we measure: efficiency, risk, market design" },
  { title: "AMM protocol efficiency and solutions", description: "What we measure: efficiency, risk, market design" },
  { title: "RWA collateralization solutions", description: "What we measure: efficiency, risk, market design" },
  { title: "Derivatives for hedging new volatilities", description: "What we measure: efficiency, risk, market design" },
  { title: "Inter-exchange/chain arbitrage strategies", description: "What we measure: efficiency, risk, market design" },
]

const protocolsWeWatch = [
  "Uniswap", "1inch", "dYdX", "Hyperliquid", "Aave", "Morpho", "Compound", 
  "MakerDAO", "Curve", "Balancer", "Synthetix", "GMX"
]

export default function QDFPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <GradientText as="h1" className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Quantitative DeFi (QDF)
          </GradientText>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            {"We're launching QDF as a new research wing focused on quantitative research collaborations starting Summer Semester 2026."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#join"
              className="px-6 py-3 rounded-full bg-violet-500 text-white font-medium hover:bg-violet-600 transition-colors"
            >
              Join QDF
            </Link>
            <Link
              href="#"
              className="px-6 py-3 rounded-full border border-white/30 text-foreground font-medium hover:bg-white/10 transition-colors"
            >
              Propose a Collaboration
            </Link>
          </div>
        </div>
      </section>

      <StickyNav items={stickyNavItems} />

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-8">
            Mission
          </GradientText>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Traditional financial systems are beautifully complex, but their migration on distributed 
              blockchain computers brings with it many difficult problems to solve. Our mission is to 
              harness the power of modern quantitative methods, artificial intelligence, and cutting-edge 
              literature, not only to facilitate the migration of these systems seamlessly onchain, but 
              also to improve their performances relative to traditional systems.
            </p>
            <p>
              Our research wing monitors and studies top-performing, technical DeFi protocols which are 
              establishing new forms of exchanges in fixed-rate, lending/borrowing, RWA, (re)staking, 
              and derivatives markets.
            </p>
          </div>
        </div>
      </section>

      {/* Researchers Section */}
      <section id="researchers" className="py-20 px-4 sm:px-6 lg:px-8 bg-card scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Researchers
          </GradientText>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {researchers.map((researcher) => (
              <ResearcherCard
                key={researcher.name}
                name={researcher.name}
                initials={researcher.initials}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="focus-areas" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-12">
            Focus Areas
          </GradientText>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {focusAreas.map((area) => (
              <FocusCard
                key={area.title}
                title={area.title}
                description={area.description}
              />
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible defaultValue="">
              <AccordionItem value="protocols" className="border-border">
                <AccordionTrigger className="text-foreground hover:text-violet-400">
                  Protocols we watch (View full list)
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {protocolsWeWatch.map((protocol) => (
                      <span
                        key={protocol}
                        className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground"
                      >
                        {protocol}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-card scroll-mt-32">
        <div className="max-w-3xl mx-auto">
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-8">
            Join QDF
          </GradientText>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">{"Who we're looking for"}</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">•</span>
                Quant/math-fin/stat heavy profiles OR research-inclined business students to support our core mathematicians
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">•</span>
                Market microstructure / mechanism design curiosity
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">•</span>
                Strong Python / data analysis
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">How to join</h3>
          <div className="text-center">
            <Link
              href="#"
              className="inline-flex px-8 py-4 rounded-full bg-violet-500 text-white font-medium hover:bg-violet-600 transition-colors"
            >
              Apply
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Existing TBC flow / rolling applications. Contact via External Affairs if partner.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 TBC Research & Development. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
