import { ProjectCard } from "@/components/ProjectCard"
import { SectionHeading } from "@/components/SectionHeading"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <SectionHeading title="Featured Projects">
        A selection of my recent work and research projects
      </SectionHeading>
      
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
} 