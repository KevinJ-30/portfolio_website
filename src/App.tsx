import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Timeline from './pages/Timeline'
import Chatbot from './components/Chatbot'
import { useEffect, useState } from 'react'

export default function App() {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <Router>
      {/* Parallax Gradient Background */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 60% 20%, rgba(99,102,241,0.25) 0%, transparent 70%), linear-gradient(120deg, #1e293b 0%, #312e81 100%)',
          backgroundPosition: `center ${-offset * 0.1}px, center center`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover, cover',
          transition: 'background-position 0.2s cubic-bezier(0.4,0,0.2,1)'
        }}
        aria-hidden="true"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
      {/* Global Chatbot - fixed to bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <Chatbot />
      </div>
    </Router>
  )
}
