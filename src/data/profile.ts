import medmapImage from '../assets/medmap3.png'
import gestureImage from '../assets/break_silence.png'
import brailleImage from '../assets/braille.png'
import researchImage from '../assets/research.png'

/**
 * Single source of truth for every page on the site.
 * Mirrors Kevin_Jacob_Resume_Summer27.pdf, update here, not in components.
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
  featured: boolean
}

export const profile = {
  name: 'Kevin Jacob',
  firstName: 'Kevin',
  role: 'Software Engineer',
  tagline: 'I study computer science, do machine learning research, and build software. Previously a software engineering intern at Apple.',
  bio: 'I study computer science at Georgia Tech, concentrating in artificial intelligence and theory. My time splits between software engineering internships and machine learning research: right now that means agent tooling and data pipelines at Apple, differential privacy for graph neural networks at Georgia Tech, and annotator modeling for subjective NLP at Georgia State.',
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
    'Efficient Machine Learning',
    'Intro to AI',
    'Computer Organization',
    'Data Structures and Algorithms',
    'Object-Oriented Programming',
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
      'Automated metrics for CI tooling support by building a Slack bot module in Python (Bolt) that ingests requests and pushes data via S3 to Snowflake, eliminating manual metric collection and saving 150+ engineering hours annually',
      'Modeled 30+ operational metrics with dbt SQL transformations on Snowflake, surfacing trends via Streamlit UI',
      'Built an ML pipeline that strips PII from support requests, clusters them with HDBSCAN, and applies LLM-generated labels via cluster sampling, surfacing 60+ issue categories to guide tooling and documentation priorities',
      'Built an MCP-enabled Claude skill to generate reports from Snowflake, enabling on-demand metric summaries',
    ],
    skills: ['Python', 'Slack Bolt', 'Snowflake', 'dbt', 'S3', 'Streamlit', 'HDBSCAN', 'MCP'],
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
      'Developing a framework to improve privacy guarantees in graph neural networks under complex sampling settings, extending prior single-step methods to multi-step scenarios; co-first author on in-progress paper',
      'Designed a graph partitioning approach that reduces sensitivity to node degree, enabling stronger node-level privacy',
      'Built a scalable PyTorch Geometric pipeline with H200 GPUs and SLURM jobs, training on large-scale graphs (2.4M nodes, 124M edges) while maintaining ~95% accuracy retention under various differential privacy constraints',
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
      'Developed NRA-Embed, a noise-robust annotator embedding method combining annotator-aware representations with robust contrastive loss, boosting performance on NLP classification tasks by up to 12% F1 over SOTA on 3 datasets',
      "Led ACL '26 submission on separating annotator disagreement from annotation noise in subjective classification",
      'Deployed PyTorch ML pipelines on a Linux-based on-premise cluster (1 to 12 GPUs), reducing training time by 80%',
    ],
    skills: ['PyTorch', 'NLP', 'Contrastive Learning', 'RoBERTa', 'GPU Clusters'],
  },
]

export const projects: Project[] = [
  {
    id: 'chatgt',
    title: 'ChatGT',
    context: 'GT / NVIDIA AI Makerspace Nexus',
    period: 'Aug 2025 - Dec 2025',
    summary: 'A local LLM study aid running on campus GPU clusters, with Canvas LMS tooling and side-by-side model comparison.',
    bullets: [
      'Built fully local LLM study aid with React, TypeScript, and Node.js, using real-time responses via Server-Sent Events',
      'Developed model comparison interface for A/B testing with user preference tracking across 3 models stored in SQLite',
      'Built 7+ Canvas LMS tools for natural language queries on coursework, with JWT authentication for user profiles',
      'Deployed on AI Makerspace GPU clusters, implementing port conflict detection (lsof, netstat) utilizing fallback ports',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Ollama', 'SQLite', 'SSE', 'JWT'],
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
      'Led a 9-engineer team through Agile sprints as project manager, shipping real-time check-ins, feedback, and interview scheduling features that cut manual tracking time by 70%',
    ],
    technologies: ['Rust', 'React', 'MongoDB', 'AWS Lambda', 'REST', 'Agile'],
    featured: true,
  },
  {
    id: 'nra-embed',
    title: 'NRA-Embed',
    context: "Assistive Intelligence Lab, ACL '26 submission",
    period: '2023 - Present',
    summary: 'Noise-robust annotator embeddings that separate genuine disagreement from label noise in subjective NLP tasks.',
    bullets: [
      'Combined annotator-aware representations with a robust contrastive loss, improving F1 by up to 12% over SOTA across 3 datasets',
      'Formalized the distinction between annotator disagreement and annotation noise in subjective classification',
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
  'ML & AI': ['PyTorch', 'PyTorch Geometric', 'LangGraph', 'OpenCV', 'Ollama', 'MCP', 'Opacus', 'Scikit-learn', 'Pandas'],
  'Data & Infra': ['Snowflake', 'dbt', 'AWS', 'Azure', 'GCP', 'Docker', 'SLURM', 'MongoDB', 'SQLite', 'Streamlit', 'Firebase'],
} as const

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
