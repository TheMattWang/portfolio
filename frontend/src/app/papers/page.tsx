import { SectionHeading } from "@/components/SectionHeading"

export default function PapersPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <SectionHeading title="Research Papers">
        Published and pre-print research papers
      </SectionHeading>
      
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Paper cards will go here */}
        <div className="rounded-lg border border-stone-200 p-6">
          <h3 className="text-xl font-medium text-stone-900 mb-2">Coming Soon</h3>
          <p className="text-stone-600">Research papers will be added here.</p>
        </div>
      </div>
    </main>
  )
} 