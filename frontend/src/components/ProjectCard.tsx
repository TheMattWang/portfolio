'use client'

import { Project } from "@/data/projects"
import { Github, Globe, Clock } from "lucide-react"
import Link from "next/link"
import { allBlogs } from 'contentlayer/generated'

type ProjectCardProps = Project & { blogPost?: string }

export function ProjectCard({ title, description, tags, github, demo, blogSlug, blogPost }: ProjectCardProps) {
  const handleExternalLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  // Get the timeToComplete from the associated blog post
  const getBlogTimeToComplete = () => {
    if (!blogSlug) return null
    const post = allBlogs.find(post => post.slug === blogSlug)
    return post?.timeToComplete
  }

  const timeToComplete = getBlogTimeToComplete()

  return (
    <div className={`rounded-lg border border-stone-200 p-6 ${blogPost ? 'hover:border-primary transition-colors group' : ''}`}>
      {blogPost ? (
        <Link href={blogPost} className="block cursor-pointer">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-medium text-stone-900 group-hover:text-primary transition-colors">{title}</h3>
              {timeToComplete && (
                <span className="flex items-center gap-1 text-sm text-stone-500">
                  <Clock className="h-4 w-4" />
                  {timeToComplete}
                </span>
              )}
            </div>
            <p className="text-stone-600 mb-4">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 text-sm text-primary bg-primary/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ) : (
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-medium text-stone-900">{title}</h3>
            {timeToComplete && (
              <span className="flex items-center gap-1 text-sm text-stone-500">
                <Clock className="h-4 w-4" />
                {timeToComplete}
              </span>
            )}
          </div>
          <p className="text-stone-600 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 text-sm text-primary bg-primary/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {(github || demo) && (
        <div className="flex gap-4" onClick={handleExternalLinkClick}>
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </Link>
          )}
          {demo && (
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span>Demo</span>
            </Link>
          )}
        </div>
      )}
    </div>
  )
} 