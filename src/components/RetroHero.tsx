import React from 'react';

export default function RetroHero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center mesh-gradient-bg relative overflow-hidden pt-32 pb-20">
      {/* Decorative Elements */}
      <div className="bracket-decoration top-20 left-10" style={{ color: '#4A5568' }}>{'{'}</div>
      <div className="bracket-decoration bottom-20 right-10" style={{ color: '#4A5568' }}>{'}'}</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Main Heading */}
        <div className="space-y-8 center-content mb-12">
          <div className="inline-block px-12 py-4 bg-[#CDD7DF] dark:bg-[#2D3748] rounded-full mb-6">
            <p className="font-sans text-[28px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">
              Portfolio 2024
            </p>
          </div>
          
          <h1 className="text-[96px] md:text-[144px] leading-none text-[#4A5568] dark:text-[#E2E8F0] max-w-5xl mx-auto text-center">
            BACKEND
            <br />
            DEVELOPER
          </h1>

          <div className="inline-block px-10 py-4 bg-[#B8C5B8] dark:bg-[#4B5563] rounded-full mb-4">
            <p className="font-sans text-[32px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">
              Josh Andrei Aguiluz
            </p>
          </div>

          <div className="max-w-3xl">
            <p className="text-[32px] font-black text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed">
              BS IT Student | Top 1% Web Dev Track | Building Scalable Systems
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href="#projects"
            className="pill-button px-12 py-6 bg-[#5A6B7A] dark:bg-[#475569] text-[#FFFCF9] dark:text-[#E2E8F0] text-[28px]"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="pill-button px-12 py-6 bg-[#B8C5B8] dark:bg-[#4B5563] text-[#4A5568] dark:text-[#E2E8F0] text-[28px]"
          >
            Get In Touch
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="sticker-card bg-white dark:bg-[#252D3D] p-8 center-content border-4 border-[#A8B5C7] dark:border-[#475569]">
            <div className="text-[56px] font-black text-[#A8B5C7] dark:text-[#7A8A9D] mb-2">15+</div>
            <div className="text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">Projects</div>
          </div>
          <div className="sticker-card bg-white dark:bg-[#252D3D] p-8 center-content border-4 border-[#B8C5B8] dark:border-[#4B5563]">
            <div className="text-[56px] font-black text-[#B8C5B8] dark:text-[#7A8F7A] mb-2">6+</div>
            <div className="text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">Certifications</div>
          </div>
          <div className="sticker-card bg-white dark:bg-[#252D3D] p-8 center-content border-4 border-[#E8D5D0] dark:border-[#9B7A75]">
            <div className="text-[56px] font-black text-[#4A5568] dark:text-[#E2E8F0] mb-2">Top 1%</div>
            <div className="text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">Class Rank</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 center-content">
          <div className="animate-bounce">
            <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" className="text-[#4A5568] dark:text-[#E2E8F0]"></path>
            </svg>
          </div>
          <p className="text-[18px] font-black text-[#4A5568] dark:text-[#CBD5E1] uppercase mt-2">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}