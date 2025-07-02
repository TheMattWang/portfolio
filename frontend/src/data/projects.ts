import { calculateReadTime } from "@/lib/utils";
import { allBlogs } from 'contentlayer/generated'

export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
  blogSlug?: string; // The slug of the associated blog post
}

// Helper function to get the blog URL if it exists
const getBlogUrl = (slug: string | undefined) => {
  if (!slug) return undefined;
  const blog = allBlogs.find(post => post.slug === slug);
  return blog ? `/blog/${blog.slug}` : undefined;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/TheMattWang/portfolio",
    blogSlug: "whats-the-vibe",
  },
  {
    title: "Research Project",
    description: "Upcoming research project in machine learning and AI.",
    tags: ["Python", "TensorFlow", "Machine Learning"],
    blogSlug: "research-project",
  }
];

// Export projects with resolved blog URLs
export const projectsWithBlogUrls = projects.map(project => ({
  ...project,
  blogPost: getBlogUrl(project.blogSlug)
})); 