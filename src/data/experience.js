/**
 * Professional experience data for Jeel Donga's portfolio.
 * Includes internships, roles, and volunteer/leadership positions.
 */

export const experience = [
  // ─────────────────────────────────────────────
  // 1. AI/ML Research Intern
  // ─────────────────────────────────────────────
  {
    id: 'exp-001',
    role: 'AI/ML Research Intern',
    organization: 'Intelligent Systems Research Lab',
    duration: 'May 2025 – July 2025',
    type: 'internship',
    description:
      'Conducted original research on deep learning-based medical image segmentation at the Intelligent Systems Research Lab. Focused on benchmarking state-of-the-art architectures for multi-organ segmentation in laparoscopic surgical images, contributing to a publication-track research project.',
    responsibilities: [
      'Implemented and benchmarked four segmentation architectures (U-Net, DeepLabV3+, Swin U-Net, Swin UNETR) using PyTorch and MONAI for laparoscopic image analysis.',
      'Designed custom data augmentation pipelines to handle surgical image artifacts including specular reflections, smoke, and instrument occlusion.',
      'Conducted comprehensive ablation studies analyzing the impact of pre-training strategies, loss functions, and input resolution on segmentation performance.',
      'Integrated Weights & Biases for systematic experiment tracking, hyperparameter logging, and collaborative result sharing with the research team.',
      'Authored detailed technical reports and presented weekly findings to the research group, receiving mentorship on academic writing and research methodology.',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'MONAI',
      'Weights & Biases',
      'OpenCV',
      'Albumentations',
      'NumPy',
      'matplotlib',
      'CUDA',
      'Linux',
    ],
    impact: [
      {
        metric: 'Dice Score Achieved',
        value: '0.847',
        description: 'Best segmentation performance achieved with Swin UNETR, surpassing the lab\'s previous baseline by 8.3%.',
      },
      {
        metric: 'Experiments Tracked',
        value: '120+',
        description: 'Systematic experiments logged in Weights & Biases with full reproducibility — configs, seeds, and environment snapshots.',
      },
      {
        metric: 'Research Contribution',
        value: 'Co-author',
        description: 'Contributing to a research paper targeting submission at a medical imaging conference (MICCAI/ISBI).',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. Full-Stack Developer Intern
  // ─────────────────────────────────────────────
  {
    id: 'exp-002',
    role: 'Full-Stack Developer Intern',
    organization: 'NexGen Solutions Pvt. Ltd.',
    duration: 'Dec 2024 – Feb 2025',
    type: 'internship',
    description:
      'Built and shipped production-grade web applications at a fast-growing tech startup. Worked across the full stack — from designing responsive React interfaces to building scalable Node.js APIs — collaborating closely with the product team to deliver features on tight sprint cycles.',
    responsibilities: [
      'Developed responsive, accessible frontend interfaces using React, Next.js, and Tailwind CSS, implementing pixel-perfect designs from Figma mockups.',
      'Built RESTful APIs with Node.js and Express.js, integrating PostgreSQL databases with Prisma ORM for type-safe data access and migrations.',
      'Implemented user authentication and authorization flows using JWT tokens and OAuth2 integration with Google and GitHub providers.',
      'Optimized application performance through code splitting, lazy loading, image optimization, and database query tuning, reducing page load times by 40%.',
      'Participated in code reviews, sprint planning, and daily standups, contributing to the team\'s agile development workflow and technical documentation.',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'Tailwind CSS',
      'Git',
      'Vercel',
      'Figma',
    ],
    impact: [
      {
        metric: 'Features Shipped',
        value: '12',
        description: 'Delivered 12 user-facing features across 3 sprint cycles, including a complex dashboard module.',
      },
      {
        metric: 'Performance Improvement',
        value: '40%',
        description: 'Reduced average page load time from 3.2s to 1.9s through frontend optimization and API caching.',
      },
      {
        metric: 'Code Quality',
        value: '95%',
        description: 'Maintained 95% approval rate on code reviews with minimal revision requests.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. Technical Lead — AI/ML Club
  // ─────────────────────────────────────────────
  {
    id: 'exp-003',
    role: 'Technical Lead',
    organization: 'DDU AI/ML Club — Dharmsinh Desai University',
    duration: 'Aug 2024 – Present',
    type: 'volunteer',
    description:
      'Leading the university\'s AI/ML Club as Technical Lead, responsible for organizing workshops, mentoring junior students, and building a community of aspiring AI engineers. Curate learning paths, lead hands-on sessions, and coordinate the club\'s participation in national hackathons and competitions.',
    responsibilities: [
      'Organized and delivered 10+ technical workshops covering Python for ML, neural networks, computer vision with OpenCV, and intro to LLMs & RAG systems.',
      'Mentored 25+ junior students through structured learning paths, project guidance, and one-on-one technical mentoring sessions.',
      'Coordinated the club\'s participation in 5 national hackathons, managing team formation, project ideation, and submission logistics.',
      'Built a collaborative project repository with starter templates, tutorials, and code examples to accelerate members\' learning curves.',
      'Established partnerships with industry professionals for guest lectures and mock interview sessions for placement preparation.',
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'OpenCV',
      'LangChain',
      'React',
      'Git',
      'Google Colab',
      'Jupyter Notebooks',
    ],
    impact: [
      {
        metric: 'Members Mentored',
        value: '25+',
        description: 'Guided students from zero ML knowledge to building and deploying their own projects.',
      },
      {
        metric: 'Workshops Delivered',
        value: '10+',
        description: 'Hands-on technical workshops with average attendance of 40+ students per session.',
      },
      {
        metric: 'Hackathon Teams',
        value: '8',
        description: 'Coordinated and mentored 8 teams for national hackathons, with 3 teams reaching finalist rounds.',
      },
    ],
  },
];

export default experience;
