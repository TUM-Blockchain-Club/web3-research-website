import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { GradientText } from "@/components/gradient-text"
import { StatCard } from "@/components/stat-card"
import { FeatureCard } from "@/components/feature-card"
import { WingCard } from "@/components/wing-card"
import { ArrowRight, BookOpen, Code, Lightbulb } from "lucide-react"

const featureCards = [
  {
    icon: <BookOpen className="w-10 h-10" />,
    title: "Publish in academic conferences/journals",
    description: "Peer-reviewed, publication-quality work.",
    featured: false,
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: "Develop new protocols to deploy on-chain",
    description: "Advancing the state of decentralized technology.",
    featured: true,
  },
  {
    icon: <Lightbulb className="w-10 h-10" />,
    title: "Enhance existing protocols",
    description: "e.g. with results in corporate whitepapers.",
    featured: false,
  },
]

const wingData = [
  {
    code: "C&DS",
    title: "Cryptography & Distributed Systems",
    description:
      "Our work in the Cryptography & Distributed Systems Research Wing maps directly to real-world constraints in security and performance. Our projects are selected for practical impact in today's systems, with publication-quality rigor—not only improving existing systems, but offering pen-and-paper mathematical bounds, proofs, and security guarantees for our contributions.",
    collaborations: "Collaboration teams: TNAS, zkSecurity",
  },
  {
    code: "QDF",
    title: "Quantitative Decentralized Finance",
    description:
      "Our work in the Quantitative Decentralized Finance Research Wing applies quantitative finance and mechanism design to strengthen blue-chip onchain markets. We focus on improving protocol efficiency and robustness via mathematical analysis of liquidity dynamics, architectural contaminations, and risk management techniques under latency and capital constraints.",
    collaborations: "Collaboration teams: To be announced",
  },
  {
    code: "GT",
    title: "Governance Theory",
    description:
      "Our work in the Governance Theory Research Wing is forward-looking and aims to offer advanced models and solutions to distributed decision-making and representative ratification systems. Figuring out how to accurately, efficiently, and securely vote on behalf of diverse opinions with AI smart-contract based delegation protocols is our priority.",
    collaborations: "Collaboration teams: IF Lab University of Oregon",
  },
]

export default function RDHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto text-center">
          <GradientText as="h1" id="hero-heading" className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
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
              className="px-6 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition-opacity duration-300 active:bg-violet-800 flex items-center gap-2 shadow-lg hover:shadow-xl"
              aria-describedby="qdf-description"
            >
              Explore QDF <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/rd/cds"
              className="px-6 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition-opacity duration-300 active:bg-violet-800 flex items-center gap-2 shadow-lg hover:shadow-xl"
              aria-describedby="cds-description"
            >
              Explore C&DS <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/rd/gt"
              className="px-6 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition-opacity duration-300 active:bg-violet-800 flex items-center gap-2 shadow-lg hover:shadow-xl"
              aria-describedby="gt-description"
            >
              Explore GT <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
          <Link
            href="#join"
            className="inline-flex px-6 py-3 rounded-full border border-white/30 text-foreground font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 active:bg-violet-800"
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
            {featureCards.map((card, i) => (
              <FeatureCard key={i} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Organization Structure Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card" aria-labelledby="organization-heading">
        <div className="max-w-7xl mx-auto">
          <GradientText as="h2" id="organization-heading" className="text-3xl md:text-4xl font-bold text-center mb-4">
            Organization Structure
          </GradientText>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our R&D Department is organized into three specialized research wings
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {wingData.map((wing, i) => (
              <WingCard
                key={i}
                wingCode={wing.code}
                title={wing.title}
                description={wing.description}
                collaborations={wing.collaborations}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="join-heading">
        <div className="max-w-3xl mx-auto text-center">
          <GradientText as="h2" id="join-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Research Team
          </GradientText>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We&apos;re looking for passionate researchers in cryptography, distributed systems,
            quantitative finance, and governance theory
          </p>
          <ul className="text-left text-muted-foreground mb-8 space-y-2 max-w-md mx-auto">
            <li>• Collaborative research environment</li>
            <li>• Access to cutting-edge projects</li>
            <li>• Industry partnerships and mentorship</li>
            <li>• Writing and proof culture</li>
          </ul>
          <Link
            href="#"
            className="inline-flex px-8 py-4 rounded-full bg-violet-500 text-white font-medium hover:bg-violet-600 active:bg-violet-700 transition-colors duration-300 shadow-lg hover:shadow-xl hover:shadow-violet-500/20"
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
