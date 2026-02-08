import React from 'react';

export default function ElegantHero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-[#F9F6F0] relative overflow-hidden pt-24">
      {/* Code watermark decorations */}
      <div className="code-watermark top-20 left-10">{'{'}</div>
      <div className="code-watermark bottom-20 right-10">{'}'}</div>
      <div className="code-watermark top-1/2 right-1/4 opacity-10">&lt;/&gt;</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-[24px] text-[#666666]">// Introduction</p>
              <h1 className="text-[72px] md:text-[96px] leading-none text-[#333333]">
                Hello,<br />
                I'm <span className="italic">[Name]</span>
              </h1>
            </div>
            
            <p className="text-[28px] leading-relaxed text-[#555555] max-w-xl">
              A full-stack developer crafting elegant solutions through clean code and thoughtful design.
            </p>

            <div className="flex gap-6 pt-4">
              <a
                href="#projects"
                className="px-10 py-4 bg-[#333333] text-[#F9F6F0] text-[24px] font-mono hover:bg-[#555555] transition-all duration-300 hover:shadow-lg"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-10 py-4 border-2 border-[#333333] text-[#333333] text-[24px] font-mono hover:bg-[#333333] hover:text-[#F9F6F0] transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Code Snippet */}
          <div className="relative">
            {/* Organic shape background */}
            <div className="organic-shape absolute inset-0 bg-[#E8E4D9] -z-10 scale-110" />
            
            {/* Floating code snippet */}
            <div className="bg-white p-8 shadow-2xl border border-[#E8E4D9] relative z-10" style={{ animation: 'float 6s ease-in-out infinite' }}>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#E8E4D9]">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-4 font-mono text-[18px] text-[#666666]">portfolio.js</span>
              </div>
              
              <pre className="font-mono text-[20px] leading-relaxed text-[#333333]">
                <code>
{`const developer = {
  name: "[Your Name]",
  role: "Full Stack Dev",
  passion: "Clean Code",
  
  skills: [
    "React", "Node.js",
    "TypeScript", "Design"
  ],
  
  status: "Available"
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
