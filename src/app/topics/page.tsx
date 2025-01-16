import { generateMetadata } from '../constants/metadata';
import TopicsPage from './TopicsPage';

export const metadata = generateMetadata({
  title: 'Select a Topic',
  description: 'Choose from various topics to guide your 1:1 meeting discussions.',
});

export default function Topics() {
  return <TopicsPage />;
} 