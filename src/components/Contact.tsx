import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contato" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{t('contact.title')}</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{t('contact.info')}</h3>
              <div className="flex items-center gap-3 dark:text-gray-300">
                <Mail className="text-indigo-600" />
                <span>vagnercruz48@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 dark:text-gray-300">
                <Phone className="text-indigo-600" />
                <span>(46) 99942-3140</span>
              </div>
              <div className="flex items-center gap-3 dark:text-gray-300">
                <MapPin className="text-indigo-600" />
                <span>Pato Branco, Paraná</span>
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}