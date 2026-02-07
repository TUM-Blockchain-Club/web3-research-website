import { GradientText } from "./gradient-text"

interface Member {
  name: string
  initials: string
}

interface CollaborationCardProps {
  title: string
  subtitle: string
  description: string
  members: Member[]
}

export function CollaborationCard({
  title,
  subtitle,
  description,
  members,
}: CollaborationCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <GradientText as="h3" className="text-xl md:text-2xl font-bold mb-2">
        {title}
      </GradientText>
      <p className="text-violet-400 text-sm mb-4">{subtitle}</p>
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      <div className="border-t border-border pt-6">
        <p className="text-sm text-muted-foreground mb-4">Team Members</p>
        <div className="flex flex-wrap gap-3">
          {members.map((member) => (
            <div key={member.name} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-xs font-medium text-white">
                {member.initials}
              </div>
              <span className="text-sm text-foreground">{member.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
