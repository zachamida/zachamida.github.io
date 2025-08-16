import { Talk } from '@/types/talk';
import { TalkCard } from './TalkCard';

interface TalksProps {
  talks: Talk[];
  filter?: 'conference' | 'workshop' | 'seminar' | 'keynote' | 'poster';
  onFilterChange?: (filter: 'conference' | 'workshop' | 'seminar' | 'keynote' | 'poster' | undefined) => void;
}

export function Talks({ talks, filter, onFilterChange }: TalksProps) {
  // Filter talks based on the selected filter
  const filteredTalks = filter 
    ? talks.filter(talk => talk.type === filter)
    : talks;

  // Sort talks by year (most recent first)
  const sortedTalks = [...filteredTalks].sort((a, b) => b.year - a.year);

  // Get unique types for filter buttons
  const availableTypes = Array.from(new Set(talks.map(talk => talk.type)));
  
  // Count talks by type
  const typeCounts = talks.reduce((acc, talk) => {
    acc[talk.type] = (acc[talk.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const formatType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div>
      {/* Filter buttons */}
      {onFilterChange && (
        <div className="mb-8 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => onFilterChange(undefined)}
            className={`px-4 py-2 rounded ${
              filter === undefined
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All ({talks.length})
          </button>
          {availableTypes.map((type) => (
            <button
              key={type}
              onClick={() => onFilterChange(type as any)}
              className={`px-4 py-2 rounded ${
                filter === type
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {formatType(type)} ({typeCounts[type] || 0})
            </button>
          ))}
        </div>
      )}

      {/* Talks grid */}
      {sortedTalks.length > 0 ? (
        <div className="grid gap-6">
          {sortedTalks.map((talk, index) => (
            <TalkCard key={index} talk={talk} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            {filter ? `No ${filter} talks found.` : 'No talks found.'}
          </p>
        </div>
      )}

      {/* Summary stats */}
      <div className="mt-12 p-6 bg-gray-800 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Talk Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{talks.length}</div>
            <div className="text-sm text-gray-400">Total Talks</div>
          </div>
          {availableTypes.map((type) => (
            <div key={type} className="text-center">
              <div className="text-2xl font-bold text-blue-400">{typeCounts[type] || 0}</div>
              <div className="text-sm text-gray-400">{formatType(type)}s</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
