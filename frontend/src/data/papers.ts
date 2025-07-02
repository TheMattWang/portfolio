export interface Paper {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  description: string;
  status: 'published' | 'in-review' | 'embargoed';
  link?: string;
  doi?: string;
  preprint?: string;
}

export const papers: Paper[] = [
  {
    title: "Deep Learning Approaches for Healthcare Analytics in BHI Systems",
    authors: ["Matthew Wang", "et al."], // Add other authors as needed
    venue: "IEEE BHI 2025",
    year: 2025,
    description: "Novel deep learning approaches for analyzing biomedical and health informatics data, with a focus on improving healthcare outcomes through advanced analytics.",
    status: 'in-review',
    preprint: "https://openreview.net/your-paper-link" // Replace with actual link
  },
  {
    title: "Honors Thesis: Advanced Machine Learning Applications in Healthcare",
    authors: ["Matthew Wang"],
    venue: "Texas A&M University Honors Program",
    year: 2024,
    description: "A comprehensive study on applying machine learning techniques to healthcare challenges, focusing on improving patient outcomes through data-driven approaches.",
    status: 'embargoed'
  }
]; 