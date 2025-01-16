'use client';

import { useRouter } from 'next/navigation';
import Navigation from '../components/Navigation';
import { topics } from '../constants/topics';
import { useState } from 'react';

export default function Topics() {
  const router = useRouter();
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-container px-4 py-12">
        <h1 className="text-xl sm:text-2xl font-staatliches mb-6 text-center">Select a Topic</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {Object.entries(topics).map(([id, topic]) => (
            <div key={id} className="relative">
              <button
                type="button"
                onClick={() => router.push(`/topics/${id}`)}
                className="w-full bg-purple text-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-left flex items-center justify-between"
              >
                <h2 className="text-xl sm:text-2xl font-staatliches">{topic.title}</h2>
                <button
                  type="button"
                  className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/40 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setHoveredTopic(hoveredTopic === id ? null : id);
                  }}
                  onMouseEnter={() => setHoveredTopic(id)}
                  onMouseLeave={() => setHoveredTopic(null)}
                >
                  <span className="text-white">?</span>
                </button>
              </button>
              <div className={`absolute z-10 w-72 p-4 bg-white rounded-lg shadow-xl top-full mt-2 right-0 text-left border-4 border-electric-violet transition-all duration-200 origin-top-right ${
                hoveredTopic === id 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}>
                <div className="space-y-2">
                  {topic.description.map((paragraph) => (
                    <p key={`${id}-desc-${paragraph.slice(0, 20)}`} className="text-md text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
} 