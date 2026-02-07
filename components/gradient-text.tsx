import React from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "span" | "p"
  id?: string
  /** Hero/headings: teal–purple. Logo: orange–yellow–purple for warmth. */
  variant?: "hero" | "logo"
}

export function GradientText({
  children,
  className,
  as: Component = "span",
  variant = "hero",
  id,
}: GradientTextProps) {
  const gradientClass =
    variant === "logo"
      ? "bg-gradient-to-r from-orange-400 via-yellow-400 to-purple-500 bg-clip-text text-transparent"
      : "bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-500 bg-clip-text text-transparent"

  return (
    <Component className={cn(gradientClass, className)} id={id}>
      {children}
    </Component>
  )
}
