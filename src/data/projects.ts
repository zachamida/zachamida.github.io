import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'diagnostic-ai-agents',
    title: 'Diagnostic AI Agents',
    description: 'Advanced AI agent system for diagnostic applications using agentic frameworks with RAG capabilities and Azure AI Services deployment.',
    type: 'industry',
    technologies: ['Python', 'PromptFlow', 'CrewAI', 'Azure AI', 'RAG'],
    date: '2025',
    url: '/projects/diagnostic-ai-agents',
    image: '/images/projects/diagnostic-ai.png',
    hasDetailPage: true,
    highlights: [
      'Building agentic frameworks and applications',
      'RAG application integration',
      'Azure AI Services deployment',
      'Manufactring line diagnostic capabilities'
    ]
  },
  {
    id: 'golden-run-manufacturing',
    title: 'Golden Run in Manufacturing',
    description: 'A system for identifying golden runs in manufacturing processes through dual framework approach for detection and condition recommendation.',
    type: 'industry',
    technologies: ['Machine Learning', 'Azure AI', 'Manufacturing Analytics', 'Process Optimization'],
    date: '2025',
    url: '/projects/golden-run-manufacturing',
    image: '/images/projects/golden-run.png',
    hasDetailPage: true,
    highlights: [
      'Dual framework architecture for detection and process recommendation',
      'Azure AI Services deployment',
      'Manufacturing process intelligence'
    ]
  },
  {
    id: 'demand-forecasting',
    title: 'Demand Forecasting for Consumer Goods',
    description: 'Demand forecasting engine for consumer goods using global forecasting models to predict market demand and optimize inventory management.',
    type: 'industry',
    technologies: ['Machine Learning', 'Time Series Analysis', 'Python', 'Forecasting'],
    date: '2024',
    url: '/projects/demand-forecasting',
    image: '/images/projects/demand-forecasting.png',
    hasDetailPage: true,
    highlights: [
      'Global forecasting model implementation',
      'Deployed locally for enterprise use',
      'Advanced time series analysis techniques'
    ]
  },
  {
    id: 'openipdm-light',
    title: 'OpenIPDM',
    description: 'A Desktop application with a cloud version (OpenIPDM Light) for infrastructure probabilistic deterioration modeling, providing an accessible interface for analyzing and predicting transportation infrastructure conditions.',
    type: 'industry',
    technologies: ['MATLAB','Python', 'Streamlit', 'Machine Learning', 'State-Space Models'],
    date: '2023',
    url: '/projects/openipdm-light',
    image: '/images/projects/openipdm.png',
    isOpenSource: true,
    githubUrl: 'https://github.com/Bayes-Works/OpenIPDM',
    hasDetailPage: true,
    liveUrl: 'https://openipdm-light.streamlit.app/'
  },
  {
    id: 'cracks-detection',
    title: 'Concrete Surface Cracks Detection',
    description: 'Web application for automated detection of cracks in concrete surfaces using computer vision and deep learning techniques.',
    type: 'industry',
    technologies: ['Computer Vision', 'Deep Learning', 'Python', 'Streamlit'],
    date: '2023',
    url: '/projects/cracks-detection',
    image: '/images/projects/cracks-detection.png',
    isOpenSource: true,
    githubUrl: 'https://github.com/zachamida/Cracks-Detection',
    hasDetailPage: true,
    liveUrl: 'https://cracks-detection.streamlit.app/'
  },
  {
    id: 'maintenance-planning',
    title: 'Planning Maintenance on Transportation Infrastructure',
    description: 'Developed hierarchical reinforcement learning approaches for optimal maintenance planning of transportation infrastructure.',
    type: 'research',
    technologies: ['Reinforcement Learning', 'Python', 'Optimization'],
    date: '2024',
    url: '/projects/maintenance-planning',
    image: '/images/projects/maintenance.png',
    highlights: [
      'Developed a new RL environment for infrastructure maintenance planning (InfraPlanner)',
      'Derived a novel hierarchical reinforcement learning approach',
      'Created efficient maintenance planning strategies'
    ],
    hasDetailPage: true
  },
  {
    id: 'infrastructure-deterioration',
    title: 'Transportation Infrastructure Deterioration Modeling',
    description: 'Created probabilistic models for estimating infrastructure deterioration using network-scale visual inspections and structural attributes.',
    type: 'research',
    technologies: ['Bayesian Models', 'Machine Learning', 'Python'],
    date: '2023',
    url: '/projects/infrastructure-deterioration',
    image: '/images/projects/deterioration.png',
    highlights: [
      'Uncertainty quantification for each inspector',
      'Modelling the effect of interventions',
      'Applied to large-scale infrastructure networks'
    ],
    hasDetailPage: true
  },
  {
    id: 'oil-field-planning',
    title: 'Oil Field Development and Planning',
    description: 'Developed efficient geometry-based optimization approache for well placement in oil fields.',
    type: 'research',
    technologies: ['Optimization', 'Python', 'Numerical Methods'],
    date: '2017',
    url: '/projects/oil-field-planning',
    image: '/images/projects/oil-field.png',
    highlights: [
      'Developed a new genetic operator "similarty operator" for Gentic Algorithms',
      'Evaluated the effectiveness of the similarity operator on synthetic and real data',
      'Improved convergence speedo for well placement optimization problems'
    ],
    hasDetailPage: true
  }
];
