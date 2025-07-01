export default function BlogLoading() {
  return (
    <article className="container mx-auto px-4 py-12 animate-pulse">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          {/* Title skeleton */}
          <div className="h-10 bg-stone-200 rounded-lg w-3/4 mb-4" />
          {/* Date skeleton */}
          <div className="h-4 bg-stone-200 rounded w-32" />
        </header>

        {/* Content skeleton */}
        <div className="space-y-4">
          <div className="h-4 bg-stone-200 rounded w-full" />
          <div className="h-4 bg-stone-200 rounded w-5/6" />
          <div className="h-4 bg-stone-200 rounded w-4/6" />
          <div className="h-4 bg-stone-200 rounded w-full" />
          <div className="h-4 bg-stone-200 rounded w-3/4" />
          <div className="h-4 bg-stone-200 rounded w-full" />
          <div className="h-4 bg-stone-200 rounded w-5/6" />
          <div className="h-4 bg-stone-200 rounded w-4/6" />
        </div>
      </div>
    </article>
  )
} 