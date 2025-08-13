'use client';

import { useState, useEffect } from 'react';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { projects } from '@/data/projects';
import { publications } from '@/data/publications';
import { blogPosts } from '@/data/blogs';
import { Sidebar } from '@/components/Sidebar';
import { Publications } from '@/components/Publications';
import { BlogPosts } from '@/components/BlogPosts';
import { profile } from '@/data/profile';
import { useGoogleAnalytics } from '@/lib/useGoogleAnalytics';

export default function Home() {
  useGoogleAnalytics();
  const [projectFilter, setProjectFilter] = useState<'research' | 'industry' | 'open-source' | undefined>();
  const [pubFilter, setPubFilter] = useState<'journal' | 'conference' | 'thesis' | undefined>();
  const [activeTab, setActiveTab] = useState<'projects' | 'publications' | 'blog'>('projects');
  
  // Initialize filter from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const filter = params.get('filter');
    if (filter === 'journal' || filter === 'conference' || filter === 'thesis') {
      setPubFilter(filter);
    } else {
      setPubFilter(undefined);
    }
  }, []);

  // Handle filter changes and URL updates
  const handlePubFilterChange = (newFilter: 'journal' | 'conference' | 'thesis' | undefined) => {
    setPubFilter(newFilter);
    const newUrl = new URL(window.location.href);
    if (newFilter) {
      newUrl.searchParams.set('filter', newFilter);
    } else {
      newUrl.searchParams.delete('filter');
    }
    window.history.pushState({}, '', newUrl.toString());
  };

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const filter = params.get('filter');
      if (filter === 'journal' || filter === 'conference' || filter === 'thesis') {
        setPubFilter(filter);
      } else {
        setPubFilter(undefined);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6 md:gap-8">
          <div className="md:relative">
            <aside className="md:sticky md:top-8 md:w-[320px]">
              <Sidebar profile={profile} />
            </aside>
          </div>
          <div className="flex-1">
            <div className="mb-8 border-b border-gray-700">
              <nav className="flex gap-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`py-4 px-1 border-b-2 font-medium text-lg ${
                    activeTab === 'projects'
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => setActiveTab('publications')}
                  className={`py-4 px-1 border-b-2 font-medium text-lg ${
                    activeTab === 'publications'
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                  }`}
                >
                  Publications
                </button>
                <button
                  onClick={() => setActiveTab('blog')}
                  className={`py-4 px-1 border-b-2 font-medium text-lg ${
                    activeTab === 'blog'
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                  }`}
                >
                  Blog
                </button>
              </nav>
            </div>

            {activeTab === 'projects' && (
              <section>
                <header className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">Projects</h1>
                  <p className="text-xl text-gray-400">
                    Research and industry projects showcase
                  </p>
                </header>
                <div className="mb-8 flex justify-center gap-4 flex-wrap">
                  <button
                    onClick={() => setProjectFilter(undefined)}
                    className={`px-4 py-2 rounded ${
                      projectFilter === undefined
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setProjectFilter('research')}
                    className={`px-4 py-2 rounded ${
                      projectFilter === 'research'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    Research
                  </button>
                  <button
                    onClick={() => setProjectFilter('industry')}
                    className={`px-4 py-2 rounded ${
                      projectFilter === 'industry'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    Industry
                  </button>
                  <button
                    onClick={() => setProjectFilter('open-source')}
                    className={`px-4 py-2 rounded ${
                      projectFilter === 'open-source'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    Open Source
                  </button>
                </div>
                <ProjectsGrid projects={projects} filter={projectFilter} />
              </section>
            )}

            {activeTab === 'publications' && (
              <section>
                <header className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">Publications</h1>
                  <p className="text-xl text-gray-400">
                    Academic research and conference papers
                  </p>
                </header>
                <Publications 
                  publications={publications} 
                  filter={pubFilter} 
                  onFilterChange={handlePubFilterChange}
                />
              </section>
            )}

            {activeTab === 'blog' && (
              <section>
                <header className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
                  <p className="text-xl text-gray-400">
                    Thoughts and experiences on research, engineering, and data science
                  </p>
                </header>
                <BlogPosts posts={blogPosts} />
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
