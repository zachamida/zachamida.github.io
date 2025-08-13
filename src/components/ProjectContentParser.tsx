'use client';

import { useEffect, useState } from 'react';

interface Publication {
  year: string;
  title: string;
  authors: string;
  journal: string;
  links: Array<{
    text: string;
    url: string;
  }>;
}

interface ProjectContent {
  description: string;
  funding?: string;
  methods?: string;
  tools?: string;
  software?: string;
  publications: Publication[];
}

interface ProjectContentParserProps {
  projectId: string;
  originalUrl: string;
}

export function ProjectContentParser({ projectId, originalUrl }: ProjectContentParserProps) {
  const [content, setContent] = useState<ProjectContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchContent();
  }, [projectId, originalUrl]);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/fetch-content?url=' + encodeURIComponent(originalUrl));
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }
      const html = await response.text();
      const parsedContent = parseProjectContent(html, projectId);
      setContent(parsedContent);
    } catch (err) {
      console.error('Error fetching content:', err);
      setError('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  const parseProjectContent = (html: string, projectId: string): ProjectContent => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const textContent = doc.body.textContent || '';
    
    // Extract common fields
    const descriptionMatch = textContent.match(/Project description:\s*([^.]+\.)/);
    const fundingMatch = textContent.match(/Funding:\s*([^\n]+)/);
    const methodsMatch = textContent.match(/Development Methods:\s*([^\n]+)/);
    const toolsMatch = textContent.match(/Development Tools:\s*([^\n]+)/);
    const softwareMatch = textContent.match(/Open-source Software:\s*([^\n]+)/);

    // Parse publications based on project type
    const publications = parsePublications(textContent, projectId);

    return {
      description: descriptionMatch?.[1] || getDefaultDescription(projectId),
      funding: fundingMatch?.[1],
      methods: methodsMatch?.[1],
      tools: toolsMatch?.[1],
      software: softwareMatch?.[1],
      publications
    };
  };

  const getDefaultDescription = (projectId: string): string => {
    const descriptions: Record<string, string> = {
      'maintenance-planning': 'Developing a hierarchical decision-making framework for planning network-scale maintenance activities on the network of bridges in the province of Quebec.',
      'infrastructure-deterioration': 'This research project aims at developing machine learning methods suited for the network-scale degradation analysis of transportation infrastructure.',
      'oil-field-planning': 'This project examines introducing a problem-specific Genetic Algorithm (GA) for optimal well placement in oil fields.'
    };
    return descriptions[projectId] || 'Project details not available.';
  };

  const parsePublications = (textContent: string, projectId: string): Publication[] => {
    const publications: Publication[] = [];
    
    // Extract year sections
    const yearMatches = textContent.match(/\[(\d{4})\]:/g);
    
    if (!yearMatches) return publications;

    yearMatches.forEach(yearMatch => {
      const year = yearMatch.match(/\[(\d{4})\]:/)?.[1] || '';
      const yearIndex = textContent.indexOf(yearMatch);
      const nextYearIndex = textContent.indexOf('[', yearIndex + 1);
      const sectionText = nextYearIndex > -1 
        ? textContent.substring(yearIndex, nextYearIndex)
        : textContent.substring(yearIndex);
      
      // Split by lines and process each publication
      const lines = sectionText.split('\n').filter(line => line.trim());
      
      let currentPub: Partial<Publication> = { year, links: [] };
      
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (!line || line.startsWith('[')) continue;
        
        // Check if this line contains a title (usually the first substantial line)
        if (!currentPub.title && line.length > 20 && !line.includes('Journal') && !line.includes('Conference')) {
          currentPub.title = line.replace(/\.$/, '');
        }
        // Check if this line contains authors (usually follows title)
        else if (currentPub.title && !currentPub.authors && line.includes(',') && line.length < 100) {
          currentPub.authors = line;
        }
        // Check if this line contains journal/conference info
        else if (currentPub.authors && !currentPub.journal && line.length > 10) {
          currentPub.journal = line;
          
          // If we have all required fields, add the publication
          if (currentPub.title && currentPub.authors && currentPub.journal) {
            publications.push({
              year: currentPub.year!,
              title: currentPub.title,
              authors: currentPub.authors,
              journal: currentPub.journal,
              links: currentPub.links || []
            });
            
            // Reset for next publication
            currentPub = { year, links: [] };
          }
        }
      }
    });

    return publications;
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-2/3 mb-4"></div>
          <div className="h-32 bg-gray-700 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400">{error || 'Failed to load content'}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Project Description */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
        <p className="text-gray-400">{content.description}</p>
      </section>

      {/* Funding */}
      {content.funding && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Funding</h2>
          <p className="text-gray-400">{content.funding}</p>
        </section>
      )}

      {/* Development Methods */}
      {content.methods && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Development Methods</h2>
          <p className="text-gray-400">{content.methods}</p>
        </section>
      )}

      {/* Development Tools */}
      {content.tools && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Development Tools</h2>
          <p className="text-gray-400">{content.tools}</p>
        </section>
      )}

      {/* Open-source Software */}
      {content.software && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Open-source Software</h2>
          <p className="text-gray-400">{content.software}</p>
        </section>
      )}

      {/* Publications */}
      {content.publications && content.publications.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-6">Resources</h2>
          <div className="space-y-6">
            {content.publications.map((pub, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6">
                <div className="text-sm text-blue-400 font-semibold mb-2">[{pub.year}]</div>
                <h3 className="text-lg font-medium text-gray-200 mb-2">{pub.title}</h3>
                <p className="text-gray-400 mb-1">{pub.authors}</p>
                <p className="text-gray-500 italic mb-3">{pub.journal}</p>
                {pub.links && pub.links.length > 0 && (
                  <div className="flex gap-4">
                    {pub.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm underline"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
