'use client';

import { FaGithub, FaRobot, FaCodeBranch, FaCloud, FaShieldAlt, FaCogs, FaServer, FaClipboardList } from 'react-icons/fa';

export function AzureDevOpsAICoderContent() {
  return (
    <div className="space-y-8">
      {/* Project Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-400 mb-4">
          Azure DevOps AI Coder is an open-source agentic service that automates feature implementation directly
          from Azure DevOps Work Items. When a work item is tagged with <code className="bg-gray-700 px-1 rounded text-blue-300">ai_item</code>,
          the service clones the target repository, runs an agentic AI coding assistant (Crush CLI powered by Azure OpenAI)
          to autonomously implement the feature, and opens a Pull Request linked to the work item for human review.
        </p>
        <p className="text-gray-400">
          The project bridges project management and code generation — turning a well-written task description
          into a ready-to-review branch with minimal human intervention.
        </p>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="space-y-3">
          {[
            { icon: <FaClipboardList className="w-5 h-5 text-blue-400" />, step: '1. Tag a Work Item', desc: 'Add the ai_item tag to any Azure DevOps Work Item with a clear feature description.' },
            { icon: <FaServer className="w-5 h-5 text-cyan-400" />, step: '2. Webhook Triggers', desc: 'An HMAC-verified webhook delivers the event to the service running on Azure Container Apps.' },
            { icon: <FaCogs className="w-5 h-5 text-purple-400" />, step: '3. Queue & Deduplicate', desc: 'The task is enqueued in Azure Queue Storage. Content-aware deduplication prevents re-processing unchanged items.' },
            { icon: <FaRobot className="w-5 h-5 text-green-400" />, step: '4. AI Implements the Feature', desc: 'A background worker clones the repo and runs Crush CLI (Azure OpenAI backend) to analyze the codebase and implement the feature.' },
            { icon: <FaCodeBranch className="w-5 h-5 text-orange-400" />, step: '5. Pull Request Created', desc: 'Changed files are staged and pushed to a feature branch. A Pull Request is opened and linked to the original Work Item, which is updated to Resolved.' },
          ].map(({ icon, step, desc }) => (
            <div key={step} className="bg-gray-800 p-4 rounded-lg flex gap-4 items-start">
              <div className="mt-0.5 shrink-0">{icon}</div>
              <div>
                <h3 className="text-gray-200 font-medium mb-1">{step}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaCloud className="w-6 h-6 text-blue-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Azure Container Apps</h3>
            <p className="text-gray-400 text-sm">Serverless container hosting for the FastAPI webhook endpoint and background queue worker. Provisioned via Terraform.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaRobot className="w-6 h-6 text-purple-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Azure OpenAI + Crush CLI</h3>
            <p className="text-gray-400 text-sm">Crush is an agentic coding CLI that uses Azure OpenAI (e.g. gpt-4o-mini) to read the codebase, edit files, and write tests autonomously.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaCogs className="w-6 h-6 text-cyan-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Azure Queue Storage</h3>
            <p className="text-gray-400 text-sm">Decouples webhook ingestion from task execution. Supports retry logic (up to 3×) and a dead-letter queue for failed tasks.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaShieldAlt className="w-6 h-6 text-green-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Security by Design</h3>
            <p className="text-gray-400 text-sm">HMAC-SHA256 webhook verification, credentials injected via GIT_ASKPASS (never embedded in URLs), and selective staging that skips secret file patterns.</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-gray-300 font-medium mb-3">Automation</h4>
              <ul className="text-gray-400 space-y-2">
                <li>• Tag-triggered webhook pipeline</li>
                <li>• Autonomous codebase analysis and feature implementation</li>
                <li>• Automatic branch creation and PR opening</li>
                <li>• Work Item state updated to Resolved on completion</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-300 font-medium mb-3">Reliability</h4>
              <ul className="text-gray-400 space-y-2">
                <li>• Content-aware deduplication (5-min window)</li>
                <li>• Retry logic with dead-letter queue</li>
                <li>• Log sanitisation to redact credentials</li>
                <li>• Infrastructure-as-code via Terraform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Stack</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">Application</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><strong className="text-gray-300">Language:</strong> Python 3.11+</li>
                <li><strong className="text-gray-300">Web Framework:</strong> FastAPI with lifespan manager</li>
                <li><strong className="text-gray-300">AI Agent:</strong> Crush CLI (non-interactive mode)</li>
                <li><strong className="text-gray-300">LLM Backend:</strong> Azure OpenAI (gpt-4o-mini)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">Infrastructure</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><strong className="text-gray-300">Hosting:</strong> Azure Container Apps</li>
                <li><strong className="text-gray-300">Queue:</strong> Azure Queue Storage + DLQ</li>
                <li><strong className="text-gray-300">Registry:</strong> Azure Container Registry</li>
                <li><strong className="text-gray-300">IaC:</strong> Terraform ≥ 1.5.0</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Link */}
      <section>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-200 mb-1">Open Source</h3>
            <p className="text-gray-400 text-sm">Full source code, Terraform configuration, and setup instructions available on GitHub.</p>
          </div>
          <a
            href="https://github.com/zachamida/azure-devops-ai-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg transition-colors shrink-0 ml-4"
          >
            <FaGithub className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
}
