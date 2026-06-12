export const researchProjects = [
  {
    id: "multi-organ-segmentation",
    title: "Multi-Organ Segmentation from Laparoscopic Images",
    status: "In Progress",
    abstract:
      "This research investigates the application of state-of-the-art deep learning architectures for semantic segmentation of multiple organs in laparoscopic surgical images. Accurate organ segmentation is critical for computer-assisted surgery, providing surgeons with real-time visual guidance and reducing operative risks. We benchmark four architectures — U-Net, DeepLabV3+, Swin U-Net, and Swin UNETR — on a curated laparoscopic dataset, evaluating performance using Dice Score, mIoU, and pixel-wise accuracy. Our results demonstrate that transformer-based models achieve superior boundary delineation while CNN-based models offer faster inference suitable for real-time applications.",
    methodology:
      "We employed a rigorous experimental pipeline: dataset curation with expert-annotated laparoscopic images, multi-stage preprocessing including intensity normalization and data augmentation (random flips, rotations, elastic deformations), model training with cosine annealing learning rate schedules, and comprehensive evaluation using 5-fold cross-validation. Each architecture was trained for 200 epochs with early stopping on validation Dice Score.",
    models: [
      { name: "U-Net", description: "Baseline CNN encoder-decoder with skip connections", diceScore: 0.812 },
      { name: "DeepLabV3+", description: "Atrous convolutions with multi-scale feature extraction", diceScore: 0.831 },
      { name: "Swin U-Net", description: "Pure transformer U-shaped architecture", diceScore: 0.847 },
      { name: "Swin UNETR", description: "Swin Transformer encoder with CNN decoder", diceScore: 0.839 },
    ],
    evaluationMetrics: [
      { name: "Dice Score", value: 0.847, percentage: 84.7, description: "Best achieved by Swin U-Net, measuring volumetric overlap between prediction and ground truth" },
      { name: "mIoU", value: 0.792, percentage: 79.2, description: "Mean Intersection over Union across all organ classes" },
      { name: "Accuracy", value: 0.934, percentage: 93.4, description: "Pixel-wise classification accuracy across the full image" },
    ],
    results:
      "Swin U-Net achieved the highest Dice Score of 0.847, outperforming the U-Net baseline by 4.3%. DeepLabV3+ showed the best speed-accuracy tradeoff for real-time applications. Transformer-based models excelled at capturing long-range dependencies critical for organ boundary delineation, while CNN models maintained advantages in inference speed.",
    contributions: [
      "Comprehensive benchmark of CNN vs Transformer architectures for laparoscopic segmentation",
      "Novel data augmentation pipeline tailored for surgical image characteristics",
      "Analysis of speed-accuracy tradeoffs for real-time surgical guidance systems",
      "Open-source training framework for medical image segmentation research",
    ],
    futureWork: [
      "Extend to 3D volumetric segmentation for CT/MRI data",
      "Implement knowledge distillation for real-time deployment on edge devices",
      "Explore semi-supervised learning to reduce annotation requirements",
      "Develop attention visualization tools for surgical AI explainability",
    ],
    technologies: ["Python", "PyTorch", "MONAI", "Weights & Biases", "NumPy", "matplotlib", "Albumentations"],
  },
];

export const researchMindset = {
  title: "Research Workflow",
  description: "My systematic approach to solving complex problems through research",
  steps: [
    {
      title: "Define Problem",
      description: "Identify a real-world challenge that can be addressed through AI/ML",
      icon: "Search",
    },
    {
      title: "Literature Review",
      description: "Study existing solutions, identify gaps, and understand state-of-the-art",
      icon: "BookOpen",
    },
    {
      title: "Hypothesis",
      description: "Formulate a testable hypothesis based on research gaps",
      icon: "Lightbulb",
    },
    {
      title: "Experiment Design",
      description: "Design controlled experiments with proper baselines and metrics",
      icon: "FlaskConical",
    },
    {
      title: "Implementation",
      description: "Build robust, reproducible code with version control and logging",
      icon: "Code",
    },
    {
      title: "Evaluation",
      description: "Rigorously evaluate results using standard metrics and ablation studies",
      icon: "BarChart3",
    },
    {
      title: "Iteration",
      description: "Analyze failures, adjust approach, and iterate on promising directions",
      icon: "RefreshCw",
    },
    {
      title: "Publication",
      description: "Document findings and contribute knowledge back to the community",
      icon: "FileText",
    },
  ],
};
