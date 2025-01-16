'use client';

import { useRouter } from 'next/navigation';
import Navigation from '../components/Navigation';
import { topics } from '../constants/topics';
import { useState, useEffect, useRef } from 'react';

export default function Topics() {
  const router = useRouter();
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);
  const tooltipRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const setTooltipRef = (id: string) => (el: HTMLDivElement | null) => {
    tooltipRefs.current[id] = el;
  };

  const setButtonRef = (id: string) => (el: HTMLButtonElement | null) => {
    buttonRefs.current[id] = el;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hoveredTopic) {
        const tooltip = tooltipRefs.current[hoveredTopic];
        const button = buttonRefs.current[hoveredTopic];
        if (tooltip && button && 
            !tooltip.contains(event.target as Node) && 
            !button.contains(event.target as Node)) {
          setHoveredTopic(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hoveredTopic]);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Object.entries(topics).map(([id, topic]) => (
            <div key={id} className="relative group">
              <button
                type="button"
                onClick={() => router.push(`/topics/${id}`)}
                className="w-full bg-purple text-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-left flex flex-col justify-between min-h-[150px] border-2 border-transparent hover:border-white/20 group"
              >
                <div>
                  <h2 className="text-2xl font-staatliches text-white mb-2 pr-10">
                    {topic.title}
                  </h2>
                  <button
                    ref={setButtonRef(id)}
                    type="button"
                    className="absolute top-6 sm:top-8 right-6 sm:right-8 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors border border-white/40"
                    onClick={(e) => {
                      e.stopPropagation();
                      setHoveredTopic(hoveredTopic === id ? null : id);
                    }}
                  >
                    <span className="text-white text-sm font-medium">?</span>
                  </button>
                </div>
              </button>

              <div 
                ref={setTooltipRef(id)}
                className={`absolute z-10 w-80 p-5 bg-white rounded-xl shadow-xl top-full mt-2 right-0 text-left border-2 border-purple transition-all duration-200 origin-top-right ${
                  hoveredTopic === id 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
                }`}
              >
                <div className="space-y-3">
                  {topic.description.map((paragraph) => (
                    <p key={`${id}-desc-${paragraph.slice(0, 20)}`} className="text-gray-700 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
} 