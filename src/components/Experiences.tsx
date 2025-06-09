import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

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
  {
    id: 3,
    title: "Teaching Assistant",
    company: "University Department",
    date: "2023-Present",
    description: "Leading discussion sections and helping students understand complex programming concepts. Grading assignments and providing constructive feedback.",
    skills: ["Teaching", "Python", "Java", "Communication"]
  },
  {
    id: 4,
    title: "Web Development Intern",
    company: "Tech Startup",
    date: "Spring 2023",
    description: "Developed and maintained client websites using modern web technologies. Implemented responsive designs and optimized performance.",
    skills: ["HTML", "CSS", "JavaScript", "WordPress"]
  },
  {
    id: 5,
    title: "Data Science Project",
    company: "University Research Lab",
    date: "2022",
    description: "Conducted data analysis and visualization for research projects. Developed predictive models using machine learning algorithms.",
    skills: ["Python", "Pandas", "Scikit-learn", "Data Visualization"]
  },
  {
    id: 6,
    title: "Mobile App Development",
    company: "Personal Project",
    date: "2023",
    description: "Created a cross-platform mobile application using React Native. Implemented user authentication and real-time data synchronization.",
    skills: ["React Native", "Firebase", "Redux", "Mobile Development"]
  },
  {
    id: 7,
    title: "Hackathon Winner",
    company: "University Hackathon",
    date: "2022",
    description: "Led a team to develop an innovative solution for sustainable living. Won first place in the university hackathon.",
    skills: ["Team Leadership", "Rapid Prototyping", "Presentation", "Problem Solving"]
  },
  {
    id: 8,
    title: "Open Source Contributor",
    company: "GitHub",
    date: "2022-Present",
    description: "Contributed to various open-source projects. Fixed bugs and implemented new features for popular repositories.",
    skills: ["Git", "Open Source", "Code Review", "Documentation"]
  }
]

export default function Timeline() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (timelineRef.current && !timelineRef.current.contains(event.target as Node)) {
        setSelectedId(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <motion.div
      className="w-full overflow-x-auto pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={timelineRef}
    >
      <div className="relative min-w-[1200px] px-8">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300" />

        {/* Timeline Items */}
        <div className="relative flex justify-between items-center py-24">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative flex-1">
              {/* Timeline Dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500" />

              {/* Content Container */}
              <motion.div
                className={`relative mx-4 ${index % 2 === 0 ? 'mb-24' : 'mt-24'}`}
                initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, y: 0 }}
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