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
    title: "Current Submission to Under Review IEEE BHI 2025",
    authors: ["In Review :("], // Add other authors as needed
    venue: "IEEE BHI 2025",
    year: 2025,
    description: "In Review :(",
    status: 'in-review',
    preprint: "https://openreview.net/your-paper-link" // Replace with actual link
  },
  {
    title: "Honors Thesis: Multimodal Representation Learning with Electronic Health Record Data",
    authors: ["Matthew Wang"],
    venue: "Texas A&M University Honors Program, Oaktrust Digital Repository",
    year: 2025,
    description: "This work explores a modified contrastive learning approach based on ImageBind to align ECG, medical time-series, and clinical notes during a hospital stay without requiring large labeled datasets. By using clinical notes as the central modality and evaluating on MIMIC-IV and PTB-XL, the study highlights both the potential and limitations of multimodal learning in clinical prediction tasks like in-hospital and post-discharge mortality.",
    status: 'embargoed'
  }
]; 