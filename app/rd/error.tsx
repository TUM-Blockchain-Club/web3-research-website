'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { GradientText } from '@/components/gradient-text'
import { AlertCircle, Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Page error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-red-400" />
          </div>
        </div>

        <GradientText as="h1" className="text-4xl md:text-5xl font-bold mb-6">
          Something went wrong
        </GradientText>

        <p className="text-lg text-muted-foreground mb-8">
          We encountered an unexpected error. Please try refreshing the page or return to the home page.
        </p>

        {error.message && (
          <div className="mb-8 p-4 rounded-lg bg-red-500/5 border border-red-500/20">
            <p className="text-sm text-red-400 font-mono">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-violet-500/30"
          >
            <RefreshCw className="w-4 h-4" />
            Try again
          </button>
          <Link
            href="/rd"
            className="px-6 py-3 rounded-full border border-white/30 text-foreground font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
