'use client';

import { FaChartLine, FaIndustry, FaLock, FaServer, FaCog, FaBoxes } from 'react-icons/fa';

export function DemandForecastingContent() {
  return (
    <div className="space-y-8">
      {/* Project Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-400 mb-4">
          This project involved developing an advanced machine learning framework for forecasting demand volume of consumer goods. 
          The system was designed to help optimize inventory management, reduce waste, and improve supply chain efficiency through 
          accurate demand predictions across multiple product categories and market segments.
        </p>
        <p className="text-gray-400">
          Deployed locally for enterprise use, the solution provides real-time forecasting capabilities while maintaining 
          data security and compliance with corporate governance requirements.
        </p>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaChartLine className="w-6 h-6 text-blue-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Global Forecasting</h3>
            <p className="text-gray-400 text-sm">
              Cross-series learning for improved accuracy across product categories
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaServer className="w-6 h-6 text-green-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Local Deployment</h3>
            <p className="text-gray-400 text-sm">
              Enterprise-grade local deployment for data security and compliance
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaCog className="w-6 h-6 text-purple-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">MLOps Integration</h3>
            <p className="text-gray-400 text-sm">
              MLflow integration for model versioning and experiment tracking
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <FaBoxes className="w-6 h-6 text-orange-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-200 mb-2">Inventory Optimization</h3>
            <p className="text-gray-400 text-sm">
              Demand predictions optimized for inventory management and planning
            </p>
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

      {/* Development Tools & Technologies */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Development Tools & Technologies</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">Core Technologies</h3>
              <ul className="space-y-2 text-gray-400">
                <li><strong>Python:</strong> Primary development language</li>
                <li><strong>MLflow:</strong> Model lifecycle management and tracking</li>
                <li><strong>Pandas:</strong> Data manipulation and analysis</li>
                <li><strong>Scikit-learn:</strong> Machine learning algorithms and utilities</li>
                <li><strong>Streamlit:</strong> Interactive dashboard and user interface</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment & Security */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Deployment & Security</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaLock className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-medium text-gray-200">Private Development</h3>
            </div>
            <p className="text-gray-400 text-sm">
              The project code and development details are proprietary and confidential.
            </p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaServer className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-medium text-gray-200">Local Deployment</h3>
            </div>
            <p className="text-gray-400 text-sm">
              The forecasting system was deployed locally within the enterprise environment to ensure data security, 
              compliance with corporate policies.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
}
