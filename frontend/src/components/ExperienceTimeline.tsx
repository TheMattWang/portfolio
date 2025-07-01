import { format, parseISO } from "date-fns";
import type { Experience } from "@/data/experience";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="relative">
        {/* Vertical line for md and above */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              {/* Mobile layout (stacked) */}
              <div className="md:hidden space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 h-3 w-3 rounded-full bg-coral-500" />
                  <h3 className="text-lg font-medium text-foreground">
                    {experience.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">
                    {experience.company} • {experience.location}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {format(parseISO(experience.startDate), "MMM yyyy")} -{" "}
                    {experience.endDate === "Present"
                      ? "Present"
                      : format(parseISO(experience.endDate), "MMM yyyy")}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {experience.type}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-sm text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-coral-500/10 px-3 py-1 text-xs font-medium text-coral-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop layout (two columns) */}
              <div className="hidden md:grid md:grid-cols-2 md:gap-8">
                {/* Left column (even indexes) */}
                <div
                  className={`text-right ${
                    index % 2 === 0 ? "md:block" : "md:hidden"
                  }`}
                >
                  <h3 className="text-lg font-medium text-foreground">
                    {experience.title}
                  </h3>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">
                    {experience.company} • {experience.location}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {format(parseISO(experience.startDate), "MMM yyyy")} -{" "}
                    {experience.endDate === "Present"
                      ? "Present"
                      : format(parseISO(experience.endDate), "MMM yyyy")}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {experience.type}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-sm text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4 justify-end">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-coral-500/10 px-3 py-1 text-xs font-medium text-coral-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex md:items-center md:justify-center">
                  <div className="h-3 w-3 rounded-full bg-coral-500" />
                </div>

                {/* Right column (odd indexes) */}
                <div
                  className={`${index % 2 === 1 ? "md:block" : "md:hidden"}`}
                >
                  <h3 className="text-lg font-medium text-foreground">
                    {experience.title}
                  </h3>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">
                    {experience.company} • {experience.location}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {format(parseISO(experience.startDate), "MMM yyyy")} -{" "}
                    {experience.endDate === "Present"
                      ? "Present"
                      : format(parseISO(experience.endDate), "MMM yyyy")}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {experience.type}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-sm text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-coral-500/10 px-3 py-1 text-xs font-medium text-coral-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 