'use client';

import Link from 'next/link';
import DxHeroesLogo from '../components/DxHeroesLogo';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

export default function Navigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="mx-auto max-w-container px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Link
              href="/"
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm sm:text-base font-inter"
            >
              Home
            </Link>

            <Link
              href="/topics"
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm sm:text-base font-inter"
            >
              Topics
            </Link>

            <Link
              href="/how-to"
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm sm:text-base font-inter"
            >
              How To
            </Link>

            <Link
              href="/about"
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm sm:text-base font-inter"
            >
              About
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com/DXHeroes/1on1-cards" 
              target="_blank"
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm sm:text-base font-inter flex items-center gap-2"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
              <HiExternalLink className="w-4 h-4" />
            </Link>

            <Link href="https://dxheroes.io" target="_blank">
              <DxHeroesLogo className="h-8 w-auto text-stratos" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 