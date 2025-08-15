import { projects } from '@/data/projects';
import ProjectPageClient from './ProjectPageClient';

// Generate static params for all project IDs
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: PageProps) {
  return <ProjectPageClient id={params.id} />;
}
