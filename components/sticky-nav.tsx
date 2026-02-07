"use client"

import { cn } from "@/lib/utils"

interface StickyNavProps {
  items: { label: string; href: string }[]
  activeSection?: string
}

export function StickyNav({ items, activeSection }: StickyNavProps) {
  return (
    <nav className="sticky top-16 z-40 bg-background/80 backdrop-blur-md border-b border-border py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium whitespace-nowrap transition-all duration-200",
                "hover:text-foreground",
                "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 rounded-sm px-2 py-1",
                activeSection === item.href
                  ? "text-violet-400 border-b-2 border-violet-400"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
