interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-6xl font-bold text-foreground mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">{label}</div>
    </div>
  )
}
