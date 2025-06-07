import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm text-white p-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Kevin Jacob</Link>
        <div className="flex space-x-8">
          <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link to="/resume" className="hover:text-gray-300 transition-colors">Resume</Link>
          <Link to="/projects" className="hover:text-gray-300 transition-colors">Projects</Link>
          <Link to="/timeline" className="hover:text-gray-300 transition-colors">Timeline</Link>
        </div>
      </div>
    </nav>
  )
}