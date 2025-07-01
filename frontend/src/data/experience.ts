export interface Experience {
  title: string;
  company: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    type: "full-time",
    startDate: "2023-01",
    endDate: "Present",
    description: [
      "Led development of microservices architecture using Node.js and TypeScript",
      "Improved system performance by 40% through optimization of database queries",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["TypeScript", "Node.js", "React", "PostgreSQL", "AWS"]
  },
  {
    title: "Full Stack Developer",
    company: "StartupCo",
    location: "Remote",
    type: "contract",
    startDate: "2022-06",
    endDate: "2022-12",
    description: [
      "Developed and maintained client-facing applications using React and Next.js",
      "Implemented RESTful APIs using Express.js and MongoDB",
      "Collaborated with design team to implement responsive UI components"
    ],
    technologies: ["React", "Next.js", "Express.js", "MongoDB", "TailwindCSS"]
  }
]; 