'use client';

import Link from 'next/link';
import DxHeroesLogo from './DxHeroesLogo';

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 font-inter">
            Home
          </Link>
          <Link href="/topics" className="text-gray-600 hover:text-gray-900 font-inter">
            Topics
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 font-inter">
            About
          </Link>
        </div>
        <DxHeroesLogo className="w-32 h-8 text-stratos" />
      </div>
    </nav>
  );
} 