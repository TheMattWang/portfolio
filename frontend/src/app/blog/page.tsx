import { allBlogs } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Link from 'next/link'
import { Clock } from 'lucide-react'
import { SubscribeForm } from '@/components/SubscribeForm'

export default function BlogPage() {
  const posts = allBlogs
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="mb-12">
          <SubscribeForm />
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-stone-200 pb-8">
              <Link 
                href={post.url}
                className="group block"
              >
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-semibold group-hover:text-maroon-600 transition-colors">
                    {post.title}
                  </h2>
                  <span className="flex items-center gap-1 text-sm text-stone-500 mt-1">
                    <Clock className="h-4 w-4" />
                    {post.readingTime} min read
                  </span>
                </div>
                <time className="text-stone-500 text-sm mb-3 block">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <p className="text-stone-600">{post.description}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 