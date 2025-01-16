'use client';

import Link from 'next/link';
import DxHeroesLogo from './components/DxHeroesLogo';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <DxHeroesLogo className="w-32 h-32 mx-auto mb-8 text-stratos" />
        <h1 className="text-2xl sm:text-4xl font-staatliches mb-4">1:1 Meeting Questions</h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 font-inter max-w-md mx-auto">
          Facilitate meaningful 1:1 meetings with structured questions and topics for better discussions.
        </p>
        <Link
          href="/topics"
          className="inline-block px-8 py-4 bg-stratos text-white rounded-lg hover:bg-opacity-90 transition-colors text-xl sm:text-2xl font-staatliches"
        >
          Start
        </Link>
      </div>
    </div>
  );
} 