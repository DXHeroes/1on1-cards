'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import { difficulties } from '../../constants/topics';

const difficultyColors = {
  beginner: 'bg-electric-violet',
  intermediate: 'bg-purple',
  advanced: 'bg-turquoise',
} as const;

export default function DifficultyPage(props: { id: string, title: string, description: string[] }) {
  const { id, title, description } = props;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-staatliches mb-6 bg-clip-text text-transparent bg-gradient-to-r from-electric-violet to-purple">
            {title}
          </h1>
          <div className="text-lg text-gray-600 font-inter max-w-2xl mx-auto text-left">
            {description.map((paragraph) => (
              <p key={`${id}-desc-${paragraph.slice(0, 20)}`} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Difficulty Cards */}
        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {difficulties.map((difficulty) => (
            <Link
              key={difficulty.level}
              href={`/topics/${id}/questions/${difficulty.level}`}
              className={`${difficultyColors[difficulty.level]} group relative overflow-hidden text-white p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-left border-2 border-transparent hover:border-white/20`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl sm:text-3xl font-staatliches">{difficulty.title}</h2>
                  <span className="text-sm font-medium px-4 py-1 rounded-full bg-white/20 border border-white/40">
                    {difficulty.level}
                  </span>
                </div>
                <p className="text-lg sm:text-xl text-white/90 font-inter leading-relaxed">
                  {difficulty.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
} 