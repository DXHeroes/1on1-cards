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
          <div className="flex gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
            <div className="flex gap-2 min-w-max">
              <Link
                href="/"
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm sm:text-base font-inter whitespace-nowrap"
              >
                Home
              </Link>

              <Link
                href="/topics"
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm sm:text-base font-inter whitespace-nowrap"
              >
                Topics
              </Link>

              <Link
                href="/how-to"
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm sm:text-base font-inter whitespace-nowrap"
              >
                How To
              </Link>

              <Link
                href="/about"
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm sm:text-base font-inter whitespace-nowrap"
              >
                About
              </Link>

              <Link 
                href="https://github.com/DXHeroes/1on1-cards" 
                target="_blank"
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm sm:text-base font-inter flex items-center gap-2 whitespace-nowrap"
              >
                <FaGithub className="w-4 h-4 flex-shrink-0" />
                GitHub
                <HiExternalLink className="w-4 h-4 flex-shrink-0" />
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0 ml-4">
            <Link href="https://dxheroes.io" target="_blank">
              <DxHeroesLogo className="h-8 w-auto text-stratos" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 