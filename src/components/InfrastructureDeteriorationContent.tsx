'use client';

import { FaRoad, FaEye, FaChartLine, FaDatabase, FaCog, FaUniversity, FaFileAlt, FaBrain } from 'react-icons/fa';

export function InfrastructureDeteriorationContent() {
  return (
    <div className="space-y-8">
      {/* Project Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-400 mb-4">
          This research project aims at developing machine learning methods suited for the network-scale 
          degradation analysis of transportation infrastructure. The project addresses the critical need 
          for advanced monitoring and maintenance strategies for existing transportation infrastructure 
          through sophisticated deterioration modeling techniques.
        </p>
        <p className="text-gray-400">
          The outcome of the project is a comprehensive set of methods that enable tracking the performance 
          of structural elements, forecasting degradation patterns, assessing degradation rate changes over 
          time, and providing assistance in comparing different maintenance strategies across large infrastructure networks.
        </p>
      </section>

      {/* Funding & Collaboration */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Funding & Collaboration</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <FaUniversity className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-medium text-gray-200">Quebec Transportation Ministry (MTQ)</h3>
          </div>
          <p className="text-gray-400">
            This research is funded by the Quebec Transportation Ministry (MTQ).
          </p>
        </div>
      </section>

      {/* Technical Approach */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Approach</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaEye className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-medium text-gray-200">Visual Inspection Analysis</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Advanced methods for analyzing network-scale visual inspections, including uncertainty 
              quantification for inspector bias and systematic analysis of inspection data quality.
            </p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaChartLine className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-medium text-gray-200">Probabilistic Modeling</h3>
            </div>
            <p className="text-gray-400 text-sm">
              State-space models and Bayesian approaches for modeling infrastructure deterioration 
              with proper uncertainty quantification and modelling of the effect of interventions.
            </p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaBrain className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-medium text-gray-200">Machine Learning Integration</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Bayesian Neural Networks for scalable deterioration 
              modeling across large infrastructure networks.
            </p>
          </div>
        </div>
      </section>

      {/* Development Methods */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Development Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-200 mb-2">Statistical Methods</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Kalman Filter & Smoother</li>
              <li>• Conditional Distribution of MVN</li>
              <li>• Gaussian Mixture Reduction</li>
              <li>• Gradient Optimization</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-200 mb-2">Machine Learning</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Bayesian Neural Networks</li>
              <li>• Kernel Regression</li>
              <li>• State-space modeling</li>
              <li>• Uncertainty quantification</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Development Tools */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Development Tools</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">MATLAB Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><strong>App Designer:</strong> Interactive application development for deterioration analysis</li>
                <li><strong>GPU Compute:</strong> High-performance computing for large-scale network analysis</li>
                <li><strong>Core MATLAB:</strong> Advanced numerical computing and statistical modeling</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">Data Management</h3>
              <ul className="space-y-2 text-gray-400">
                <li><strong>GitHub:</strong> Version control and collaborative development</li>
                <li><strong>MS Access:</strong> Database management for inspection data</li>
                <li><strong>Data Processing:</strong> Large-scale infrastructure data handling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Contribution */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Open Source Contribution</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <FaDatabase className="w-6 h-6 text-green-400" />
            <h3 className="text-xl font-medium text-gray-200">OpenIPDM</h3>
          </div>
          <p className="text-gray-400 mb-4">
            An open-source probabilistic framework for estimating the deterioration and effect of interventions 
            on bridges. OpenIPDM provides comprehensive tools for infrastructure deterioration modeling based 
            on visual inspections and structural attributes.
          </p>
          <div className="text-sm text-gray-500">
            <p>Type: Open-source research framework</p>
            <p>Focus: Infrastructure probabilistic deterioration modeling</p>
            <p>Application: Network-scale bridge deterioration analysis</p>
          </div>
        </div>
      </section>

      {/* Key Research Contributions */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Research Contributions</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Inspector Uncertainty Quantification:</strong> Novel methods for quantifying and correcting inspector bias in visual inspections</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Network-Scale Modeling:</strong> Scalable probabilistic models for large infrastructure networks</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Effect of Interventions Quantification:</strong> Methods for modeling and quantifying the effects of maintenance interventions</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Bayesian Neural Networks:</strong> Application of BNNs for large-scale infrastructure deterioration modeling</p>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Publications</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <FaFileAlt className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-500">2024 - Journal Publication</span>
            </div>
            <h4 className="text-gray-200 font-medium mb-2">
              Scalable Probabilistic Deterioration Model based on Visual Inspections and Structural Attributes from Large Networks of Bridges
            </h4>
            <p className="text-gray-400 text-sm mb-2">S.A.K. Fakhri, Z. Hamida, J-A. Goulet</p>
            <p className="text-gray-500 text-sm">Journal of Advanced Engineering Informatics</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <FaFileAlt className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-500">2023 - Journal Publication</span>
            </div>
            <h4 className="text-gray-200 font-medium mb-2">
              Analytical Inference for the Inspectors Uncertainty Using Network-Scale Visual Inspections
            </h4>
            <p className="text-gray-400 text-sm mb-2">B. Laurent, B. Deka, Z. Hamida, J-A. Goulet</p>
            <p className="text-gray-500 text-sm">Journal of Computing in Civil Engineering</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <FaFileAlt className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-500">2022 - Journal Publication</span>
            </div>
            <h4 className="text-gray-200 font-medium mb-2">
              OpenIPDM: A Probabilistic Framework for Estimating the Deterioration and Effect of Interventions on Bridges
            </h4>
            <p className="text-gray-400 text-sm mb-2">Z. Hamida, B. Laurent and J-A. Goulet</p>
            <p className="text-gray-500 text-sm">SoftwareX</p>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Research Impact</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-gray-400 mb-4">
            This research provides essential tools for infrastructure asset management, enabling transportation 
            agencies to make informed decisions about maintenance strategies and resource allocation. The 
            developed methods have direct applications in improving public safety and optimizing infrastructure investments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="text-gray-300 font-medium mb-2">Practical Applications:</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Infrastructure condition forecasting</li>
                <li>• Maintenance strategy optimization</li>
                <li>• Quantifying the inspectors' uncertainty</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-300 font-medium mb-2">Scientific Advances:</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Inspector bias quantification</li>
                <li>• Scalable deterioration models</li>
                <li>• Bayesian uncertainty methods</li>
                <li>• Open-source software tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
