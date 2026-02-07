interface WingCardProps {
  wingCode: string
  title: string
  description: string
  collaborations: string
}

export function WingCard({ wingCode, title, description, collaborations }: WingCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 hover:border-violet-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
          <span className="text-violet-400 font-bold text-sm">{wingCode}</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <p className="text-xs text-violet-400/80">{collaborations}</p>
    </div>
  )
}
