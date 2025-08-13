'use client';

import { FaIndustry, FaCloud, FaCogs, FaLock, FaSearch, FaLightbulb, FaChartLine, FaShieldAlt } from 'react-icons/fa';

export function GoldenRunContent() {
  return (
    <div className="space-y-8">
      {/* Project Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-400 mb-4">
          A "golden run" refers to a period 
          during manufacturing when all systems operate at peak efficiency, producing optimal quality output with minimal 
          waste and maximum throughput.
        </p>
      </section>


      

      {/* Key Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaSearch className="w-6 h-6 text-blue-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Real-time Detection</h3>
            <p className="text-gray-400 text-sm">
              Continuous monitoring and instant identification of golden run periods
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaLightbulb className="w-6 h-6 text-yellow-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Intelligent Recommendations</h3>
            <p className="text-gray-400 text-sm">
              Data-driven suggestions for initiating and extending optimal performance periods
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaCloud className="w-6 h-6 text-green-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Azure Deployment</h3>
            <p className="text-gray-400 text-sm">
              Scalable cloud deployment using Azure AI Services for enterprise reliability
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaChartLine className="w-6 h-6 text-purple-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Process Optimization</h3>
            <p className="text-gray-400 text-sm">
              Comprehensive manufacturing process intelligence and performance enhancement
            </p>
          </div>
        </div>
      </section>

      {/* Azure AI Services Integration */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Azure AI Services Integration</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-200 mb-3">Cloud-Native Manufacturing Intelligence</h3>
          <p className="text-gray-400 mb-4">
            The system is deployed using <strong>Azure AI Services</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="text-gray-300 font-medium mb-2">Azure Services Utilized:</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Azure Machine Learning</li>
                <li>• Azure Cognitive Services</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-300 font-medium mb-2">Enterprise Benefits:</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Real-time data processing</li>
                <li>• Enterprise security compliance</li>
                <li>• High availability and reliability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Business Impact */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Business Impact</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Production Efficiency:</strong> Increase in overall manufacturing efficiency through golden run optimization</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Quality Enhancement:</strong> Improved product quality consistency during optimized production periods</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Waste Reduction:</strong> Minimized material waste and resource consumption through optimized processes</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Operational Intelligence:</strong> Data-driven insights for continuous manufacturing process improvement</p>
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
            This project was developed for Kruger Products, a leading manufacturer in North America.
          </p>
          <div className="text-sm text-gray-500">
            <p>Industry: Manufacturing and Consumer Products</p>
            <p>Focus: Process optimization and quality enhancement</p>
            <p>Application: Production line efficiency and golden run maximization</p>
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
              This project involves proprietary manufacturing optimization technology and confidential process intelligence. 
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
}
