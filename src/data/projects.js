/**
 * Project case studies — the centerpiece of Jeel Donga's portfolio.
 * Each project is a rich, detailed object designed for deep-dive case study pages.
 */

export const projects = [
  // ─────────────────────────────────────────────
  // 1. Smart Doc AI
  // ─────────────────────────────────────────────
  {
    id: 'proj-001',
    slug: 'smart-doc-ai',
    title: 'Smart Doc AI',
    subtitle: 'AI-Powered Document Intelligence & Conversational Search Platform',

    description:
      'Built a full-stack document intelligence platform that enables users to upload, manage, and interact with documents through AI-powered natural language conversations using Google Gemini AI.',

    problem:
      'Finding relevant information within large documents is time-consuming and traditional search systems lack contextual understanding, making document analysis inefficient for users.',

    solution:
      'Developed an AI-powered document intelligence system that extracts content from uploaded files and enables context-aware question answering, document management, conversation history, and downloadable reports through an intuitive web interface.',

    features: [
      {
        title: 'Multi-Format Document Processing',
        description:
          'Supports PDF, DOCX, TXT, and CSV document upload with automated content extraction.',
      },
      {
        title: 'AI-Powered Document Q&A',
        description:
          'Uses Google Gemini AI to provide context-aware answers from uploaded documents.',
      },
      {
        title: 'Conversation Management',
        description:
          'Maintains persistent chat history with support for session management and conversation organization.',
      },
      {
        title: 'Secure Authentication',
        description:
          'Implements JWT-based authentication and user-specific document access control.',
      },
      {
        title: 'Export & Analytics',
        description:
          'Generates downloadable PDF/TXT reports and provides document usage analytics.',
      },
    ],

    techStack: [
      'ReactJS',
      'Next.js',
      'FastAPI',
      'Python',
      'MongoDB',
      'Google Gemini API',
      'JWT Authentication',
      'REST APIs',
      'Tailwind CSS',
      'ReportLab',
    ],

    architecture: {
      description:
        'Document Upload → Content Extraction → Gemini AI Processing → Chat Management → Analytics & Export System',
    },

    challenges: [
      {
        challenge:
          'Processing multiple document formats efficiently.',
        solution:
          'Built optimized content extraction pipelines for PDF, DOCX, TXT, and CSV files.',
      },
      {
        challenge:
          'Maintaining persistent AI conversations across sessions.',
        solution:
          'Implemented MongoDB-based chat storage and conversation management functionality.',
      },
    ],

    metrics: [
      {
        label: 'Document Formats',
        value: '4+',
        description:
          'Supports PDF, DOCX, TXT, and CSV document processing.',
      },
      {
        label: 'AI Model',
        value: 'Gemini',
        description:
          'Google Gemini-powered context-aware document conversations.',
      },
      {
        label: 'Architecture',
        value: 'Full-Stack',
        description:
          'Frontend, Backend, AI Integration, Authentication, and Database Management.',
      },
    ],

    githubUrl: 'https://github.com/JEELDONGA18/Smart-Doc-AI-New',

    liveUrl: 'https://smart-doc-ai-new.vercel.app/',

    featured: true,
    category: 'full-stack',
    status: 'completed',
  },

  // ─────────────────────────────────────────────
  // 2. TransitGuard
  // ─────────────────────────────────────────────
  {
    id: 'proj-002',
    slug: 'transitguard',
    title: 'TransitGuard',
    subtitle: 'Computer Vision-Based Revenue Leakage Detection for Public Transportation',

    description:
      'Built an AI-powered transportation analytics platform that uses Computer Vision and real-time passenger counting to detect ticketing discrepancies, reduce revenue leakage, and provide operational insights for public transport authorities.',

    problem:
      'Public transportation systems often face revenue losses due to manual ticketing processes, limited monitoring, and the lack of automated mechanisms to verify whether issued tickets match actual passenger occupancy.',

    solution:
      'Developed a Computer Vision-driven analytics pipeline that monitors passenger boarding activities, estimates real-time occupancy, compares passenger counts with ticket issuance records, and generates alerts for potential revenue leakage through an interactive analytics dashboard.',

    features: [
      {
        title: 'Passenger Counting',
        description:
          'Used YOLOv8 and OpenCV to detect and count passengers in real time.',
      },
      {
        title: 'Ticket Verification',
        description:
          'Compared passenger occupancy data with ticket issuance records to identify discrepancies.',
      },
      {
        title: 'Revenue Leakage Detection',
        description:
          'Detected anomalies between passenger counts and ticket transactions using analytics-based validation.',
      },
      {
        title: 'Operational Analytics Dashboard',
        description:
          'Visualized occupancy trends, route performance, and ticket compliance metrics for transport authorities.',
      },
    ],

    techStack: [
      'Python',
      'YOLOv8',
      'OpenCV',
      'TensorFlow',
      'FastAPI',
      'React',
      'MongoDB',
      'REST APIs',
      'Computer Vision',
    ],

    architecture: {
      description:
        'Video Capture → Passenger Detection (YOLOv8) → Ticket Verification → Revenue Leakage Detection → Analytics Dashboard',
    },

    challenges: [
      {
        challenge:
          'Accurately counting passengers in crowded transportation environments.',
        solution:
          'Implemented object tracking and multi-frame validation techniques to improve counting accuracy.',
      },
      {
        challenge:
          'Synchronizing passenger occupancy data with ticket issuance records.',
        solution:
          'Designed a timestamp-based verification framework to correlate boarding events with ticket transactions.',
      },
    ],

    metrics: [
      {
        label: 'Grant Funding',
        value: '₹60,000',
        description:
          'Innovation grant awarded for project development and validation.',
      },
      {
        label: 'AI Technology',
        value: 'YOLOv8',
        description:
          'Real-time passenger detection and occupancy estimation using Computer Vision.',
      },
      {
        label: 'Domain',
        value: 'Smart Transportation',
        description:
          'Focused on public transport analytics, monitoring, and revenue protection.',
      },
    ],

    screenshots: [
      {
        src: '/images/projects/transitguard/passenger-counting.png',
        alt: 'Real-time passenger counting and occupancy estimation dashboard',
      },
      {
        src: '/images/projects/transitguard/revenue-analytics.png',
        alt: 'Revenue leakage detection and ticket verification analytics dashboard',
      },
      {
        src: '/images/projects/transitguard/operations-dashboard.png',
        alt: 'Public transport operational analytics and route monitoring dashboard',
      },
    ],

    githubUrl: 'https://github.com/jeeldonga/transitguard',

    liveUrl: 'https://transitguard-demo.vercel.app',

    featured: true,
    category: 'ai-ml',
    status: 'completed',
  },

  // ─────────────────────────────────────────────
  // 3. EV Trend Prediction & Analysis
  // ─────────────────────────────────────────────
  {
    id: 'proj-003',
    slug: 'ev-trend-analysis',
    title: 'EV Trend Prediction & Analysis',
    subtitle: 'Data-Driven Electric Vehicle Analytics & Forecasting Platform',

    description:
      'Built a data analytics platform for electric vehicle adoption forecasting, pricing analysis, charging infrastructure optimization, geo-spatial visualization, and environmental impact assessment using Python, machine learning, and data visualization techniques.',

    problem:
      'Understanding EV adoption trends, pricing dynamics, charging infrastructure requirements, and environmental impact from large-scale transportation datasets remains challenging for policymakers, researchers, and businesses.',

    solution:
      'Developed an end-to-end analytics pipeline that processes EV registration datasets to uncover adoption patterns, forecast future growth, optimize charging infrastructure planning, and estimate environmental impact through interactive visualizations.',

    features: [
      {
        title: 'EV Adoption Trend Analysis',
        description:
          'Analyzed year-over-year EV registration growth across regions and vehicle categories.',
      },
      {
        title: 'Growth Forecasting',
        description:
          'Applied predictive analytics techniques to forecast future EV adoption trends.',
      },
      {
        title: 'Charging Infrastructure Analysis',
        description:
          'Identified optimal charging station locations using geo-spatial analysis.',
      },
      {
        title: 'Price & Range Analytics',
        description:
          'Explored relationships between vehicle pricing, electric range, and market trends.',
      },
      {
        title: 'Environmental Impact Assessment',
        description:
          'Estimated CO₂ emission reductions associated with EV adoption.',
      },
    ],

    techStack: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-Learn',
      'Matplotlib',
      'Seaborn',
      'Folium',
      'Jupyter Notebook',
    ],

    architecture: {
      description:
        'Data preprocessing → Exploratory analysis → Forecasting → Geo-spatial visualization → Insight generation',
    },

    challenges: [
      {
        challenge: 'Cleaning inconsistent EV registration data',
        solution:
          'Implemented preprocessing pipelines for missing value handling, normalization, and feature preparation.',
      },
      {
        challenge: 'Visualizing geographic adoption patterns',
        solution:
          'Used Folium-based geo-spatial mapping and clustering techniques to identify infrastructure opportunities.',
      },
    ],

    metrics: [
      {
        label: 'Analysis Modules',
        value: '6',
        description:
          'Covered adoption trends, forecasting, pricing, performance, charging infrastructure, and environmental impact.',
      },
      {
        label: 'Visualizations',
        value: '10+',
        description:
          'Generated analytical charts, dashboards, and geo-spatial maps.',
      },
      {
        label: 'Dataset Records',
        value: '100K+',
        description:
          'Processed large-scale EV registration records for analysis.',
      },
    ],

    screenshots: [
      {
        src: 'https://raw.githubusercontent.com/JEELDONGA18/EV-Trend-Prediction-and-Analysis/main/images/workflow_diagram.png',
        alt: 'Work Flow of the project',
      },
      {
        src: 'https://raw.githubusercontent.com/JEELDONGA18/EV-Trend-Prediction-and-Analysis/main/outputs/charts/ev_price_trend_by_vehicle_type.png',
        alt: 'ev_price_trend_by_vehicle_type',
      },
      {
        src: 'https://raw.githubusercontent.com/JEELDONGA18/EV-Trend-Prediction-and-Analysis/main/outputs/charts/total_co2_emissions_saved.png',
        alt: 'total_co2_emissions_saved',
      },
      {
        src: 'https://raw.githubusercontent.com/JEELDONGA18/EV-Trend-Prediction-and-Analysis/main/outputs/charts/co2_emissions_saved_over_time.png',
        alt: 'co2_emissions_saved_over_time',
      },
    ],

    githubUrl: 'https://github.com/JEELDONGA18/EV-Trend-Prediction-and-Analysis',

    liveUrl:
      'https://github.com/JEELDONGA18/EV-Trend-Prediction-and-Analysis/blob/main/README.md',

    featured: true,
    category: 'data-science',
    status: 'completed',
  },

  // ─────────────────────────────────────────────
  // 4. Multi-Organ Segmentation Research
  // ─────────────────────────────────────────────
  {
    id: 'proj-004',
    slug: 'multi-organ-segmentation',
    title: 'Multi-Organ Segmentation Research',
    subtitle: 'Transformer-Based Medical Image Segmentation Framework',

    description:
      'Conducted a deep learning research study comparing CNN and Transformer-based architectures for multi-organ segmentation in laparoscopic surgical images using the Dresden Surgical Anatomy Dataset.',

    problem:
      'Accurate organ segmentation in laparoscopic surgery is challenging due to occlusions, illumination variations, class imbalance, and the small size of certain organs such as the pancreas.',

    solution:
      'Developed a unified experimental framework to benchmark U-Net, DeepLabV3+, Swin U-Net, and Swin UNETR. Implemented multi-class mask generation, weighted Dice-loss optimization, and comprehensive evaluation pipelines to analyze segmentation performance across seven abdominal organs.',

    features: [
      {
        title: 'Multi-Architecture Benchmarking',
        description:
          'Compared U-Net, DeepLabV3+, Swin U-Net, and Swin UNETR under identical training conditions.',
      },
      {
        title: 'Multi-Class Segmentation Pipeline',
        description:
          'Combined seven organ masks into a unified multi-class segmentation framework.',
      },
      {
        title: 'Small Organ Optimization',
        description:
          'Applied weighted Dice-loss strategies to improve segmentation performance for underrepresented organs.',
      },
      {
        title: 'Transformer vs CNN Evaluation',
        description:
          'Analyzed performance differences between convolutional and Transformer-based segmentation models.',
      },
      {
        title: 'Comprehensive Metrics Analysis',
        description:
          'Evaluated models using Dice Score, IoU, Accuracy, Precision, and Recall.',
      },
    ],

    techStack: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'Torchvision',
      'timm',
      'OpenCV',
      'Albumentations',
      'NumPy',
      'CUDA',
      'Matplotlib',
    ],

    architecture: {
      description:
        'Data Preprocessing → Multi-Class Mask Generation → Model Training → Segmentation Evaluation → Performance Visualization',
    },

    challenges: [
      {
        challenge:
          'Improving segmentation performance for small organs affected by severe class imbalance.',
        solution:
          'Implemented a modified Dice-loss weighting strategy to prioritize underrepresented organ classes.',
      },
      {
        challenge:
          'Creating a fair comparison framework across multiple segmentation architectures.',
        solution:
          'Used identical preprocessing, dataset splits, training settings, and evaluation metrics for all models.',
      },
    ],

    metrics: [
      {
        label: 'Best Mean Dice',
        value: '0.8872',
        description:
          'Highest segmentation performance achieved by Swin U-Net.',
      },
      {
        label: 'Best Mean IoU',
        value: '0.8135',
        description:
          'Best overall intersection-over-union score achieved by Swin U-Net.',
      },
      {
        label: 'Models Evaluated',
        value: '4',
        description:
          'U-Net, DeepLabV3+, Swin U-Net, and Swin UNETR benchmarked under identical conditions.',
      },
    ],

    screenshots: [
      {
        src: 'https://raw.githubusercontent.com/JEELDONGA18/Transformer-based-Multi-Organ-Segmentation-Research/main/screenshots/dataset_view.png',
        alt: 'Dataset overview and sample laparoscopic images with organ masks',
      },
      {
        src: 'https://raw.githubusercontent.com/JEELDONGA18/Transformer-based-Multi-Organ-Segmentation-Research/main/screenshots/swinunet1.png',
        alt: 'Swin U-Net segmentation output for multi-organ laparoscopic images',
      },
      {
        src: 'https://raw.githubusercontent.com/JEELDONGA18/Transformer-based-Multi-Organ-Segmentation-Research/main/screenshots/swinunetr1.png',
        alt: 'Swin UNETR segmentation output for multi-organ laparoscopic images',
      },
    ],

    githubUrl:
      'https://github.com/JEELDONGA18/Transformer-based-Multi-Organ-Segmentation-Research',

    liveUrl:
      'https://github.com/JEELDONGA18/Transformer-based-Multi-Organ-Segmentation-Research/blob/main/README.md',

    featured: true,
    category: 'research',
    status: 'completed',
  },
  {
    id: 'proj-005',
    slug: 'connector-defect-detection',
    title: 'AI-Based Connector Defect Detection',
    subtitle: 'Industrial Quality Inspection using Computer Vision & IoT',

    description:
      'An AI-powered industrial inspection system that automates connector quality analysis using Computer Vision, deep learning, and real-time hardware integration. The system detects manufacturing defects, classifies fault types, and triggers automated alerts for quality control workflows.',

    problem:
      'Manual inspection of industrial connectors is time-consuming, error-prone, and difficult to scale in high-volume manufacturing environments. Human inspectors may miss subtle defects, resulting in reduced product quality and increased operational costs.',

    solution:
      'Developed a real-time inspection platform using TensorFlow, OpenCV, and live camera feeds to automatically detect connector defects and classify fault categories. Integrated hardware-based indicators and alert mechanisms to enable automated quality-control decisions and improve inspection efficiency.',

    features: [
    {
      title: 'Real-Time Defect Detection',
      description:
        'Captures live images from industrial cameras and performs automated defect inspection in real time.',
    },
    {
      title: 'AI-Based Fault Classification',
      description:
        'Deep learning models classify connector defects and identify fault categories with high accuracy.',
    },
    {
      title: 'Automated Quality Control',
      description:
        'Reduces manual inspection effort through automated pass/fail decision-making.',
    },
    {
      title: 'Hardware Alert Integration',
      description:
        'Integrated LEDs, indicators, and alert mechanisms for immediate operator feedback.',
    },
    {
      title: 'Live Inspection Dashboard',
      description:
        'Displays inspection results, defect status, and operational analytics in real time.',
    },
    ],

    techStack: [
      'Python',
      'TensorFlow',
      'OpenCV',
      'NumPy',
      'Computer Vision',
      'IoT',
      'Embedded Systems',
      'Industrial Cameras',
    ],

    architecture: {
      description:
        'Camera Input → Image Processing → Defect Detection Model → Fault Classification → Hardware Alerts → Inspection Dashboard',
    },

    challenges: [
      {
        challenge:
          'Maintaining detection accuracy under varying lighting and industrial conditions.',
        solution:
          'Applied image preprocessing, normalization, and data augmentation techniques to improve model robustness.',
      },
      {
        challenge:
          'Integrating AI predictions with hardware-based quality control workflows.',
        solution:
          'Developed a communication layer connecting the defect detection system with external indicators and alert mechanisms.',
      },
    ],

    metrics: [
      {
        label: 'Detection Accuracy',
        value: '90.32%',
        description:
          'Overall defect classification accuracy achieved on industrial connector datasets.',
      },
      {
        label: 'Inspection Mode',
        value: 'Real-Time',
        description:
          'Live camera-based inspection and fault detection.',
      },
      {
        label: 'Domain',
        value: 'Industry 4.0',
        description:
          'AI-driven manufacturing quality inspection.',
      },
    ],

    githubUrl: '',

    featured: true,
    category: 'ai-ml',
    status: 'completed',
    }
];

/**
 * Helper: Get a project by its slug.
 */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

/**
 * Helper: Get featured projects.
 */
export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

/**
 * Helper: Get projects by category.
 */
export function getProjectsByCategory(category) {
  return projects.filter((p) => p.category === category);
}

export default projects;
