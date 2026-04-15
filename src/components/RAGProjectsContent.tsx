'use client';

import { FaSearch, FaCloud, FaProjectDiagram, FaFileAlt, FaTable, FaBrain } from 'react-icons/fa';

const projects = [
  {
    icon: <FaProjectDiagram className="w-6 h-6 text-purple-400" />,
    title: 'LightRAG — Vector & Knowledge Graph Search',
    color: 'border-purple-500',
    accent: 'text-purple-400',
    stack: ['LightRAG', 'Azure OpenAI', 'Neo4j', 'Azure Container Apps'],
    description:
      'A RAG application built with the LightRAG package that combines vector similarity search with knowledge graph traversal. Documents are indexed both as dense embeddings and as an entity-relationship graph, allowing the retriever to answer both semantic and structured relational queries.',
    highlights: [
      'Hybrid retrieval: vector search + graph-based entity traversal',
      'Knowledge graph automatically extracted from ingested documents',
      'Supports complex multi-hop reasoning across document relationships',
    ],
  },
  {
    icon: <FaTable className="w-6 h-6 text-cyan-400" />,
    title: 'Table-Routing RAG — Azure AI Search & Docling',
    color: 'border-cyan-500',
    accent: 'text-cyan-400',
    stack: ['Azure AI Search', 'Docling', 'Azure OpenAI', 'Azure Container Apps'],
    description:
      'A RAG pipeline that uses Docling for advanced document parsing — accurately extracting text, tables, and layout structure from PDFs. A routing layer directs queries to the appropriate index (prose vs. tabular content) in Azure AI Search, improving accuracy on data-heavy documents.',
    highlights: [
      'Docling parses tables and structured layouts from complex PDFs',
      'Query router selects the best index based on question type',
      'Separate vector indexes for prose and tabular content in Azure AI Search',
    ],
  },
  {
    icon: <FaFileAlt className="w-6 h-6 text-blue-400" />,
    title: 'Document Intelligence RAG — Azure AI Search',
    color: 'border-blue-500',
    accent: 'text-blue-400',
    stack: ['Azure AI Search', 'Azure Document Intelligence', 'Azure OpenAI', 'Azure Container Apps'],
    description:
      'A production-ready RAG system that leverages Azure Document Intelligence to extract rich content from scanned PDFs, forms, and mixed-layout documents. Extracted content is chunked and indexed in Azure AI Search with hybrid (vector + keyword) retrieval.',
    highlights: [
      'Azure Document Intelligence handles scanned PDFs, forms, and tables',
      'Hybrid retrieval in Azure AI Search: BM25 keyword + vector',
      'Semantic re-ranking for improved answer relevance',
    ],
  },
];

export function RAGProjectsContent() {
  return (
    <div className="space-y-8">

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-400 mb-4">
          A collection of <strong className="text-gray-300">Retrieval-Augmented Generation (RAG)</strong> applications
          exploring different retrieval strategies and document processing pipelines. Each application was built to
          address specific challenges around document types, query complexity, and retrieval accuracy — and all are
          deployed as containerized services on <strong className="text-gray-300">Azure Container Apps</strong>.
        </p>
        <p className="text-gray-400">
          The projects collectively cover vector search, knowledge graph traversal, table-aware parsing, hybrid
          keyword+vector retrieval, and semantic re-ranking — providing a practical comparison of retrieval
          strategies across different use cases.
        </p>
      </section>

      {/* Individual projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <div className="space-y-6">
          {projects.map(({ icon, title, color, accent, stack, description, highlights }) => (
            <div key={title} className={`bg-gray-800 rounded-lg p-6 border-l-4 ${color}`}>
              <div className="flex items-center gap-3 mb-3">
                {icon}
                <h3 className={`text-lg font-medium ${accent}`}>{title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{description}</p>
              <ul className="space-y-1 mb-4">
                {highlights.map((h) => (
                  <li key={h} className="text-gray-400 text-sm flex gap-2">
                    <span className="text-gray-600">•</span>{h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span key={t} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shared architecture */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Shared Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaFileAlt className="w-5 h-5 text-blue-400 mb-2" />
            <h3 className="text-gray-200 font-medium mb-1">Document Ingestion</h3>
            <p className="text-gray-400 text-sm">Documents are parsed, chunked, and indexed at ingest time. Each application uses a different parser suited to its document types.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaSearch className="w-5 h-5 text-cyan-400 mb-2" />
            <h3 className="text-gray-200 font-medium mb-1">Retrieval</h3>
            <p className="text-gray-400 text-sm">At query time, relevant chunks are retrieved via vector similarity, keyword search, graph traversal, or a combination — depending on the application.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaBrain className="w-5 h-5 text-purple-400 mb-2" />
            <h3 className="text-gray-200 font-medium mb-1">Generation</h3>
            <p className="text-gray-400 text-sm">Retrieved context is passed to Azure OpenAI (GPT-4o) to generate a grounded, citation-aware response.</p>
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section>
        <div className="bg-gray-800 p-6 rounded-lg flex gap-4 items-start">
          <FaCloud className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg font-medium text-gray-200 mb-1">Deployed on Azure Container Apps</h3>
            <p className="text-gray-400 text-sm">
              All three applications are containerized and deployed on Azure Container Apps, providing
              serverless scaling, managed ingress, and straightforward CI/CD integration with Azure Container Registry.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
