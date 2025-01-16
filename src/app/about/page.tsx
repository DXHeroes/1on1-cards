import Navigation from '../components/Navigation';
import { FaLinkedin } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About 1:1 Meeting Cards | Our Mission',
  description: 'Learn about our mission to improve workplace relationships through meaningful 1:1 conversations. Discover how we help teams build stronger connections.'
};

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-staatliches mb-6 bg-clip-text text-transparent bg-gradient-to-r from-electric-violet to-purple">
            About This Project
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-8">
              I wanted to create something that would help me and people around me have better 1on1 meetings and a direction for our conversations, especially when someone feels lost or unsure of what to talk about.
            </p>

            <h2 className="text-2xl font-staatliches text-stratos mb-6">Special Thanks To:</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-electric-violet mt-2.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-staatliches text-stratos">Věrka</h3>
                    <a 
                      href="https://www.linkedin.com/in/vera-kralova-ab601911a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0077b5] hover:text-[#0077b5]/80 transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-600">
                    The amazing coach who crafted all the content. Her deep understanding of workplace dynamics and ability to create meaningful conversation frameworks made this project possible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-selective-yellow mt-2.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-staatliches text-stratos">Bára</h3>
                    <a 
                      href="https://www.linkedin.com/in/barbora-mrk%C3%A1%C4%8Dkov%C3%A1-5184201a5/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0077b5] hover:text-[#0077b5]/80 transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-600">
                    The driving force behind making this project happen. Her organizational skills and dedication were crucial in coordinating everything and ensuring this idea became reality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple mt-2.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-staatliches text-stratos">Kaori</h3>
                    <a 
                      href="https://www.linkedin.com/in/irena-hynkov%C3%A1-b81158277/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0077b5] hover:text-[#0077b5]/80 transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-600">
                    The talented designer who transformed our vision into a beautiful, intuitive interface. Her exceptional graphic design skills gave this project its visual identity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-turquoise mt-2.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-staatliches text-stratos">Prokop Simek (A Personal Note)</h3>
                    <a 
                      href="https://www.linkedin.com/in/prokopsimek/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0077b5] hover:text-[#0077b5]/80 transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-600">
                    I am deeply grateful to have worked with such talented individuals. Seeing this project come to life through development and implementation has been incredibly rewarding. Thank you all for making this possible.
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