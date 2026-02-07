import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  featured?: boolean
}

export function FeatureCard({ icon, title, description, featured = false }: FeatureCardProps) {
  return (
    <article
      className={`rounded-2xl transition-all duration-300 ${
        featured
          ? "p-[2px] bg-gradient-to-br from-white via-violet-400 to-violet-600 hover:shadow-lg hover:shadow-violet-500/30"
          : "border border-border bg-card p-8 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/5"
      }`}
    >
      <div className={featured ? "rounded-2xl bg-card p-8 h-full" : ""}>
        <div className="w-10 h-10 text-violet-400 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </article>
  )
}
