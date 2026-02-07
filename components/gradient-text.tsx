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
      ? "bg-gradient-to-r from-white via-violet-200 to-violet-500 bg-clip-text text-transparent"
      : "bg-gradient-to-r from-white via-violet-300 to-violet-500 bg-clip-text text-transparent"

  return (
    <Component className={cn(gradientClass, className)} id={id}>
      {children}
    </Component>
  )
}
