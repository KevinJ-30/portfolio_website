import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import profileImage from '../assets/KevinJacob_Headshot.jpg'

export default function ProfileCard() {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/KevinJ-30', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/kevin-jacob1', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:kevinmatjacob@gmail.com', label: 'Email' },
  ]

  return (
    <motion.div 
      className="max-w-4xl mx-auto px-4 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="glass p-8 rounded-2xl shadow-2xl text-center">
        <motion.div
          className="relative mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={profileImage}
            alt="Kevin Jacob"
            className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-white/20 shadow-xl"
          />
        </motion.div>
        
        <motion.h2 
          className="text-3xl font-bold mb-2 gradient-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Kevin Jacob
        </motion.h2>
        
        <motion.p 
          className="text-xl text-white/90 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Computer Science Student | Human-Centered AI Enthusiast
        </motion.p>
        
        <motion.p 
          className="text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Passionate about creating AI solutions that make a real impact on people's lives. 
          Specializing in multi-agent systems, natural language processing, and accessibility technology.
        </motion.p>
        
        <motion.div 
          className="flex justify-center space-x-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <social.icon className="text-xl" />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.a
          href="/Kevin_Jacob_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 mx-auto"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <FaDownload />
          <span>Download Resume</span>
        </motion.a>
      </div>
    </motion.div>
  )
}