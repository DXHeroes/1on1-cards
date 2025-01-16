import DifficultyPage from './DifficultyPage';
import { type TopicId, topics } from '../../constants/topics';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return Object.keys(topics).map((id) => ({
    id,
  }));
}

export default function Difficulty(props: { params: { id: string } }) {
  const topic = topics[props.params.id as TopicId];

  return <DifficultyPage id={props.params.id} title={topic.title} description={topic.description} />;
} 