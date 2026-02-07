import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { GradientText } from "@/components/gradient-text"
import { StatCard } from "@/components/stat-card"
import { ArrowRight, BookOpen, Code, Lightbulb } from "lucide-react"

export default function RDHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto text-center">
          <GradientText as="h1" id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            TBC Research & Development
          </GradientText>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Our department collaborates with companies and institutions in the domains of finance, 
            cryptography, and distributed systems technology to publish research, build on-chain 
            protocols, and improve existing systems.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-4 mb-6" aria-label="Research wing navigation">
            <Link
              href="/rd/qdf"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-500 text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg hover:shadow-xl"
              aria-describedby="qdf-description"
            >
              Explore QDF <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/rd/cds"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-500 text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg hover:shadow-xl"
              aria-describedby="cds-description"
            >
              Explore C&DS <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/rd/gt"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-500 text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg hover:shadow-xl"
              aria-describedby="gt-description"
            >
              Explore GT <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
          <Link
            href="#join"
            className="inline-flex px-6 py-3 rounded-full border border-white/30 text-foreground font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Join the Research & Development team"
          >
            Join R&D
          </Link>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border" aria-labelledby="stats-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="stats-heading" className="sr-only">Research Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCard value="3" label="Research wings: C&DS + QDF + GT" />
            <StatCard value="8" label="C&DS researchers initiated (WS 25/26)" />
            <StatCard value="2" label="Active C&DS collaborations: TNAS + zkSecurity" />
            <StatCard value="—" label="Breakthroughs in all active collaborations (see explore pages)" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="what-we-do-heading">
        <div className="max-w-7xl mx-auto">
          <GradientText as="h2" id="what-we-do-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Do
          </GradientText>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="rounded-2xl border border-border bg-card p-8 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/10">
              <BookOpen className="w-10 h-10 text-violet-400 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Publish in academic conferences/journals</h3>
              <p className="text-muted-foreground">
                Peer-reviewed, publication-quality work.
              </p>
            </article>
            <article className="rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400 via-teal-400 to-purple-500 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20">
              <div className="rounded-2xl border-0 bg-card p-8 h-full">
                <Code className="w-10 h-10 text-violet-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Develop new protocols to deploy on-chain</h3>
                <p className="text-muted-foreground">
                  Advancing the state of decentralized technology.
                </p>
              </div>
            </article>
            <article className="rounded-2xl border border-border bg-card p-8 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/10">
              <Lightbulb className="w-10 h-10 text-violet-400 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Enhance existing protocols</h3>
              <p className="text-muted-foreground">
                e.g. with results in corporate whitepapers.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Organization Structure Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-4">
            Organization Structure
          </GradientText>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our R&D Department is organized into three specialized research wings
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* C&DS Wing */}
            <div className="rounded-2xl border border-border bg-background p-6 hover:border-violet-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <span className="text-violet-400 font-bold">C&DS</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Cryptography & Distributed Systems</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our work in the Cryptography & Distributed Systems Research Wing maps directly to real-world constraints in security and performance. Our projects are selected for practical impact in today&apos;s systems, with publication-quality rigor—not only improving existing systems, but offering pen-and-paper mathematical bounds, proofs, and security guarantees for our contributions.
              </p>
              <p className="text-xs text-violet-400">
                Collaboration teams: TNAS, zkSecurity
              </p>
            </div>

            {/* QDF Wing */}
            <div className="rounded-2xl border border-border bg-background p-6 hover:border-violet-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <span className="text-violet-400 font-bold">QDF</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Quantitative Decentralized Finance</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our work in the Quantitative Decentralized Finance Research Wing applies quantitative finance and mechanism design to strengthen blue-chip onchain markets. We focus on improving protocol efficiency and robustness via mathematical analysis of liquidity dynamics, architectural contaminations, and risk management techniques under latency and capital constraints.
              </p>
              <p className="text-xs text-violet-400">
                Collaboration teams: To be announced
              </p>
            </div>

            {/* GT Wing */}
            <div className="rounded-2xl border border-border bg-background p-6 hover:border-violet-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <span className="text-violet-400 font-bold">GT</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Governance Theory</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our work in the Governance Theory Research Wing is forward-looking and aims to offer advanced models and solutions to distributed decision-making and representative ratification systems. Figuring out how to accurately, efficiently, and securely vote on behalf of diverse opinions with AI smart-contract based delegation protocols is our priority.
              </p>
              <p className="text-xs text-violet-400">
                Collaboration teams: IF Lab University of Oregon
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            External partner relationships are coordinated via our TBC External Affairs department.
          </p>
        </div>
      </section>

      {/* Join Section (Section 6: Join R&D) */}
      <section id="join" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
            Join R&D
          </GradientText>
          <p className="text-xl text-foreground mb-4">
            Work on cutting-edge problems with serious output expectations.
          </p>
          <ul className="text-muted-foreground mb-8 list-disc list-inside space-y-1 text-left max-w-sm mx-auto">
            <li>Collaborative research teams</li>
            <li>Mentorship</li>
            <li>Writing + proof culture</li>
          </ul>
          <Link
            href="#"
            className="inline-flex px-8 py-4 rounded-full bg-violet-500 text-white font-medium hover:bg-violet-600 active:bg-violet-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-violet-500/20"
          >
            Apply / Join R&D
          </Link>
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
