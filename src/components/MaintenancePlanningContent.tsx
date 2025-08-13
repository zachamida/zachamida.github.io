'use client';

import { FaRoad, FaBrain, FaChartLine, FaTools, FaCog, FaUniversity, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';

export function MaintenancePlanningContent() {
  return (
    <div className="space-y-8">
      {/* Project Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-400 mb-4">
          This research project focuses on developing a hierarchical decision-making framework for planning 
          network-scale maintenance activities on the network of bridges in the province of Quebec. The project 
          addresses the complex challenge of optimizing maintenance strategies across large infrastructure networks 
          while considering budget constraints, safety requirements, and long-term performance objectives.
        </p>
        <p className="text-gray-400">
          The framework leverages advanced reinforcement learning techniques to create intelligent maintenance 
          planning strategies that can adapt to changing conditions and optimize resource allocation across 
          the entire transportation infrastructure network.
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
              <FaBrain className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-medium text-gray-200">Hierarchical Reinforcement Learning</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Implementation of hierarchical decision-making structures that can handle complex, multi-level 
              maintenance planning decisions across network-scale infrastructure systems.
            </p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaChartLine className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-medium text-gray-200">Deep Q-Learning</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Deep reinforcement learning techniques for learning optimal maintenance policies through interaction 
              with probabilistic infrastructure deterioration models.
            </p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaCog className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-medium text-gray-200">State Estimation & Filtering</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Kalman Filter & Smoother implementation for accurate state estimation and Gaussian Mixture 
              Reduction for probabilistic modeling of transportation infrastructure conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Development Methods */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Development Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-200 mb-2">Machine Learning</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Reinforcement Learning</li>
              <li>• Deep Q-Learning</li>
              <li>• Artificial Neural Networks</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-200 mb-2">Signal Processing</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Kalman Filter & Smoother</li>
              <li>• Gaussian Mixture Reduction</li>
              <li>• State-space modeling</li>
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
              <h3 className="text-lg font-medium text-gray-200 mb-3">Python Ecosystem</h3>
              <ul className="space-y-2 text-gray-400">
                <li><strong>PyTorch:</strong> Deep learning framework for neural network implementation</li>
                <li><strong>Ray:</strong> Distributed computing for scalable reinforcement learning</li>
                <li><strong>TensorBoard:</strong> Visualization and monitoring of training processes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">MATLAB Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><strong>App Designer:</strong> Interactive application development</li>
                <li><strong>Core MATLAB:</strong> Numerical computing and algorithm development</li>
                <li><strong>GitHub:</strong> Version control and collaborative development</li>
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
            <FaTools className="w-6 h-6 text-green-400" />
            <h3 className="text-xl font-medium text-gray-200">InfraPlanner</h3>
          </div>
          <p className="text-gray-400 mb-4">
            An open-source software framework developed as part of this research project. InfraPlanner provides 
            tools and algorithms for infrastructure maintenance planning using reinforcement learning approaches.
          </p>
          <div className="text-sm text-gray-500">
            <p>Type: Open-source research software</p>
            <p>Focus: Reinforcement learning for infrastructure maintenance</p>
            <p>Application: Network-scale bridge maintenance planning</p>
          </div>
        </div>
      </section>

      {/* Key Research Contributions */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Research Contributions</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Hierarchical Framework:</strong> Development of a novel hierarchical decision-making framework for network-scale maintenance planning</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Reinforcement Learning Application:</strong> Innovative application of RL techniques to infrastructure maintenance optimization</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Cost Quantification:</strong> Methods for quantifying the relative change in maintenance costs due to delayed actions</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Real-world Application:</strong> Practical implementation for Quebec's transportation infrastructure network</p>
          </div>
        </div>
      </section>

      {/* Publications & Resources */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Publications & Resources</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <FaFileAlt className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-500">2024 - Journal Publication</span>
            </div>
            <h4 className="text-gray-200 font-medium mb-2">
              Quantifying the relative change in maintenance costs due to delayed maintenance actions on transportation infrastructure
            </h4>
            <p className="text-gray-400 text-sm mb-2">Z. Hamida, J-A. Goulet</p>
            <p className="text-gray-500 text-sm">Journal of Performance of Constructed Facilities</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <FaFileAlt className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-500">2023 - Conference Paper</span>
            </div>
            <h4 className="text-gray-200 font-medium mb-2">
              Maintenance Planning for Bridges Using Hierarchical Reinforcement Learning
            </h4>
            <p className="text-gray-400 text-sm mb-2">Z. Hamida, J-A. Goulet</p>
            <p className="text-gray-500 text-sm">14th International Conference on Applications of Statistics and Probability in Civil Engineering, ICASP14, Dublin, Ireland</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <FaFileAlt className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-500">2023 - Journal Publication</span>
            </div>
            <h4 className="text-gray-200 font-medium mb-2">
              Hierarchical Reinforcement Learning for Transportation Infrastructure Maintenance Planning
            </h4>
            <p className="text-gray-400 text-sm mb-2">Z. Hamida, J-A. Goulet</p>
            <p className="text-gray-500 text-sm">Reliability Engineering and System Safety</p>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Research Impact</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-gray-400 mb-4">
            This research addresses critical challenges in infrastructure management by providing data-driven, 
            intelligent solutions for maintenance planning. The hierarchical reinforcement learning approach 
            enables more efficient resource allocation and improved long-term infrastructure performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="text-gray-300 font-medium mb-2">Practical Benefits:</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Optimized maintenance scheduling</li>
                <li>• Reduced long-term infrastructure costs</li>
                <li>• Interpretable maintenance policies</li>
                <li>• Data-driven decision making</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-300 font-medium mb-2">Scientific Contributions:</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Hierarchical decision-making models</li>
                <li>• Cost quantification methodologies</li>
                <li>• Open-source software tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
