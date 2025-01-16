export type TopicId = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Topic {
  title: string;
  description: string[];
  questions: {
    [K in Difficulty]: string[];
  };
}

export const difficultyNames = {
  beginner: 'Surface Level Questions',
  intermediate: 'Medium Depth Questions',
  advanced: 'Deep Questions (Call to Action)',
} as const;

export const difficulties = [
  { 
    level: 'beginner' as const, 
    title: difficultyNames.beginner, 
    description: 'These are general questions that introduce the topic and start the conversation.' 
  },
  { 
    level: 'intermediate' as const, 
    title: difficultyNames.intermediate, 
    description: 'These encourage deeper reflection and thoughtful analysis of the topic.' 
  },
  { 
    level: 'advanced' as const, 
    title: difficultyNames.advanced, 
    description: 'These focus on specific actions and commitments to address the topic.' 
  },
];

export const topics: Record<TopicId, Topic> = {
  '1': {
    title: 'FEEDBACK &\nSKILL DEVELOPMENT',
    description: [
      'This theme focuses on the importance of receiving and applying feedback to enhance your skills and performance.',
      'Constructive feedback is a powerful tool for personal and professional growth.',
      'Discussing this theme allows for the identification of strengths and areas for improvement, ensuring continuous development and alignment with team goals.'
    ],
    questions: {
      beginner: [
        'In what form do you find feedback most helpful?',
        'What are your thoughts on your current level of skills?',
        'How regularly do you seek feedback on your work?'
      ],
      intermediate: [
        'What recent feedback from your colleagues has had the greatest impact on your professional growth?',
        'In which area of your work do you feel the need for improvement?',
        'How do you typically respond to constructive criticism?'
      ],
      advanced: [
        'What specific steps can you take to improve a skill you\'ve identified as needing development?',
        'How can you proactively seek feedback to aid your development?',
        'What actions will you take to incorporate recent feedback into your work?'
      ]
    }
  },
  '2': {
    title: 'WELLBEING &\nBURNOUT PREVENTION',
    description: [
      'This theme focuses on maintaining a healthy balance between work and personal life.',
      'It\'s important to regularly check in on your well-being to prevent burnout and ensure long-term productivity and satisfaction.',
      'Reflecting on this topic helps identify stressors and find ways to improve overall work-life harmony.'
    ],
    questions: {
      beginner: [
        'How would you describe your current work-life balance on a scale 1-10 and why?',
        'What helps you to manage work-related stress?',
        'How often do you take time to recharge your energy?'
      ],
      intermediate: [
        'How has your workload been affecting your well-being lately?',
        'What signs indicate to you that you might need a break?',
        'How do you evaluate your current ability to maintain a healthy balance?'
      ],
      advanced: [
        'What actions can you take to improve your work-life balance?',
        'How will you prioritize your well-being in the coming months?',
        'What steps can you take to better manage your workload and reduce stress?'
      ]
    }
  },
  '3': {
    title: 'SELF-REFLECTION &\nPERSONAL GROWTH',
    description: [
      'This theme encourages introspection on your personal and professional journey.',
      'Self-reflection is vital for identifying growth opportunities and understanding your progress toward goals.',
      'Discussing this theme helps you align your efforts with your aspirations, fostering continuous improvement and self-awareness.'
    ],
    questions: {
      beginner: [
        'What recent insights have you gained about yourself professionally?',
        'How do you typically reflect on your work experiences?',
        'What aspects of your professional development are you most proud of?'
      ],
      intermediate: [
        'How have your professional goals evolved over time?',
        'What patterns have you noticed in your work behavior and habits?',
        'What challenges have taught you the most about yourself?'
      ],
      advanced: [
        'What specific actions will you take to foster your personal growth?',
        'How will you create more opportunities for meaningful self-reflection?',
        'What changes will you implement based on your recent self-insights?'
      ]
    }
  },
  '4': {
    title: 'GOALS SETTING &\nPRIORITIZATION',
    description: [
      'This theme focuses on aligning personal and team goals and setting clear priorities.',
      'Effective goal setting is key to achieving both individual and collective success.',
      'Discussing this theme ensures that your efforts are strategically directed, helping you prioritize tasks that contribute most to your long-term objectives and the team\'s mission.'
    ],
    questions: {
      beginner: [
        'What are your most important goals at work right now?',
        'How do you usually approach setting goals in your role?',
        'What criteria do you use to prioritize tasks on a daily basis?'
      ],
      intermediate: [
        'How do you feel about the alignment between your personal goals and the team\'s objectives?',
        'What are your long-term career goals, and how are you progressing towards them?',
        'How do you evaluate your success in meeting your goals?'
      ],
      advanced: [
        'What specific actions will you take to align your goals with the company\'s strategy?',
        'How can you improve your approach to prioritization to achieve better results?',
        'What steps will you take to ensure that your goals are met within the deadlines?'
      ]
    }
  },
  '5': {
    title: 'COMPANY CULTURE &\nVALUES',
    description: [
      'This theme explores how your personal values align with the company\'s culture and values.',
      'A strong alignment between individual and organizational values fosters engagement and a sense of belonging.',
      'Reflecting on this theme helps strengthen your connection to the company\'s mission and promotes a positive work environment.'
    ],
    questions: {
      beginner: [
        'How would you describe our company culture in your own words?',
        'What aspects of our company culture do you value the most?',
        'How aligned do you feel your personal values are with those of the company?'
      ],
      intermediate: [
        'How do you reflect on your role in shaping the company culture?',
        'What aspects of the culture do you think could be improved?',
        'How do you see the company\'s values influencing your daily work?'
      ],
      advanced: [
        'What actions will you take to actively contribute to our company culture?',
        'How can you ensure that your behavior consistently reflects the company\'s values?',
        'What steps can you take to help improve team relationships and the overall culture?'
      ]
    }
  },
  '6': {
    title: 'MOTIVATION &\nPURPOSE',
    description: [
      'This theme delves into what drives you in your work and how you find meaning in your role.',
      'Understanding your sources of motivation and purpose is crucial for long-term job satisfaction and productivity.',
      'Discussing this theme helps you connect your daily tasks with your broader career aspirations, ensuring that your work remains fulfilling and aligned with your goals.'
    ],
    questions: {
      beginner: [
        'What drives you to come to work every day?',
        'How would you describe in your own words the sense of purpose in your role?',
        'When was the last time you felt truly inspired by your work?'
      ],
      intermediate: [
        'How do you see your role contributing to the larger mission of the company?',
        'What aspects of your work give you the most fulfillment?',
        'How do you align your daily tasks with your broader career aspirations?'
      ],
      advanced: [
        'What specific steps can you take to strengthen your sense of purpose in your work?',
        'How can you better align your work with what truly motivates you?',
        'What actions will you take to ensure that your work continues to inspire and challenge you?'
      ]
    }
  },
  '7': {
    title: 'LEADERSHIP\nFEEDBACK',
    description: [
      'This theme explores feedback about leadership style and effectiveness.',
      'A strong alignment between individual and organizational values fosters engagement and a sense of belonging.',
      'Reflecting on this theme helps strengthen your connection to the company\'s mission and promotes a positive work environment.'
    ],
    questions: {
      beginner: [
        'What would help you to feel comfortable sharing feedback with me about my leadership?',
        'How do you feel about the support and guidance you receive from me?',
        'Are there any areas in my leadership where you think I could improve?'
      ],
      intermediate: [
        'How do you perceive my communication and decision-making within the team?',
        'What aspects of my leadership do you find most helpful, and what could be improved?',
        'How well do you think I understand and support your professional goals?'
      ],
      advanced: [
        'What specific actions can I take to better support you and the team?',
        'How can I improve my leadership approach to better align with your needs?',
        'What feedback would you like to share with me to help me grow as a leader?'
      ]
    }
  },
  '8': {
    title: 'COMMUNICATION &\nCONFLICT RESOLUTION',
    description: [
      'This theme addresses effective communication within the team and strategies for resolving conflicts.',
      'Clear and open communication is essential for team success and maintaining positive relationships.',
      'Discussing this topic helps identify communication patterns and develop better ways to handle challenging situations.'
    ],
    questions: {
      beginner: [
        'How would you rate the current communication in our team?',
        'What communication channels do you find most effective?',
        'How comfortable do you feel expressing your opinions in team settings?'
      ],
      intermediate: [
        'What communication challenges have you experienced in the team?',
        'How do you typically handle disagreements with colleagues?',
        'What could we do to improve information sharing within the team?'
      ],
      advanced: [
        'What specific steps will you take to enhance team communication?',
        'How can you contribute to creating a more open dialogue in the team?',
        'What actions will you implement to better handle future conflicts?'
      ]
    }
  }
};