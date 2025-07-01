export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Texas A&M University",
    date: "2023 - Present",
    description: "Working on cutting-edge research projects in computer science and software engineering.",
    achievements: [
      "Developed and maintained research software infrastructure",
      "Published papers in top-tier conferences",
      "Collaborated with international research teams"
    ]
  },
  {
    title: "Research Assistant",
    company: "Texas A&M University",
    date: "2022 - 2023",
    description: "Conducted research in machine learning and artificial intelligence.",
    achievements: [
      "Implemented novel machine learning algorithms",
      "Presented research findings at conferences",
      "Mentored undergraduate students"
    ]
  }
]; 