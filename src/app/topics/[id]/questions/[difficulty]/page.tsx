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

export default function Questions(props: { params: { id: string; difficulty: string } }) {
  const topic = topics[props.params.id as TopicId];
  const difficulty = props.params.difficulty as Difficulty;

  if (!topic || !difficultyNames[difficulty]) {
    return null;
  }

  return <QuestionsPage id={props.params.id} difficulty={difficulty} questions={topic.questions[difficulty]} />;
} 