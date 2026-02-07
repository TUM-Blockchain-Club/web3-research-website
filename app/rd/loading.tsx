export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Skeleton */}
        <div className="pt-24 pb-16 text-center animate-pulse">
          <div className="h-16 bg-gradient-to-r from-white/10 to-violet-500/10 rounded-lg mb-6 max-w-3xl mx-auto" />
          <div className="h-6 bg-muted/20 rounded-lg mb-4 max-w-2xl mx-auto" />
          <div className="h-6 bg-muted/20 rounded-lg mb-10 max-w-xl mx-auto" />

          {/* Buttons Skeleton */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <div className="h-12 w-40 bg-violet-500/20 rounded-full" />
            <div className="h-12 w-40 bg-violet-500/20 rounded-full" />
            <div className="h-12 w-40 bg-violet-500/20 rounded-full" />
          </div>
        </div>

        {/* Stats Section Skeleton */}
        <div className="py-20 border-y border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-pulse">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="h-16 bg-muted/20 rounded-lg mb-2 mx-auto max-w-[100px]" />
                <div className="h-4 bg-muted/10 rounded-lg mx-auto max-w-[150px]" />
              </div>
            ))}
          </div>
        </div>

        {/* Cards Section Skeleton */}
        <div className="py-20">
          <div className="h-12 bg-gradient-to-r from-white/10 to-violet-500/10 rounded-lg mb-12 max-w-md mx-auto animate-pulse" />
          <div className="grid md:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-8">
                <div className="w-10 h-10 bg-violet-500/20 rounded-lg mb-4" />
                <div className="h-6 bg-muted/20 rounded-lg mb-3" />
                <div className="h-4 bg-muted/10 rounded-lg mb-2" />
                <div className="h-4 bg-muted/10 rounded-lg w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
