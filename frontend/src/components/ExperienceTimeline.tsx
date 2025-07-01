import { format, parseISO } from "date-fns";
import type { Experience } from "@/data/experience";
import { experiences } from "@/data/experience"
import Link from "next/link"

export function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 h-full w-0.5 bg-stone-200 transform -translate-x-1/2" />

      {/* Timeline items */}
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-white border-2 border-maroon-500 rounded-full" />
            </div>

            {/* Content */}
            <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-start w-1/2 ${index % 2 === 0 ? 'ml-auto pl-8' : 'pr-8'}`}>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                {/* Date */}
                <div className="text-sm text-stone-500 mb-1">
                  {experience.date}
                </div>

                {/* Organization */}
                <h3 className="text-lg font-semibold text-stone-900">
                  {experience.organization}
                </h3>

                {/* Title */}
                <div className="text-stone-600">
                  {experience.title}
                </div>

                {/* Description */}
                {experience.description && (
                  <div className="text-sm text-stone-500 mt-1">
                    {experience.description}
                  </div>
                )}

                {/* Additional Details */}
                {experience.details && experience.details.map((detail, i) => (
                  <div key={i} className="text-sm text-stone-500 mt-1">
                    {detail}
                  </div>
                ))}

                {/* Link */}
                {experience.link && (
                  <Link 
                    href={experience.link}
                    className="text-sm text-maroon-500 hover:text-maroon-600 mt-2 inline-block"
                  >
                    Learn more →
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 