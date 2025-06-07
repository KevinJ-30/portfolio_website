import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import projectImage from '../assets/KevinJacob_Headshot.jpg' // Make sure to use your actual image path

export default function Projects() {  // Changed from Home to Projects
  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to My Projects</h1>
      <p className="mb-8">This site is animated with Framer Motion!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Portfolio Website"
          description="A modern portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design."
          image={projectImage}
          technologies={["React", "TypeScript", "Tailwind CSS", "Framer Motion"]}
          githubUrl="https://github.com/yourusername/portfolio"
          liveUrl="https://your-portfolio.com"
        />
        {/* Add more ProjectCards here */}
      </div>
    </motion.div>
  )
}