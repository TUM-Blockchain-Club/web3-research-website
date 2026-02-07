interface FocusCardProps {
  title: string
  description?: string
}

export function FocusCard({ title, description }: FocusCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 hover:border-violet-500/50 transition-colors">
      <h4 className="font-medium text-foreground mb-2">{title}</h4>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
