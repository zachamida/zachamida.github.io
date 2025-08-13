'use client';

import { FaGithub, FaExternalLinkAlt, FaPlay, FaBook, FaUsers, FaChartLine } from 'react-icons/fa';

export function OpenIPDMContent() {
  return (
    <div className="space-y-8">
      {/* Project Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-400 mb-4">
          OpenIPDM Light is a cloud-based application that provides an accessible interface for infrastructure probabilistic 
          deterioration modeling. Built on the foundation of the comprehensive OpenIPDM MATLAB toolbox, this Streamlit application 
          democratizes access to advanced infrastructure analysis capabilities through a user-friendly web interface.
        </p>
        <p className="text-gray-400">
          The platform enables engineers and researchers to perform network-scale analysis of visual inspection data while 
          accounting for uncertainty associated with each inspector, making it an essential tool for infrastructure management 
          and maintenance planning.
        </p>
      </section>

      {/* Technical Foundation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Foundation</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-200 mb-2">State-Space Models</h3>
            <p className="text-gray-400">
              The modeling approach is based on <strong>state-space models</strong> specifically tailored for modeling the 
              deterioration of transportation infrastructure. These models provide a robust mathematical framework for 
              representing the evolution of infrastructure condition over time while incorporating various sources of uncertainty.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-200 mb-2">Probabilistic Framework</h3>
            <p className="text-gray-400 mb-2">
              The system employs advanced probabilistic methods to handle the inherent uncertainties in infrastructure assessment:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
              <li><strong>Inspector Uncertainty:</strong> Accounts for variability between different inspectors' assessments</li>
              <li><strong>Missing Data Handling:</strong> Robust algorithms for dealing with incomplete inspection records</li>
              <li><strong>Bayesian Inference:</strong> Incorporates prior knowledge and updates beliefs with new observations</li>
              <li><strong>Network-Scale Analysis:</strong> Enables analysis from individual elements to entire infrastructure networks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaChartLine className="w-6 h-6 text-blue-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Deterioration Assessment</h3>
            <p className="text-gray-400 text-sm">
              Analyze structural deterioration behavior at element and network levels
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaUsers className="w-6 h-6 text-green-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Intervention Analysis</h3>
            <p className="text-gray-400 text-sm">
              Evaluate the effectiveness and service life of maintenance interventions
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaBook className="w-6 h-6 text-purple-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Data Validation</h3>
            <p className="text-gray-400 text-sm">
              Comprehensive verification and validation of visual inspection data
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaChartLine className="w-6 h-6 text-orange-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Synthetic Data Generation</h3>
            <p className="text-gray-400 text-sm">
              Generate synthetic time series of visual inspections for analysis
            </p>
          </div>
        </div>
      </section>

      {/* OpenIPDM Ecosystem */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">OpenIPDM Ecosystem</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-200 mb-3">Full MATLAB Toolbox</h3>
          <p className="text-gray-400 mb-4">
            OpenIPDM Light is based on the comprehensive OpenIPDM MATLAB platform, which provides the complete suite of 
            tools for infrastructure probabilistic deterioration modeling. The full toolbox includes advanced features for 
            model training, parameter learning, and extensive analysis capabilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="text-gray-300 font-medium mb-2">Core Features:</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Network-scale analysis</li>
                <li>• Inspector uncertainty modeling</li>
                <li>• Missing data handling</li>
                <li>• Intervention effect analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-300 font-medium mb-2">Advanced Tools:</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Model training toolbox</li>
                <li>• Parameter learning algorithms</li>
                <li>• Verification & validation tools</li>
                <li>• GPU-accelerated computing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Resources */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Project Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Live Application */}
          <a
            href="https://openipdm-light.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors group"
          >
            <FaPlay className="w-6 h-6 text-white" />
            <div>
              <h3 className="text-white font-medium">OpenIPDM Light Demo</h3>
              <p className="text-blue-100 text-sm">Try the cloud application</p>
            </div>
            <FaExternalLinkAlt className="w-4 h-4 text-blue-200 ml-auto group-hover:text-white" />
          </a>

          {/* Full Source Code */}
          <a
            href="https://github.com/Bayes-Works/OpenIPDM"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
          >
            <FaGithub className="w-6 h-6 text-white" />
            <div>
              <h3 className="text-white font-medium">Full Source Code</h3>
              <p className="text-gray-300 text-sm">Complete MATLAB toolbox</p>
            </div>
            <FaExternalLinkAlt className="w-4 h-4 text-gray-400 ml-auto group-hover:text-white" />
          </a>
        </div>
      </section>

      {/* Technical Specifications */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">Light Version (Streamlit)</h3>
              <ul className="space-y-2 text-gray-400">
                <li><strong>Platform:</strong> Cloud-based web application</li>
                <li><strong>Framework:</strong> Streamlit with Python</li>
                <li><strong>Access:</strong> No installation required</li>
                <li><strong>Features:</strong> Core modeling capabilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">Full Version (MATLAB)</h3>
              <ul className="space-y-2 text-gray-400">
                <li><strong>Platform:</strong> MATLAB (2020b or higher)</li>
                <li><strong>Requirements:</strong> Statistics & ML Toolbox</li>
                <li><strong>GPU Support:</strong> For model training</li>
                <li><strong>Features:</strong> Complete analysis suite</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Foundation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Research Foundation</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-200 mb-2">Publication</h3>
            <p className="text-gray-400 mb-2">
              <strong>"OpenIPDM: A Probabilistic Framework for Estimating the Deterioration and Effect of Interventions on Bridges"</strong>
            </p>
            <p className="text-gray-400 text-sm">
              Hamida, Z., Laurent, B., and Goulet, J.-A. | SoftwareX (January 2022)
            </p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-200 mb-2">Development Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-300"><strong>Zachary Hamida</strong></p>
                <p className="text-gray-400">Methodology, initial code and UI development</p>
              </div>
              <div>
                <p className="text-gray-300"><strong>Ali Fakhri</strong></p>
                <p className="text-gray-400">Bayesian Neural Networks for structural attributes</p>
              </div>
              <div>
                <p className="text-gray-300"><strong>Blanche Laurent</strong></p>
                <p className="text-gray-400">Analytical inference for inspectors uncertainty</p>
              </div>
              <div>
                <p className="text-gray-300"><strong>James-A. Goulet</strong></p>
                <p className="text-gray-400">Methodology supervision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Transportation Infrastructure:</strong> Bridge and highway deterioration modeling and maintenance planning</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Asset Management:</strong> Network-scale infrastructure portfolio optimization and resource allocation</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Research & Academia:</strong> Infrastructure deterioration studies and probabilistic modeling research</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Government Agencies:</strong> Policy development and infrastructure investment decision support</p>
          </div>
        </div>
      </section>

      {/* Funding & Acknowledgments */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Funding & Acknowledgments</h2>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 mb-3">
            This project is funded by the <strong>Transportation Ministry of Quebec Province (MTQ), Canada</strong>, 
            demonstrating its practical relevance and real-world application in infrastructure management.
          </p>
          <p className="text-gray-400 text-sm">
            The project has benefited from existing work including Kevin Murphy's Kalman filter toolbox, 
            Dan Simon's Constrained Kalman filter, and Christian Kothe's serialization tools.
          </p>
        </div>
      </section>
    </div>
  );
}
