'use client';

import { FaRobot, FaIndustry, FaCloud, FaBrain, FaLock, FaCogs, FaNetworkWired, FaDatabase, FaShieldAlt } from 'react-icons/fa';

export function DiagnosticAIContent() {
  return (
    <div className="space-y-8">
      {/* Project Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-400 mb-4">
          The Diagnostic AI Agents project represents an implementation of agentic systems 
          designed for advanced diagnostic applications in the context of manufacturing. 
          Built on Azure AI Services and utilizing open-source agent frameworks, the system combines the power of 
          Retrieval-Augmented Generation (RAG) with intelligent agent orchestration to deliver precise, context-aware 
          diagnostic insights and recommendations.
        </p>
      </section>


      {/* Development Stack */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Development Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaBrain className="w-6 h-6 text-blue-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Python Core</h3>
            <p className="text-gray-400 text-sm">
              Primary development language for AI agent implementation and system logic
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaCogs className="w-6 h-6 text-green-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">PromptFlow</h3>
            <p className="text-gray-400 text-sm">
              Microsoft's framework for building and managing LLM-based AI workflows
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaRobot className="w-6 h-6 text-purple-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">CrewAI</h3>
            <p className="text-gray-400 text-sm">
              Multi-agent workflows for orchestrating collaborative AI systems
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaCloud className="w-6 h-6 text-orange-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Azure AI Services</h3>
            <p className="text-gray-400 text-sm">
              Cloud deployment platform with enterprise-grade AI capabilities
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaNetworkWired className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-medium text-gray-200">Agent Orchestration</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Coordination of multiple specialized AI agents working collaboratively to diagnose manufacturing issues
            </p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaDatabase className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-medium text-gray-200">RAG Integration</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Agentic retrieval-augmented generation for evidence-based diagnostic reasoning and knowledge-enhanced responses
            </p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaCloud className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-medium text-gray-200">Cloud-Native Deployment</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Scalable deployment on Azure AI Services with enterprise-grade security and performance optimization
            </p>
          </div>
        </div>
      </section>

      {/* Azure AI Services Integration */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Azure AI Services Integration</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-200 mb-3">Cloud Deployment Platform</h3>
          <p className="text-gray-400 mb-4">
            The system is deployed using <strong>Azure AI Services</strong>. This cloud-native approach ensures 
            enterprise-grade reliability and global accessibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="text-gray-300 font-medium mb-2">Azure Services Used:</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Azure OpenAI Service</li>
                <li>• Azure Cognitive Services</li>
                <li>• Azure Machine Learning</li>
                <li>• Azure AI Search</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-300 font-medium mb-2">Benefits:</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Enterprise-grade security</li>
                <li>• High scalability</li>
                <li>• High availability</li>
                <li>• Integrated monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">Framework Components</h3>
              <ul className="space-y-2 text-gray-400">
                <li><strong>Language:</strong> Python 3.9+</li>
                <li><strong>Agent Framework:</strong> CrewAI for multi-agent orchestration</li>
                <li><strong>Workflow Management:</strong> PromptFlow for LLM workflows</li>
                <li><strong>RAG Implementation:</strong> Custom retrieval-augmented generation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">Deployment Details</h3>
              <ul className="space-y-2 text-gray-400">
                <li><strong>Platform:</strong> Azure AI Services</li>
                <li><strong>Architecture:</strong> Cloud-native microservices</li>
                <li><strong>Security:</strong> Enterprise-grade encryption</li>
                <li><strong>Scalability:</strong> Auto-scaling capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Host */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Host</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <FaIndustry className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-medium text-gray-200">Kruger Products</h3>
          </div>
          <p className="text-gray-400 mb-4">
            This project was developed for Kruger Products, a leading manufacturer of consumer goods in North America. 
          </p>
          <div className="text-sm text-gray-500">
            <p>Industry: Consumer Goods Manufacturing</p>
            <p>Focus: Demand forecasting and inventory optimization</p>
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaLock className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-medium text-gray-200">Private Development</h3>
            </div>
            <p className="text-gray-400 text-sm">
              This project involves proprietary technology and confidential diagnostic methodologies. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
