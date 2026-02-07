// Theme Colors
export const COLORS = {
  primary: 'violet-600',
  primaryHover: 'violet-700',
  primaryActive: 'violet-800',
  accent: 'violet-400',
  border: 'violet-500',
} as const

// Spacing
export const SPACING = {
  navbarHeight: 'h-16', // 64px
  navbarTopOffset: 'top-16',
  stickyNavTopOffset: 'top-16',
  scrollMarginTop: 'scroll-mt-24', // 96px to account for navbar + sticky nav
} as const

// Animation
export const ANIMATION = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 600,
  },
  easing: [0.25, 0.4, 0.25, 1] as const,
} as const

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const
