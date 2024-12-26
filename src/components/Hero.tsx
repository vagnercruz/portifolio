import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 pt-16">
      <div className="container mx-auto px-4 text-center">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150"
          alt="Seu Nome"
          className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white dark:border-gray-700 shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
          {t('hero.greeting')} Vagner Matheus
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          {t('hero.role')}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          {t('hero.description')}
        </p>
        <a
          href="#projetos"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
        >
          {t('hero.cta')}
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}