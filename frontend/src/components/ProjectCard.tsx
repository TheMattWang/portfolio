import { Project } from "@/data/projects"
import { Github, Globe } from "lucide-react"
import Link from "next/link"

export function ProjectCard({ title, description, tags, github, demo }: Project) {
  return (
    <div className="rounded-lg border border-stone-200 p-6">
      <h3 className="text-xl font-medium text-stone-900 mb-2">{title}</h3>
      <p className="text-stone-600 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-3 py-1 text-sm text-maroon-500 bg-maroon-500/10 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
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
    </div>
  )
} 