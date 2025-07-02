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
      readingTime: post.readingTime
    }))

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Icha Icha Insights</h1>
          <p className="text-lg text-stone-600 mb-6">
            Inspired by the great Jiraya(Naruto) and his Icha Icha series, I've decided to start a blog to share my thoughts on the latest thoughts
            on life, work, and anything else I find interesting at the moment. This is supposed to be a light hearted blog that's supposed to be a fun read.
          </p>
        </div>
        
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