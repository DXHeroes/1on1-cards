'use client';

import Link from 'next/link';

export default function HomeCTA() {
  return (
    <div className="text-center">
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/topics"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-electric-violet to-purple text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 text-xl font-staatliches group justify-center"
        >
          Start Exploring
          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>

        <Link
          href="/how-to"
          className="inline-flex items-center px-8 py-4 border-2 border-electric-violet text-electric-violet rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 text-xl font-staatliches group justify-center"
        >
          How To Use
          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 