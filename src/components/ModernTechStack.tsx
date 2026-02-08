import React from 'react';
import { Layers, Server, Wrench } from 'lucide-react';

export default function ModernTechStack() {
  const technologies = {
    frontend: [
      'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js',
      'JavaScript ES6+', 'HTML5', 'CSS3', 'Redux', 'Framer Motion'
    ],
    backend: [
      'Node.js', 'Express', 'Python', 'Django', 'PostgreSQL',
      'MongoDB', 'REST APIs', 'GraphQL', 'JWT Auth', 'Docker'
    ],
    tools: [
      'Git', 'GitHub', 'VS Code', 'Figma', 'Webpack',
      'Vite', 'ESLint', 'Prettier', 'Jest', 'CI/CD'
    ]
  };

  return (
    <section id="stack" className="py-32 graph-paper-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 glass-card p-12 rounded-3xl">
          <p className="font-mono text-[24px] text-slate-600 dark:text-slate-400 mb-4">
            // Technical Arsenal
          </p>
          <h2 className="text-[56px] md:text-[72px] text-slate-900 dark:text-slate-50 mb-6">
            Tech Stack
          </h2>
          <p className="text-[24px] text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
            A curated selection of modern technologies and frameworks I leverage to build robust, scalable applications.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="glass-card p-10 rounded-3xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
                <Layers className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <span className="font-mono text-[20px] text-slate-600 dark:text-slate-400">01.</span>
                <h3 className="text-[32px] text-slate-900 dark:text-slate-50">Frontend</h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {technologies.frontend.map((tech) => (
                <span key={tech} className="pill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="glass-card p-10 rounded-3xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-green-500/10 dark:bg-green-500/20 rounded-xl">
                <Server className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <span className="font-mono text-[20px] text-slate-600 dark:text-slate-400">02.</span>
                <h3 className="text-[32px] text-slate-900 dark:text-slate-50">Backend</h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {technologies.backend.map((tech) => (
                <span key={tech} className="pill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="glass-card p-10 rounded-3xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-purple-500/10 dark:bg-purple-500/20 rounded-xl">
                <Wrench className="w-8 h-8 text-purple-500" />
              </div>
              <div>
                <span className="font-mono text-[20px] text-slate-600 dark:text-slate-400">03.</span>
                <h3 className="text-[32px] text-slate-900 dark:text-slate-50">Tools</h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {technologies.tools.map((tech) => (
                <span key={tech} className="pill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
