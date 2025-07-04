import { ExperienceTimeline } from "@/components/ExperienceTimeline"
import { SectionHeading } from "@/components/SectionHeading"
import { FileDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ExperiencesPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-start max-w-5xl mx-auto">
        <SectionHeading title="Experience & Education">
          My journey through academia and industry
        </SectionHeading>

        <Button asChild>
          <Link 
            href="/resume.pdf" 
            className="flex items-center gap-2"
            download
          >
            <FileDown className="w-5 h-5" />
            <span>Download Resume</span>
          </Link>
        </Button>
      </div>
      
      <div className="mt-16 max-w-5xl mx-auto">
        <ExperienceTimeline />
      </div>
    </main>
  )
} 