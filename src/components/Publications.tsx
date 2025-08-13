import { Publication } from '@/types/publication';
import { PublicationCard } from './PublicationCard';

export function Publications({
  publications,
  filter,
  onFilterChange,
}: {
  publications: Publication[];
  filter?: 'journal' | 'conference' | 'thesis';
  onFilterChange: (filter: 'journal' | 'conference' | 'thesis' | undefined) => void;
}) {
  const sortedPublications = [...publications].sort((a, b) => b.year - a.year);
  const filteredPublications = filter
    ? sortedPublications.filter((pub) => pub.type === filter)
    : sortedPublications;

  // Group publications by year
  const publicationsByYear = filteredPublications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);

  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="space-y-8">
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => onFilterChange(undefined)}
          className={`px-4 py-2 rounded ${
            !filter ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          } hover:bg-opacity-90 transition-colors`}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange('journal')}
          className={`px-4 py-2 rounded ${
            filter === 'journal' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          } hover:bg-opacity-90 transition-colors`}
        >
          Journal Articles
        </button>
        <button
          onClick={() => onFilterChange('conference')}
          className={`px-4 py-2 rounded ${
            filter === 'conference' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          } hover:bg-opacity-90 transition-colors`}
        >
          Conference Papers
        </button>
        <button
          onClick={() => onFilterChange('thesis')}
          className={`px-4 py-2 rounded ${
            filter === 'thesis' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          } hover:bg-opacity-90 transition-colors`}
        >
          Theses
        </button>
      </div>

      {years.map((year) => (
        <div key={year} className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-100">{year}</h2>
          <div className="grid grid-cols-1 gap-4">
            {publicationsByYear[year].map((publication, index) => (
              <PublicationCard
                key={`${publication.title}-${index}`}
                {...publication}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
