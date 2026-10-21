export interface Project {
  id: string;
  title: string;
  category: "Computer Vision" | "Time Series / ML" | "GenAI & Agents" | "Python / Core";
  summary: string;
  technologies: string[];
  metrics?: string[];
  achievements: string[];
  repoUrl?: string;
  repoNote?: string;
  demoUrl?: string;
  demoNote?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: "Ambassadorship" | "Internship" | "Program Selection";
  statusDesignation?: string; // e.g. "Selected" vs "Completed"
  highlights: string[];
  skillsGained: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  provider: string;
  issuerLogoText?: string;
  issueDate: string;
  category: "AI & GenAI" | "Data & ML" | "Software Engineering" | "Specialized";
  assetPath?: string; // Path relative to public folder, e.g., '/Certifications/...'
  scoreOrDetail?: string;
  verified: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  badge: string;
}

export interface PortfolioConfig {
  personal: {
    fullName: string;
    displayName: string;
    headline: string;
    statusLabel: string;
    bioParagraph: string;
    degree: string;
    college: string;
    university: string;
    studyPeriod: string;
    cgpa: string;
    email: string;
    phone: string;
    showPhone: boolean; // Configurable phone visibility
    location: string;
    linkedIn: string;
    githubPrimary: string;
    githubCandidateAlternate: string;
    githubFlagNote: string;
    resumePath: string;
    profilePhotoPath: string;
    initials: string;
  };
  about: {
    summary: string[];
    pillars: {
      title: string;
      desc: string;
      iconName: string;
    }[];
  };
  experience: ExperienceItem[];
  projects: Project[];
  skills: {
    category: string;
    items: string[];
    description: string;
  }[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    fullName: "Parag Pundlik Mali",
    displayName: "Parag Mali",
    headline: "AI/ML Engineer | Generative AI & Agentic Systems | Computer Vision",
    statusLabel: "Open to AI/ML Internship Opportunities",
    bioParagraph:
      "I’m Parag Mali, an Information Technology undergraduate focused on Machine Learning, Generative AI, Agentic Systems, and Computer Vision. I enjoy turning ideas into practical AI applications, from model development to deployment.",
    degree: "B.Tech in Information Technology",
    college: "R. C. Patel College of Engineering & Polytechnic, Shirpur, Maharashtra",
    university: "Dr. Babasaheb Ambedkar Technological University (DBATU)",
    studyPeriod: "2024–2028 (Expected)",
    cgpa: "8.20 / 10",
    email: "paragmali414@gmail.com",
    phone: "+91-9021306049",
    showPhone: true, // Configurable toggle: set to false to hide phone in public view
    location: "Shirpur, Maharashtra, India",
    linkedIn: "https://www.linkedin.com/in/parag-mali-0b5b69329/",
    githubPrimary: "https://github.com/paragmali414-rgb",
    githubCandidateAlternate: "https://github.com/ParagMali",
    githubFlagNote:
      "Verified active profile is 'paragmali414-rgb' (HTTP 200). 'ParagMali' currently returns 404.",
    resumePath: "/Parag%20Mali%20CV.pdf",
    profilePhotoPath: "/profile.jpeg",
    initials: "PM",
  },

  about: {
    summary: [
      "I am an Information Technology undergraduate at R. C. Patel College of Engineering & Polytechnic (DBATU) maintaining an 8.20/10 CGPA.",
      "My passion lies in architecting and training end-to-end Machine Learning pipelines, Computer Vision models (YOLOv8), Time-Series Forecasting systems (LSTM), and Agentic RAG workflows using contemporary LLM tooling.",
      "Beyond machine intelligence, I continuously hone my fundamentals in Data Structures, Algorithms, and Core Computer Science to engineer efficient, deployable solutions.",
      "As a Google Student Ambassador 2026, I spearhead developer workshops on campus, democratizing AI education and Gemini-powered developer workflows.",
      "I am actively seeking AI/ML engineering internships across India and internationally where I can contribute high-impact solutions to real-world challenges.",
    ],
    pillars: [
      {
        title: "Model Development & Vision",
        desc: "Hands-on model training with YOLOv8, OpenCV, and deep neural nets for automated object classification and detection.",
        iconName: "Eye",
      },
      {
        title: "Agentic Systems & RAG",
        desc: "Designing autonomous multi-agent pipelines with LangChain, LLaMA 3, ChromaDB vector stores, and tool calling.",
        iconName: "Bot",
      },
      {
        title: "Time-Series & Predictive AI",
        desc: "Developing LSTM forecasting and degradation modeling on sensor telemetry (NASA C-MAPSS and multi-junction traffic datasets).",
        iconName: "Activity",
      },
      {
        title: "Campus AI Leadership",
        desc: "Google Student Ambassador '26 driving AI awareness, Gemini developer sessions, and peer technical mentorship.",
        iconName: "Award",
      },
    ],
  },

  experience: [
    {
      id: "gsa-2026",
      role: "Google Student Ambassador ’26",
      organization: "Google",
      period: "May 2026 – August 2026",
      location: "Remote / Shirpur, India",
      type: "Ambassadorship",
      statusDesignation: "Ambassador",
      highlights: [
        "Represented Google and Gemini AI within the campus and regional student developer community.",
        "Promoted generative AI awareness, Gemini developer tooling, and modern ecosystem workflows.",
        "Organized and supported interactive developer workshops, technical webinars, and hands-on labs.",
        "Strengthened cross-functional communication, leadership, public speaking, and technical community management.",
      ],
      skillsGained: [
        "Gemini AI",
        "Public Speaking",
        "Community Leadership",
        "Developer Outreach",
        "Workshop Facilitation",
      ],
    },
    {
      id: "upskill-intern",
      role: "Machine Learning Intern",
      organization: "upSkill Campus & UniConverge Technologies",
      period: "March 2026 – April 2026",
      location: "Remote",
      type: "Internship",
      statusDesignation: "Completed Internship",
      highlights: [
        "Engineered an LSTM Smart City Traffic Forecasting model across 4 high-density junctions, delivering R² scores of 0.89–0.93.",
        "Built and trained a YOLOv8 Crop & Weed Detection pipeline targeting selective pesticide spray applications.",
        "Formulated Turbofan Engine Remaining Useful Life (RUL) prediction utilizing NASA C-MAPSS engine degradation datasets.",
        "Executed end-to-end data preprocessing, feature engineering, loss optimization, and validation using Python and ML libraries.",
      ],
      skillsGained: [
        "Python",
        "LSTM",
        "TensorFlow / Keras",
        "YOLOv8",
        "Time-Series",
        "Feature Engineering",
        "NASA C-MAPSS",
      ],
    },
    {
      id: "kiran-academy",
      role: "Python Full Stack Development",
      organization: "Kiran Academy Internship & Incubation Program",
      period: "Selection & Incubation Program",
      location: "Pune / Remote, India",
      type: "Program Selection",
      statusDesignation: "Selected for Program",
      highlights: [
        "Selected for competitive technical training and incubation program focusing on Python full stack engineering principles.",
        "Engaged in advanced Python programming, database schema design, and modular web application patterns.",
        "Reinforced standard software engineering practices, clean code design, and version control hygiene.",
      ],
      skillsGained: [
        "Python",
        "Object-Oriented Design",
        "Database Architecture",
        "Git",
        "Full-Stack Foundations",
      ],
    },
  ],

  projects: [
    {
      id: "crop-weed-detection",
      title: "Crop & Weed Detection System",
      category: "Computer Vision",
      summary:
        "High-precision computer vision pipeline utilizing YOLOv8n to identify crops and weeds in real-time, designed for autonomous selective pesticide sprayers.",
      technologies: ["Python", "YOLOv8n", "OpenCV", "NumPy", "Google Colab"],
      metrics: [
        "mAP50: 88.5%",
        "3,000+ Field Images",
        "-23% False Detections",
      ],
      achievements: [
        "Trained on an annotated dataset of 3,000+ field images with diverse lighting and growth stages.",
        "Engineered custom data augmentation pipelines that reduced false detection rates by 23%.",
        "Architected with low-latency inference in mind for integration into precision agriculture spray rigs.",
      ],
      repoUrl: "https://github.com/paragmali414-rgb/crop-weed-detection",
      repoNote: "Verified active repository on GitHub (HTTP 200)",
      featured: true,
    },
    {
      id: "smart-traffic-forecasting",
      title: "Smart City Traffic Forecasting",
      category: "Time Series / ML",
      summary:
        "Deep learning time-series model leveraging multi-layer LSTMs to forecast traffic volume dynamics across four critical urban city junctions.",
      technologies: ["Python", "LSTM", "TensorFlow", "Keras", "Time-Series"],
      metrics: [
        "R² Range: 0.89 – 0.93",
        "4 Junctions Modeled",
        "Dynamic Recurrent Units",
      ],
      achievements: [
        "Modeled non-linear traffic congestion trends using recurrent Long Short-Term Memory networks.",
        "Achieved high forecast fidelity with verified R² validation metrics between 0.89 and 0.93 across all test junctions.",
        "Conducted multi-step temporal windowing, sliding window feature normalization, and comparative error analysis.",
      ],
      featured: true,
    },
    {
      id: "turbofan-rul-prediction",
      title: "Turbofan Engine Remaining Useful Life Prediction",
      category: "Time Series / ML",
      summary:
        "Predictive maintenance intelligence estimating the remaining operating cycles before failure in aerospace turbofan engines using sensor degradation telemetry.",
      technologies: ["Python", "Machine Learning", "NASA C-MAPSS", "Scikit-Learn"],
      metrics: [
        "NASA C-MAPSS Telemetry",
        "Multi-Sensor Fusion",
        "Proactive Maintenance",
      ],
      achievements: [
        "Analyzed multivariate multi-sensor degradation trajectories across simulated operating conditions and flight profiles.",
        "Built feature transformation pipelines capturing monotonic degradation trends in operational engine units.",
        "Provides an actionable predictive-maintenance framework preventing catastrophic in-flight hardware failures.",
      ],
      featured: true,
    },
    {
      id: "agentx-multi-agent",
      title: "AgentX — Multi-Agent AI Assistant",
      category: "GenAI & Agents",
      summary:
        "Collaborative multi-agent system orchestrating task delegation, retrieval-augmented knowledge synthesis, voice synthesis, and live web query execution.",
      technologies: [
        "LLaMA 3",
        "LangChain",
        "ChromaDB",
        "RAG",
        "gTTS",
        "Web Search Tooling",
      ],
      metrics: [
        "Multi-Agent Orchestration",
        "Sub-Second Vector Search",
        "Voice-Enabled RAG",
      ],
      achievements: [
        "Constructed specialized agent roles for coordinated web research, document question-answering, and reasoning.",
        "Integrated ChromaDB vector store for dense embedding indexing and contextual source grounding.",
        "Implemented gTTS vocal output integration for natural audio responses.",
      ],
      demoNote: "Reported as hosted on Hugging Face Spaces (direct link unverified; not fabricated per policy)",
      featured: true,
    },
    {
      id: "ai-image-captioning",
      title: "AI Image Captioning App",
      category: "GenAI & Agents",
      summary:
        "Neural captioning system combining vision transformers with language decoders using Salesforce BLIP to generate high-fidelity natural language scene descriptions.",
      technologies: ["Salesforce BLIP", "Hugging Face", "PyTorch", "Python"],
      metrics: [
        "30% Inference Latency Cut",
        "Vision-Language Alignment",
        "Zero-Shot Captioning",
      ],
      achievements: [
        "Applied Salesforce BLIP vision-language architecture for automated semantic scene understanding.",
        "Optimized inference pipeline and tensor caching, yielding a reported 30% reduction in generation latency.",
        "Clean integration with Hugging Face model hub abstractions for reproducible deployment.",
      ],
      featured: false,
    },
    {
      id: "rule-based-chatbot",
      title: "Rule-Based Python Assistant",
      category: "Python / Core",
      summary:
        "Modular Python conversational utility featuring intent routing, temporal lookups, calculation parsing, sentiment heuristic scoring, and conversational memory.",
      technologies: ["Python", "RegEx", "Modular Architecture"],
      metrics: [
        "5 Integrated Modules",
        "Stateful Memory Tracking",
        "Zero External Dependencies",
      ],
      achievements: [
        "Implemented robust pattern matching, date/time resolution, dynamic arithmetic evaluation, and sentiment heuristics.",
        "Designed persistent session-state memory for contextual continuity across multi-turn interactions.",
      ],
      repoUrl: "https://github.com/paragmali414-rgb/CODSOFT",
      repoNote: "Verified active repository on GitHub (HTTP 200)",
      featured: false,
    },
  ],

  skills: [
    {
      category: "Programming Languages",
      description: "Core algorithmic foundations and backend scripting languages",
      items: ["Python", "Java", "SQL"],
    },
    {
      category: "AI & Machine Learning",
      description: "Deep learning, vision architectures, and generative frameworks",
      items: [
        "Machine Learning",
        "LSTM",
        "YOLOv8",
        "Computer Vision",
        "Time-Series Forecasting",
        "Large Language Models (LLMs)",
        "Retrieval-Augmented Generation (RAG)",
        "Agentic AI",
        "Prompt Engineering",
      ],
    },
    {
      category: "Frameworks & Libraries",
      description: "Production ML, deep learning, and application development libraries",
      items: [
        "TensorFlow",
        "Keras",
        "OpenCV",
        "Scikit-learn",
        "LangChain",
        "Hugging Face",
        "Streamlit",
        "React",
      ],
    },
    {
      category: "Data & Analytics",
      description: "Data manipulation, statistical analysis, and interactive visualization",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Tableau",
        "MySQL",
        "Jupyter Notebook",
        "Google Colab",
        "Data Visualization",
      ],
    },
    {
      category: "Cloud & Developer Tools",
      description: "Cloud compute, model hosting, version control, and interfaces",
      items: [
        "Google Cloud",
        "IBM watsonx.ai",
        "Git",
        "GitHub",
        "REST APIs",
      ],
    },
    {
      category: "Professional & Leadership",
      description: "Collaborative, organizational, and cross-functional competencies",
      items: [
        "Problem-solving",
        "Technical Communication",
        "Public Speaking",
        "Community Leadership",
        "Stakeholder Communication",
      ],
    },
  ],

  certifications: [
    {
      id: "cert-anthropic",
      title: "AI Fluency: Framework & Foundations",
      provider: "Anthropic",
      issueDate: "March 2026",
      category: "AI & GenAI",
      assetPath: "/Certifications/anthropic-ai-fluency.jpg",
      verified: true,
    },
    {
      id: "cert-isro",
      title: "AI/ML for Geodata Analytics",
      provider: "IIRS / ISRO",
      issueDate: "September 2026",
      category: "Specialized",
      assetPath: "/Certifications/isro-geodata.jpg",
      verified: true,
    },
    {
      id: "cert-google-ai",
      title: "Google AI Essentials",
      provider: "Google",
      issueDate: "July 2026",
      category: "AI & GenAI",
      assetPath: "/Certifications/google-ai-essentials.jpg",
      verified: true,
    },
    {
      id: "cert-ibm-agent",
      title: "Intelligent by Design: Build an AI Agent",
      provider: "IBM",
      issueDate: "April 2026",
      category: "AI & GenAI",
      assetPath: "/Certifications/ibm-ai-agent.jpg",
      verified: true,
    },
    {
      id: "cert-google-genai",
      title: "Introduction to Generative AI Studio",
      provider: "Google Cloud Skills Boost",
      issueDate: "October 2025",
      category: "AI & GenAI",
      assetPath: "/Certifications/google-genai-studio.jpg",
      verified: true,
    },
    {
      id: "cert-cisco-ds",
      title: "Data Science Essentials with Python",
      provider: "Cisco Networking Academy",
      issueDate: "August 2026",
      category: "Data & ML",
      assetPath: "/Certifications/cisco-data-science.jpg",
      verified: true,
    },
    {
      id: "cert-deep-tech",
      title: "Entrepreneurship Foundations for Deep Tech Startups",
      provider: "Turnip Innovations",
      issueDate: "March 2026",
      category: "Specialized",
      assetPath: "/Certifications/deep-tech-entrepreneurship.jpg",
      scoreOrDetail: "Reported Score: 100%",
      verified: true,
    },
    {
      id: "cert-jpmorgan",
      title: "Software Engineering Job Simulation",
      provider: "JPMorgan Chase / Forage",
      issueDate: "April 2026",
      category: "Software Engineering",
      assetPath: "/Certifications/jpmorgan-simulation.png",
      verified: true,
    },
    {
      id: "cert-deloitte",
      title: "Data Analytics Job Simulation",
      provider: "Deloitte Australia / Forage",
      issueDate: "April 2026",
      category: "Data & ML",
      assetPath: "/Certifications/deloitte-analytic.png",
      verified: true,
    },
    {
      id: "cert-codechef-java",
      title: "OOPs Using Java",
      provider: "CodeChef",
      issueDate: "December 2025",
      category: "Software Engineering",
      assetPath: "/Certifications/codechef-java-oops.jpg",
      verified: true,
    },
    {
      id: "cert-ey-microsoft",
      title: "AI Skills Passport",
      provider: "EY and Microsoft",
      issueDate: "October 2026",
      category: "AI & GenAI",
      scoreOrDetail: "Credential on record; document upload pending",
      verified: true,
    },
    {
      id: "cert-tata-forage",
      title: "Data Visualisation: Empowering Business",
      provider: "Tata Group / Forage",
      issueDate: "April 2026",
      category: "Data & ML",
      scoreOrDetail: "Credential on record; document upload pending",
      verified: true,
    },
  ],

  achievements: [
    {
      id: "achieve-gsa",
      title: "Google Student Ambassador 2026",
      organization: "Google",
      date: "2026",
      description:
        "Selected to lead campus initiatives, advocate for developer tools and Gemini AI, and mentor student engineers.",
      badge: "Google Community Leadership",
    },
    {
      id: "achieve-banana",
      title: "Top 250 Winner",
      organization: "Nano Banana Challenge",
      date: "2026",
      description:
        "Recognized among the top 250 participants for creative technical problem solving and execution.",
      badge: "Competitive Honor",
    },
    {
      id: "achieve-kiran",
      title: "Internship & Incubation Selection",
      organization: "Kiran Academy",
      date: "2026",
      description:
        "Selected for competitive technical training and incubation program in Python full-stack engineering.",
      badge: "Program Selection",
    },
  ],
};
