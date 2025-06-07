import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold mr-8">Kevin Jacob</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/resume" className="hover:text-gray-300">Resume</Link>
          <Link to="/projects" className="hover:text-gray-300">Projects</Link>
          <Link to="/timeline" className="hover:text-gray-300">Timeline</Link>
        </div>
      </div>
    </nav>
  )
}