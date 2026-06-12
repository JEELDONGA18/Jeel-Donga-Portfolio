/**
 * Skills data organized by category with proof points linking each skill
 * to real projects and experiences — no percentage bars, only evidence.
 */

export const skillCategories = [
  // ─────────────────────────────────────────────
  // AI & Machine Learning
  // ─────────────────────────────────────────────
  {
    category: 'AI & Machine Learning',
    icon: 'Brain',
    description: 'Deep expertise in building and deploying ML models for computer vision, healthcare, and NLP applications.',
    skills: [
      {
        name: 'Python',
        icon: 'Code',
        proofPoints: [
          'Primary language for all AI/ML projects including Smart Doc AI, TransitGuard, and research work.',
          'Built end-to-end ML pipelines from data preprocessing to model deployment.',
          'Delivered 10+ Python workshops as AI/ML Club Technical Lead.',
        ],
      },
      {
        name: 'TensorFlow',
        icon: 'Cpu',
        proofPoints: [
          'Trained CKD risk prediction models for Kidney Healthcare Solution with 91.7% accuracy.',
          'Built custom anomaly detection classifiers for TransitGuard behavior analysis.',
          'Used for transfer learning and fine-tuning on domain-specific medical datasets.',
        ],
      },
      {
        name: 'PyTorch',
        icon: 'Zap',
        proofPoints: [
          'Implemented U-Net, DeepLabV3+, Swin U-Net, and Swin UNETR for multi-organ segmentation research.',
          'Leveraged PyTorch Lightning for standardized training loops with mixed-precision training.',
          'Achieved best Dice Score of 0.847 on laparoscopic segmentation benchmarks.',
        ],
      },
      {
        name: 'OpenCV',
        icon: 'Eye',
        proofPoints: [
          'Real-time video processing pipeline for TransitGuard surveillance system at 34 FPS.',
          'Image preprocessing and augmentation for surgical image segmentation research.',
          'Implemented adaptive histogram equalization for varying lighting conditions.',
        ],
      },
      {
        name: 'Scikit-Learn',
        icon: 'BarChart',
        proofPoints: [
          'Feature engineering and ensemble methods for Kidney Healthcare CKD prediction.',
          'Cross-validation, hyperparameter tuning, and evaluation metrics across projects.',
          'Used for baseline models and comparative analysis in research experiments.',
        ],
      },
      {
        name: 'MONAI',
        icon: 'HeartPulse',
        proofPoints: [
          'Core framework for multi-organ segmentation research with medical imaging transforms.',
          'Leveraged pre-trained weights for Swin UNETR from MONAI model zoo.',
          'Used medical-domain-specific data loaders and loss functions for clinical accuracy.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // LLM & Generative AI
  // ─────────────────────────────────────────────
  {
    category: 'LLM & Generative AI',
    icon: 'Sparkles',
    description: 'Hands-on experience building production RAG systems, agentic workflows, and LLM-powered applications.',
    skills: [
      {
        name: 'LangChain',
        icon: 'Link',
        proofPoints: [
          'Built the complete RAG pipeline for Smart Doc AI — document loading, chunking, retrieval, and generation.',
          'Implemented multi-stage retrieval chains with re-ranking for improved answer accuracy.',
          'Used LangChain Expression Language (LCEL) for composable, streaming-enabled chains.',
        ],
      },
      {
        name: 'LlamaIndex',
        icon: 'BookOpen',
        proofPoints: [
          'Experimented with LlamaIndex for alternative indexing strategies in Smart Doc AI prototyping.',
          'Compared query engine performance between LlamaIndex and LangChain retrieval approaches.',
          'Used for structured data extraction from semi-structured documents.',
        ],
      },
      {
        name: 'RAG Systems',
        icon: 'Search',
        proofPoints: [
          'Designed and built the end-to-end RAG pipeline for Smart Doc AI achieving 94.2% answer accuracy.',
          'Implemented hybrid search (dense + sparse) for optimal retrieval quality.',
          'Developed sliding-window conversation memory for multi-turn RAG interactions.',
        ],
      },
      {
        name: 'Vector Databases',
        icon: 'Database',
        proofPoints: [
          'Deployed Pinecone for production vector storage in Smart Doc AI with metadata filtering.',
          'Used ChromaDB for local development and rapid prototyping of retrieval experiments.',
          'Optimized embedding storage and retrieval latency to under 800ms for real-time Q&A.',
        ],
      },
      {
        name: 'Prompt Engineering',
        icon: 'MessageSquare',
        proofPoints: [
          'Crafted system prompts that reduced LLM hallucination by 40% in Smart Doc AI.',
          'Designed few-shot prompting strategies for domain-specific document understanding.',
          'Built prompt templates with dynamic context injection for citation-grounded responses.',
        ],
      },
      {
        name: 'Embeddings',
        icon: 'Layers',
        proofPoints: [
          'Used OpenAI text-embedding-ada-002 for document and query embedding in Smart Doc AI.',
          'Analyzed embedding space quality using cosine similarity distributions and clustering.',
          'Experimented with open-source embedding models for cost-effective alternatives.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Frontend
  // ─────────────────────────────────────────────
  {
    category: 'Frontend',
    icon: 'Monitor',
    description: 'Building responsive, accessible, and performant user interfaces with modern frameworks.',
    skills: [
      {
        name: 'React',
        icon: 'Atom',
        proofPoints: [
          'Built interactive dashboards for Smart Doc AI, TransitGuard, and Kidney Healthcare Solution.',
          'Developed real-time streaming chat interfaces with WebSocket integration.',
          'Shipped 12 production features during Full-Stack Developer internship at NexGen Solutions.',
        ],
      },
      {
        name: 'Next.js',
        icon: 'Globe',
        proofPoints: [
          'Smart Doc AI frontend built with Next.js App Router and server-side rendering.',
          'This portfolio website is built with Next.js 15 and React 19.',
          'Used API routes for backend-for-frontend patterns during internship projects.',
        ],
      },
      {
        name: 'JavaScript',
        icon: 'FileCode',
        proofPoints: [
          'Primary frontend language across all web-based projects.',
          'Deep understanding of ES6+, async patterns, closures, and the event loop.',
          'Taught JavaScript fundamentals in AI/ML Club workshops for web-integrated ML demos.',
        ],
      },
      {
        name: 'Tailwind CSS',
        icon: 'Palette',
        proofPoints: [
          'Styled all production frontends using Tailwind — dashboards, chat interfaces, and portals.',
          'Implemented responsive, dark-mode-first designs with Tailwind v4 CSS-first configuration.',
          'Pixel-perfect implementation from Figma mockups during NexGen internship.',
        ],
      },
      {
        name: 'Framer Motion',
        icon: 'Play',
        proofPoints: [
          'Smooth page transitions and scroll-triggered animations in this portfolio.',
          'Animated data visualizations in project dashboards for engaging data storytelling.',
          'Micro-interactions and hover effects for premium UI polish.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Backend
  // ─────────────────────────────────────────────
  {
    category: 'Backend',
    icon: 'Server',
    description: 'Designing scalable APIs, real-time systems, and microservice architectures.',
    skills: [
      {
        name: 'FastAPI',
        icon: 'Zap',
        proofPoints: [
          'Built the API layer for Smart Doc AI with streaming response support for real-time RAG.',
          'TransitGuard alert system API with WebSocket connections for instant operator notifications.',
          'Implemented rate limiting, authentication, and session management for production deployment.',
        ],
      },
      {
        name: 'Node.js',
        icon: 'Server',
        proofPoints: [
          'Built RESTful APIs during Full-Stack Developer internship at NexGen Solutions.',
          'Integrated PostgreSQL with Prisma ORM for type-safe database operations.',
          'Implemented JWT authentication and OAuth2 flows for user management systems.',
        ],
      },
      {
        name: 'Express.js',
        icon: 'Route',
        proofPoints: [
          'Developed middleware-based API architectures during internship projects.',
          'Built custom error handling, logging, and request validation middleware.',
          'Used for rapid API prototyping in hackathon projects.',
        ],
      },
      {
        name: 'Flask',
        icon: 'Beaker',
        proofPoints: [
          'Kidney Healthcare Solution backend with REST API for ML prediction serving.',
          'Integrated Celery for asynchronous task processing of batch prediction requests.',
          'Served ML models with optimized inference endpoints and health checks.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Databases
  // ─────────────────────────────────────────────
  {
    category: 'Databases',
    icon: 'Database',
    description: 'Working with relational, document, and vector databases for diverse data needs.',
    skills: [
      {
        name: 'PostgreSQL',
        icon: 'Table',
        proofPoints: [
          'TransitGuard incident logs and time-series detection data with TimescaleDB extension.',
          'Production database for NexGen Solutions internship projects with Prisma migrations.',
          'Optimized complex queries for dashboard analytics, reducing response times by 40%.',
        ],
      },
      {
        name: 'MongoDB',
        icon: 'Database',
        proofPoints: [
          'Kidney Healthcare Solution patient records with flexible schema for diverse clinical data.',
          'Used for rapid prototyping where schema evolution was frequent during early development.',
          'Implemented aggregation pipelines for healthcare analytics reporting.',
        ],
      },
      {
        name: 'Pinecone',
        icon: 'Compass',
        proofPoints: [
          'Production vector store for Smart Doc AI with metadata filtering and namespace isolation.',
          'Managed 50,000+ document embeddings with sub-second similarity search.',
          'Implemented hybrid search combining dense vectors with sparse keyword matching.',
        ],
      },
      {
        name: 'ChromaDB',
        icon: 'Palette',
        proofPoints: [
          'Local development vector store for Smart Doc AI RAG pipeline prototyping.',
          'Rapid iteration on chunking strategies and embedding model comparisons.',
          'Used for offline testing and CI/CD pipeline integration tests.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Cloud & DevOps
  // ─────────────────────────────────────────────
  {
    category: 'Cloud & DevOps',
    icon: 'Cloud',
    description: 'Deploying, containerizing, and maintaining AI-powered applications in production.',
    skills: [
      {
        name: 'Docker',
        icon: 'Box',
        proofPoints: [
          'Containerized Smart Doc AI, TransitGuard, and Kidney Healthcare for reproducible deployments.',
          'Multi-stage Docker builds for optimized image sizes in ML model serving.',
          'Docker Compose for local development environments with database, cache, and API orchestration.',
        ],
      },
      {
        name: 'GitHub Actions',
        icon: 'GitBranch',
        proofPoints: [
          'CI/CD pipelines for automated testing, linting, and deployment across projects.',
          'Automated model evaluation reports on pull requests for research experiments.',
          'Build and deploy workflows for Next.js and FastAPI applications.',
        ],
      },
      {
        name: 'Vercel',
        icon: 'Triangle',
        proofPoints: [
          'Deployed Smart Doc AI frontend and this portfolio website on Vercel.',
          'Leveraged edge functions and ISR for optimal performance and SEO.',
          'Preview deployments for pull request reviews during team development.',
        ],
      },
      {
        name: 'Render',
        icon: 'Cloud',
        proofPoints: [
          'Deployed FastAPI backends for Smart Doc AI and TransitGuard on Render.',
          'Managed environment variables, auto-scaling, and health check configurations.',
          'Used for cost-effective GPU-enabled inference serving during development.',
        ],
      },
      {
        name: 'AWS',
        icon: 'Cloud',
        proofPoints: [
          'S3 for document storage in Smart Doc AI ingestion pipeline.',
          'EC2 instances with GPU support for model training during research internship.',
          'Familiar with Lambda, API Gateway, and SageMaker for serverless ML deployment.',
        ],
      },
    ],
  },
];

/**
 * Helper: Flatten all skills into a single array.
 */
export function getAllSkills() {
  return skillCategories.flatMap((cat) => cat.skills);
}

/**
 * Helper: Get skills by category name.
 */
export function getSkillsByCategory(categoryName) {
  const cat = skillCategories.find((c) => c.category === categoryName);
  return cat ? cat.skills : [];
}

export default skillCategories;
