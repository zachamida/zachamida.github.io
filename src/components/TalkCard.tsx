import { Talk } from '@/types/talk';

interface TalkCardProps {
  talk: Talk;
}

export function TalkCard({ talk }: TalkCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'bg-purple-900 text-purple-200';
      case 'conference':
        return 'bg-blue-900 text-blue-200';
      case 'workshop':
        return 'bg-green-900 text-green-200';
      case 'seminar':
        return 'bg-orange-900 text-orange-200';
      case 'poster':
        return 'bg-gray-700 text-gray-300';
      default:
        return 'bg-gray-700 text-gray-300';
    }
  };

  const formatType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-100 mb-2 leading-tight">
            {talk.title}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(talk.type)}`}>
              {formatType(talk.type)}
            </span>
            <span className="text-gray-400 text-sm">{talk.year}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-start gap-2">
          <span className="text-gray-400 text-sm font-medium min-w-[60px]">Event:</span>
          <span className="text-gray-300 text-sm">{talk.event}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-gray-400 text-sm font-medium min-w-[60px]">Location:</span>
          <span className="text-gray-300 text-sm">{talk.location}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-gray-400 text-sm font-medium min-w-[60px]">Date:</span>
          <span className="text-gray-300 text-sm">{talk.date}</span>
        </div>
      </div>

      {talk.description && (
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {talk.description}
        </p>
      )}

      {talk.abstract && (
        <details className="mb-4">
          <summary className="text-blue-400 text-sm cursor-pointer hover:text-blue-300 mb-2">
            View Abstract
          </summary>
          <p className="text-gray-400 text-sm leading-relaxed pl-4 border-l-2 border-gray-600">
            {talk.abstract}
          </p>
        </details>
      )}

      {talk.coAuthors && talk.coAuthors.length > 0 && (
        <div className="mb-4">
          <span className="text-gray-400 text-sm font-medium">Co-authors: </span>
          <span className="text-gray-300 text-sm">{talk.coAuthors.join(', ')}</span>
        </div>
      )}

      <div className="flex gap-3 pt-2">
        {talk.slidesUrl && (
          <a
            href={talk.slidesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1"
          >
            📄 Slides
          </a>
        )}
        {talk.videoUrl && (
          <a
            href={talk.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1"
          >
            🎥 Video
          </a>
        )}
      </div>
    </div>
  );
}
