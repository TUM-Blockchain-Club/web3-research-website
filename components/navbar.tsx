"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { label: "Home", href: "/rd" },
  { label: "QDF", href: "/rd/qdf" },
  { label: "C&DS", href: "/rd/cds" },
  { label: "GT", href: "/rd/gt" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/rd" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5 text-violet-400"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            <span className="font-semibold text-lg text-foreground">TBC R&D</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative pb-1",
                  pathname === item.href
                    ? "text-violet-400"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-500 rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="#join"
              className="px-4 py-2 rounded-full bg-violet-500 text-white text-sm font-medium hover:bg-violet-600 active:bg-violet-700 transition-colors duration-300 shadow-lg hover:shadow-xl hover:shadow-violet-500/20"
            >
              Join R&D
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
          <div className="border-t border-border">
            <div className="flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 px-4 py-3 rounded-lg mx-2",
                    pathname === item.href
                      ? "text-violet-400 bg-violet-500/10 border border-violet-500/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-2 pt-2">
                <Link
                  href="#join"
                  className="block px-4 py-3 rounded-full bg-violet-500 text-white text-sm font-medium hover:bg-violet-600 active:bg-violet-700 transition-colors duration-200 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join R&D
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
