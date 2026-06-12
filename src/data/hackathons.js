/**
 * Hackathon participation data for Jeel Donga's portfolio.
 * Showcases competitive experience, teamwork, and rapid prototyping skills.
 */

export const hackathons = [
  {
    id: 'hack-001',
    name: 'Smart India Hackathon (SIH)',
    organizer: 'Ministry of Education, Government of India',
    date: 'December 2024',
    location: 'Hyderabad, India',
    teamSize: 6,
    problemStatement:
      'Develop an AI-powered solution to enhance public transportation safety and reduce fare fraud using intelligent surveillance and real-time analytics.',
    solution:
      'Built TransitGuard — a real-time computer vision system using YOLOv8 for object detection and custom anomaly classifiers for detecting fare evasion and safety threats on transit camera feeds. Delivered a working prototype with a live operator dashboard within 36 hours.',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI', 'React', 'WebSockets'],
    outcome: 'Finalist — Top 10 out of 200+ teams nationally',
    award: 'National Finalist',
    projectName: 'transitguard',
  },
  {
    id: 'hack-002',
    name: 'HackDDU 2024',
    organizer: 'Dharmsinh Desai University',
    date: 'October 2024',
    location: 'Nadiad, Gujarat',
    teamSize: 4,
    problemStatement:
      'Create an innovative healthcare technology solution that addresses accessibility challenges in rural Indian communities.',
    solution:
      'Developed the initial prototype of Kidney Healthcare Solution — an AI-driven patient monitoring platform with CKD risk prediction, a provider dashboard, and a multilingual patient portal designed for low-literacy users.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'MongoDB'],
    outcome: 'Winner — First Place',
    award: '1st Place',
    projectName: 'kidney-healthcare',
  },
  {
    id: 'hack-003',
    name: 'GenAI Buildathon',
    organizer: 'Google Developer Student Clubs (GDSC) Network',
    date: 'February 2025',
    location: 'Virtual',
    teamSize: 3,
    problemStatement:
      'Build a generative AI application that solves a real-world productivity problem using LLMs, RAG, or agentic workflows.',
    solution:
      'Built an early version of Smart Doc AI — a document intelligence platform with semantic search and RAG-powered Q&A. Demonstrated the ability to ingest research papers and answer complex multi-hop questions with citations in real-time.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'ChromaDB', 'Next.js', 'FastAPI'],
    outcome: 'Runner-Up — 2nd Place',
    award: '2nd Place',
    projectName: 'smart-doc-ai',
  },
  {
    id: 'hack-004',
    name: 'CodeStorm 3.0',
    organizer: 'VJTI Mumbai & ACM Student Chapter',
    date: 'August 2024',
    location: 'Mumbai, India',
    teamSize: 4,
    problemStatement:
      'Design and implement an AI-based solution for any social impact domain — healthcare, education, environment, or public safety.',
    solution:
      'Built a real-time air quality monitoring and prediction system using LSTM networks and public sensor data, with a citizen-facing dashboard showing hyperlocal pollution forecasts and health advisories.',
    technologies: ['Python', 'TensorFlow', 'LSTM', 'React', 'Mapbox', 'Flask'],
    outcome: 'Top 15 Finalists out of 150+ teams',
    award: 'Finalist',
    projectName: null,
  },
  {
    id: 'hack-005',
    name: 'AI for Good Challenge',
    organizer: 'Microsoft Learn Student Ambassadors',
    date: 'March 2025',
    location: 'Virtual',
    teamSize: 3,
    problemStatement:
      'Leverage Azure AI services to build a solution addressing one of the UN Sustainable Development Goals.',
    solution:
      'Developed an AI-powered agricultural advisory chatbot for small-scale farmers, using RAG over agricultural knowledge bases and Azure OpenAI to provide crop management advice, pest identification, and weather-adaptive recommendations in local languages.',
    technologies: ['Python', 'Azure OpenAI', 'LangChain', 'Azure Cognitive Search', 'React', 'Node.js'],
    outcome: 'Honorable Mention',
    award: 'Honorable Mention',
    projectName: null,
  },
];

/**
 * Helper: Get hackathons linked to a specific project.
 */
export function getHackathonsByProject(projectSlug) {
  return hackathons.filter((h) => h.projectName === projectSlug);
}

export default hackathons;
