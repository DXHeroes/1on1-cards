import { generateMetadata } from './constants/metadata';
import HomePage from './HomePage';

export const metadata = generateMetadata({});

export default function Home() {
  return <HomePage />;
}
