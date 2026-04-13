import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="flex justify-between items-center mb-10 bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold text-blue-900">Student Dashboard</h1>
        <div className="flex gap-4 items-center">
          <span className="font-semibold text-green-600">Earned Points: 150</span>
          <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            U
          </div>
        </div>
      </header>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">Live Classes Right Now</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Class Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full w-max mb-4 animate-pulse">
            🔴 LIVE
          </div>
          <h3 className="font-bold text-xl mb-2">Modern Agriculture & Tech</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Learn how to build a smart agricultural mart near your local school.
          </p>
          <Link
            href="/room"
            className="block w-full py-2 bg-blue-50 text-blue-600 font-bold rounded hover:bg-blue-100 transition text-center"
          >
            Join Room
          </Link>
        </div>

        {/* Class Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full w-max mb-4 animate-pulse">
            🔴 LIVE
          </div>
          <h3 className="font-bold text-xl mb-2">Intro to AI & Robotics</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Hands-on STEM lab session building simple automated robots.
          </p>
          <button className="w-full py-2 bg-blue-50 text-blue-600 font-bold rounded hover:bg-blue-100 transition">
            Join Room
          </button>
        </div>

        {/* Class Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full w-max mb-4">
            UPCOMING (2:00 PM)
          </div>
          <h3 className="font-bold text-xl mb-2">Community Development</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Strategies for poverty alleviation and local skill building.
          </p>
          <button className="w-full py-2 bg-gray-50 text-gray-400 font-bold rounded cursor-not-allowed">
            Waiting to Start
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-500 hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
