const knowledgeData = {
  Projects: [
    {
      question: "What is Smart Doc AI?",
      answer:
        "Smart Doc AI is an AI-powered document intelligence platform I built that enables users to upload PDFs and have intelligent conversations with their documents. It uses a RAG (Retrieval-Augmented Generation) pipeline with LangChain, vector embeddings stored in Pinecone, and OpenAI's GPT models for conversational AI. The system can semantically search across thousands of documents, extract key information, and answer complex questions with source citations. It won a ₹60,000 project grant for its innovation.",
    },
    {
      question: "How does TransitGuard work?",
      answer:
        "TransitGuard is a real-time AI surveillance system for public transportation safety and fraud detection. It uses YOLOv8 for object detection, OpenCV for video processing, and custom anomaly detection algorithms to identify safety threats, ticket fraud, and suspicious behavior. The backend is built with FastAPI for real-time inference, PostgreSQL for data storage, and a React dashboard for monitoring. It reached the finals at a national hackathon.",
    },
    {
      question: "Tell me about the Kidney Healthcare project.",
      answer:
        "The Kidney Healthcare Solution is an AI-powered platform designed to improve patient monitoring and dialysis assistance. Built with TensorFlow for predictive models, Flask for the backend API, and React for the patient dashboard, it helps healthcare providers track patient vitals, predict complications, and optimize treatment schedules. It was submitted to the Google Solution Challenge and ranked in the Top 100 globally.",
    },
    {
      question: "What architecture did you use for your RAG system?",
      answer:
        "For Smart Doc AI's RAG system, I implemented a multi-layered architecture: a document ingestion layer that processes PDFs using PyPDF and chunks text with recursive character splitting, an embedding layer using OpenAI's ada-002 model, a vector storage layer with Pinecone for similarity search, a retrieval layer with hybrid search (semantic + keyword), and a generation layer using GPT-4 with custom prompts and source attribution. The entire pipeline is orchestrated through LangChain with FastAPI serving the backend.",
    },
  ],
  Research: [
    {
      question: "What is your research on?",
      answer:
        "My primary research focuses on multi-organ segmentation from laparoscopic surgical images using deep learning. I benchmark four architectures — U-Net, DeepLabV3+, Swin U-Net, and Swin UNETR — to find the best approach for accurate organ boundary delineation in surgical settings. This work is important for computer-assisted surgery, providing real-time guidance to surgeons and reducing operative risks.",
    },
    {
      question: "What models did you use for segmentation?",
      answer:
        "I implemented and benchmarked four architectures: U-Net (classic CNN encoder-decoder with skip connections), DeepLabV3+ (atrous convolutions for multi-scale features), Swin U-Net (pure transformer-based U-shaped architecture), and Swin UNETR (hybrid Swin Transformer encoder with CNN decoder). Among these, Swin U-Net achieved the highest Dice Score of 0.847, while DeepLabV3+ offered the best speed-accuracy tradeoff for real-time applications.",
    },
    {
      question: "What were your research results?",
      answer:
        "Our best model (Swin U-Net) achieved a Dice Score of 0.847, mIoU of 0.792, and pixel-wise accuracy of 93.4%. Transformer-based models outperformed CNN-based ones in boundary delineation due to their ability to capture long-range dependencies. However, CNN models like DeepLabV3+ maintained advantages in inference speed, making them more suitable for real-time surgical guidance systems.",
    },
  ],
  Skills: [
    {
      question: "What AI/ML frameworks do you use?",
      answer:
        "I work extensively with Python as my primary language for AI/ML. My key frameworks include PyTorch (for research and custom models), TensorFlow (for production ML pipelines), MONAI (for medical imaging), OpenCV (for computer vision), Scikit-Learn (for classical ML), LangChain and LlamaIndex (for LLM applications), and Weights & Biases (for experiment tracking). I also use NumPy, pandas, and matplotlib for data processing and visualization.",
    },
    {
      question: "What's your full tech stack?",
      answer:
        "My tech stack spans the full development lifecycle: AI/ML (Python, PyTorch, TensorFlow, OpenCV, LangChain), Frontend (React, Next.js, JavaScript, Tailwind CSS), Backend (FastAPI, Node.js, Express.js, Flask), Databases (PostgreSQL, MongoDB, Pinecone, ChromaDB), and Cloud/DevOps (Docker, GitHub Actions, Vercel, Render, AWS). I'm comfortable building end-to-end systems from research prototypes to production-ready applications.",
    },
    {
      question: "Do you have cloud and DevOps experience?",
      answer:
        "Yes, I have hands-on experience with Docker for containerization, GitHub Actions for CI/CD pipelines, and deployment platforms like Vercel (for frontend) and Render (for backend services). I've also worked with AWS services for model deployment. I believe in automated testing and deployment workflows — every project I build includes proper version control, CI/CD, and containerized deployments.",
    },
  ],
  Experience: [
    {
      question: "Where have you interned?",
      answer:
        "I completed an AI/ML Research Internship at a research lab in Summer 2025, where I worked on multi-organ segmentation from laparoscopic images. Before that, I did a Full-Stack Developer Internship at a tech startup in Winter 2024, where I built production web applications. These experiences gave me a strong foundation in both research methodology and production engineering.",
    },
    {
      question: "What's your role at the AI/ML club?",
      answer:
        "I serve as the Technical Lead of our university's AI/ML Club. I organize technical workshops on topics like deep learning, LLMs, and computer vision, mentor 25+ junior students in their AI projects, lead hackathon teams, and curate learning resources. Under my leadership, club membership grew by 60% and we won 3 inter-college competitions.",
    },
  ],
  Achievements: [
    {
      question: "What awards have you won?",
      answer:
        "Some highlights: Won a ₹60,000 project grant for Smart Doc AI, won the OEP Research Competition for multi-organ segmentation research, reached the finals at a national hackathon with TransitGuard, received the Technical Leadership Award for AI/ML Club contributions, and won Best Research Poster at the University Research Symposium 2025. I've also placed in multiple hackathons including Google Solution Challenge (Top 100 globally).",
    },
    {
      question: "Tell me about your project grant.",
      answer:
        "Smart Doc AI won a competitive ₹60,000 project grant from the university's innovation fund. The grant was awarded based on the project's technical innovation (RAG pipeline architecture), practical applicability (document intelligence for education and enterprise), and scalability potential. It was selected from over 50 competing projects, and the funding helped me extend the system with multi-document support and advanced retrieval strategies.",
    },
  ],
};

export const suggestedQuestions = Object.entries(knowledgeData).reduce(
  (acc, [category, items]) => {
    acc[category] = items.map((item) => item.question);
    return acc;
  },
  {}
);

export function getAnswer(question) {
  for (const category of Object.values(knowledgeData)) {
    const match = category.find(
      (item) => item.question.toLowerCase() === question.toLowerCase()
    );
    if (match) return match.answer;
  }

  // Fuzzy match — find the closest question
  const allItems = Object.values(knowledgeData).flat();
  const words = question.toLowerCase().split(/\s+/);
  let bestMatch = null;
  let bestScore = 0;

  for (const item of allItems) {
    const questionWords = item.question.toLowerCase().split(/\s+/);
    const score = words.filter((w) => questionWords.some((qw) => qw.includes(w) || w.includes(qw))).length;
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && bestScore >= 2) return bestMatch.answer;

  return "That's a great question! While I don't have a specific answer for that, feel free to explore the suggested questions or reach out to Jeel directly at jeeldonga24@gmail.com for more details.";
}

export const categories = Object.keys(knowledgeData);

export default knowledgeData;
