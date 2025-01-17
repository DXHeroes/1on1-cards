'use client';

import Link from 'next/link';
import { topics } from '../constants/topics';
import { useState } from 'react';

export default function TopicsList() {
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {Object.entries(topics).map(([id, topic]) => (
        <div key={id} className="relative group">
          <Link
            href={`/topics/${id}`}
            className="w-full bg-purple text-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-left flex flex-col justify-between min-h-[150px] border-2 border-transparent hover:border-white/20 group"
          >
            <div>
              <h2 className="text-2xl font-staatliches text-white mb-2 pr-10">
                {topic.title}
              </h2>
              <div
                className="absolute top-6 sm:top-8 right-6 sm:right-8 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors border border-white/40"
                onMouseEnter={() => setHoveredTopic(id)}
                onMouseLeave={() => setHoveredTopic(null)}
              >
                <span className="text-white text-sm font-medium">?</span>
              </div>
            </div>
          </Link>

          <div 
            className={`absolute z-10 w-80 p-5 bg-white rounded-xl shadow-xl top-full mt-2 right-0 text-left border-2 border-purple transition-all duration-200 origin-top-right ${
              hoveredTopic === id 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
            }`}
          >
            <div className="space-y-3">
              {topic.description.map((paragraph) => (
                <p key={`${id}-desc-${paragraph.slice(0, 20)}`} className="text-gray-700 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 