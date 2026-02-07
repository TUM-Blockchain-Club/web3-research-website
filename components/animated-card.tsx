'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  index?: number
}

export function AnimatedCard({ children, className, index = 0 }: AnimatedCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div ref={ref} className={cn(className)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.25, 0.4, 0.25, 1],
        }}
        whileHover={{
          y: -5,
          transition: { duration: 0.2 },
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
