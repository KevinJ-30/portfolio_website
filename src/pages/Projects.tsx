import { motion } from 'framer-motion'
import { FaCode, FaStar, FaUsers } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'
import projectImage from '../assets/KevinJacob_Headshot.jpg'
import medmapImage from '../assets/medmap3.png'
import gestureImage from '../assets/break_silence.png'
import refreshableImage from '../assets/braille.png'
import researchImage from '../assets/research.png'


export default function Projects() {
  const featuredProjects = [
    {
      title: "EMNLP Research Project",
      description: "Developed NRA-Embed, a noise-robust annotator embedding method combining annotator-aware representations with robust contrastive loss, boosting performance on NLP classification tasks by up to 12% F1 over prior SOTA. Led EMNLP '25 submission on separating annotator disagreement from annotation noise in subjective classification. Deployed scalable ML pipelines on multi-GPU clusters.",
      image: researchImage,
      technologies: ["PyTorch", "NLP", "RoBERTa", "Research", "NVIDIA GPUs"],
      githubUrl: "https://github.com/KevinJ-30/Subjective_Annotators",
      featured: true
    },
    {
      title: "MedMap.ai - AI ATL",
      description: "Designed 6-agent LLM CrewAI system to analyze patient history/symptoms, routing cases to 3 specialties in <10s. Developed Streamlit & MongoDB Atlas app for real-time symptom input and specialist routing with 95% accuracy. Created RAG-enabled agents for medical diagnosis and bias detection, reducing demographic disparities in care.",
      image: medmapImage,
      technologies: ["CrewAI", "Streamlit", "MongoDB", "GCP", "Python", "RAG"],
      githubUrl: "https://github.com/StevenZh23/AIATL_Project",
      demoUrl: "https://devpost.com/software/medhub-ai",
      featured: true
    },
    {
      title: "Gesture Driven LLM - HackGT",
      description: "Engineered Flask app to aid communication for nonverbal users with Python, HTML, CSS, JavaScript, and Firebase. Built MediaPipe-Gemini pipeline, translating 25 hand gestures into natural language replies with 90% accuracy. Implemented RAG with LangChain for personalized responses from Firebase profile with sub-5s response time.",
      image: gestureImage,
      technologies: ["Python", "JavaScript", "HTML/CSS", "Firebase", "Gemini", "MediaPipe", "LangChain"],
      githubUrl: "https://github.com/StudioMitesh/breakthesilence",
      demoUrl: "https://devpost.com/software/break-the-silence-76okpu",
      featured: true
    },
    {
      title: "Refreshable Braille iOS App",
      description: "Built iPhone app in Swift converting text to braille using haptic feedback, reaching 85% readability in user testing. Designed 3D-printed navigation guide to assist app usage, improving readability accuracy from 50% to 85%. Enabled text input via camera (OCR) and keyboard, expanding accessibility options for visually impaired users.",
      image: refreshableImage,
      technologies: ["Swift", "OCR", "iOS", "3D Printing"],
      githubUrl: "https://github.com/KevinJ-30/HapticBraille",
      featured: true
    },
    {
      title: "Kevin Jacob Portfolio Website",
      description: "Modern portfolio website built with React, TypeScript, and Vite featuring an AI-powered chatbot using Google's Gemini API. Includes secure backend API, responsive design, and interactive components showcasing my work and skills.",
      image: projectImage,
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Gemini API", "Express.js", "Vercel"],
      githubUrl: "https://github.com/KevinJ-30/portfolio_website",
      demoUrl: "https://kevinj-dev.vercel.app/",
      featured: true
    }
    
  ]

  const stats = [
    { number: "5+", label: "Projects Completed", icon: FaCode },
    { number: "∞", label: "Passion for Tech", icon: FaStar },
    { number: "100%", label: "Dedication to Quality", icon: FaUsers }
  ]

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        className="max-w-6xl mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-6 gradient-text">
            My Projects
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A collection of innovative projects showcasing my expertise in AI, accessibility technology, 
            and human-centered design. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass p-6 rounded-xl text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <stat.icon className="text-3xl mx-auto mb-3 text-blue-400" />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  demoUrl={project.demoUrl}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with innovative teams. 
              Whether it's AI, accessibility, or cutting-edge technology, I'm ready to contribute.
            </p>
            <motion.a
              href="https://linkedin.com/in/kevin-jacob1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}