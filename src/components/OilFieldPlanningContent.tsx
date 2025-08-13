'use client';

import {FaCog, FaIndustry, FaUniversity, FaFileAlt, FaBrain, FaRocket } from 'react-icons/fa';

export function OilFieldPlanningContent() {
  return (
    <div className="space-y-8">
      {/* Project Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-400 mb-4">
          This project examines the development of a problem-specific Genetic Algorithm (GA) for optimal 
          well placement in oil fields. The research addresses the critical challenge of determining the 
          most effective locations for oil wells to maximize extraction efficiency while minimizing 
          operational costs and environmental impact.
        </p>
        <p className="text-gray-400">
          The outcome of this project is a comprehensive optimization framework that significantly improves 
          the convergence rate to optimal solutions while maintaining relatively low computational costs, 
          making it practical for real-world oil field development applications.
        </p>
      </section>

      {/* Funding & Industry Partnership */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Funding & Industry Partnership</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <FaIndustry className="w-6 h-6 text-orange-400" />
            <h3 className="text-lg font-medium text-gray-200">Schlumberger</h3>
          </div>
          <p className="text-gray-400">
            This research is funded by Schlumberger.
          </p>
        </div>
      </section>

      {/* Technical Innovation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Innovation</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaBrain className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-medium text-gray-200">Geometry-Based Optimization</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Development of an efficient geometry-based optimization approach that leverages spatial 
              relationships and geological constraints to improve well placement decisions.
            </p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaCog className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-medium text-gray-200">Novel Genetic Operators</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Introduction of a problem-specific "similarity operator" for Genetic Algorithms that 
              significantly improves convergence speed for well placement optimization problems.
            </p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaRocket className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-medium text-gray-200">Performance Optimization</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Enhanced convergence rates while maintaining computational efficiency, making the approach 
              suitable for large-scale oil field optimization problems.
            </p>
          </div>
        </div>
      </section>

      {/* Development Methods */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Development Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-200 mb-2">Optimization Techniques</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Genetic Algorithm (GA)</li>
              <li>• Custom similarity operators</li>
              <li>• Multi-objective optimization</li>
              <li>• Constraint handling methods</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-200 mb-2">Machine Learning</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Artificial Neural Networks</li>
              <li>• Similarity measures</li>
              <li>• Pattern recognition</li>
              <li>• Adaptive algorithms</li>
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
                <li><strong>Core MATLAB:</strong> Algorithm development and numerical optimization</li>
                <li><strong>GUI Design:</strong> Interactive interfaces for well placement visualization</li>
                <li><strong>Optimization Toolbox:</strong> Advanced optimization algorithms and methods</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">Reservoir Simulation</h3>
              <ul className="space-y-2 text-gray-400">
                <li><strong>Eclipse Reservoir Simulator:</strong> Industry-standard reservoir modeling</li>
                <li><strong>Production Forecasting:</strong> Well performance prediction</li>
                <li><strong>Geological Modeling:</strong> Subsurface characterization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Research Contributions */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Research Contributions</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Similarity Operator:</strong> Development of a novel "similarity operator" for Genetic Algorithms specifically designed for well placement problems</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Convergence Improvement:</strong> Significant enhancement in convergence speed for well placement optimization problems</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Computational Efficiency:</strong> Maintained low computational cost while improving solution quality</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Validation:</strong> Comprehensive evaluation on both synthetic and real oil field data</p>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Research Methodology</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-gray-400 mb-4">
            The research methodology combines advanced optimization techniques with domain-specific knowledge 
            of oil field development. The approach integrates geological constraints, production forecasting, 
            and economic considerations into a unified optimization framework.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="text-gray-300 font-medium mb-2">Algorithm Development:</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Custom genetic operators design</li>
                <li>• Similarity measure formulation</li>
                <li>• Convergence analysis</li>
                <li>• Performance benchmarking</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-300 font-medium mb-2">Validation Approach:</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Synthetic test cases</li>
                <li>• Real oil field data</li>
                <li>• Comparative analysis</li>
                <li>• Statistical evaluation</li>
              </ul>
            </div>
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
              <span className="text-sm text-gray-500">2017 - Journal Publication</span>
            </div>
            <h4 className="text-gray-200 font-medium mb-2">
              An efficient geometry-based optimization approach for well placement in oil fields
            </h4>
            <p className="text-gray-400 text-sm mb-2">Z. Hamida, F. Azizi, G. Saad</p>
            <p className="text-gray-500 text-sm">Journal of Petroleum Science and Engineering 149, 383-392</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <FaFileAlt className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-500">2016 - Master's Thesis</span>
            </div>
            <h4 className="text-gray-200 font-medium mb-2">
              Hybrid Optimization Techniques for Oil Field Development
            </h4>
            <p className="text-gray-400 text-sm mb-2">Z. Hamida</p>
            <p className="text-gray-500 text-sm">M.Sc. Thesis, American University of Beirut, Lebanon</p>
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Industry Impact</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-gray-400 mb-4">
            This research addresses critical challenges in oil field development by providing more efficient 
            optimization methods for well placement decisions. The improved convergence rates and computational 
            efficiency make the approach suitable for real-world applications in the petroleum industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="text-gray-300 font-medium mb-2">Economic Benefits:</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Optimized well placement strategies</li>
                <li>• Reduced development costs</li>
                <li>• Improved oil recovery rates</li>
                <li>• Faster decision-making processes</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-300 font-medium mb-2">Technical Advances:</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Novel genetic algorithm operators</li>
                <li>• Enhanced optimization convergence</li>
                <li>• Geometry-based approaches</li>
                <li>• Computational efficiency improvements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Foundation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Academic Foundation</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <FaUniversity className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-medium text-gray-200">Master's Research Project</h3>
          </div>
          <p className="text-gray-400 mb-4">
            This work was conducted as part of a Master's degree research project at the American University 
            of Beirut, Lebanon, combining academic rigor with industry-relevant applications in petroleum engineering.
          </p>
          <div className="text-sm text-gray-500">
            <p>Institution: American University of Beirut</p>
            <p>Degree: Master of Science (M.Sc.)</p>
            <p>Focus: Hybrid optimization techniques for oil field development</p>
            <p>Industry Partner: Schlumberger</p>
          </div>
        </div>
      </section>
    </div>
  );
}
