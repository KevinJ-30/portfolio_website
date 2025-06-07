import profileImage from '../assets/KevinJacob_Headshot.jpg'
export default function ProfileCard() {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md text-center">
          <img
            src={profileImage}
            alt="Kevin"
            className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold mb-2">Kevin J.</h2>
          <p className="text-gray-600 mb-6">CS Student | Human-Centered AI</p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Download Resume
          </button>
        </div>
      </div>
    )
  }