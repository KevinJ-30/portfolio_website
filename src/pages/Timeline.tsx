import { motion } from 'framer-motion'
import Timeline from "../components/Experiences"
export default function Home() {
  return (
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl w-full px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Welcome to My Timeline</h1>
        <p className="text-center mb-8">This site is animated with Framer Motion!</p>
        <Timeline />
      </div>
    </motion.div>
  )
}
