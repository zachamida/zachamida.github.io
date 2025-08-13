import { ProjectCard } from './ProjectCard';

export function ProjectsGrid({
  projects,
  filter,
}: {
  projects: Array<{
    id: string;
    title: string;
    description: string;
    type: 'research' | 'industry';
    technologies: string[];
    date: string;
    highlights?: string[];
    githubUrl?: string;
    liveUrl?: string;
    url?: string;
    image?: string;
    hasDetailPage?: boolean;
    isOpenSource?: boolean;
  }>;
  filter?: 'research' | 'industry' | 'open-source';
}) {
  const filteredProjects = filter
    ? filter === 'open-source'
      ? projects.filter((project) => project.isOpenSource)
      : projects.filter((project) => project.type === filter)
    : projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
