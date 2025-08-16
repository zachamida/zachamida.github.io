export interface Talk {
  title: string;
  event: string;
  location: string;
  date: string;
  year: number;
  type: 'conference' | 'workshop' | 'seminar' | 'keynote' | 'poster';
  description?: string;
  slidesUrl?: string;
  videoUrl?: string;
  abstract?: string;
  coAuthors?: string[];
}
