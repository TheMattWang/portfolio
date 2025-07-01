export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/TheMattWang/portfolio",
  },
  {
    title: "Research Project",
    description: "Upcoming research project in machine learning and AI.",
    tags: ["Python", "TensorFlow", "Machine Learning"],
  }
]; 