import { motion } from 'framer-motion'
import { FaUsers, FaRocket, FaStar, FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaAws, FaGitAlt } from 'react-icons/fa'
import { SiRust, SiSwift, SiFlask, SiPytorch, SiJupyter, SiMongodb, SiGooglecloud, SiFirebase, SiPandas, SiOpencv, SiScikitlearn } from 'react-icons/si'
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

        {/* Tech Stack Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Tech Stack
          </h2>
          <div className="space-y-10">
            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Languages</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                <div className="flex flex-col items-center">
                  <FaPython className="text-4xl text-blue-400" />
                  <span className="text-white/80 text-xs mt-2">Python</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaJava className="text-4xl text-orange-400" />
                  <span className="text-white/80 text-xs mt-2">Java</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiRust className="text-4xl text-orange-700" />
                  <span className="text-white/80 text-xs mt-2">Rust</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiSwift className="text-4xl text-red-400" />
                  <span className="text-white/80 text-xs mt-2">Swift</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaJs className="text-4xl text-yellow-300" />
                  <span className="text-white/80 text-xs mt-2">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaHtml5 className="text-4xl text-orange-500" />
                  <span className="text-white/80 text-xs mt-2">HTML5</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaCss3Alt className="text-4xl text-blue-300" />
                  <span className="text-white/80 text-xs mt-2">CSS3</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaDatabase className="text-4xl text-green-400" />
                  <span className="text-white/80 text-xs mt-2">SQL</span>
                </div>
              </div>
            </div>
            {/* Frameworks & Libraries */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Frameworks & Libraries</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                <div className="flex flex-col items-center">
                  <FaReact className="text-4xl text-cyan-400" />
                  <span className="text-white/80 text-xs mt-2">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiFlask className="text-4xl text-gray-400" />
                  <span className="text-white/80 text-xs mt-2">Flask</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiPytorch className="text-4xl text-orange-400" />
                  <span className="text-white/80 text-xs mt-2">PyTorch</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiJupyter className="text-4xl text-yellow-400" />
                  <span className="text-white/80 text-xs mt-2">Jupyter</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiOpencv className="text-4xl text-blue-400" />
                  <span className="text-white/80 text-xs mt-2">OpenCV</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiScikitlearn className="text-4xl text-yellow-200" />
                  <span className="text-white/80 text-xs mt-2">Scikit-learn</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiPandas className="text-4xl text-yellow-300" />
                  <span className="text-white/80 text-xs mt-2">Pandas</span>
                </div>
                {/* Add more as needed */}
                <div className="flex flex-col items-center">
                  <span className="text-3xl text-white/60">LangChain</span>
                  <span className="text-white/80 text-xs mt-2">LangChain</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl text-white/60">LangGraph</span>
                  <span className="text-white/80 text-xs mt-2">LangGraph</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl text-white/60">CrewAI</span>
                  <span className="text-white/80 text-xs mt-2">CrewAI</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl text-white/60">Seaborn</span>
                  <span className="text-white/80 text-xs mt-2">Seaborn</span>
                </div>
              </div>
            </div>
            {/* Platforms & Cloud */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Platforms & Cloud</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                <div className="flex flex-col items-center">
                  <SiFirebase className="text-4xl text-yellow-400" />
                  <span className="text-white/80 text-xs mt-2">Firebase</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiMongodb className="text-4xl text-green-400" />
                  <span className="text-white/80 text-xs mt-2">MongoDB</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center">
                    <span className="text-4xl text-blue-400 font-bold">A</span>
                    <span className="text-white/80 text-xs mt-2">Azure</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <SiGooglecloud className="text-4xl text-blue-300" />
                  <span className="text-white/80 text-xs mt-2">GCP</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaAws className="text-4xl text-yellow-300" />
                  <span className="text-white/80 text-xs mt-2">AWS</span>
                </div>
              </div>
            </div>
            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Tools</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                <div className="flex flex-col items-center">
                  <FaGitAlt className="text-4xl text-orange-400" />
                  <span className="text-white/80 text-xs mt-2">Git</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl text-white/60">Jira</span>
                  <span className="text-white/80 text-xs mt-2">Jira</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl text-white/60">Streamlit</span>
                  <span className="text-white/80 text-xs mt-2">Streamlit</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl text-white/60">Agile</span>
                  <span className="text-white/80 text-xs mt-2">Agile</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl text-white/60">MCPs</span>
                  <span className="text-white/80 text-xs mt-2">MCPs</span>
                </div>
              </div>
            </div>
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
