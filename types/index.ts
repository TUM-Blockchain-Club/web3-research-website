import { ReactNode } from 'react'

// Component Props Types
export interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  featured?: boolean
}

export interface StatCardProps {
  value: string
  label: string
}

export interface WingCardProps {
  wingCode: string
  title: string
  description: string
  collaborations: string
}

export interface ResearcherCardProps {
  name: string
  initials: string
}

export interface FocusCardProps {
  title: string
  description: string
}

export interface CollaborationCardProps {
  title: string
  description: string
  link: string
}

export interface NavItem {
  label: string
  href: string
}

export interface StickyNavProps {
  items: NavItem[]
  activeSection?: string
}

// Data Types
export interface ResearchWing {
  code: string
  title: string
  description: string
  collaborations: string
}

export interface Researcher {
  name: string
  initials: string
}

export interface FocusArea {
  title: string
  description: string
}
