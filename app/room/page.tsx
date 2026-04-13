import Link from "next/link";

export default function Classroom() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span className="animate-pulse h-3 w-3 bg-red-500 rounded-full inline-block"></span>
          Modern Agriculture & Tech
        </h1>
        <Link
          href="/dashboard"
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-bold transition shadow-md inline-block text-center"
        >
          Leave Room
        </Link>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Video Area */}
        <div className="flex-1 p-4 flex flex-col">
          <div className="flex-1 bg-black rounded-xl border-2 border-gray-700 flex items-center justify-center relative overflow-hidden shadow-2xl">
            <div className="text-center">
              <span className="text-6xl block mb-4">🎥</span>
              <p className="text-gray-400 text-lg font-semibold">Live Video Feed</p>
              <p className="text-gray-600 text-sm mt-2">
                (Global streaming API will be connected here)
              </p>
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="h-20 mt-4 bg-gray-800 rounded-xl flex items-center justify-center gap-4 px-4 shadow-lg">
            <button
              type="button"
              className="h-12 w-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white text-xl transition"
            >
              🎤
            </button>
            <button
              type="button"
              className="h-12 w-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white text-xl transition"
            >
              📹
            </button>
            <div className="w-px h-8 bg-gray-600 mx-2"></div>
            <button
              type="button"
              className="h-12 px-6 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold transition shadow-lg"
            >
              ✋ Raise Hand
            </button>
            <button
              type="button"
              className="h-12 px-6 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center text-white font-bold transition shadow-lg"
            >
              💡 Think-Pair-Share
            </button>
          </div>
        </div>

        {/* Community Chat Sidebar */}
        <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col shadow-2xl z-10">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-white font-bold">Global Discussion</h2>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
            <div className="bg-gray-700 p-3 rounded-lg text-sm text-gray-200">
              <span className="font-bold text-blue-400 block text-xs mb-1">
                Student • Rural Hub
              </span>
              How do we connect the irrigation system to the smart mart inventory?
            </div>
            <div className="bg-gray-700 p-3 rounded-lg text-sm text-gray-200 border-l-2 border-green-500">
              <span className="font-bold text-green-400 block text-xs mb-1">
                Mentor • Tech Lead
              </span>
              Great question! I&apos;ll share my screen and show you the sensor dashboard.
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-700 bg-gray-800">
            <input
              type="text"
              placeholder="Contribute to the lesson..."
              className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
