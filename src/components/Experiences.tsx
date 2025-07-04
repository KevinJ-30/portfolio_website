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
    title: "Senior Intern & Community Outreach",
    company: "Asian Student Alliance",
    date: "Jan 2022 – Jul 2024",
    description: [
      "Crafted educational workshops with Asian Google Network to expand community partnerships by 50%",
      "Led leadership conferences and secured expert panel participants, increasing cultural awareness for 100+ students"
    ],
    skills: ["Leadership", "Community Outreach", "Event Planning", "Partnerships"]
  },

  {
    id: 2,
    title: "ML Research Intern",
    company: "Assistive Intelligence Lab - Georgia State University",
    date: "May 2023 – Present",
    description: [
      "Developed NRA-Embed, a noise-robust annotator embedding method combining annotator-aware representations with robust contrastive loss, boosting performance on NLP classification tasks by up to 12% F1 over prior SOTA",
      "Led EMNLP '25 submission on separating annotator disagreement from annotation noise in subjective classification",
      "Deployed scalable ML pipelines across 1-12 GPU setups, reducing training time by 80% on on-premise clusters"
    ],
    skills: ["PyTorch", "NLP", "Machine Learning", "Research", "GPU Clusters"]
  },
  {
    id: 3,
    title: "Software Development Project Manager",
    company: "Alpha Kappa Psi Business Fraternity - Georgia Tech",
    date: "Dec 2024 – Present",
    description: [
      "Engineered full-stack web app in Rust, AWS Lambda, React, and MongoDB to track event attendance for 300+ users",
      "Developed features for real-time attendance, commenting, & interview scheduling to streamline recruitment processes",
      "Leading Agile workflows for a 9-engineer team, improving development velocity and cross-team collaboration"
    ],
    skills: ["Rust", "AWS Lambda", "React", "MongoDB", "Agile", "Leadership"]
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "Vantaca + HOAi (YC W22)",
    date: "May 2025 – July 2025",
    description: [
      "Developed a LangGraph-powered agent triggered on Jira updates that auto-generates documentation by analyzing PRs and retrieving internal context via semantic search, accelerating doc workflows by 3× across 50+ tickets/week",
      "Resolved validation bugs in TypeScript CLI for AI stack onboarding, preventing misconfigurations for 40+ engineers",
      "Deploying hosted MCPs via Azure App Services with custom OAuth for secure LLM knowledge access by 200+ staff"
    ],
    skills: ["LangGraph", "TypeScript", "Azure", "MCPs", "Jira", "AI/ML"]
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
                  className="glass rounded-lg shadow-lg p-6 cursor-pointer border border-white/20 hover:border-white/30 transition-colors max-w-sm"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedId(selectedId === experience.id ? null : experience.id)}
                >
                  <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{experience.title}</h3>
                  <p className="text-blue-300 font-medium text-sm mb-1">{experience.company}</p>
                  <p className="text-white/70 text-xs mb-3">{experience.date}</p>
                  
                  <AnimatePresence>
                    {selectedId === experience.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <div className="space-y-3">
                          {experience.description.map((desc, i) => (
                            <p key={i} className="text-white/90 text-sm leading-relaxed">• {desc}</p>
                          ))}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {experience.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-blue-400/20 text-blue-200 rounded-full text-xs border border-blue-400/30"
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