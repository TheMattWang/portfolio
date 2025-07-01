import { ExperienceTimeline } from "@/components/ExperienceTimeline"
import { SectionHeading } from "@/components/SectionHeading"

export default function ExperiencesPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <SectionHeading title="Professional Experience">
        My journey in software engineering and research
      </SectionHeading>
      <ExperienceTimeline />
    </main>
  )
} 