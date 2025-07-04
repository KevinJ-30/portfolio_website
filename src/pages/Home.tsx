import { motion } from 'framer-motion'
import { FaCode, FaBrain, FaUsers, FaRocket, FaStar } from 'react-icons/fa'
import ProfileCard from '../components/ProfileCard'
import Chatbot from '../components/Chatbot'

export default function Home() {
  const skills = [
    { name: 'Python', level: 90, icon: FaCode },
    { name: 'Machine Learning', level: 90, icon: FaBrain },
    { name: 'Leadership', level: 95, icon: FaUsers },
    { name: 'Java', level: 80, icon: FaCode },
    { name: 'Azure/AWS', level: 85, icon: FaCode },
  ]

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

        {/* Skills Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="text-2xl mr-3 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  />
                </div>
                <p className="text-sm text-white/70 mt-2">{skill.level}% proficiency</p>
              </motion.div>
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
