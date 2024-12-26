import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Vagner Matheus</h3>
            <p className="text-gray-400 mt-2">Desenvolvedor Full Stack</p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/vagnercruz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vagner-matheus/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:vagnerdacruz48@gmail.com"
              className="hover:text-indigo-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vagner Matheus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}