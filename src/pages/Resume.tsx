import { motion } from 'framer-motion'
import { FaDownload, FaBriefcase, FaGraduationCap, FaTrophy, FaCode, FaTools } from 'react-icons/fa'

export default function Resume() {
  const experience = [
    {
      title: "AI Research Intern",
      company: "TechCorp AI",
      period: "May 2024 - Present",
      description: [
        "Developed multi-agent systems for medical diagnosis using CrewAI and GCP",
        "Implemented RAG techniques to reduce demographic bias in AI diagnosis",
        "Built Streamlit + MongoDB application for real-time case routing",
        "Collaborated with medical professionals to validate AI solutions"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "InnovateTech Solutions",
      period: "June 2023 - August 2023",
      description: [
        "Built gesture-to-language communication platform using MediaPipe and Gemini",
        "Achieved 90% accuracy in gesture recognition and translation",
        "Integrated LangChain with Firebase for personalized user experiences",
        "Led team of 3 developers in agile development process"
      ]
    },
    {
      title: "Accessibility Technology Researcher",
      company: "University Research Lab",
      period: "January 2023 - December 2023",
      description: [
        "Developed iOS app for refreshable braille using haptic feedback",
        "Created 3D-printed navigation aid improving readability by 35%",
        "Implemented OCR and keyboard input support for accessibility",
        "Published research paper on assistive technology innovations"
      ]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2022 - 2026",
      gpa: "3.9/4.0",
      relevantCourses: [
        "Artificial Intelligence", "Machine Learning", "Computer Vision",
        "Human-Computer Interaction", "Data Structures & Algorithms",
        "Software Engineering", "Database Systems"
      ]
    }
  ]

  const technicalSkills = {
    "Programming Languages": ["Python", "JavaScript/TypeScript", "Swift", "Java", "C++"],
    "AI/ML Technologies": ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "MediaPipe"],
    "Web Technologies": ["React", "Node.js", "Flask", "MongoDB", "PostgreSQL"],
    "Cloud & DevOps": ["AWS", "GCP", "Docker", "Git", "CI/CD"],
    "Tools & Frameworks": ["CrewAI", "LangChain", "Streamlit", "Firebase", "SwiftUI"]
  }

  const achievements = [
    "Published 3 research papers on AI and accessibility technology",
    "Led team that won 1st place at University Hackathon 2024",
    "Recipient of Dean's List for Academic Excellence (2022-2024)",
    "Speaker at AI Accessibility Conference 2024",
    "Open source contributor with 500+ stars on GitHub"
  ]

  const certifications = [
    "Google Cloud Professional Data Engineer",
    "AWS Certified Solutions Architect",
    "TensorFlow Developer Certificate",
    "Microsoft Azure AI Fundamentals"
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
          <p className="text-xl text-gray-300 mb-8">
            My professional journey, skills, and achievements
          </p>
          <motion.button 
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            <span>Download PDF</span>
          </motion.button>
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
                      <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start">
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
                    <p className="text-gray-400 text-sm mb-3">{edu.period} | GPA: {edu.gpa}</p>
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Relevant Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.map((course, i) => (
                          <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                          <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center mb-6">
                  <FaTrophy className="text-2xl mr-3 text-blue-400" />
                  <h2 className="text-2xl font-bold gradient-text">Achievements</h2>
                </div>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={achievement}
                      className="text-gray-300 text-sm flex items-start"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    >
                      <span className="text-yellow-400 mr-2">🏆</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center mb-6">
                  <FaTools className="text-2xl mr-3 text-blue-400" />
                  <h2 className="text-2xl font-bold gradient-text">Certifications</h2>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      className="text-gray-300 text-sm"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                    >
                      <span className="text-blue-400 mr-2">✓</span>
                      {cert}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
