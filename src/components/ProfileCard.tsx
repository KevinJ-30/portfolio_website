import profileImage from '../assets/KevinJacob_Headshot.jpg'
export default function ProfileCard() {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md max-w-sm mx-auto mt-10 text-center">
        <img
          src={profileImage}
          alt="Kevin"
          className="w-70 h-48 mx-auto rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">Kevin J.</h2>
        <p className="text-gray-500">CS Student | Human-Centered AI</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Download Resume
        </button>
      </div>
    )
  }
  