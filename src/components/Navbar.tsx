import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHome, FaUser, FaFileAlt, FaCode, FaClock } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScroll(scrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/about', label: 'About', icon: FaUser },
    { path: '/resume', label: 'Resume', icon: FaFileAlt },
    { path: '/projects', label: 'Projects', icon: FaCode },
    { path: '/timeline', label: 'Timeline', icon: FaClock },
  ]

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: `${scroll}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scroll}%` }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        />
      </div>
      <motion.nav 
        className="fixed top-0 left-0 right-0 glass text-white p-4 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-2xl font-bold gradient-text">
              Kevin Jacob
            </Link>
          </motion.div>
          
          <div className="flex space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to={item.path} 
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/20 text-white shadow-lg' 
                        : 'hover:bg-white/10 text-gray-200 hover:text-white'
                    }`}
                  >
                    <Icon className="text-sm" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.nav>
    </>
  )
}