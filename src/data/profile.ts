import sentimentLengthImage from '../assets/sentiment-length.svg'
import medmapImage from '../assets/medmap3.png'
import gestureImage from '../assets/break_silence.png'
import brailleImage from '../assets/braille.png'
import researchImage from '../assets/research.png'

/**
 * Single source of truth for every page on the site.
 * Mirrors Kevin_Jacob_Resume_Summer_2027.pdf, update here, not in components.
 */

export interface Experience {
  id: string
  role: string
  org: string
  /** Short form used in tight layouts (nav, timeline dots) */
  shortOrg: string
  start: string
  end: string
  /** Sortable ISO-ish key, newest first */
  sortKey: string
  location: string
  current: boolean
  kind: 'industry' | 'research'
  bullets: string[]
  skills: string[]
}

export interface Project {
  id: string
  title: string
  /** Where it was built, lab, hackathon, org */
  context: string
  period: string
  /** One-line hook for card headers */
  summary: string
  bullets: string[]
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  liveUrl?: string
  image?: string
  /** Overrides the default "Screenshot of ..." alt text, e.g. for a figure */
  imageAlt?: string
  featured: boolean
}

export const profile = {
  name: 'Kevin Jacob',
  firstName: 'Kevin',
  role: 'Software Engineer',
  tagline: 'I study computer science, do machine learning research, and build software. Previously a software engineering intern at Apple.',
  bio: 'I study computer science at Georgia Tech, concentrating in artificial intelligence and theory. My time splits between software engineering internships and machine learning research: most recently CI tooling and data pipelines at Apple, and right now differential privacy for graph neural networks at Georgia Tech, and annotator modeling for subjective NLP at Georgia State.',
  location: 'Atlanta, GA',
  email: 'kjacob7@gatech.edu',
  altEmail: 'kevinmatjacob@gmail.com',
  phone: '(770) 702-2375',
  github: 'https://github.com/KevinJ-30',
  linkedin: 'https://linkedin.com/in/kevin-jacob1',
  website: 'https://kevinj-dev.vercel.app',
  resumePdf: '/Kevin_Jacob_Resume.pdf',
} as const

export const education = {
  degree: 'B.S. Computer Science',
  school: 'Georgia Institute of Technology',
  shortSchool: 'Georgia Tech',
  location: 'Atlanta, GA',
  graduation: 'Dec 2027',
  gpa: '3.95',
  concentrations: ['Artificial Intelligence', 'Theory'],
  courses: [
    'Efficient ML (FSDP, Quantization)',
    'Machine Learning',
    'Intro to AI',
    'Graph Theory',
    'Automata & Complexity',
  ],
} as const

export const experiences: Experience[] = [
  {
    id: 'apple',
    role: 'Software Engineering Intern',
    org: 'Apple',
    shortOrg: 'Apple',
    start: 'May 2026',
    end: 'Aug 2026',
    sortKey: '2026-05',
    location: 'Cupertino, CA',
    current: false,
    kind: 'industry',
    bullets: [
      'Engineered a Python Slack bot module (Bolt) that ingests CI tooling support requests and pushes data via S3 to Snowflake, automating metric collection and saving 150+ engineering hours annually',
      'Modeled 30+ operational metrics with dbt SQL transformations on Snowflake, surfacing trends in a Streamlit UI used for CI triage and reviewed quarterly with partner tool teams',
      'Developed an ML pipeline that strips PII from support requests, clusters via HDBSCAN, and applies LLM-generated labels to each cluster, surfacing 60+ issue categories to guide tooling and documentation priorities',
    ],
    skills: ['Python', 'Slack Bolt', 'Snowflake', 'dbt', 'S3', 'Streamlit', 'HDBSCAN', 'LLMs'],
  },
  {
    id: 'gcml',
    role: 'ML Research Intern',
    org: 'Graph Computation and Machine Learning Lab, Georgia Tech',
    shortOrg: 'GT GCML Lab',
    start: 'Nov 2025',
    end: 'Present',
    sortKey: '2025-11',
    location: 'Atlanta, GA',
    current: true,
    kind: 'research',
    bullets: [
      'Co-authored SparseExpansion (under review, AISTATS 2027), a differentially private subgraph sampler that randomly drops subgraph edges to amplify node-level privacy, cutting ε from ~10³ to ≤10 for multi-hop GNNs',
      'Ran experiments in PyTorch Geometric and Opacus on H200 GPUs via SLURM, benchmarking against 4 private baselines on 7 graphs (up to 2.4M nodes, 124M edges); retains ~95% of non-private accuracy at ε = 8',
    ],
    skills: ['PyTorch Geometric', 'Differential Privacy', 'Opacus', 'GNNs', 'SLURM', 'H200 GPUs'],
  },
  {
    id: 'vantaca',
    role: 'Software Engineering Intern',
    org: 'Vantaca + HOAi (YC W22)',
    shortOrg: 'Vantaca + HOAi',
    start: 'May 2025',
    end: 'Dec 2025',
    sortKey: '2025-05',
    location: 'Wilmington, NC',
    current: false,
    kind: 'industry',
    bullets: [
      'Built a LangGraph agent microservice triggered on Jira updates that auto-generates documentation from git PRs and org context via semantic search, accelerating doc workflows by 3× across 50+ tickets/week, monitored in LangSmith',
      'Deployed agent via dockerized Azure Function with CI/CD pipeline, achieving 95% quality score in tech writer evals',
      'Architected hosted MCPs via Azure App Services with custom OAuth for secure LLM knowledge access by 200+ staff',
    ],
    skills: ['LangGraph', 'LangSmith', 'Azure Functions', 'Docker', 'CI/CD', 'OAuth', 'MCP'],
  },
  {
    id: 'ail',
    role: 'ML Research Intern',
    org: 'Assistive Intelligence Lab, Georgia State University',
    shortOrg: 'Assistive Intelligence Lab',
    start: 'May 2023',
    end: 'Present',
    sortKey: '2023-05',
    location: 'Atlanta, GA',
    current: true,
    kind: 'research',
    bullets: [
      'Proposed NRA-Embed, combining a noise-robust contrastive objective with annotator embeddings to separate genuine disagreement from label noise; matches SOTA on clean data and beats baselines by up to 20 F1 at 40% noise',
      'Implemented a benchmarking harness in PyTorch running 500+ RoBERTa fine-tuning jobs across 4 datasets, 2 synthetic noise models, and 5 seeds on a Linux-based on-premise cluster (1 to 12 GPUs); cut training time by 80%',
    ],
    skills: ['PyTorch', 'NLP', 'Contrastive Learning', 'RoBERTa', 'GPU Clusters'],
  },
]

export const projects: Project[] = [
  {
    id: 'chatgt',
    title: 'ChatGT',
    context: 'Team Lead · GT / NVIDIA AI Makerspace',
    period: 'Aug 2025 - Present',
    summary: 'A fully local LLM study assistant that generates adaptive quizzes and retrieves the right lecture slide with dense embeddings.',
    bullets: [
      'Shipped a fully local LLM study assistant that generates adaptive quizzes via JSON-schema structured outputs',
      'Upgraded RAG retrieval to dense embeddings in sqlite-vec, lifting top-1 slide accuracy from 45% to 66% over keyword search',
    ],
    technologies: ['TypeScript', 'React', 'Ollama', 'sqlite-vec', 'RAG'],
    featured: true,
  },
  {
    id: 'event-platform',
    title: 'Event Tracking Platform',
    context: 'Alpha Kappa Psi',
    period: 'Dec 2024 - Dec 2025',
    summary: 'A Rust and React event platform serving 300+ members, built by a 9-engineer team I led through Agile sprints.',
    bullets: [
      'Built event tracking app in Rust & React with MongoDB and REST APIs on AWS Lambda, serving 300+ active users',
      'Led a 9-engineer team through Agile sprints as project manager, shipping real-time check-in and scheduling features',
    ],
    technologies: ['Rust', 'React', 'MongoDB', 'AWS Lambda', 'REST', 'Agile'],
    featured: true,
  },
  {
    id: 'sentiment-length',
    title: 'Sentiment Across Text Lengths',
    context: 'CS 4641 Machine Learning, Georgia Tech',
    period: 'Spring 2026',
    summary: 'A study of how sentiment classification degrades on short text, and whether models trained on one length generalize to another.',
    bullets: [
      'Built a balanced 42k-sample dataset from Twitter, IMDB, Yelp, and Amazon reviews, bucketed into four length bands from under 80 characters to over 800',
      'Compared Naive Bayes, logistic regression, an RNN-LSTM, and ModernBERT across every bucket, with frozen-encoder and fine-tuned variants',
      'Ran within-bucket against cross-bucket training to test length generalization, finding classical models plateau near 77% while ModernBERT climbs to 89% on long text',
    ],
    technologies: ['PyTorch', 'ModernBERT', 'Scikit-learn', 'Pandas', 'NLP'],
    githubUrl: 'https://github.com/KevinJ-30/4641-Project',
    image: sentimentLengthImage,
    imageAlt:
      'Bar chart of sentiment classification accuracy across four text length buckets. ModernBERT rises from 79% on text under 80 characters to 89% on text over 800, while logistic regression stays near 72 to 79%.',
    featured: false,
  },
  {
    id: 'nra-embed',
    title: 'NRA-Embed',
    context: 'Assistive Intelligence Lab, Findings of EMNLP 2026',
    period: '2023 - Present',
    summary: 'Noise-robust annotator embeddings that separate genuine disagreement from label noise in subjective NLP tasks.',
    bullets: [
      'Combined a noise-robust contrastive objective with annotator embeddings, matching SOTA on clean data and beating baselines by up to 20 F1 at 40% label noise',
      'Benchmarked with 500+ RoBERTa fine-tuning runs across 4 datasets, 2 synthetic noise models, and 5 seeds',
    ],
    technologies: ['PyTorch', 'NLP', 'RoBERTa', 'Contrastive Learning'],
    githubUrl: 'https://github.com/KevinJ-30/Subjective_Annotators',
    image: researchImage,
    featured: false,
  },
  {
    id: 'medmap',
    title: 'MedMap.ai',
    context: 'AI ATL Hackathon',
    period: 'Oct 2024',
    summary: 'A 6-agent LLM system that routes patient history and symptoms to the right specialty in under 10 seconds.',
    bullets: [
      'Designed 6-agent CrewAI system routing cases to 3 specialties in <10s with 95% accuracy',
      'Built RAG-enabled agents for diagnosis and bias detection, reducing demographic disparities in care',
    ],
    technologies: ['CrewAI', 'Streamlit', 'MongoDB', 'GCP', 'Python', 'RAG'],
    githubUrl: 'https://github.com/StevenZh23/AIATL_Project',
    demoUrl: 'https://devpost.com/software/medhub-ai',
    image: medmapImage,
    featured: false,
  },
  {
    id: 'break-the-silence',
    title: 'Break the Silence',
    context: 'HackGT',
    period: 'Sep 2024',
    summary: 'A gesture-to-language platform for nonverbal users, translating 25 hand signs into written replies.',
    bullets: [
      'Built a MediaPipe and Gemini pipeline translating 25 hand gestures into natural language replies with 90% accuracy',
      'Implemented RAG with LangChain for personalized responses from Firebase profiles, sub-5s end to end',
    ],
    technologies: ['Python', 'Firebase', 'Gemini', 'MediaPipe', 'LangChain', 'Flask'],
    githubUrl: 'https://github.com/StudioMitesh/breakthesilence',
    demoUrl: 'https://devpost.com/software/break-the-silence-76okpu',
    image: gestureImage,
    featured: false,
  },
  {
    id: 'braille',
    title: 'Refreshable Braille',
    context: 'Independent · iOS',
    period: 'Sep 2022 - Feb 2023',
    summary: 'An iPhone app that converts text to braille through haptic feedback, paired with a 3D-printed navigation guide.',
    bullets: [
      'Built in Swift with OCR and keyboard input, reaching 85% readability in user testing',
      'Designed a 3D-printed navigation guide that lifted readability accuracy from 50% to 85%',
    ],
    technologies: ['Swift', 'OCR', 'iOS', '3D Printing'],
    githubUrl: 'https://github.com/KevinJ-30/HapticBraille',
    image: brailleImage,
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const archivedProjects = projects.filter((p) => !p.featured)

export const skills = {
  Programming: ['Python', 'Java', 'C/C++', 'Rust', 'Swift', 'TypeScript', 'JavaScript', 'SQL', 'React'],
  'ML & AI': ['PyTorch', 'PyTorch Geometric', 'Opacus', 'LangGraph', 'Ollama', 'RAG', 'MCP', 'Scikit-learn', 'Pandas', 'OpenCV'],
  'Data & Infra': ['Snowflake', 'dbt', 'AWS', 'Azure', 'GCP', 'Docker', 'SLURM', 'MongoDB', 'SQLite', 'Streamlit', 'Firebase'],
} as const

export const publications = [
  {
    title: 'When Disagreement Meets Noise: Noise Robust Annotator Embeddings for Subjective NLP',
    authors: 'Jacob, K., Ghazvinian, P., Jinadu, U., Yang, N. T., & Ding, Y.',
    venue: 'Findings of EMNLP 2026',
  },
]

export const honors = [
  { title: 'Zell Miller Scholarship', detail: 'Full tuition' },
  { title: 'National Merit Scholar', detail: '$2,500' },
  { title: 'Best Solo Hack', detail: 'HackGwinnett' },
]

/** Headline numbers used on the home page. Each maps to a resume line. */
export const stats = [
  { value: '4', label: 'Engineering and research roles' },
  { value: '500+', label: 'People using what I built' },
]

export const interests = [
  {
    title: 'Agentic systems',
    description: 'LangGraph services and hosted MCPs, and what it actually takes to keep LLM tooling working in production.',
  },
  {
    title: 'Private machine learning',
    description: 'Differential privacy for graph neural networks, and holding those guarantees on graphs with over 100 million edges.',
  },
  {
    title: 'Subjective NLP',
    description: 'Modeling individual annotators instead of averaging their labels, and separating real disagreement from noise.',
  },
  {
    title: 'Accessibility',
    description: 'Haptic braille and gesture-driven communication, for people that standard interfaces do not serve well.',
  },
]

export const facts = [
  { label: 'Location', value: 'Atlanta, GA' },
  { label: 'Languages', value: 'English, Malayalam, Spanish' },
  { label: 'Graduating', value: education.graduation },
  { label: 'Currently', value: 'ML Research @ Georgia Tech' },
]
