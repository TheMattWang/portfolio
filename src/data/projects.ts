export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart task management application that uses machine learning to prioritize and categorize tasks. Built with Next.js and OpenAI's GPT-3 API.",
    tags: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS", "Prisma"],
    github: "https://github.com/username/ai-task-manager",
    demo: "https://ai-task-manager.demo",
    featured: true
  },
  {
    title: "Real-time Collaboration Platform",
    description: "A collaborative workspace platform with real-time document editing and video conferencing capabilities.",
    tags: ["React", "WebRTC", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com/username/collab-platform",
    featured: true
  },
  {
    title: "E-commerce Analytics Dashboard",
    description: "A comprehensive analytics dashboard for e-commerce businesses with data visualization and reporting features.",
    tags: ["Vue.js", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    demo: "https://ecommerce-analytics.demo",
    featured: false
  }
]; 