import { PostCard } from "@/components/PostCard"
import { SectionHeading } from "@/components/SectionHeading"

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <SectionHeading title="Blog">
        Thoughts on technology, design, and development
      </SectionHeading>
      
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Blog posts will be dynamically loaded here */}
        <div className="rounded-lg border border-stone-200 p-6">
          <h3 className="text-xl font-medium text-stone-900 mb-2">Coming Soon</h3>
          <p className="text-stone-600">Blog posts will be added here.</p>
        </div>
      </div>
    </main>
  )
} 