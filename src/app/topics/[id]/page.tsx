import { topics, type TopicId } from '../../constants/topics';
import DifficultyPage from './DifficultyPage';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ id: TopicId }>
};

export const dynamic = 'force-static';

export function generateStaticParams() {
  return Object.keys(topics).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const topic = topics[id];
  
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

export default async function Topic({ params }: Props) {
  const { id } = await params;
  const topic = topics[id];
  return <DifficultyPage id={id} title={topic.title} description={topic.description} />;
} 