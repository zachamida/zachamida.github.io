import { projects } from '@/data/projects';
import { CracksDetectionContent } from '@/components/CracksDetectionContent';
import { OpenIPDMContent } from '@/components/OpenIPDMContent';
import { DemandForecastingContent } from '@/components/DemandForecastingContent';
import { DiagnosticAIContent } from '@/components/DiagnosticAIContent';
import { GoldenRunContent } from '@/components/GoldenRunContent';
import { MaintenancePlanningContent } from '@/components/MaintenancePlanningContent';
import { InfrastructureDeteriorationContent } from '@/components/InfrastructureDeteriorationContent';
import { OilFieldPlanningContent } from '@/components/OilFieldPlanningContent';

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen p-4 md:p-8 bg-gray-900 text-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-400 mb-4">
              Project not found
            </h1>
            <a
              href="/"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Go Back
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <nav className="mb-8">
          <a
            href="/"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
          >
            ← Back to Projects
          </a>
        </nav>

        {/* Project Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 text-sm rounded-full bg-blue-900 text-blue-200">
              {project.type}
            </span>
            <span className="text-gray-400">{project.date}</span>
          </div>
          <p className="text-xl text-gray-400">{project.description}</p>
        </header>

        {/* Project Image */}
        {project.image && (
          <div className="mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Project Content */}
        {project.id === 'cracks-detection' ? (
          <CracksDetectionContent />
        ) : project.id === 'openipdm-light' ? (
          <OpenIPDMContent />
        ) : project.id === 'demand-forecasting' ? (
          <DemandForecastingContent />
        ) : project.id === 'diagnostic-ai-agents' ? (
          <DiagnosticAIContent />
        ) : project.id === 'golden-run-manufacturing' ? (
          <GoldenRunContent />
        ) : project.id === 'maintenance-planning' ? (
          <MaintenancePlanningContent />
        ) : project.id === 'infrastructure-deterioration' ? (
          <InfrastructureDeteriorationContent />
        ) : project.id === 'oil-field-planning' ? (
          <OilFieldPlanningContent />
        ) : null}
      </div>
    </div>
  );
}
