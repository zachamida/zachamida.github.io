'use client';

import { FaGithub, FaExternalLinkAlt, FaDatabase, FaPlay } from 'react-icons/fa';

export function CracksDetectionContent() {
  return (
    <div className="space-y-8">
      {/* Project Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-400 mb-4">
          This project presents an automated solution for detecting cracks in concrete surfaces using advanced computer vision and deep learning techniques. 
          The system employs a U-Net architecture for semantic segmentation, enabling precise identification and localization of cracks in concrete structures.
        </p>
        <p className="text-gray-400">
          The application is deployed as an interactive web interface using Streamlit, allowing users to upload images and receive real-time crack detection results 
          with visual overlays highlighting detected crack regions.
        </p>
      </section>

      {/* Technical Architecture */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Architecture</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-200 mb-2">Model Architecture</h3>
            <p className="text-gray-400">
              The core detection model is based on the <strong>U-Net architecture</strong>, a convolutional neural network specifically designed for 
              semantic segmentation tasks. U-Net's encoder-decoder structure with skip connections enables the model to capture both high-level 
              semantic information and fine-grained spatial details, making it ideal for precise crack detection.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-200 mb-2">Training Methodology</h3>
            <p className="text-gray-400 mb-2">
              The model training incorporates advanced optimization techniques to handle large datasets and improve convergence:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
              <li><strong>Gradient Accumulation:</strong> Enables effective training with larger batch sizes by accumulating gradients over multiple mini-batches before updating model parameters</li>
              <li><strong>Data Augmentation:</strong> Robust augmentation strategies to improve model generalization across different concrete surface conditions</li>
              <li><strong>Transfer Learning:</strong> Leverages pre-trained encoder weights to accelerate training and improve performance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-200 mb-2">Real-time Detection</h3>
            <p className="text-gray-400 text-sm">
              Instant crack detection and visualization with pixel-level accuracy
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-200 mb-2">Web Interface</h3>
            <p className="text-gray-400 text-sm">
              User-friendly Streamlit application for easy image upload and analysis
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-200 mb-2">Open Source</h3>
            <p className="text-gray-400 text-sm">
              Complete source code available for research and development purposes
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-200 mb-2">Scalable Architecture</h3>
            <p className="text-gray-400 text-sm">
              Modular design supporting easy integration and deployment
            </p>
          </div>
        </div>
      </section>

      {/* Dataset Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Dataset</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-200 mb-3">CCSS Dataset V4</h3>
          <p className="text-gray-400 mb-4">
            The model is trained on the Concrete Crack Segmentation Surfaces (CCSS) dataset, a comprehensive collection of 
            concrete surface images with pixel-level crack annotations. This dataset provides diverse examples of crack patterns 
            across different concrete structures and environmental conditions.
          </p>
          <div className="flex items-center gap-2">
            <FaDatabase className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">High-quality annotated images with validation set</span>
          </div>
        </div>
      </section>

      {/* Project Links */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Project Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Live Application */}
          <a
            href="https://cracks-detection.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors group"
          >
            <FaPlay className="w-6 h-6 text-white" />
            <div>
              <h3 className="text-white font-medium">Live Application</h3>
              <p className="text-blue-100 text-sm">Try the crack detection tool</p>
            </div>
            <FaExternalLinkAlt className="w-4 h-4 text-blue-200 ml-auto group-hover:text-white" />
          </a>

          {/* Frontend Source */}
          <a
            href="https://github.com/zachamida/ccd-model-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
          >
            <FaGithub className="w-6 h-6 text-white" />
            <div>
              <h3 className="text-white font-medium">Frontend Source</h3>
              <p className="text-gray-300 text-sm">Streamlit application code</p>
            </div>
            <FaExternalLinkAlt className="w-4 h-4 text-gray-400 ml-auto group-hover:text-white" />
          </a>

          {/* Model Source */}
          <a
            href="https://github.com/zachamida/ccd-model"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
          >
            <FaGithub className="w-6 h-6 text-white" />
            <div>
              <h3 className="text-white font-medium">Vision Model Source</h3>
              <p className="text-gray-300 text-sm">U-Net model implementation</p>
            </div>
            <FaExternalLinkAlt className="w-4 h-4 text-gray-400 ml-auto group-hover:text-white" />
          </a>

          {/* Dataset */}
          <a
            href="https://www.kaggle.com/datasets/parniashokri/ccssdata?select=CCSS-DATA-V4-withVal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors group"
          >
            <FaDatabase className="w-6 h-6 text-white" />
            <div>
              <h3 className="text-white font-medium">Dataset Source</h3>
              <p className="text-orange-100 text-sm">CCSS-DATA-V4 on Kaggle</p>
            </div>
            <FaExternalLinkAlt className="w-4 h-4 text-orange-200 ml-auto group-hover:text-white" />
          </a>
        </div>
      </section>

      {/* Technical Specifications */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">Model Details</h3>
              <ul className="space-y-2 text-gray-400">
                <li><strong>Architecture:</strong> U-Net with skip connections</li>
                <li><strong>Task:</strong> Semantic segmentation</li>
                <li><strong>Input:</strong> RGB concrete surface images</li>
                <li><strong>Output:</strong> Binary crack segmentation masks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3">Training Details</h3>
              <ul className="space-y-2 text-gray-400">
                <li><strong>Optimization:</strong> Gradient accumulation</li>
                <li><strong>Framework:</strong> PyTorch/TensorFlow</li>
                <li><strong>Deployment:</strong> Streamlit Cloud</li>
                <li><strong>Performance:</strong> Real-time inference</li>
              </ul>
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
            <p className="text-gray-400"><strong>Infrastructure Monitoring:</strong> Automated inspection of bridges, buildings, and concrete structures</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Maintenance Planning:</strong> Early detection for preventive maintenance scheduling</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Quality Control:</strong> Construction quality assessment and compliance verification</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
            <p className="text-gray-400"><strong>Research:</strong> Academic studies on concrete degradation and structural health monitoring</p>
          </div>
        </div>
      </section>
    </div>
  );
}
