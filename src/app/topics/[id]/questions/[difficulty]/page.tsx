import QuestionsPage from './QuestionsPage';
import { topics, difficulties, difficultyNames } from '../../../../constants/topics';
import { generateMetadata } from '../../../../constants/metadata';
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

export function generateMetadataForQuestions({ params }: { params: { id: string; difficulty: string } }) {
  const topic = topics[params.id as TopicId];
  const difficulty = params.difficulty as Difficulty;
  if (!topic || !difficultyNames[difficulty]) return null;

  return generateMetadata({
    title: `${difficultyNames[difficulty]} - ${topic.title.replace('\n', ' - ')}`,
    description: `${difficultyNames[difficulty]} for ${topic.title.replace('\n', ' - ')}. ${topic.description[0]}`,
  });
}

export const metadata = generateMetadataForQuestions;

export default function Questions(props: { params: { id: string; difficulty: string } }) {
  const topic = topics[props.params.id as TopicId];
  const difficulty = props.params.difficulty as Difficulty;

  if (!topic || !difficultyNames[difficulty]) {
    return null;
  }

  return <QuestionsPage {...props} />;
} 