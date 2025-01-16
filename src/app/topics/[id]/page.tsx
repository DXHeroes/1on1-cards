import DifficultyPage from './DifficultyPage';
import { type TopicId, topics } from '../../constants/topics';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return Object.keys(topics).map((id) => ({
    id,
  }));
}

export default async function Difficulty({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const topic = topics[id as TopicId];
  
  return <DifficultyPage id={id} title={topic.title} description={topic.description} />;
} 