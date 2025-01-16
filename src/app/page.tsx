'use client';

import { useRouter } from 'next/navigation';
import DxHeroesLogo from './components/DxHeroesLogo';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <DxHeroesLogo className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-8 text-stratos" />
          <h1 className="text-3xl sm:text-5xl font-staatliches mb-6 bg-clip-text text-transparent bg-gradient-to-r from-electric-violet to-purple">
            1:1 Meeting Cards
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed">
            Lead meaningful 1on1 conversations that strengthen your team and drive growth
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-staatliches text-stratos mb-4">
              Why Use Meeting Cards?
            </h2>
            <p className="text-lg text-gray-700 font-inter leading-relaxed">
              We believe that quality 1on1 conversations are the foundation of a healthy company culture and personal growth.
              That&apos;s why we&apos;ve created this set of conversation cards to help you lead structured and meaningful discussions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-electric-violet">
            <h3 className="text-xl font-staatliches text-stratos mb-6">
              Each topic contains carefully selected questions that will help you:
            </h3>
            <ul className="space-y-4 text-lg text-gray-700 font-inter">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-violet/10 flex items-center justify-center mr-3 mt-1">
                  <span className="text-electric-violet">✓</span>
                </span>
                Get to know and understand each other better
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-violet/10 flex items-center justify-center mr-3 mt-1">
                  <span className="text-electric-violet">✓</span>
                </span>
                Identify areas for improvement and growth
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-violet/10 flex items-center justify-center mr-3 mt-1">
                  <span className="text-electric-violet">✓</span>
                </span>
                Address issues before they become critical
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-violet/10 flex items-center justify-center mr-3 mt-1">
                  <span className="text-electric-violet">✓</span>
                </span>
                Build trust and open communication
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => router.push('/topics')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-electric-violet to-purple text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 text-xl font-staatliches group"
          >
            Start Exploring
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" title="Arrow right">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
