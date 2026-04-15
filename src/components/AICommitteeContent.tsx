'use client';

import { FaRobot, FaCloud, FaChartBar, FaShieldAlt, FaUsers, FaCogs, FaLock, FaCheckCircle } from 'react-icons/fa';

export function AICommitteeContent() {
  return (
    <div className="space-y-8">

      {/* Project Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-400 mb-4">
          The AI Committee is an AI-powered evaluation system designed to assess grant applications
          for a program supporting community associations across Canada. The system uses a
          <strong className="text-gray-300"> multi-agent committee</strong> built on CrewAI, where
          specialized AI agents collaborate to evaluate each application against standardized criteria —
          producing scored results with detailed, structured feedback.
        </p>
        <p className="text-gray-400">
          The goal is to ensure fair, consistent, and transparent evaluation at scale, replacing
          manual review bottlenecks while preserving the depth and nuance of a real expert committee.
        </p>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="space-y-3">
          {[
            {
              icon: <FaUsers className="w-5 h-5 text-blue-400" />,
              step: '1. Applications Uploaded',
              desc: 'A program coordinator uploads a batch of applications (Excel/CSV) via the Streamlit dashboard. Applications requiring translation are automatically converted to English via Azure OpenAI.'
            },
            {
              icon: <FaRobot className="w-5 h-5 text-purple-400" />,
              step: '2. AI Committee Convenes',
              desc: 'Five pairs of AI evaluators (each with a distinct personality — strict, supportive, analytical, community-focused, balanced) independently assess each application against standardized evaluation criteria.'
            },
            {
              icon: <FaCheckCircle className="w-5 h-5 text-cyan-400" />,
              step: '3. Consensus & QA',
              desc: 'A Consensus Reviewer identifies scoring outliers and variance. A Quality Assurance Agent validates scores, detects prompt injection attempts, and polishes all evaluator feedback for clarity and professionalism.'
            },
            {
              icon: <FaCogs className="w-5 h-5 text-green-400" />,
              step: '4. Committee Chair Report',
              desc: 'The Committee Chair Agent synthesizes all evaluations into a final report: executive summary, application rankings, detailed per-criterion feedback, and recommendations (Highly Recommended → Not Recommended).'
            },
            {
              icon: <FaChartBar className="w-5 h-5 text-orange-400" />,
              step: '5. Results Delivered',
              desc: 'Scored results are stored in Azure Blob Storage and visualized in the Streamlit dashboard. An email notification is sent to coordinators via Microsoft Graph API.'
            },
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

      {/* Agent Committee */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Agent Committee Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 shrink-0"></span>
              <h3 className="text-gray-200 font-medium">Primary Evaluator Agents (×5)</h3>
            </div>
            <p className="text-gray-400 text-sm mb-2">Evaluate the primary set of application criteria, each scored 1–10. Weight: <strong className="text-gray-300">70%</strong> of final score.</p>
            <p className="text-gray-500 text-xs">Each agent has a unique personality to introduce diversity of perspective.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-purple-400 shrink-0"></span>
              <h3 className="text-gray-200 font-medium">Secondary Evaluator Agents (×5)</h3>
            </div>
            <p className="text-gray-400 text-sm mb-2">Evaluate the secondary set of application criteria, each scored 1–10. Weight: <strong className="text-gray-300">30%</strong> of final score.</p>
            <p className="text-gray-500 text-xs">Paired 1:1 with primary evaluators, each with a complementary personality.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-pink-400 shrink-0"></span>
              <h3 className="text-gray-200 font-medium">Consensus Reviewer</h3>
            </div>
            <p className="text-gray-400 text-sm">Cross-checks all evaluator scores, flags outliers (&gt;3 point deviation), calculates variance, and recommends Accept / Review / Re-evaluate.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-green-400 shrink-0"></span>
              <h3 className="text-gray-200 font-medium">QA Agent + Committee Chair</h3>
            </div>
            <p className="text-gray-400 text-sm">QA validates scores and detects manipulation. The Committee Chair synthesizes all inputs into the final ranked report with recommendations.</p>
          </div>
        </div>
      </section>

      {/* Scoring */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Evaluation & Scoring</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm mb-6">
            <div>
              <h4 className="text-gray-300 font-medium mb-3">Primary Criteria — 70% weight</h4>
              <p className="text-gray-400 text-sm">Evaluates program reach, inspiration, participant support, and inclusivity objectives.</p>
            </div>
            <div>
              <h4 className="text-gray-300 font-medium mb-3">Secondary Criteria — 30% weight</h4>
              <p className="text-gray-400 text-sm">Evaluates presentation clarity, innovative approach, demonstrated impact, and stakeholder involvement.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-gray-300 font-medium mb-3 text-sm">Final Score → Recommendation</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              {[
                { range: '85–100', label: 'Highly Recommended', color: 'text-green-400' },
                { range: '70–84', label: 'Recommended', color: 'text-blue-400' },
                { range: '55–69', label: 'Conditional', color: 'text-yellow-400' },
                { range: '< 55', label: 'Not Recommended', color: 'text-red-400' },
              ].map(({ range, label, color }) => (
                <div key={range} className="bg-gray-700 p-2 rounded text-center">
                  <div className={`font-bold ${color}`}>{range}</div>
                  <div className="text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaCloud className="w-6 h-6 text-blue-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Azure Durable Functions</h3>
            <p className="text-gray-400 text-sm">Serverless fan-out/fan-in orchestration processes batches of applications in parallel, with a 5-attempt retry policy and 24-hour timeout for large evaluation runs.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaRobot className="w-6 h-6 text-purple-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">CrewAI + Azure OpenAI</h3>
            <p className="text-gray-400 text-sm">Multi-agent orchestration via CrewAI, with Azure OpenAI (GPT-4o) as the primary LLM. Each agent runs a sequential CrewAI Crew process with structured JSON output.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaChartBar className="w-6 h-6 text-cyan-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Streamlit Dashboard</h3>
            <p className="text-gray-400 text-sm">Authenticated web interface for uploading applications, triggering evaluations, viewing interactive Plotly score visualizations, and browsing past evaluation history.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaShieldAlt className="w-6 h-6 text-green-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Security & Integrity</h3>
            <p className="text-gray-400 text-sm">Built-in prompt injection detection, minimum word count enforcement, and outlier flagging safeguard the evaluation process against low-quality or manipulated submissions.</p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Stack</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">Core</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><strong className="text-gray-300">Language:</strong> Python 3.11+</li>
                <li><strong className="text-gray-300">Agent Framework:</strong> CrewAI 0.203+</li>
                <li><strong className="text-gray-300">LLM:</strong> Azure OpenAI (GPT-4o)</li>
                <li><strong className="text-gray-300">Data Validation:</strong> Pydantic v2</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">Infrastructure & Frontend</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><strong className="text-gray-300">Compute:</strong> Azure Durable Functions v2</li>
                <li><strong className="text-gray-300">Storage:</strong> Azure Blob Storage</li>
                <li><strong className="text-gray-300">Dashboard:</strong> Streamlit + Plotly</li>
                <li><strong className="text-gray-300">Notifications:</strong> Microsoft Graph API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section>
        <div className="bg-gray-800 p-6 rounded-lg flex gap-4 items-start">
          <FaLock className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg font-medium text-gray-200 mb-1">Private Project</h3>
            <p className="text-gray-400 text-sm">
              This project was developed for a private organization and is not open source.
              The source code and evaluation criteria are proprietary.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
