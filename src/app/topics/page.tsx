import Navigation from '../components/Navigation';
import TopicsList from '../components/TopicsList';

export default function Topics() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-staatliches mb-6 bg-clip-text text-transparent bg-gradient-to-r from-electric-violet to-purple">
            Choose Your Topic
          </h1>
          <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
            Select a conversation topic to explore questions of varying difficulty
          </p>
        </div>

        <TopicsList />
      </div>
      <Navigation />
    </div>
  );
} 