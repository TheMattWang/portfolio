import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import { Clock } from 'lucide-react'
import { BlogStatusBadge } from '@/components/BlogStatusBadge'

interface PageProps {
  params: {
    slug: string
  }
}

async function getBlogPost(slug: string) {
  const post = allBlogs.find((post) => post.slug === slug)
  if (!post || !post.published) notFound()
  return post
}

export async function generateStaticParams() {
  return allBlogs
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slug,
    }))
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getBlogPost(params.slug)

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-stone-500 mb-2">
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {post.timeToComplete && (
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.timeToComplete}
              </span>
            )}
          </div>
          <BlogStatusBadge isComplete={post.isComplete} className="mt-4" />
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
          >
            {post.body.raw}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  )
} 