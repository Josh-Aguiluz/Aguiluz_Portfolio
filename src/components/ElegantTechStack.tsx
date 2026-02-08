import React from 'react';

export default function ElegantTechStack() {
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
    <section id="stack" className="py-32 bg-white relative overflow-hidden">
      {/* Code watermarks */}
      <div className="code-watermark top-10 right-20">//</div>
      <div className="code-watermark bottom-10 left-20">( )</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <p className="font-mono text-[24px] text-[#999999] mb-4">// Technical Arsenal</p>
          <h2 className="text-[56px] md:text-[72px] text-[#333333] mb-6">Tech Stack</h2>
          <p className="text-[24px] text-[#666666] max-w-3xl leading-relaxed">
            A curated selection of modern technologies and frameworks I leverage to build robust, scalable applications.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-16">
          {/* Frontend */}
          <div>
            <h3 className="font-mono text-[28px] text-[#333333] mb-8 flex items-center gap-4">
              <span className="text-[#999999]">01.</span>
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-4">
              {technologies.frontend.map((tech) => (
                <span key={tech} className="pill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="font-mono text-[28px] text-[#333333] mb-8 flex items-center gap-4">
              <span className="text-[#999999]">02.</span>
              Backend & Database
            </h3>
            <div className="flex flex-wrap gap-4">
              {technologies.backend.map((tech) => (
                <span key={tech} className="pill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-mono text-[28px] text-[#333333] mb-8 flex items-center gap-4">
              <span className="text-[#999999]">03.</span>
              Development Tools
            </h3>
            <div className="flex flex-wrap gap-4">
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
