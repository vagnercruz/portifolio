import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Vagner Matheus</h1>
          
          {/* Menu Desktop */}
          <nav className="hidden md:flex gap-6">
            <a href="#sobre" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {t('nav.about')}
            </a>
            <a href="#projetos" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {t('nav.projects')}
            </a>
            <a href="#habilidades" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {t('nav.skills')}
            </a>
            <a href="#contato" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Controles */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <div className="flex items-center gap-4">
              <a href="https://github.com/vagnercruz" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vagner-matheus/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="mailto:vagnercruz48@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Botão Menu Mobile */}
          <button 
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
            <nav className="flex flex-col p-4">
              <a href="#sobre" className="py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {t('nav.about')}
              </a>
              <a href="#projetos" className="py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {t('nav.projects')}
              </a>
              <a href="#habilidades" className="py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {t('nav.skills')}
              </a>
              <a href="#contato" className="py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {t('nav.contact')}
              </a>
              <div className="flex items-center gap-4 pt-4">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}