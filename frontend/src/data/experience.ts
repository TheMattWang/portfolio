export interface Experience {
  type: 'education' | 'work'
  organization: string
  title: string
  date: string
  description?: string
  details?: string[]
  link?: string
}

export const experiences: Experience[] = [
  
  {
    type: 'work',
    organization: 'Equilibrium Energy',
    title: 'Platform Engineering Intern',
    date: 'Summer 2025'
  },
  {
    type: 'work',
    organization: 'Mercor Intelligence',
    title: 'Software Engineer (AI/ML)',
    date: 'Spring 2024-Present'
  },
  {
    type: 'work',
    organization: 'Capital One',
    title: 'Machine Learning Engineer Intern',
    date: 'Summer 2024',
  },
  {
    type: 'work',
    organization: 'Walmart Global Tech',
    title: 'Software Engineering Intern',
    date: 'Summer 2023',
  },
  {
    type: 'work',
    organization: 'Texas A&M University',
    title: 'Undergraduate Teaching Assistant',
    date: 'Fall 2023-Winter 2025',
  },
  {
    type: 'education',
    organization: 'Texas A&M University',
    title: 'B.S. Computer Science & Applied Mathematics',
    date: 'August 2021 - December 2025',
    details: ['Advisor: Bobak Mortazavi'],
  },
] 