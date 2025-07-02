import { SectionHeading } from "@/components/SectionHeading"
import { PaperCard } from "@/components/PaperCard"
import { papers } from "@/data/papers"

export default function PapersPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <SectionHeading title="Research Papers">
        Published and pre-print research papers
      </SectionHeading>
      
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {papers.map((paper, index) => (
          <PaperCard key={index} {...paper} />
        ))}
      </div>
    </main>
  )
} 