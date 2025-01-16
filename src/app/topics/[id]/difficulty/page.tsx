'use client';

import { useRouter } from 'next/navigation';
import Navigation from '../../../components/Navigation';
import { difficulties } from '../../../constants/topics';
import { topics } from '../../../constants/topics';

const difficultyColors = {
  beginner: 'bg-[#E6007E]', // Pink for Surface Level
  intermediate: 'bg-[#DBA11C]', // Gold for Medium Depth
  advanced: 'bg-[#48B0A0]', // Turquoise for Deep Questions
} as const;

export default function Difficulty({ params }: { params: { id: string } }) {
  const router = useRouter();
  const topic = topics[params.id as keyof typeof topics];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-container px-4 py-12">
        <h1 className="text-xl sm:text-2xl font-staatliches mb-6 text-center">{topic.title}</h1>
        <div className="grid grid-cols-1 max-w-2xl mx-auto gap-6">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty.level}
              type="button"
              onClick={() => router.push(`/topics/${params.id}/questions/${difficulty.level}`)}
              className={`${difficultyColors[difficulty.level]} text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-left aspect-[2/1] flex flex-col justify-center`}
            >
              <h2 className="text-2xl font-staatliches mb-4">{difficulty.title}</h2>
              <p className="text-white/90 text-lg leading-relaxed font-inter">
                {difficulty.description}
              </p>
            </button>
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
} 