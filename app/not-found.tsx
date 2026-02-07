import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { GradientText } from "@/components/gradient-text"
import { ArrowRight, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-6">
            404
          </GradientText>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            The research page you're looking for doesn't exist or has been moved. 
            Explore our active research wings below or return to the main page.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/rd"
              className="px-6 py-3 rounded-full bg-violet-500 text-white font-medium hover:bg-violet-600 active:bg-violet-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-violet-500/20 flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/rd/qdf"
              className="px-6 py-3 rounded-full border border-white/30 text-foreground font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Explore QDF <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>If you believe this is an error, please contact our research team.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
