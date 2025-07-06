import { motion } from 'framer-motion'
import { FaGraduationCap, FaHeart, FaLightbulb, FaGlobe, FaCode, FaUsers } from 'react-icons/fa'

export default function About() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Georgia Institute of Technology",
      year: "2024 - 2027",
      description: "Focusing on Artificial Intelligence, Machine Learning, and Human-Computer Interaction"
    }
  ]

  const interests = [
    {
      icon: FaCode,
      title: "AI & Machine Learning",
      description: "Passionate about creating intelligent systems that solve real-world problems"
    },
    {
      icon: FaUsers,
      title: "Human-Centered Design",
      description: "Believing that technology should serve people, not the other way around"
    },
    {
      icon: FaGlobe,
      title: "Accessibility Technology",
      description: "Creating solutions that make technology accessible to everyone"
    },
    {
      icon: FaLightbulb,
      title: "Model Context Protocols",
      description: "Currently exploring MCPs and pushing the boundaries of what's possible"
    }
  ]

  const personalInfo = [
    { label: "Location", value: "Atlanta, GA" },
    { label: "Languages", value: "English, Spanish, Malayalam" },
    { label: "Interests", value: "AI Research, Accessibility, Open Source" },
    { label: "Hobbies", value: "Hiking, Reading, Cello" }
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
            About Me
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            I'm a Computer Science student with a passion for creating AI solutions that make a real impact on people's lives.
          </p>
        </motion.div>

        {/* Personal Story */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 gradient-text">My Story</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-white/90 leading-relaxed mb-4">
                  My passion for research began in high school, where I first discovered the thrill of exploring new technologies 
                  and solving complex problems. This early experience with research ignited my curiosity and set me on a path 
                  toward creating meaningful AI solutions.
                </p>
                <p className="text-white/90 leading-relaxed mb-4">
                  I believe that technology should be accessible to everyone, regardless of their abilities or background. 
                  This belief drives my work in accessibility technology and human-centered AI design, ensuring that the 
                  solutions I create benefit people from all walks of life.
                </p>
                <p className="text-white/90 leading-relaxed">
                  When I'm not coding or researching, you'll find me exploring the outdoors, reading about emerging technologies, 
                  or collaborating with other developers on open-source projects that make a difference.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <FaHeart className="text-6xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Education</h2>
          <div className="flex justify-center">
            <div className="max-w-md">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="glass p-6 rounded-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <FaGraduationCap className="text-3xl mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-white">{edu.degree}</h3>
                <p className="text-blue-400 mb-2">{edu.school}</p>
                <p className="text-white/70 mb-3">{edu.year}</p>
                <p className="text-white/80 text-sm">{edu.description}</p>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">What Drives Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                className="glass p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <interest.icon className="text-3xl mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-3 text-white">{interest.title}</h3>
                <p className="text-white/80">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Info */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Quick Facts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {personalInfo.map((info, index) => (
              <motion.div
                key={info.label}
                className="glass p-6 rounded-xl text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-2 gradient-text">{info.label}</h3>
                <p className="text-white/80">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What's piquing my interest */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 gradient-text text-center">What's piquing my interest</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Books Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Books I'm Reading</h3>
                <ul className="space-y-4">
                  <li className="bg-white/10 rounded-lg p-4">
                    <span className="font-bold text-white">Dante's Inferno</span>
                    <p className="text-white/80 text-sm mt-1">A classic journey through the circles of Hell—I'm fascinated by its allegory, poetic structure, and influence on literature and art.</p>
                  </li>
                  {/* Add more books here as needed */}
                </ul>
              </div>
              {/* Video Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Videos I'm Watching</h3>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/LCEmiRjPEtQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-white/80 text-sm mt-2">A recent video that's caught my attention—always looking for new perspectives and ideas!</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 gradient-text">My Mission</h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              "To create technology that not only solves problems but also makes the world more accessible, 
              inclusive, and better for everyone. I believe that the best technology is the kind that you 
              don't notice - it just works, and it works for everyone."
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
