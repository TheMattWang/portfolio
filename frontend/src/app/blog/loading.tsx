export default function BlogListLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Title skeleton */}
        <div className="h-10 bg-stone-200 rounded-lg w-32 mb-8 animate-pulse" />
        
        {/* Subscribe form skeleton */}
        <div className="mb-12 p-6 border border-stone-200 rounded-lg animate-pulse">
          <div className="h-6 bg-stone-200 rounded w-3/4 mb-4" />
          <div className="h-4 bg-stone-200 rounded w-full mb-6" />
          <div className="flex gap-4">
            <div className="h-10 bg-stone-200 rounded flex-grow" />
            <div className="h-10 bg-stone-200 rounded w-24" />
          </div>
        </div>

        {/* Blog post skeletons */}
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <article key={i} className="border-b border-stone-200 pb-8 animate-pulse">
              <div className="flex justify-between items-start mb-2">
                <div className="h-6 bg-stone-200 rounded w-2/3" />
                <div className="h-4 bg-stone-200 rounded w-20" />
              </div>
              <div className="h-4 bg-stone-200 rounded w-32 mb-3" />
              <div className="h-4 bg-stone-200 rounded w-full" />
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 