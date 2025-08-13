import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaEye, FaCodeBranch } from 'react-icons/fa';

export function ProjectCard({
  title,
  description,
  type,
  technologies,
  date,
  highlights = [],
  githubUrl,
  liveUrl,
  url,
  image,
  hasDetailPage = false,
  isOpenSource = false
}: {
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
}) {
  const LinkWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    if (url) {
      if (hasDetailPage) {
        return (
          <Link href={url} className={className}>
            {children}
          </Link>
        );
      } else {
        return (
          <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
            {children}
          </a>
        );
      }
    }
    return <div className={className}>{children}</div>;
  };

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
      {image && (
        <LinkWrapper className="block relative h-48 overflow-hidden group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          {url && (
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                {hasDetailPage ? (
                  <>
                    <FaEye className="w-8 h-8" />
                    <span className="text-lg font-semibold">View Details</span>
                  </>
                ) : (
                  <>
                    <FaExternalLinkAlt className="w-8 h-8" />
                    <span className="text-lg font-semibold">Visit Project</span>
                  </>
                )}
              </div>
            </div>
          )}
        </LinkWrapper>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <LinkWrapper className={url ? "hover:text-blue-400 transition-colors cursor-pointer" : ""}>
            <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
          </LinkWrapper>
          <div className="flex gap-2">
            {isOpenSource && (
              <span className="px-3 py-1 text-sm rounded-full bg-green-900 text-green-200 flex items-center gap-1">
                <FaCodeBranch className="w-3 h-3" />
                Open Source
              </span>
            )}
            <span className="px-3 py-1 text-sm rounded-full bg-blue-900 text-blue-200">
              {type}
            </span>
          </div>
        </div>
      
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">Highlights</h4>
        <ul className="list-disc list-inside text-gray-400">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
        <span className="text-sm text-gray-400">{date}</span>
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
