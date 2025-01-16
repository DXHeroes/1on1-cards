'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import { topics } from '../constants/topics';

export default function TopicsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-container px-4 py-12">
        <h1 className="text-xl sm:text-2xl font-staatliches mb-6 text-center">Select a Topic</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries(topics).map(([id, topic]) => (
            <Link
              key={id}
              href={`/topics/${id}/difficulty`}
              className="bg-purple text-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-left aspect-square flex flex-col"
            >
              <h2 className="text-xl sm:text-2xl font-staatliches mb-4 sm:mb-6 whitespace-pre-line">{topic.title}</h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg font-inter">
                {topic.description.map((paragraph, i) => (
                  <p key={`${id}-desc-${i}`} className="text-white/90 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
} 