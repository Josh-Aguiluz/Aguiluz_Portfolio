import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ModernProjects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping experience with real-time inventory management, secure payment processing, and personalized recommendations. Built with modern web technologies for optimal performance.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      year: '2024',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team workflows, and advanced analytics. Designed for remote teams to streamline productivity and enhance communication.',
      tags: ['TypeScript', 'Next.js', 'MongoDB', 'Socket.io'],
      year: '2024',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Portfolio CMS',
      description: 'Custom content management system for creatives and developers. Features a visual editor, dynamic theming, and SEO optimization tools. Headless architecture for maximum flexibility.',
      tags: ['React', 'GraphQL', 'Strapi', 'TailwindCSS'],
      year: '2023',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="projects" className="py-32 dot-grid-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 glass-card p-12 rounded-3xl">
          <p className="font-mono text-[24px] text-slate-600 dark:text-slate-400 mb-4">
            // Selected Work
          </p>
          <h2 className="text-[56px] md:text-[72px] text-slate-900 dark:text-slate-50 mb-6">
            Featured Projects
          </h2>
          <p className="text-[24px] text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
            Detailed explorations of projects that showcase my approach to solving complex problems through elegant engineering.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="glass-card p-10 rounded-3xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[20px] text-slate-600 dark:text-slate-400 italic">
                      {project.year}
                    </span>
                    <h3 className="text-[40px] text-slate-900 dark:text-slate-50 mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="p-3 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                    </a>
                    <a
                      href="#"
                      className="p-3 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[24px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-6 py-2 bg-slate-200/50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 font-mono text-[18px] rounded-full border border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 font-mono text-[20px] text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    View Case Study
                    <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Large Featured Project */}
        <div className="mt-8 glass-card p-12 rounded-3xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-red-500" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <span className="font-mono text-[20px] text-slate-600 dark:text-slate-400 italic">
                  2024 • Featured
                </span>
                <h3 className="text-[48px] text-slate-900 dark:text-slate-50 mt-2">
                  AI Design Assistant
                </h3>
              </div>
              <p className="text-[24px] text-slate-700 dark:text-slate-300 leading-relaxed">
                Machine learning powered design tool that helps developers create beautiful interfaces. Features intelligent color suggestions, layout optimization, and accessibility checks.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Python', 'TensorFlow', 'React', 'FastAPI'].map((tag) => (
                  <span
                    key={tag}
                    className="px-6 py-2 bg-orange-500/10 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 font-mono text-[18px] rounded-full border border-orange-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-64 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-[64px]">🤖</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
