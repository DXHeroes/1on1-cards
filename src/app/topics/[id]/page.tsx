import { topics, type TopicId } from '../../constants/topics';
import DifficultyPage from './DifficultyPage';
import type { Metadata } from 'next';

type Props = {
  params: { id: TopicId }
};

export function generateStaticParams() {
  return Object.keys(topics).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = topics[params.id];
  
  if (!topic) {
    return {
      title: 'Topic Not Found | 1:1 Meeting Cards',
      description: 'The requested topic could not be found.'
    };
  }

  return {
    title: `${topic.title} | 1:1 Meeting Cards`,
    description: `Explore ${topic.title.toLowerCase()} questions for your 1:1 meetings. Choose from different difficulty levels to guide your conversations.`
  };
}

export default function Topic({ params }: Props) {
  const topic = topics[params.id];
  return <DifficultyPage id={params.id} title={topic.title} description={topic.description} />;
} 