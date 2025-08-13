import { Publication } from '@/types/publication';

export const publications: Publication[] = [
  // Theses
  {
    title: "Stochastic Modelling of Infrastructures Deterioration and Interventions based on Network-Scale Visual Inspections",
    authors: ["Z. Hamida"],
    journal: "Ph.D. Thesis, Polytechnique Montreal",
    year: 2020,
    pdfUrl: "/pdfs/ZacharyHamida_PhDThesis_2020.pdf",
    type: "thesis"
  },
  {
    title: "Hybrid Optimization Techniques for Oil Field Development",
    authors: ["Z. Hamida"],
    journal: "M.Sc. Thesis, American University of Beirut",
    year: 2016,
    pdfUrl: "https://scholarworks.aub.edu.lb/bitstream/handle/10938/20890/t-6558.pdf?sequence=1",
    type: "thesis"
  },
  {
    title: "Scalable Probabilistic Deterioration Model based on Visual Inspections and Structural Attributes from Large Networks of Bridges",
    authors: ["S.A.K. Fakhri", "Z. Hamida", "J-A. Goulet"],
    journal: "Journal of Advanced Engineering Informatics",
    year: 2024,
    doi: "10.1016/j.aei.2024.103035",
    pdfUrl: "/pdfs/SSMBNN_Fakhri_Hamida_Goulet_2024.pdf",
    type: "journal"
  },
  {
    title: "Quantifying the relative change in maintenance costs due to delayed maintenance actions on transportation infrastructure",
    authors: ["Z. Hamida", "J-A. Goulet"],
    journal: "Journal of Performance of Constructed Facilities",
    year: 2024,
    doi: "10.1061/JPCFEV.CFENG-4802",
    pdfUrl: "/pdfs/DST_Hamida_Goulet_2024.pdf",
    videoUrl: "https://youtu.be/Indb_dHdXB0",
    type: "journal"
  },
  {
    title: "Analytical Inference for the Inspectors Uncertainty Using Network-Scale Visual Inspections",
    authors: ["B. Laurent", "B. Deka", "Z. Hamida", "J-A. Goulet"],
    journal: "Journal of Computing in Civil Engineering",
    year: 2023,
    doi: "10.1061/JCCEE5.CPENG-5333",
    pdfUrl: "/pdfs/BL_BD_ZH_JG_2023.pdf",
    videoUrl: "https://www.youtube.com/watch?v=TYxGk99cC6M",
    type: "journal"
  },
  {
    title: "Hierarchical Reinforcement Learning for Transportation Infrastructure Maintenance Planning",
    authors: ["Z. Hamida", "J-A. Goulet"],
    journal: "Reliability Engineering and System Safety",
    year: 2023,
    doi: "10.1016/j.ress.2023.109214",
    pdfUrl: "/pdfs/Hamida_Goulet_RLI_2023_preprint.pdf",
    videoUrl: "https://youtu.be/4jnUAYb9kkI",
    type: "journal"
  },
  {
    title: "OpenIPDM: A Probabilistic Framework for Estimating the Deterioration and Effect of Interventions on Bridges",
    authors: ["Z. Hamida", "B. Laurent", "J-A. Goulet"],
    journal: "SoftwareX",
    year: 2022,
    doi: "10.1016/j.softx.2022.101077",
    videoUrl: "https://youtube.com/playlist?list=PLSng2Crfnjmpu7RbEsfExY3gwI2FwxIjU",
    type: "journal"
  },
  {
    title: "A Stochastic Model for Estimating the Network-Scale Deterioration and Effect of Interventions on Bridges",
    authors: ["Z. Hamida", "J-A. Goulet"],
    journal: "Structural Control and Health Monitoring",
    year: 2022,
    doi: "10.1002/stc.2916",
    pdfUrl: "/pdfs/Hamida_Goulet_NSA_2022.pdf",
    videoUrl: "https://www.youtube.com/watch?v=vx6ATEoEuUE",
    type: "journal"
  },
  {
    title: "Quantifying the Effects of Interventions Based on Visual Inspections from a Network of Bridges",
    authors: ["Z. Hamida", "J-A. Goulet"],
    journal: "Structure and Infrastructure Engineering",
    year: 2021,
    doi: "10.1080/15732479.2021.1919149",
    pdfUrl: "/pdfs/QEI_Hamida_Goulet_2021 Preprint.pdf",
    videoUrl: "https://www.youtube.com/watch?v=8CsiYl1LdUI",
    type: "journal"
  },
  {
    title: "Network-Scale Deterioration Modelling of Bridges Based on Visual Inspections and Structural Attributes",
    authors: ["Z. Hamida", "J-A. Goulet"],
    journal: "Structural Safety",
    year: 2020,
    doi: "10.1016/j.strusafe.2020.102024",
    pdfUrl: "/pdfs/SSMKR_Hamida_Goulet_2020 Preprint.pdf",
    videoUrl: "https://www.youtube.com/watch?v=YLkn-RaC2IU",
    type: "journal"
  },
  {
    title: "Modeling infrastructure degradation from visual inspections using network‐scale state‐space models",
    authors: ["Z. Hamida", "J-A. Goulet"],
    journal: "Structural Control and Health Monitoring",
    year: 2020,
    doi: "10.1002/stc.2582",
    pdfUrl: "/pdfs/Hamida_Goulet_VI_SSM_2020.pdf",
    videoUrl: "https://www.youtube.com/watch?v=GBk35UW9m5A",
    type: "journal"
  },
  {
    title: "An efficient geometry-based optimization approach for well placement in oil fields",
    authors: ["Z. Hamida", "F. Azizi", "G. Saad"],
    journal: "Journal of Petroleum Science and Engineering",
    year: 2017,
    doi: "10.1016/j.petrol.2016.10.055",
    pdfUrl: "/pdfs/WPO_Hamida_et_al_2017.pdf",
    videoUrl: "https://www.youtube.com/watch?v=Ta96GRc1aMo",
    type: "journal"
  },
  // Conference Papers
  {
    title: "Maintenance Planning for Bridges Using Hierarchical Reinforcement Learning",
    authors: ["Z. Hamida", "J-A. Goulet"],
    journal: "14th International Conference on Applications of Statistics and Probability in Civil Engineering, ICASP14",
    year: 2023,
    pdfUrl: "/pdfs/Hamida_Goulet_HRL_ICASP14.pdf",
    type: "conference"
  },
  {
    title: "Bayesian Neural Networks for Large-Scale Infrastructure Deterioration Models",
    authors: ["S.A.K. Fakhri", "Z. Hamida", "J-A. Goulet"],
    journal: "14th International Conference on Applications of Statistics and Probability in Civil Engineering, ICASP14",
    year: 2023,
    pdfUrl: "/pdfs/ICASP14_SSM_TAGI.pdf",
    type: "conference"
  },
  {
    title: "Estimating the Bias Associated with Inspectors in the Context of Visual Inspections on Infrastructures",
    authors: ["B. Laurent", "Z. Hamida", "J-A. Goulet"],
    journal: "11th International Conference on Structural Health Monitoring of Intelligent Infrastructure (SHMII-11)",
    year: 2022,
    pdfUrl: "/pdfs/IBF_Laurent_Hamida_Goulet_2022.pdf",
    type: "conference"
  },
  {
    title: "Modelling the Deterioration of Infrastructures Using Network-Scale Visual Inspections",
    authors: ["Z. Hamida", "J-A. Goulet"],
    journal: "11th International Conference on Structural Health Monitoring of Intelligent Infrastructure (SHMII-11)",
    year: 2022,
    pdfUrl: "/pdfs/Hamida_Goulet_OFD_2022.pdf",
    type: "conference"
  },
  {
    title: "State-Space Models for Network-Scale Analysis of Bridge Inspection Data",
    authors: ["Z. Hamida", "J-A. Goulet"],
    journal: "13th International Conference on Applications of Statistics and Probability in Civil Engineering (ICASP13)",
    year: 2019,
    pdfUrl: "https://s-space.snu.ac.kr/bitstream/10371/153317/1/106.pdf",
    type: "conference"
  },
  {
    title: "Modeling Infrastructure Degradation from Visual Inspections Using Network-Scale State-Space Models",
    authors: ["Z. Hamida", "J-A. Goulet"],
    journal: "Modeling and Numerical Methods for Uncertainty Quantification (MNMUQ 2019)",
    year: 2019,
    pdfUrl: "/pdfs/mnmuq2019poster.pdf",
    type: "conference"
  },
  {
    title: "OpenIPDM: Une librairie ouverte pour modéliser la dégradation d'un parc d'infrastructures",
    authors: ["Z. Hamida", "J-A. Goulet"],
    journal: "29e Colloque sur la progression de la recherche québécoise concernant les ouvrages d'art",
    year: 2023,
    type: "conference"
  }
];
