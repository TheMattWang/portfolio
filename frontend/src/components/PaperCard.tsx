'use client'

import { Paper } from "@/data/papers"
import { ExternalLink, Lock, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export function PaperCard({ title, authors, venue, year, description, status, link, doi, preprint }: Paper) {
  const statusConfig = {
    'published': { label: 'Published', color: 'bg-green-100 text-green-800' },
    'in-review': { label: 'In Review', color: 'bg-yellow-100 text-yellow-800' },
    'embargoed': { label: 'Embargoed', color: 'bg-red-100 text-red-800' }
  }

  return (
    <div className="rounded-lg border border-stone-200 p-6 flex flex-col">
      <div className="flex-grow">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-xl font-medium text-stone-900">{title}</h3>
          <span className={cn(
            "px-2 py-1 rounded-full text-xs font-medium",
            statusConfig[status].color
          )}>
            {status === 'embargoed' ? (
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3" />
                {statusConfig[status].label}
              </span>
            ) : status === 'in-review' ? (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {statusConfig[status].label}
              </span>
            ) : (
              statusConfig[status].label
            )}
          </span>
        </div>

        <p className="text-sm text-stone-600 mb-4">{authors.join(", ")}</p>
        <p className="text-stone-600 mb-2">
          <span className="font-medium">{venue}</span> · {year}
        </p>
        <p className="text-stone-600 mb-6">{description}</p>
      </div>

      {(link || doi || preprint) && (
        <div className="flex flex-wrap gap-3">
          {link && (
            <Button variant="outline" size="sm" asChild>
              <Link href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Paper
              </Link>
            </Button>
          )}
          {doi && (
            <Button variant="outline" size="sm" asChild>
              <Link href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                DOI
              </Link>
            </Button>
          )}
          {preprint && (
            <Button variant="outline" size="sm" asChild>
              <Link href={preprint} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Preprint
              </Link>
            </Button>
          )}
        </div>
      )}
    </div>
  )
} 