import { motion } from 'framer-motion'
import { FaCode, FaGithub, FaExternalLinkAlt, FaStar, FaUsers } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'
import projectImage from '../assets/KevinJacob_Headshot.jpg'

export default function Projects() {
  const featuredProjects = [
    {
      title: "Multi-Agent Gemini LLM for Specialty Diagnosis",
      description: "Built 6-agent CrewAI system to triage patient cases based on symptoms and history using GCP. Created Streamlit + MongoDB app for real-time case routing and alert generation. Used RAG techniques to reduce demographic bias in diagnosis.",
      image: projectImage,
      technologies: ["CrewAI", "GCP", "Streamlit", "MongoDB", "RAG"],
      githubUrl: "https://github.com/yourusername/ai-diagnosis",
      liveUrl: "https://ai-diagnosis-demo.com",
      featured: true
    },
    {
      title: "Gesture-Driven LLM Communication Platform",
      description: "Developed gesture-to-language system using MediaPipe + Gemini + Firebase. Built with Flask, HTML/CSS/JS; translated 25 gestures to natural language with 90% accuracy. Integrated LangChain + Firebase user profiles for personalized responses.",
      image: projectImage,
      technologies: ["MediaPipe", "Gemini", "Firebase", "Flask", "LangChain"],
      githubUrl: "https://github.com/yourusername/gesture-llm",
      liveUrl: "https://gesture-llm-demo.com",
      featured: true
    },
    {
      title: "Refreshable Braille iOS App",
      description: "Built iPhone app in Swift that converts text to braille using haptic feedback. Created 3D-printed navigation aid that boosted readability from 50% to 85%. Supported input via OCR and keyboard.",
      image: projectImage,
      technologies: ["Swift", "iOS", "OCR", "3D Printing"],
      githubUrl: "https://github.com/yourusername/braille-app",
      liveUrl: "https://braille-app-demo.com",
      featured: true
    }
  ]

  const otherProjects = [
    {
      title: "AI-Powered Study Assistant",
      description: "Personalized learning platform that adapts to individual learning styles using machine learning algorithms.",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      githubUrl: "https://github.com/yourusername/study-assistant",
      liveUrl: "https://study-assistant-demo.com"
    },
    {
      title: "Smart Home Automation System",
      description: "IoT-based home automation system with voice control and AI-powered energy optimization.",
      technologies: ["Python", "Arduino", "AWS IoT", "React Native"],
      githubUrl: "https://github.com/yourusername/smart-home",
      liveUrl: "https://smart-home-demo.com"
    },
    {
      title: "Real-time Traffic Analysis",
      description: "Computer vision system for real-time traffic monitoring and congestion prediction.",
      technologies: ["OpenCV", "TensorFlow", "Flask", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/traffic-analysis",
      liveUrl: "https://traffic-analysis-demo.com"
    }
  ]

  const stats = [
    { number: "15+", label: "Projects Completed", icon: FaCode },
    { number: "500+", label: "GitHub Stars", icon: FaStar },
    { number: "10+", label: "Technologies Used", icon: FaCode },
    { number: "100%", label: "Client Satisfaction", icon: FaUsers }
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                  liveUrl={project.liveUrl}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass p-6 rounded-xl"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-white/80 mb-4 text-sm">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaGithub />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
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
            <motion.button 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}