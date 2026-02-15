import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from '../SpotlightCard';
import MagneticButton from '../MagneticButton';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Mini Task Tracker',
      description: 'Flutter Mobile App with persistent local storage for task management. Features priority levels, categories, and offline-first architecture.',
      tags: ['FLUTTER', 'DART', 'LOCAL STORAGE'],
      github: '#',
      live: '#',
      color: 'border-[#A47A2D] dark:border-[#A47A2D]',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&q=80',
    },
    {
      title: 'Web Optimization Project',
      description: 'Comprehensive SEO strategy and backend configuration for a client WordPress site. Improved load times by 60% and search rankings significantly.',
      tags: ['WORDPRESS', 'PHP', 'SEO'],
      github: '#',
      live: '#',
      color: 'border-[#A47A2D] dark:border-[#A47A2D]',
      image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=600&q=80',
    },
    {
      title: 'Professional Portfolio',
      description: 'Custom-built portfolio website featuring modern CSS animations, responsive design, and optimized performance. Built with React and Tailwind CSS.',
      tags: ['REACT', 'TAILWIND', 'JAVASCRIPT'],
      github: '#',
      live: '#',
      color: 'border-[#A47A2D] dark:border-[#A47A2D]',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80',
    },
  ];

  return (
    <section className="min-h-screen py-20 md:py-32 watermark-bg relative overflow-hidden bg-transparent">
      {/* Watermark Numbers */}
      <div className="watermark-number top-[-50px] right-[-20px] md:top-[-100px] md:right-[-50px] opacity-50 scale-50 md:scale-100 origin-top-right">01</div>
      <div className="watermark-number bottom-[-50px] left-[-20px] md:bottom-[-100px] md:left-[-50px] opacity-50 scale-50 md:scale-100 origin-bottom-left">02</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-6 md:px-10 py-2 md:py-4 bg-[#A47A2D] dark:bg-[#A47A2D] rounded-full mb-6 md:mb-8"
          >
            <p className="font-mono text-base md:text-[24px] font-bold text-white dark:text-[#1A1715] uppercase tracking-wider">
              // Projects
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Michroma, sans-serif' }}
            className="text-4xl sm:text-6xl lg:text-7xl leading-tight font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-4 md:mb-6"
          >
            My Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-[28px] font-bold text-[#521D07] dark:text-[#B8B0A6] max-w-3xl mx-auto px-2 md:px-4"
          >
            A collection of projects showcasing my backend development skills, 
            full-stack capabilities, and problem-solving approach.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <SpotlightCard>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: '0 25px 50px -12px rgba(82, 29, 7, 0.5)',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className={`sticker-card bg-white dark:bg-[#252220] p-0 border-4 ${project.color} overflow-hidden flex flex-col`}
                >
                  {/* Thumbnail */}
                  <div className="h-[200px] w-full relative overflow-hidden border-b-4 border-[#A47A2D] dark:border-[#A47A2D]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#521D07]/10 mix-blend-multiply" />
                  </div>

                  <div className="p-6 md:p-10 flex-1 flex flex-col">
                    {/* Project Number */}
                    <div className="flex items-start justify-between mb-4 md:mb-6">
                      <span className="font-mono text-4xl md:text-[48px] font-black text-[#A47A2D] dark:text-[#A47A2D]">
                        0{index + 1}
                      </span>
                      <div className="flex gap-2 md:gap-3">
                        <a
                          href={project.github}
                          className="p-3 md:p-4 bg-[#F5EBD9] dark:bg-[#1A1715] rounded-[16px] hover:bg-[#FFA51F] dark:hover:bg-[#FFA51F] transition-all group"
                          aria-label="View on GitHub"
                        >
                          <Github className="w-6 h-6 md:w-8 md:h-8 text-[#521D07] dark:text-[#E2E8F0] group-hover:text-white transition-colors" />
                        </a>
                        <a
                          href={project.live}
                          className="p-3 md:p-4 bg-[#F5EBD9] dark:bg-[#1A1715] rounded-[16px] hover:bg-[#FFA51F] dark:hover:bg-[#FFA51F] transition-all group"
                          aria-label="View Live Demo"
                        >
                          <ExternalLink className="w-6 h-6 md:w-8 md:h-8 text-[#521D07] dark:text-[#E2E8F0] group-hover:text-white transition-colors" />
                        </a>
                      </div>
                    </div>

                    {/* Project Content */}
                    <h3 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-2xl md:text-[40px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-3 md:mb-4">
                      {project.title}
                    </h3>

                    <p className="text-lg md:text-[24px] font-bold text-[#521D07] dark:text-[#B8B0A6] mb-4 md:mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="mono-tag text-sm md:text-base"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="sticker-card bg-[#D4AF37] dark:bg-[#C9A232] p-6 md:p-12 text-center border-4 border-[#3E3632] dark:border-[#E2E8F0] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="2" className="text-white dark:text-black"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <h3 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-3xl md:text-[48px] font-black text-white dark:text-[#1A1715] uppercase mb-4 md:mb-6 relative z-10">
            Want To See More?
          </h3>
          <p className="text-lg md:text-[24px] font-bold text-white dark:text-[#1A1715] mb-6 md:mb-8 max-w-2xl mx-auto relative z-10">
            Check out my GitHub profile for additional projects, contributions, 
            and code samples that showcase my development journey.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-button px-8 md:px-12 py-4 md:py-6 bg-[#3E3632] dark:bg-[#E2E8F0] text-white dark:text-[#1A1715] text-lg md:text-[24px] inline-flex items-center gap-2 md:gap-3 relative z-10 hover:scale-105 transition-transform"
          >
            <Github className="w-6 h-6 md:w-8 md:h-8" />
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}