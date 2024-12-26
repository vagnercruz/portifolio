import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "Projeto 1",
    description: "Descrição detalhada do projeto, tecnologias utilizadas e desafios superados.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&h=400",
    tags: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/seu-usuario/projeto1",
    liveUrl: "https://projeto1.com"
  },
  {
    title: "Projeto 2",
    description: "Outro projeto incrível que demonstra suas habilidades e criatividade.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&h=400",
    tags: ["Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/seu-usuario/projeto2",
  },
];

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projetos" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{t('projects.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Github size={20} />
                    {t('projects.viewCode')}
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <ExternalLink size={20} />
                      {t('projects.viewDemo')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}