export type ProjectType = 'research' | 'industry';

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  url?: string;
  date: string;
  highlights?: string[];
  hasDetailPage?: boolean;
  isOpenSource?: boolean;
}
