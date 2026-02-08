import React from 'react';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'My Journey to Top 1%',
      excerpt: 'How I achieved top rankings in web development through consistent learning, strategic goal-setting, and a growth mindset that embraces challenges.',
      date: 'Jan 2024',
      tags: ['CAREER', 'LEARNING', 'MOTIVATION'],
      readTime: '5 min read',
    },
    {
      title: 'Building with Flutter',
      excerpt: 'Lessons learned from developing cross-platform mobile applications with Flutter and Dart. Performance optimization, state management, and best practices.',
      date: 'Dec 2023',
      tags: ['FLUTTER', 'MOBILE', 'DART'],
      readTime: '8 min read',
    },
    {
      title: 'Backend Architecture Best Practices',
      excerpt: 'Exploring scalable backend system design patterns, API optimization strategies, and database performance tuning for production environments.',
      date: 'Nov 2023',
      tags: ['BACKEND', 'NODE.JS', 'ARCHITECTURE'],
      readTime: '10 min read',
    },
    {
      title: 'SEO Optimization Techniques',
      excerpt: 'A comprehensive guide to modern SEO strategies including technical SEO, content optimization, and performance improvements that boosted client rankings.',
      date: 'Oct 2023',
      tags: ['SEO', 'WEB DEV', 'MARKETING'],
      readTime: '7 min read',
    },
  ];

  return (
    <section className="min-h-screen py-32 bg-[#FDF5E7] dark:bg-[#1A1715] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-8 md:px-10 py-3 md:py-4 bg-[#A47A2D] dark:bg-[#A47A2D] rounded-full mb-8">
            <p className="font-mono text-[20px] md:text-[24px] font-bold text-white dark:text-[#1A1715] uppercase tracking-wider">
              // Technical Writing
            </p>
          </div>
          <h1 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[56px] sm:text-6xl lg:text-7xl leading-tight font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-8">
            Blog & Insights
          </h1>
          <p className="text-[24px] md:text-[28px] font-bold text-[#521D07] dark:text-[#B8B0A6] max-w-3xl mx-auto px-4">
            Thoughts on development, learning, and building scalable systems
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="sticker-card bg-white dark:bg-[#252220] p-10 border-4 border-[#A47A2D] dark:border-[#A47A2D] hover:scale-105 transition-transform cursor-pointer"
            >
              {/* Post Meta */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#A47A2D] dark:text-[#A47A2D]" />
                  <span className="font-mono text-[16px] font-bold text-[#521D07] dark:text-[#B8B0A6]">
                    {post.date}
                  </span>
                </div>
                <span className="text-[16px] font-bold text-[#521D07] dark:text-[#B8B0A6]">•</span>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#A47A2D] dark:text-[#A47A2D]" />
                  <span className="font-mono text-[16px] font-bold text-[#521D07] dark:text-[#B8B0A6]">
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Post Title */}
              <h3 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[32px] md:text-[40px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-4">
                {post.title}
              </h3>

              {/* Post Excerpt */}
              <p className="text-[20px] md:text-[24px] font-bold text-[#521D07] dark:text-[#B8B0A6] mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="mono-tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More Link */}
              <button className="flex items-center gap-2 text-[20px] font-black text-[#A47A2D] dark:text-[#A47A2D] hover:text-[#FFA51F] dark:hover:text-[#FFA51F] transition-colors group">
                Read Article
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="sticker-card bg-[#A47A2D] dark:bg-[#A47A2D] p-12 text-center border-4 border-[#521D07] dark:border-[#E2E8F0]">
          <h3 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[48px] font-black text-white dark:text-[#1A1715] uppercase mb-6">
            Want More Content?
          </h3>
          <p className="text-[24px] font-bold text-white dark:text-[#1A1715] mb-8 max-w-2xl mx-auto">
            Follow me on LinkedIn and Medium for more technical articles, 
            development insights, and career growth tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-button px-12 py-6 bg-[#521D07] dark:bg-[#521D07] text-white text-[24px] inline-flex items-center gap-3 hover:bg-[#FFA51F] dark:hover:bg-[#FFA51F] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-button px-12 py-6 bg-[#521D07] dark:bg-[#521D07] text-white text-[24px] inline-flex items-center gap-3 hover:bg-[#FFA51F] dark:hover:bg-[#FFA51F] transition-colors"
            >
              Medium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}