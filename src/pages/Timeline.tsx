import { motion } from 'framer-motion'
import Timeline from "../components/Experiences"
export default function Home() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-8"
      initial={{ opacity: 0, }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-center mb-12">Welcome to My Timeline</h1>
      <p>This site is animated with Framer Motion!</p>
      <Timeline />
    </motion.div>
    
  )
}
