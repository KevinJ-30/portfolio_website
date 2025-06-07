import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Experience {
  id: number
  title: string
  company: string
  date: string
  description: string
  skills: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Company Name",
    date: "Summer 2023",
    description: "Worked on developing and maintaining web applications using React and Node.js. Collaborated with cross-functional teams to implement new features and fix bugs.",
    skills: ["React", "Node.js", "TypeScript", "Git"]
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "University Name",
    date: "2022-2023",
    description: "Assisted in research projects related to machine learning and data analysis. Implemented algorithms and analyzed results.",
    skills: ["Python", "Machine Learning", "Data Analysis"]
  },
  // Add more experiences as needed
]

export default function Timeline() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience Timeline</h1>
      
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" />

        {/* Timeline Items */}
        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />

              {/* Content Container */}
              <motion.div
                className={`relative ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} w-5/12`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Experience Card */}
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 cursor-pointer border border-gray-200/20 hover:border-gray-300/30 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedId(selectedId === experience.id ? null : experience.id)}
                >
                  <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                  <p className="text-blue-600 font-medium">{experience.company}</p>
                  <p className="text-gray-500 text-sm">{experience.date}</p>
                  
                  <AnimatePresence>
                    {selectedId === experience.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <p className="text-gray-600">{experience.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {experience.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-blue-100/50 text-blue-800 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}