import { motion } from 'framer-motion'
import ProfileCard from '../components/ProfileCard'

export default function Home() {
  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p>This site is animated with Framer Motion!</p>
      <div className="p-8">
    <ProfileCard />
    </div>
    </motion.div>

    
  )
}
