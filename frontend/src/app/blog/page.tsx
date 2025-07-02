import { allBlogs } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { PostCard } from '@/components/PostCard'
import { SubscribeForm } from '@/components/SubscribeForm'

export default function BlogPage() {
  const posts = allBlogs
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .map(post => ({
      title: post.title,
      description: post.description,
      date: post.date,
      slug: post.slug,
      category: post.category || 'writing',
      timeToComplete: post.timeToComplete
    }))

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="mb-12">
          <SubscribeForm />
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
} 