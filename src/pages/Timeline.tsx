import { motion } from 'framer-motion'
import { FaClock} from 'react-icons/fa'
import ExperiencesComponent from "../components/Experiences"

export default function Timeline() {


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
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A timeline of my academic and professional achievements, showcasing my growth in AI and accessibility technology.
          </p>
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
            <p className="text-white/80 max-w-2xl mx-auto">
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
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
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
