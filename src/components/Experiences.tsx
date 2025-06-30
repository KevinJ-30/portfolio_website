import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

interface Experience {
  id: number
  title: string
  company: string
  date: string
  description: string[]
  skills: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Vantaca/HOAi (YC W22)",
    date: "May 2025 – July 2025",
    description: [
      "Built CLI tooling to automate developer AI stack setup (Cursor, Claude Desktop, MCPs)",
      "Created auto-documentation agent using LangGraph and Azure Functions; integrates with Jira, PRs, and internal knowledge bases",
      "Led migration from stdin-based MCPs to remote MCPs using Entra authentication on Azure"
    ],
    skills: ["CLI", "LangGraph", "Azure", "Jira", "Entra"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Alpha Kappa Psi, Georgia Tech",
    date: "December 2024 – Present",
    description: [
      "Built full-stack web platform (Rust, AWS Lambda, MongoDB, React) used by 300+ users for event tracking",
      "Developed real-time check-in, comment posting, and interview scheduling features",
      "Used Agile practices with Jira and Git for rapid integration of frontend and backend components"
    ],
    skills: ["Rust", "AWS Lambda", "MongoDB", "React", "Agile", "Git"]
  },
  {
    id: 3,
    title: "ML Engineer Intern",
    company: "Assistive Intelligence Lab, Georgia State University",
    date: "May 2023 – Present",
    description: [
      "Developed multitask ResNet model in PyTorch for annotator bias modeling (3.8% F1 improvement)",
      "First-author on CVPR 2024 submission addressing subjective annotation noise",
      "Built hybrid noise simulation pipeline combining disagreement and label noise",
      "Deployed experiments using NVIDIA A100s and in-house GPU clusters"
    ],
    skills: ["PyTorch", "ResNet", "NVIDIA", "Machine Learning", "CVPR"]
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "Robinson College of Business",
    date: "August 2022 – December 2022",
    description: [
      "Suggested 100+ technical edits for machine learning textbook used by 300 students",
      "Validated textbook code using Python and Scikit-learn across 9 chapters",
      "Added projects on blockchain, finance, and cryptography for educational use"
    ],
    skills: ["Python", "Scikit-learn", "Machine Learning", "Education", "Blockchain"]
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
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/30" />

        {/* Timeline Items */}
        <div className="relative flex justify-between items-center py-24">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative flex-1">
              {/* Timeline Dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400" />

              {/* Content Container */}
              <motion.div
                className={`relative mx-4 ${index % 2 === 0 ? 'mb-24' : 'mt-24'}`}
                initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Experience Card */}
                <motion.div
                  className="glass rounded-lg shadow-lg p-6 cursor-pointer border border-white/20 hover:border-white/30 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedId(selectedId === experience.id ? null : experience.id)}
                >
                  <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                  <p className="text-blue-300 font-medium">{experience.company}</p>
                  <p className="text-white/70 text-sm">{experience.date}</p>
                  
                  <AnimatePresence>
                    {selectedId === experience.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <div className="space-y-2">
                          {experience.description.map((desc, i) => (
                            <p key={i} className="text-white/80 text-sm">• {desc}</p>
                          ))}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {experience.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-blue-400/20 text-blue-200 rounded-full text-sm border border-blue-400/30"
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