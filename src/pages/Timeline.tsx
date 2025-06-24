import { motion } from 'framer-motion'
import { FaClock, FaStar } from 'react-icons/fa'
import ExperiencesComponent from "../components/Experiences"

export default function Timeline() {
  const milestones = [
    {
      year: "2024",
      title: "AI Research Breakthrough",
      description: "Published research on multi-agent medical diagnosis systems"
    },
    {
      year: "2023",
      title: "Accessibility Innovation",
      description: "Developed refreshable braille iOS app with 85% accuracy improvement"
    },
    {
      year: "2022",
      title: "Academic Excellence",
      description: "Started CS degree with focus on AI and human-centered design"
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
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-6 gradient-text">
            My Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A timeline of my academic and professional achievements, showcasing my growth in AI and accessibility technology.
          </p>
        </motion.div>

        {/* Key Milestones */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Key Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="glass p-6 rounded-xl text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-4xl font-bold gradient-text mb-4">{milestone.year}</div>
                <FaStar className="text-3xl mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                <p className="text-gray-300">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <FaClock className="text-3xl mr-3 text-blue-400" />
              <h2 className="text-4xl font-bold gradient-text">Detailed Timeline</h2>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore my complete journey through education, internships, research, and achievements
            </p>
          </div>
          <ExperiencesComponent />
        </motion.div>

        {/* Future Goals */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Looking Forward</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              "My goal is to continue pushing the boundaries of AI and accessibility technology, 
              creating solutions that make a real difference in people's lives. I'm excited to 
              collaborate with innovative teams and contribute to the future of human-centered AI."
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
