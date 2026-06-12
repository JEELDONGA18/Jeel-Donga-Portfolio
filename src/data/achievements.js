/**
 * Achievements and awards data for Jeel Donga's portfolio.
 * Each achievement includes context, category, and associated metadata.
 */

export const achievements = [
  {
    id: 'ach-001',
    title: '₹60,000 Project Grant Winner',
    description:
      'Smart Doc AI won a competitive project grant of ₹60,000 from the university\'s Innovation & Entrepreneurship Cell, awarded to the top project demonstrating real-world AI impact and commercial viability among 50+ submissions.',
    value: '₹60,000',
    category: 'grant',
    date: '2025',
    icon: 'Trophy',
    project: 'smart-doc-ai',
  },
  {
    id: 'ach-002',
    title: 'OEP Research Competition Winner',
    description:
      'Won first place in the Open-Ended Project (OEP) Research Competition for the Multi-Organ Segmentation research, recognized for rigorous methodology, comprehensive benchmarking, and potential clinical impact in surgical AI.',
    value: null,
    category: 'research',
    date: '2025',
    icon: 'Award',
    project: 'multi-organ-segmentation',
  },
  {
    id: 'ach-003',
    title: 'National Hackathon Finalist',
    description:
      'TransitGuard reached the finalist round at a prestigious national-level hackathon, competing against 200+ teams from top engineering colleges. Recognized for innovative use of computer vision in public safety.',
    value: null,
    category: 'hackathon',
    date: '2024',
    icon: 'Medal',
    project: 'transitguard',
  },
  {
    id: 'ach-004',
    title: 'Technical Leadership Award',
    description:
      'Recognized by Dharmsinh Desai University for outstanding technical leadership as the AI/ML Club Technical Lead — organizing 10+ workshops, mentoring 25+ students, and coordinating 8 hackathon teams.',
    value: null,
    category: 'leadership',
    date: '2025',
    icon: 'Star',
    project: null,
  },
  {
    id: 'ach-005',
    title: 'Best Research Poster Award',
    description:
      'Awarded Best Research Poster at the DDU Annual Research Symposium for presenting the multi-organ segmentation framework, praised for clear visualization of results and articulate explanation of transformer-based architectures.',
    value: null,
    category: 'research',
    date: '2025',
    icon: 'FileText',
    project: 'multi-organ-segmentation',
  },
];

/**
 * Helper: Get achievements by category.
 */
export function getAchievementsByCategory(category) {
  return achievements.filter((a) => a.category === category);
}

export default achievements;
