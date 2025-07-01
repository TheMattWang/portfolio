import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card p-6 hover:border-coral-500/50 transition-colors">
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold leading-8 tracking-tight text-card-foreground">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View source code"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
          {project.description}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full bg-coral-500/10 px-3 py-1 text-xs font-medium text-coral-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
} 