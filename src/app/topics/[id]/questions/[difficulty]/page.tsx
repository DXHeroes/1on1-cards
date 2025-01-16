import QuestionsPage from './QuestionsPage';
import { topics, difficulties, difficultyNames } from '../../../../constants/topics';
import type { TopicId, Difficulty } from '../../../../constants/topics';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return Object.keys(topics).flatMap((id) => 
    difficulties.map((difficulty) => ({
      id,
      difficulty: difficulty.level,
    }))
  );
}

export default async function Questions({ params }: { params: Promise<{ id: string; difficulty: string }> }) {
  const { id, difficulty } = await params;
  const topic = topics[id as TopicId];

  if (!topic || !difficultyNames[difficulty as Difficulty]) {
    return null;
  }

  return <QuestionsPage id={id} difficulty={difficulty as Difficulty} questions={topic.questions[difficulty as Difficulty]} />;
} 