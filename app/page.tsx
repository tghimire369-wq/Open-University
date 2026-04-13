import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 via-white to-blue-50/30 text-slate-900 px-4">
      
      {/* Subtle glowing background effect */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-96 bg-blue-400/10 blur-[120px] rounded-full pointer-events-none"></div>

      <main className="max-w-4xl mx-auto text-center z-10">
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          The Future of <span className="text-blue-600">Global Education</span>
        </h1>

        {/* Subtitle / Mission Statement */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
          A completely free, 24/7 live platform where the world learns together. 
          Whether you are an experienced scientist, a local farmer, or an eager student—there 
          are no borders here. Join a paradigm shift in how we share knowledge.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link 
            href="/signup?role=student"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
          >
            I want to Learn
          </Link>
          
          <Link 
            href="/signup?role=teacher"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-blue-600 border-2 border-blue-100 hover:border-blue-200 font-semibold rounded-xl shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            I want to Teach
          </Link>
        </div>

        {/* Footer Badges */}
        <div className="flex items-center justify-center gap-3 text-sm font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Live
          </span>
          <span>•</span>
          <span>24/7</span>
          <span>•</span>
          <span>AI Accredited</span>
        </div>

      </main>
    </div>
  );
}