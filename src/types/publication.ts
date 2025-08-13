export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  pdfUrl?: string;
  videoUrl?: string;
  type: 'journal' | 'conference' | 'thesis';
}
