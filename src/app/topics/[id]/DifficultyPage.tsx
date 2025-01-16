'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import { difficulties } from '../../constants/topics';

const difficultyColors = {
  beginner: 'bg-electric-violet', // Pink for Surface Level
  intermediate: 'bg-purple', // Gold for Medium Depth
  advanced: 'bg-turquoise', // Turquoise for Deep Questions
} as const;

export default function DifficultyPage(props: { id: string, title: string, description: string[] }) {
  const { id, title, description } = props;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-container px-4 py-12">
        <h1 className="text-xl sm:text-2xl font-staatliches mb-6 text-center whitespace-pre-line">{title}</h1>
        <div className="mb-8 space-y-4 text-base sm:text-lg font-inter text-center max-w-2xl mx-auto">
          {description.map((paragraph, i) => (
            <p key={`${id}-desc-${i}`} className="text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-1 max-w-2xl mx-auto gap-6">
          {difficulties.map((difficulty) => (
            <Link
              key={difficulty.level}
              href={`/topics/${id}/questions/${difficulty.level}`}
              className={`${difficultyColors[difficulty.level]} text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-left aspect-[2/1] flex flex-col justify-center`}
            >
              <h2 className="text-2xl font-staatliches mb-4">{difficulty.title}</h2>
              <p className="text-white/90 text-lg leading-relaxed font-inter">
                {difficulty.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
} 