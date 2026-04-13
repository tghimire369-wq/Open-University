"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// 1. Connect to the Database
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function StudentDashboard() {
  // 2. Create a memory space to hold the classes we fetch
  const [liveClasses, setLiveClasses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 3. Fetch the classes from Supabase as soon as the page loads
  useEffect(() => {
    async function fetchClasses() {
      const { data, error } = await supabase
        .from('classes')
        .select('*')
        .order('created_at', { ascending: false }); // Gets the newest ones first!

      if (data) {
        setLiveClasses(data);
      }
      setIsLoading(false);
    }

    fetchClasses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-900 mb-2">Student Dashboard</h1>
            <p className="text-gray-600 text-lg">Join a live session and start learning.</p>
          </div>
          <Link href="/">
            <button className="px-6 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-bold hover:bg-blue-50 transition">
              Back Home
            </button>
          </Link>
        </div>

        {/* Dynamic Class Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Loading State */}
          {isLoading && (
            <div className="col-span-full text-center py-12 text-gray-500 font-bold text-xl animate-pulse">
              Loading live classes from the global network...
            </div>
          )}

          {/* Empty State (If no classes exist yet) */}
          {!isLoading && liveClasses.length === 0 && (
            <div className="col-span-full bg-white p-12 text-center rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No classes scheduled yet.</h3>
              <p className="text-gray-500 mb-6">Be the first to share your knowledge with the world!</p>
              <Link href="/teach">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
                  Schedule a Class
                </button>
              </Link>
            </div>
          )}

          {/* The Real Data Rendered */}
          {!isLoading && liveClasses.map((singleClass) => (
            <div key={singleClass.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {singleClass.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{singleClass.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                {singleClass.description}
              </p>
              <Link href="/room">
                <button className="w-full bg-blue-50 text-blue-700 font-bold py-3 rounded-xl hover:bg-blue-100 transition">
                  Join Classroom
                </button>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}