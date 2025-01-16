'use client';

import { useRouter } from 'next/navigation';

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
            {showBack && (
              <button
                type="button"
                onClick={() => router.back()}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm sm:text-base font-inter"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={() => router.push('/')}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm sm:text-base font-inter"
            >
              Home
            </button>
          </div>
          <button
            type="button"
            onClick={() => router.push('/topics')}
            className="px-4 py-2 bg-stratos text-white rounded-lg hover:bg-opacity-90 transition-colors text-sm sm:text-base font-staatliches"
          >
            Topics
          </button>
        </div>
      </div>
    </div>
  );
} 