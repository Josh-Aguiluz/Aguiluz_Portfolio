import React from 'react';
import TiltCard from '../TiltCard';
import TypewriterTerminal from '../TypewriterTerminal';
import MagneticButton from '../MagneticButton';
import { motion } from 'motion/react';

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center mesh-gradient-bg relative overflow-hidden bg-[#FDF5E7] dark:bg-[#1A1715]">
      {/* Decorative Elements */}
      <div className="bracket-decoration top-20 left-10">{'{'}</div>
      <div className="bracket-decoration bottom-20 right-10">{'}'}</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-32">
        {/* Main Heading */}
        <div className="space-y-8 flex flex-col items-center justify-center text-center w-full mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-8 md:px-12 py-3 md:py-4 bg-[#A47A2D] dark:bg-[#A47A2D] rounded-full mb-6"
          >
            <p className="font-sans text-[20px] md:text-[28px] font-black text-white dark:text-[#1A1715] uppercase">
              Portfolio 2024
            </p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'Michroma, sans-serif' }}
            className="text-[56px] sm:text-6xl lg:text-7xl leading-tight text-[#521D07] dark:text-[#E2E8F0] max-w-5xl mx-auto text-center"
          >
            BACKEND
            <br />
            DEVELOPER
          </motion.h1>

          {/* 3D TILT CARD WITH NAME */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="perspective-1000"
          >
            <TiltCard className="inline-block">
              <div className="px-8 md:px-10 py-3 md:py-4 bg-[#A47A2D] dark:bg-[#A47A2D] rounded-full">
                <p className="font-sans text-[24px] md:text-[32px] font-black text-white dark:text-[#1A1715] uppercase">
                  Josh Andrei Aguiluz
                </p>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl px-4"
          >
            <p className="text-[24px] md:text-[32px] font-black text-[#521D07] dark:text-[#B8B0A6] leading-relaxed">
              BS IT Student | Top 1% Web Dev Track | Building Scalable Systems
            </p>
          </motion.div>

          {/* TYPEWRITER TERMINAL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <TypewriterTerminal />
          </motion.div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="pill-button px-10 md:px-12 py-5 md:py-6 bg-[#521D07] dark:bg-[#521D07] text-white dark:text-white text-[24px] md:text-[28px] hover:bg-[#FFA51F] dark:hover:bg-[#FFA51F] transition-colors"
          >
            View Portfolio
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="pill-button px-10 md:px-12 py-5 md:py-6 bg-[#A47A2D] dark:bg-[#A47A2D] text-white dark:text-[#1A1715] text-[24px] md:text-[28px] hover:bg-[#FFA51F] dark:hover:bg-[#FFA51F] transition-colors"
          >
            Get In Touch
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <div className="sticker-card bg-white dark:bg-[#252220] p-8 center-content border-4 border-[#A47A2D] dark:border-[#A47A2D]">
            <div className="text-[56px] font-black text-[#A47A2D] dark:text-[#A47A2D] mb-2">15+</div>
            <div className="text-[24px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">Projects</div>
          </div>
          <div className="sticker-card bg-white dark:bg-[#252220] p-8 center-content border-4 border-[#A47A2D] dark:border-[#A47A2D]">
            <div className="text-[56px] font-black text-[#A47A2D] dark:text-[#A47A2D] mb-2">6+</div>
            <div className="text-[24px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">Certifications</div>
          </div>
          <div className="sticker-card bg-white dark:bg-[#252220] p-8 center-content border-4 border-[#A47A2D] dark:border-[#A47A2D]">
            <div className="text-[56px] font-black text-[#521D07] dark:text-[#E2E8F0] mb-2">Top 1%</div>
            <div className="text-[24px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">Class Rank</div>
          </div>
        </div>

        {/* Marquee Strip with Code */}
        <div className="marquee-divider rounded-[40px] overflow-hidden">
          <div className="marquee-content">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="marquee-text" style={{ fontFamily: 'var(--font-mono)' }}>/// FULL STACK</span>
                <span className="marquee-text" style={{ fontFamily: 'var(--font-mono)' }}>/// BACKEND</span>
                <span className="marquee-text" style={{ fontFamily: 'var(--font-mono)' }}>/// CODE</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Project Preview */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-[20px] font-bold text-[#521D07] dark:text-[#B8B0A6] tracking-wider">
              // Featured Work
            </span>
            <h3 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[56px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mt-4">
              Latest Project
            </h3>
          </div>

          <div className="sticker-card bg-white dark:bg-[#252220] p-10 border-4 border-[#A47A2D] dark:border-[#A47A2D]">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="mono-tag">FLUTTER</span>
              <span className="mono-tag">DART</span>
              <span className="mono-tag">LOCAL STORAGE</span>
            </div>
            
            <h4 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[40px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-4">
              Mini Task Tracker
            </h4>
            
            <p className="text-[24px] font-bold text-[#521D07] dark:text-[#B8B0A6] mb-8">
              Cross-platform mobile app with persistent local storage, built with Flutter. 
              Features task management, priority levels, and offline-first architecture.
            </p>

            <button
              onClick={() => scrollToSection('projects')}
              className="pill-button px-10 py-4 bg-[#A47A2D] dark:bg-[#A47A2D] text-white dark:text-[#1A1715] text-[24px] inline-block hover:bg-[#FFA51F] dark:hover:bg-[#FFA51F] transition-colors"
            >
              View All Projects →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}