import React from 'react';
import { Code2, Sparkles, Activity } from 'lucide-react';

export default function ModernHero() {
  const techStack = ['React', 'TypeScript', 'Node.js', 'Tailwind'];

  return (
    <section id="hero" className="min-h-screen flex items-center dot-grid-bg relative overflow-hidden pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Bento Grid Layout */}
        <div className="bento-grid">
          {/* Main Hello Block - Spans 2 columns */}
          <div className="col-span-4 lg:col-span-2 row-span-2 glass-card p-12 rounded-3xl flex flex-col justify-center">
            <div className="space-y-6">
              <p className="font-mono text-[24px] text-slate-600 dark:text-slate-400">
                // Full Stack Developer
              </p>
              <h1 className="text-[72px] md:text-[96px] leading-none text-slate-900 dark:text-slate-50 blinking-cursor">
                Hello, I'm<br />
                <span className="italic bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  [Your Name]
                </span>
              </h1>
              <p className="text-[28px] leading-relaxed text-slate-700 dark:text-slate-300 max-w-xl">
                Building elegant digital experiences through clean code and thoughtful design.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-8 py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[24px] font-mono rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  View Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 glass-card text-slate-900 dark:text-slate-100 text-[24px] font-mono rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Photo Block */}
          <div className="col-span-4 lg:col-span-1 row-span-2 glass-card rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                <span className="text-[48px] text-slate-600 dark:text-slate-400">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Live Status Block */}
          <div className="col-span-4 lg:col-span-1 glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-6 h-6 text-green-500 animate-pulse" />
              <span className="font-mono text-[20px] text-slate-700 dark:text-slate-300">
                Currently
              </span>
            </div>
            <p className="text-[24px] text-slate-900 dark:text-slate-100">
              Available for hire
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <div className="font-mono text-[18px] text-slate-600 dark:text-slate-400">
                <span className="text-blue-500">const</span> status = <span className="text-green-500">"Open"</span>;
              </div>
            </div>
          </div>

          {/* Tech Stack Preview */}
          <div className="col-span-4 lg:col-span-3 glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-blue-500" />
              <span className="font-mono text-[20px] text-slate-700 dark:text-slate-300">
                Core Technologies
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 font-mono text-[20px] rounded-full border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
              <span className="px-6 py-3 bg-slate-200/50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 font-mono text-[20px] rounded-full border border-slate-300 dark:border-slate-600">
                +10 more
              </span>
            </div>
          </div>

          {/* Quick Stat */}
          <div className="col-span-4 lg:col-span-1 glass-card p-8 rounded-3xl flex flex-col justify-center items-center text-center">
            <Sparkles className="w-8 h-8 text-purple-500 mb-3" />
            <div className="text-[48px] font-bold text-slate-900 dark:text-slate-100">
              50+
            </div>
            <div className="font-mono text-[18px] text-slate-600 dark:text-slate-400">
              Projects Shipped
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
