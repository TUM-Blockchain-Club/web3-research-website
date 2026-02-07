interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center rounded-2xl border border-border/50 bg-card/50 p-6 hover:border-violet-500/20 transition-colors duration-300">
      <div className="text-4xl md:text-6xl font-bold text-foreground mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">{label}</div>
    </div>
  )
}
