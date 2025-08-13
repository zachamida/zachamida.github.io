import { BlogPost } from '@/types/blog';
import { SiMedium } from 'react-icons/si';

export function BlogPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {posts.map((post, index) => (
        <a
          key={`${post.title}-${index}`}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-700"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              {post.platform === 'medium' && (
                <SiMedium className="w-6 h-6 text-gray-300" />
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-100 hover:text-blue-400">
                {post.title}
              </h3>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
