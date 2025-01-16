'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import DxHeroesLogo from '../components/DxHeroesLogo';

type NavigationProps = {
  showBack?: boolean;
};

export default function Navigation({ showBack = true }: NavigationProps) {
  const router = useRouter();

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

            {showBack && (
              <button
                type="button"
                onClick={() => router.back()}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm sm:text-base font-inter"
              >
                Back
              </button>
            )}

          </div>
          <Link href="https://dxheroes.io" target="_blank">
            <DxHeroesLogo className="h-8 w-auto text-stratos" />
          </Link>
        </div>
      </div>
    </div>
  );
} 