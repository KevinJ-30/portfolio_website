import { motion } from 'framer-motion'
import { FaUsers, FaRocket, FaStar } from 'react-icons/fa'
import ProfileCard from '../components/ProfileCard'
import Chatbot from '../components/Chatbot'

export default function Home() {
  const highlights = [
    {
      icon: FaRocket,
      title: "AI Innovation",
      description: "Built AI agents for medical diagnosis and accessibility solutions"
    },
    {
      icon: FaStar,
      title: "Research Excellence",
      description: "Working on research in subjective NLP classification and model evaluation"
    },
    {
      icon: FaUsers,
      title: "Leadership",
      description: "Led teams of 5+ developers in creating impactful software solutions"
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        className="max-w-6xl mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-6 gradient-text">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            I'm a Computer Science student passionate about creating AI solutions that make a real impact. 
            From medical diagnosis systems to accessibility technology, I build solutions that help people.
          </p>
          <div className="mt-8">
            <a
              href="/projects"
              className="inline-block px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 font-semibold text-lg shadow-lg border border-white/20"
            >
              See my projects
            </a>
          </div>
        </motion.div>

        {/* Profile Card */}
        <ProfileCard />

        {/* Highlights Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            What I Do Best
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="glass p-6 rounded-xl text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <highlight.icon className="text-4xl mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-3 text-white">{highlight.title}</h3>
                <p className="text-white/80">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Pill Bar */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Tech Stack
          </h2>
          <div className="overflow-x-auto whitespace-nowrap py-4 px-2 flex items-center gap-4 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-blue-400">
            {/* Category labels and pills */}
            <span className="uppercase text-xs text-blue-300 font-bold tracking-wider mr-2">Languages</span>
            {['Python', 'Java', 'Rust', 'Swift', 'JavaScript', 'HTML', 'CSS', 'SQL'].map((lang) => (
              <span key={lang} className="inline-block px-4 py-2 rounded-full bg-blue-900/60 text-white/90 font-medium text-sm border border-blue-400 hover:bg-blue-800/80 transition-all duration-200 mr-2">
                {lang}
              </span>
            ))}
            <span className="uppercase text-xs text-cyan-300 font-bold tracking-wider ml-4 mr-2">Frameworks</span>
            {['React', 'Flask', 'PyTorch', 'LangChain', 'LangGraph', 'CrewAI', 'Jupyter', 'OpenCV', 'Scikit-learn', 'Pandas', 'Seaborn'].map((fw) => (
              <span key={fw} className="inline-block px-4 py-2 rounded-full bg-cyan-900/60 text-white/90 font-medium text-sm border border-cyan-400 hover:bg-cyan-800/80 transition-all duration-200 mr-2">
                {fw}
              </span>
            ))}
            <span className="uppercase text-xs text-purple-300 font-bold tracking-wider ml-4 mr-2">Platforms</span>
            {['Firebase', 'MongoDB', 'Azure', 'GCP', 'AWS'].map((platform) => (
              <span key={platform} className="inline-block px-4 py-2 rounded-full bg-purple-900/60 text-white/90 font-medium text-sm border border-purple-400 hover:bg-purple-800/80 transition-all duration-200 mr-2">
                {platform}
              </span>
            ))}
            <span className="uppercase text-xs text-pink-300 font-bold tracking-wider ml-4 mr-2">Tools</span>
            {['Git', 'Jira', 'Streamlit', 'Agile', 'MCPs'].map((tool) => (
              <span key={tool} className="inline-block px-4 py-2 rounded-full bg-pink-900/60 text-white/90 font-medium text-sm border border-pink-400 hover:bg-pink-800/80 transition-all duration-200 mr-2">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "5+", label: "Projects Completed" },
              { number: "3", label: "Papers in Progress" },
              { number: "100%", label: "Dedication to Tech" },
              { number: "∞", label: "Passion for AI" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass p-6 rounded-xl text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Chatbot Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">
            Meet Kevin-Bot!
          </h2>
          <p className="text-center text-white/80 mb-8">
            Click the chat icon in the bottom right corner to ask questions about Kevin's work, skills, or projects.
          </p>
          <Chatbot />
        </motion.div>
      </motion.div>
    </div>
  )
}
