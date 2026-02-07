import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { GradientText } from "@/components/gradient-text"
import { StickyNav } from "@/components/sticky-nav"
import { CollaborationCard } from "@/components/collaboration-card"

const stickyNavItems = [
  { label: "Mission", href: "#mission" },
  { label: "Collaborations", href: "#collaborations" },
  { label: "Join GT", href: "#join" },
]

const ifLabMembers = [
  { name: "Alexander Semenov", initials: "AS" },
  { name: "Ivan von Greiff", initials: "IG" },
]

export default function GTPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <GradientText as="h1" className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Governance Theory (GT)
          </GradientText>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            {"We're launching GT as a new research wing focused on distributed decision-making architectures starting Summer Semester 2026."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#join"
              className="px-6 py-3 rounded-full bg-violet-500 text-white font-medium hover:bg-violet-600 transition-colors"
            >
              Join GT
            </Link>
            <Link
              href="#"
              className="px-6 py-3 rounded-full border border-white/30 text-foreground font-medium hover:bg-white/10 transition-colors"
            >
              Propose Collaboration
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
          <p className="text-muted-foreground leading-relaxed text-center">
            Mathematically-guaranteed distributed & trustless decision-making only first became possible 
            in the advent of blockchain distributed computing. Figuring out how to make these systems 
            scalable, secure, accurate and cost-efficient is no trivial task. Our mission is to provide 
            mathematical models, algorithms, and deployable architectures for delegative voting systems 
            built on artificial intelligence and smart contracts.
          </p>
        </div>
      </section>

      {/* Collaborations Section */}
      <section id="collaborations" className="py-20 px-4 sm:px-6 lg:px-8 bg-card scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-12">
            Open Collaboration
          </GradientText>
          <CollaborationCard
            title="TBC × IF Lab University of Oregon"
            subtitle="Constrained Optimization of AI Delegative Systems"
            description="Our TBC x IF Lab collaboration is focused on solving a major issue with modern ERC-20 standards. In many token-based governance implementations, delegates cannot easily split voting power across competing choices within a single governance decision. As a result, accurately representing a large, diverse electorate can require creating many bespoke delegates—potentially one per voter preference profile. As governance shifts toward AI-controlled smart-contract delegation, that design can become expensive: on-chain actions (delegation updates, vote casting, accounting) risk scaling with the number of tokenholders. We are addressing this by designing an intelligent voting/assignment algorithm that lets a smaller set of delegates approximate the electorate's preferences under formal constraints, while minimizing gas costs."
            members={ifLabMembers}
          />
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-32">
        <div className="max-w-3xl mx-auto">
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-8">
            Join GT
          </GradientText>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Desired Skills</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">•</span>
                Optimization research and mathematics background OR research-oriented business / political science students
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">•</span>
                Comfort with academic literature or systems prototyping
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">•</span>
                Writing discipline (preprints, submissions)
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="#"
              className="inline-flex px-8 py-4 rounded-full bg-violet-500 text-white font-medium hover:bg-violet-600 transition-colors"
            >
              Apply to Join GT
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Partner note: routed via Industry/External Affairs
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
