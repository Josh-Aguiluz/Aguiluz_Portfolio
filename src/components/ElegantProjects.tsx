import React from 'react';

export default function ElegantProjects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping experience with real-time inventory management, secure payment processing, and personalized recommendations. Built with modern web technologies for optimal performance.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      year: '2024',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team workflows, and advanced analytics. Designed for remote teams to streamline productivity and enhance communication.',
      tags: ['TypeScript', 'Next.js', 'MongoDB', 'Socket.io'],
      year: '2024',
      link: '#'
    },
    {
      id: 3,
      title: 'Portfolio CMS',
      description: 'Custom content management system for creatives and developers. Features a visual editor, dynamic theming, and SEO optimization tools. Headless architecture for maximum flexibility.',
      tags: ['React', 'GraphQL', 'Strapi', 'TailwindCSS'],
      year: '2023',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-32 bg-[#F9F6F0] relative overflow-hidden">
      {/* Code watermarks */}
      <div className="code-watermark top-20 left-10" style={{ fontSize: '140px' }}>&lt;/&gt;</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <p className="font-mono text-[24px] text-[#999999] mb-4">// Selected Work</p>
          <h2 className="text-[56px] md:text-[72px] text-[#333333] mb-6">Case Studies</h2>
          <p className="text-[24px] text-[#666666] max-w-3xl leading-relaxed">
            Detailed explorations of projects that showcase my approach to solving complex problems through elegant engineering.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="bg-white border-2 border-[#E8E4D9] p-12 hover:border-[#333333] transition-all duration-500 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                {/* Left: Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[24px] text-[#999999]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[40px] text-[#333333] group-hover:text-[#555555] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-[24px] text-[#666666] leading-relaxed max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-6 py-2 bg-[#E8E4D9] text-[#333333] font-mono text-[18px] hover:bg-[#333333] hover:text-[#F9F6F0] transition-colors duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Year & Link */}
                <div className="flex flex-col items-start lg:items-end gap-6">
                  <span className="font-serif text-[32px] text-[#999999] italic">
                    {project.year}
                  </span>
                  <a
                    href={project.link}
                    className="font-mono text-[20px] text-[#333333] hover:text-[#666666] transition-colors flex items-center gap-2 group"
                  >
                    View Case Study
                    <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block px-12 py-5 border-2 border-[#333333] text-[#333333] text-[24px] font-mono hover:bg-[#333333] hover:text-[#F9F6F0] transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
