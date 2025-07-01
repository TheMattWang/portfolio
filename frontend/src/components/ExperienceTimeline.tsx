import { format, parseISO } from "date-fns";
import type { Experience } from "@/data/experience";
import { experiences } from "@/data/experience"

export function ExperienceTimeline() {
  return (
    <div className="mt-12 space-y-8">
      {experiences.map((experience, index) => (
        <div key={index} className="relative pl-8 border-l border-stone-200">
          <div className="absolute -left-2 top-2 h-4 w-4 rounded-full border-2 border-maroon-500 bg-white" />
          <div className="mb-2">
            <h3 className="text-lg font-medium text-stone-900">{experience.title}</h3>
            <p className="text-stone-600">{experience.company}</p>
            <p className="text-sm text-stone-500">{experience.date}</p>
          </div>
          <p className="text-stone-600">{experience.description}</p>
          {experience.achievements && (
            <ul className="mt-4 list-disc list-inside space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-stone-600">{achievement}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
} 