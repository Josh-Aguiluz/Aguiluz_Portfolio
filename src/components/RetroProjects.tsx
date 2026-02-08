import React from 'react';

export default function RetroProjects() {
  const projects = [
    {
      id: 1,
      title: 'Mini Task Tracker',
      description: 'Cross-platform mobile application built with Flutter featuring persistent local storage and full CRUD architecture to manage task states efficiently. Clean UI with responsive design.',
      tags: ['Flutter', 'Dart', 'VS Code'],
      featured: false
    },
    {
      id: 2,
      title: 'Web Optimization Project',
      description: 'Multi-term backend configuration and SEO strategy implementation for a client WordPress site. Applied HubSpot-certified techniques to improve site indexing and load speed performance.',
      tags: ['WordPress', 'PHP', 'SEO'],
      featured: false
    },
    {
      id: 3,
      title: 'Professional Portfolio',
      description: 'Responsive personal portfolio showcasing technical documentation and projects. Features custom JavaScript for dynamic content display and modern CSS animations.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-32 watermark-bg relative overflow-hidden">
      {/* Watermark Numbers */}
      <div className="watermark-number" style={{ top: '5%', left: '10%' }}>01</div>
      <div className="watermark-number" style={{ top: '40%', right: '5%' }}>02</div>
      <div className="watermark-number" style={{ bottom: '10%', left: '15%' }}>03</div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 center-content">
          <div className="inline-block px-10 py-3 bg-[#D4DDD4] dark:bg-[#4B5563] rounded-full mb-6">
            <p className="font-sans text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">
              My Work
            </p>
          </div>
          <h2 className="text-[72px] md:text-[96px] text-[#4A5568] dark:text-[#E2E8F0] mb-8 text-center">
            PROJECTS
          </h2>
          <p className="text-[28px] font-black text-[#4A5568] dark:text-[#CBD5E1] max-w-3xl">
            A selection of academic and personal projects showcasing my technical skills
          </p>
        </div>

        {/* Featured Project Banner */}
        <div className="sticker-card bg-gradient-to-br from-[#A8B5C7] to-[#B8C5B8] dark:from-[#2D3748] dark:to-[#475569] p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-6 py-2 bg-white/30 dark:bg-white/20 rounded-full mb-4">
                <p className="text-[18px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">
                  Featured Project
                </p>
              </div>
              <h3 className="text-[56px] text-[#4A5568] dark:text-[#E2E8F0] mb-6 leading-tight">
                MINI TASK TRACKER
              </h3>
              <p className="text-[24px] font-black text-[#4A5568] dark:text-[#CBD5E1] mb-8 leading-relaxed">
                Engineered a cross-platform mobile app using Flutter with persistent local storage. 
                Implemented full CRUD (Create, Read, Update, Delete) architecture to manage task states 
                efficiently with a clean, intuitive user interface.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="chunky-tag bg-white dark:bg-[#1A1F2E] text-[#4A5568] dark:text-[#E2E8F0]">Flutter</span>
                <span className="chunky-tag bg-white dark:bg-[#1A1F2E] text-[#4A5568] dark:text-[#E2E8F0]">Dart</span>
                <span className="chunky-tag bg-white dark:bg-[#1A1F2E] text-[#4A5568] dark:text-[#E2E8F0]">VS Code</span>
              </div>
              <a
                href="#"
                className="pill-button px-10 py-4 bg-white dark:bg-[#E2E8F0] text-[#4A5568] dark:text-[#1A1F2E] text-[24px] inline-block"
              >
                View on GitHub
              </a>
            </div>
            <div className="image-placeholder rounded-3xl aspect-video"></div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className="sticker-card p-10 bg-white dark:bg-[#252D3D]"
            >
              {/* Project Image Placeholder */}
              <div className="image-placeholder rounded-2xl aspect-video mb-8"></div>

              {/* Content */}
              <h3 className="text-[40px] text-[#4A5568] dark:text-[#E2E8F0] mb-4 leading-tight">
                {project.title}
              </h3>
              <p className="text-[20px] font-black text-[#4A5568] dark:text-[#CBD5E1] mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="chunky-tag bg-[#CDD7DF] dark:bg-[#1A1F2E] text-[#4A5568] dark:text-[#E2E8F0] text-[16px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#"
                className="pill-button px-10 py-4 bg-[#5A6B7A] dark:bg-[#7A8A9D] text-[#FFFCF9] dark:text-[#1A1F2E] text-[24px] inline-block"
              >
                View Details →
              </a>
            </article>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="center-content mb-8">
          <div className="sticker-card bg-white dark:bg-[#252D3D] p-8 max-w-3xl">
            <p className="text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] text-center mb-4">
              Additional Academic Projects
            </p>
            <p className="text-[20px] font-black text-[#4A5568] dark:text-[#CBD5E1] text-center">
              Completed 15+ projects across Database Management, Data Structures & Algorithms, 
              Mobile App Development, and Information Security. Full documentation available upon request.
            </p>
          </div>
        </div>

        {/* See All CTA */}
        <div className="center-content">
          <a
            href="#contact"
            className="pill-button px-16 py-6 bg-[#5A6B7A] dark:bg-[#7A8A9D] text-[#FFFCF9] dark:text-[#E2E8F0] text-[32px]"
          >
            Request Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
