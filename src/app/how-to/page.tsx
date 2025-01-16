'use client';

import Navigation from '../components/Navigation';

export default function HowTo() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-staatliches mb-6 bg-clip-text text-transparent bg-gradient-to-r from-electric-violet to-purple">
            How To Use 1:1 Cards
          </h1>
        </div>

        <div className="grid gap-8">
          {/* Target Audience Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-selective-yellow">
            <h2 className="text-2xl font-staatliches text-stratos mb-6">Who Are These Cards For?</h2>
            <p className="text-gray-600 mb-4">
              These cards are designed for all tech leaders, team leaders, mentors, and team members who conduct 1:1 meetings with their colleagues.
            </p>
            <p className="text-gray-600">
              They are intended to support open, honest, and productive communication that reflects the values of the team.
            </p>
          </div>

          {/* Tips Section */}
          <div className="rounded-2xl shadow-lg p-8 border-l-4 border-electric-violet">
            <h2 className="text-2xl font-staatliches text-stratos mb-6">Tips for Effective 1:1 Meetings</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-violet/10 flex items-center justify-center mt-1">
                  <span className="text-electric-violet font-medium">1</span>
                </span>
                <div>
                  <h3 className="font-staatliches text-lg text-stratos mb-1">Be prepared</h3>
                  <p className="text-gray-600">Review the topics you want to discuss before the meeting. Consider feedback from previous sessions.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-violet/10 flex items-center justify-center mt-1">
                  <span className="text-electric-violet font-medium">2</span>
                </span>
                <div>
                  <h3 className="font-staatliches text-lg text-stratos mb-1">Listen actively</h3>
                  <p className="text-gray-600">Pay attention to what your colleague says. Active listening is key to a successful 1:1.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-violet/10 flex items-center justify-center mt-1">
                  <span className="text-electric-violet font-medium">3</span>
                </span>
                <div>
                  <h3 className="font-staatliches text-lg text-stratos mb-1">Be open</h3>
                  <p className="text-gray-600">Don&apos;t hesitate to address challenging topics and vary the topics discussed. Openness fosters trust and psychological safety.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Card Types Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple">
            <h2 className="text-2xl font-staatliches text-stratos mb-6">How to Select Cards?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-electric-violet mt-2.5" />
                <div>
                  <h3 className="font-staatliches text-lg text-stratos mb-1">Surface Level Questions</h3>
                  <p className="text-gray-600">These are general questions that introduce the topic and start the conversation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple mt-2.5" />
                <div>
                  <h3 className="font-staatliches text-lg text-stratos mb-1">Medium Depth Questions</h3>
                  <p className="text-gray-600">These encourage deeper reflection and thoughtful analysis of the topic.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-turquoise mt-2.5" />
                <div>
                  <h3 className="font-staatliches text-lg text-stratos mb-1">Deep Questions (Call to Action)</h3>
                  <p className="text-gray-600">These focus on specific actions and commitments to address the topic.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Guide Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-turquoise">
            <h2 className="text-2xl font-staatliches text-stratos mb-6">How to Use the Cards</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-staatliches text-lg text-stratos mb-2">Before the meeting:</h3>
                <p className="text-gray-600">Choose the themes that align with the goals of your 1:1 meeting. Allow the other party to also select themes they are interested in discussing.</p>
              </div>
              <div>
                <h3 className="font-staatliches text-lg text-stratos mb-2">During the meeting:</h3>
                <p className="text-gray-600">Use the cards to guide the conversation. You can start with surface-level questions and gradually move to deeper ones.</p>
              </div>
              <div>
                <h3 className="font-staatliches text-lg text-stratos mb-2">After the meeting:</h3>
                <p className="text-gray-600">Use the discussion outcomes to create action steps and long-term goals. Keep in mind that the goal is to support growth, trust, and well-being.</p>
              </div>
            </div>
          </div>        </div>
      </div>
      <Navigation />
    </div>
  );
} 