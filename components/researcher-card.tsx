interface ResearcherCardProps {
  name: string
  initials: string
}

export function ResearcherCard({ name, initials }: ResearcherCardProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 via-teal-400 to-purple-500 flex items-center justify-center text-xl font-bold text-white">
        {initials}
      </div>
      <span className="text-sm text-foreground text-center">{name}</span>
    </div>
  )
}
