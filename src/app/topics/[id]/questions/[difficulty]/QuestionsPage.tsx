'use client';

import Navigation from '../../../../components/Navigation';
import { topics } from '../../../../constants/topics';
import type { TopicId, Difficulty } from '../../../../constants/topics';

const difficultyClasses = {
  beginner: 'text-electric-violet bg-electric-violet',
  intermediate: 'text-purple bg-purple',
  advanced: 'text-turquoise bg-turquoise',
} as const;

const difficultyNumbers = {
  beginner: '01',
  intermediate: '02',
  advanced: '03',
} as const;

export default function QuestionsPage(props: { id: string, difficulty: Difficulty, questions: string[] }) {
  const { id, difficulty, questions } = props;
  const topic = topics[id as TopicId];
  const [textColorClass, bgColorClass] = difficultyClasses[difficulty].split(' ');

  if (!topic) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="bg-white text-black p-6 sm:p-12 rounded-lg shadow-lg relative">
          <span className={`absolute top-4 sm:top-8 right-4 sm:right-8 text-3xl sm:text-4xl font-staatliches opacity-90 sm:opacity-100 ${textColorClass}`}>
            {difficultyNumbers[difficulty]}
          </span>
          <h1 className={`text-2xl sm:text-4xl font-staatliches mb-8 sm:mb-12 max-w-[80%] leading-tight whitespace-pre-line ${textColorClass}`}>
            {topic.title}
          </h1>
          <ul className="space-y-6 sm:space-y-8 font-inter">
            {questions.map((question, i) => (
              <li key={`${id}-${difficulty}-q-${i}`} className="flex items-start gap-3 sm:gap-4">
                <span className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full flex-shrink-0 mt-2 ${bgColorClass}`} />
                <span className="text-lg sm:text-xl leading-relaxed">{question}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Navigation />
    </div>
  );
} 