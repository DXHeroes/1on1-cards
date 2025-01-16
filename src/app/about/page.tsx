'use client';

import Navigation from '../components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-staatliches mb-6 bg-clip-text text-transparent bg-gradient-to-r from-electric-violet to-purple">
            About This Project
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-8">
              This project was born from the collaborative effort of passionate individuals who believe in the power of meaningful conversations in the workplace.
            </p>

            <h2 className="text-2xl font-staatliches text-stratos mb-6">Special Thanks To:</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-electric-violet mt-2.5" />
                <div>
                  <h3 className="text-xl font-staatliches text-stratos">Věrka</h3>
                  <p className="text-gray-600">
                    #couch and person who delivered all the content
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-selective-yellow mt-2.5" />
                <div>
                  <h3 className="text-xl font-staatliches text-stratos">Bára</h3>
                  <p className="text-gray-600">
                    #for graphic design and helping us to visually bring this idea to life
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple mt-2.5" />
                <div>
                  <h3 className="text-xl font-staatliches text-stratos">Kaori</h3>
                  <p className="text-gray-600">
                    #for all around prints and organizing that this idea came to life
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-turquoise mt-2.5" />
                <div>
                  <p className="text-gray-600">
                    #Me, Prokop Simek, personally, thank you for bringing this idea to life through development and implementation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
} 