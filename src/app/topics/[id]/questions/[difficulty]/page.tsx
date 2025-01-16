import QuestionsPage from './QuestionsPage';
import { topics, difficulties, difficultyNames } from '../../../../constants/topics';
import type { TopicId, Difficulty } from '../../../../constants/topics';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return Object.keys(topics).flatMap((id) => 
    difficulties.map((difficulty) => ({
      id,
      difficulty: difficulty.level,
    }))
  );
}

type Props = {
  params: Promise<{ id: TopicId; difficulty: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id, difficulty } = await params;
    const topic = topics[id];
    const difficultyName = difficulty === 'easy' ? 'Surface Level' : 
                          difficulty === 'medium' ? 'Medium Depth' : 
                          'Deep Questions';
    
    if (!topic) {
      return {
        title: 'Questions Not Found | 1:1 Meeting Cards',
        description: 'The requested questions could not be found.'
      };
    }
  
    return {
      title: `${difficultyName} Questions - ${topic.title} | 1:1 Meeting Cards`,
      description: `${difficultyName} questions for ${topic.title.toLowerCase()} discussions in your 1:1 meetings. Guide meaningful conversations with carefully crafted questions.`
    };
  }

export default async function Questions({ params }: Props) {
  const { id, difficulty } = await params;
  const topic = topics[id as TopicId];

  if (!topic || !difficultyNames[difficulty as Difficulty]) {
    return null;
  }

  return <QuestionsPage id={id} difficulty={difficulty as Difficulty} questions={topic.questions[difficulty as Difficulty]} />;
} 