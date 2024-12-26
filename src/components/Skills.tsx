import React from 'react';
import { useTranslation } from 'react-i18next';

type Skill = {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
};

const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
    ]
  },
  {
    category: "Ferramentas",
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 90 },
    ]
  }
];

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="habilidades" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{t('skills.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6 dark:text-white">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}