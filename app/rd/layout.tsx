import React from "react"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function RDLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <ScrollToTop />
    </>
  )
}
