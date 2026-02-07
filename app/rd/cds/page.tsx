import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { GradientText } from "@/components/gradient-text"
import { StickyNav } from "@/components/sticky-nav"
import { CollaborationCard } from "@/components/collaboration-card"
import { StatCard } from "@/components/stat-card"

const stickyNavItems = [
  { label: "Achievements", href: "#achievements" },
  { label: "Collaborations", href: "#collaborations" },
  { label: "Join C&DS", href: "#join" },
]

const tnasMembers = [
  { name: "Andrea Maggi", initials: "AM" },
  { name: "Johannes Machata", initials: "JM" },
  { name: "Nadine Durnwalder", initials: "ND" },
  { name: "Ivan von Greiff", initials: "IG" },
]

const zkSecurityMembers = [
  { name: "Tobias Rothmann", initials: "TR" },
  { name: "David Lauer", initials: "DL" },
  { name: "Antonio D'Antona", initials: "AD" },
  { name: "Ivan von Greiff", initials: "IG" },
]

export default function CDSPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <GradientText as="h1" className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Cryptography & Distributed Systems (C&DS)
          </GradientText>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Student-led research collaborations in cryptography and distributed systems—focused on 
            publishable results and mathematical guarantees.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#join"
              className="px-6 py-3 rounded-full bg-violet-500 text-white font-medium hover:bg-violet-600 transition-colors"
            >
              Join C&DS
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

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-12">
            Current Achievements
          </GradientText>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Research wing established and 8 researchers initiated (WS 25/26). 2 collaborations launched: TUM Institute of Network Architectures and Services + zkSecurity.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCard value="8" label="Researchers initiated (WS 25/26)" />
            <StatCard value="2" label="Collaborations: TNAS + zkSecurity" />
            <StatCard value="42x" label="Speed improvement" />
            <StatCard value="WS 25/26" label="Wing established" />
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section id="collaborations" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-12">
            Active Collaborations
          </GradientText>
          <div className="grid lg:grid-cols-2 gap-8">
            <CollaborationCard
              title="TBC × TNAS"
              subtitle="Private Transactions / MEV Mitigation (TUM Institute of Network Architectures and Services)"
              description="Our TBC x TNAS collaboration has been focused around developing cryptographic protocols designed to keep transactions private, up and until their inclusion into the blockchain. These protocols are designed to mitigate adversarial financial/MEV attacks by both validators or external attackers. We started by analyzing the best performing protocols in academia, and found that UC Berkeley's bTPKE protocol performed the best out of all. We then worked on further enhancing this protocol and successfully achieved a 42x speed improvement end-to-end. Our current work lies in providing pen-and-paper mathematical bounds, proofs, and security guarantees for the performance of our new protocol HbTPKE, before sending our work to conferences/journals."
              members={tnasMembers}
            />
            <CollaborationCard
              title="TBC × zkSecurity"
              subtitle="zkVM for Industrial Control Systems"
              description="Our TBC x zkSecurity collaboration has been focused around developing a new kind of zero-knowledge virtual machine (zkVM), specifically designed for standardized logic that runs specifically in industrial control systems—i.e. factories with sensors that are processing and sending control signals to machines. We have discovered a way to enhance both the efficiency and security simultaneously of contemporary zkVM architectures, by removing RISC-V intermediate representations of incoming assembly instructions and customizing the machine's zero knowledge proof construction around the standardized set of industrial control logic instructions. Our current work lies in designing this new zkVM architecture, before instantiating it as an actual zkVM in the real world, and sending our work to top conferences and journals."
              members={zkSecurityMembers}
            />
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-card scroll-mt-32">
        <div className="max-w-3xl mx-auto">
          <GradientText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-8">
            Join C&DS
          </GradientText>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Desired Skills</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">•</span>
                Cryptography / security engineering / distributed systems background
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">•</span>
                Comfort with proofs or systems prototyping
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
              Apply to Join C&DS
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
