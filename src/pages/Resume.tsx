import { motion } from 'framer-motion'
import { FaDownload, FaBriefcase, FaGraduationCap, FaTrophy, FaCode } from 'react-icons/fa'

export default function Resume() {
  const experience = [
    {
      title: "Software Engineer Intern",
      company: "Vantaca + HOAi (YC W22)",
      period: "May 2025 - July 2025",
      location: "Wilmington, NC",
      description: [
        "Developed a LangGraph-powered agent triggered on Jira updates that auto-generates documentation by analyzing PRs and retrieving internal context via semantic search, accelerating doc workflows by 3× across 50+ tickets/week",
        "Resolved validation bugs in TypeScript CLI for AI stack onboarding, preventing misconfigurations for 40+ engineers",
        "Deploying hosted MCPs via Azure App Services with custom OAuth for secure LLM knowledge access by 200+ staff"
      ]
    },
    {
      title: "ML Research Intern",
      company: "Assistive Intelligence Lab - Georgia State University",
      period: "May 2023 - Present",
      location: "Atlanta, GA",
      description: [
        "Developed NRA-Embed, a noise-robust annotator embedding method combining annotator-aware representations with robust contrastive loss, boosting performance on NLP classification tasks by up to 12% F1 over prior SOTA",
        "Led EMNLP '25 submission on separating annotator disagreement from annotation noise in subjective classification",
        "Deployed scalable ML pipelines across 1-12 GPU setups, reducing training time by 80% on on-premise clusters"
      ]
    },
    {
      title: "Software Development Project Manager",
      company: "Alpha Kappa Psi Business Fraternity - Georgia Tech",
      period: "Dec 2024 - Present",
      location: "Atlanta, GA",
      description: [
        "Engineered full-stack web app in Rust, AWS Lambda, React, and MongoDB to track event attendance for 300+ users",
        "Developed features for real-time attendance, commenting, & interview scheduling to streamline recruitment processes",
        "Leading Agile workflows for a 9-engineer team, improving development velocity and cross-team collaboration"
      ]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Georgia Institute of Technology, Atlanta, GA",
      period: "May 2027",
      gpa: "4.00",
      concentrations: "Artificial Intelligence and Theory",
      relevantCourses: [
        "Intro to AI", "Computer Organization", "Robotics and Perception", 
        "Data Structures and Algorithms", "OOP"
      ]
    }
  ]

  const projects = [
    {
      title: "MedMap.ai - AI ATL",
      period: "Oct 2024",
      technologies: "CrewAI, Streamlit, MongoDB, GCP, Python",
      description: [
        "Designed 6-agent LLM CrewAI system to analyze patient history/symptoms, routing cases to 3 specialties in <10s",
        "Developed Streamlit & MongoDB Atlas app for real-time symptom input and specialist routing with 95% accuracy",
        "Created RAG-enabled agents for medical diagnosis and bias detection, reducing demographic disparities in care"
      ]
    },
    {
      title: "Gesture Driven LLM - HackGT",
      period: "Sep 2024",
      technologies: "Python, Javascript, HTML/CSS, Firebase, Gemini",
      description: [
        "Engineered Flask app to aid communication for nonverbal users with Python, HTML, CSS, JavaScript, and Firebase",
        "Built MediaPipe-Gemini pipeline, translating 25 hand gestures into natural language replies with 90% accuracy",
        "Implemented RAG with LangChain for personalized responses from Firebase profile with sub-5s response time"
      ]
    },
    {
      title: "Refreshable Braille iOS App",
      period: "Sep 2022 - Feb 2023",
      technologies: "Swift, OCR",
      description: [
        "Built iPhone app in Swift converting text to braille using haptic feedback, reaching 85% readability in user testing",
        "Designed 3D-printed navigation guide to assist app usage, improving readability accuracy from 50% to 85%",
        "Enabled text input via camera (OCR) and keyboard, expanding accessibility options for visually impaired users"
      ]
    }
  ]

  const technicalSkills = {
    "Programming": ["Python", "Java", "C", "Rust", "Swift", "JavaScript", "React", "SQL", "Flask", "Firebase", "MongoDB"],
    "Cloud & Platforms": ["Azure", "GCP", "AWS"],
    "Machine Learning": ["PyTorch", "LangChain", "LangGraph", "CrewAI", "Ollama", "Jupyter", "OpenCV", "Scikit-learn", "Pandas", "Seaborn"]
  }



  const honors = [
    "National Merit Scholar ($2500)",
    "2nd Place ($1500) & National Qualifier, GA JSHS",
    "Best Solo Hack, HackGwinnett",
    "Selected for NVIDIA/GT LLM Bootcamp"
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-6 gradient-text">Resume</h1>
          <p className="text-xl text-white/90 mb-8">
            My professional journey, skills, and achievements
          </p>
          <motion.a
            href="/Kevin_Jacob_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            <span>Download PDF</span>
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center mb-6">
                  <FaBriefcase className="text-2xl mr-3 text-blue-400" />
                  <h2 className="text-3xl font-bold gradient-text">Experience</h2>
                </div>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={exp.title}
                      className="border-l-4 border-blue-400 pl-6"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                      <p className="text-white/70 text-sm mb-3">{exp.period} | {exp.location}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-white/80 text-sm flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center mb-6">
                  <FaGraduationCap className="text-2xl mr-3 text-blue-400" />
                  <h2 className="text-3xl font-bold gradient-text">Education</h2>
                </div>
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 font-medium">{edu.school}</p>
                    <p className="text-white/70 text-sm mb-3">{edu.period} | GPA: {edu.gpa}</p>
                    <p className="text-white/80 text-sm mb-3">Concentrations: {edu.concentrations}</p>
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Relevant Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.map((course, i) => (
                          <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center mb-6">
                  <FaCode className="text-2xl mr-3 text-blue-400" />
                  <h2 className="text-3xl font-bold gradient-text">Projects</h2>
                </div>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      className="border-l-4 border-green-400 pl-6"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    >
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="text-green-400 font-medium">{project.technologies}</p>
                      <p className="text-white/70 text-sm mb-3">{project.period}</p>
                      <ul className="space-y-2">
                        {project.description.map((item, i) => (
                          <li key={i} className="text-white/80 text-sm flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center mb-6">
                  <FaCode className="text-2xl mr-3 text-blue-400" />
                  <h2 className="text-2xl font-bold gradient-text">Technical Skills</h2>
                </div>
                <div className="space-y-4">
                  {Object.entries(technicalSkills).map(([category, skills], index) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    >
                      <h3 className="text-white font-semibold mb-2">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Honors */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center mb-6">
                  <FaTrophy className="text-2xl mr-3 text-blue-400" />
                  <h2 className="text-2xl font-bold gradient-text">Honors & Awards</h2>
                </div>
                <ul className="space-y-3">
                  {honors.map((honor, index) => (
                    <motion.li
                      key={honor}
                      className="text-white/80 text-sm flex items-start"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    >
                      <span className="text-yellow-400 mr-2">🏆</span>
                      {honor}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
