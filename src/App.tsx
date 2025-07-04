import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Timeline from './pages/Timeline'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <Router>
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
