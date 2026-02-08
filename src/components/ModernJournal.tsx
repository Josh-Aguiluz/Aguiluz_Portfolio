import React from 'react';
import Masonry from 'react-responsive-masonry';
import { Clock, BookOpen, TrendingUp } from 'lucide-react';

export default function ModernJournal() {
  const posts = [
    {
      id: 1,
      title: 'The Art of Clean Code',
      snippet: 'Exploring principles of maintainable software development and why readability matters more than cleverness in production environments.',
      readTime: '8 min',
      date: 'Jan 15, 2024',
      category: 'Best Practices',
      color: 'blue'
    },
    {
      id: 2,
      title: 'TypeScript Deep Dive',
      snippet: 'Advanced type patterns and generics that will elevate your TypeScript game and catch bugs before they reach production.',
      readTime: '12 min',
      date: 'Jan 10, 2024',
      category: 'Technical',
      color: 'purple'
    },
    {
      id: 3,
      title: 'React Performance',
      snippet: 'Optimization techniques for React applications: memoization, code splitting, and strategic re-rendering.',
      readTime: '6 min',
      date: 'Jan 5, 2024',
      category: 'Performance',
      color: 'green'
    },
    {
      id: 4,
      title: 'Design Systems at Scale',
      snippet: 'Building and maintaining component libraries that grow with your product. Lessons learned from real-world implementations and team collaboration.',
      readTime: '10 min',
      date: 'Dec 28, 2023',
      category: 'Design',
      color: 'pink'
    },
    {
      id: 5,
      title: 'API Design Philosophy',
      snippet: 'Crafting intuitive RESTful and GraphQL APIs that developers love to use. Consistency, documentation, and versioning strategies.',
      readTime: '7 min',
      date: 'Dec 20, 2023',
      category: 'Backend',
      color: 'orange'
    },
    {
      id: 6,
      title: 'Testing Pyramid Explained',
      snippet: 'Understanding the balance between unit, integration, and e2e tests for confident deployments.',
      readTime: '5 min',
      date: 'Dec 15, 2023',
      category: 'Testing',
      color: 'cyan'
    }
  ];

  const colorMap: Record<string, string> = {
    blue: 'border-t-blue-500',
    purple: 'border-t-purple-500',
    green: 'border-t-green-500',
    pink: 'border-t-pink-500',
    orange: 'border-t-orange-500',
    cyan: 'border-t-cyan-500'
  };

  return (
    <section id="journal" className="py-20 md:py-32 graph-paper-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-20 glass-card p-6 md:p-12 rounded-3xl">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
            <p className="font-mono text-lg md:text-[24px] text-slate-600 dark:text-slate-400">
              // Engineering Log
            </p>
          </div>
          <h2 className="text-4xl md:text-[56px] md:text-[72px] text-slate-900 dark:text-slate-50 mb-4 md:mb-6">
            Dev Thoughts
          </h2>
          <p className="text-lg md:text-[24px] text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
            Technical insights, development patterns, and lessons learned from building modern web applications.
          </p>
        </div>

        {/* Masonry Grid - Desktop */}
        <Masonry columnsCount={3} gutter="24px" className="hidden lg:block">
          {posts.map((post) => (
            <article
              key={post.id}
              className={`glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300 cursor-pointer border-t-4 ${colorMap[post.color]}`}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-2 bg-slate-200/50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 font-mono text-[16px] rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
                <TrendingUp className="w-5 h-5 text-slate-400" />
              </div>

              {/* Title */}
              <h3 className="text-[32px] text-slate-900 dark:text-slate-50 mb-4 leading-tight">
                {post.title}
              </h3>

              {/* Snippet */}
              <p className="text-[20px] text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {post.snippet}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span className="font-mono text-[18px] text-slate-600 dark:text-slate-400">
                    {post.readTime}
                  </span>
                </div>
                <span className="font-mono text-[18px] text-slate-600 dark:text-slate-400">
                  {post.date}
                </span>
              </div>
            </article>
          ))}
        </Masonry>

        {/* Grid - Mobile/Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {posts.map((post) => (
            <article
              key={post.id}
              className={`glass-card p-6 md:p-8 rounded-3xl hover:scale-105 transition-all duration-300 cursor-pointer border-t-4 ${colorMap[post.color]}`}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-2 bg-slate-200/50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 font-mono text-[16px] rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
                <TrendingUp className="w-5 h-5 text-slate-400" />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-[32px] text-slate-900 dark:text-slate-50 mb-4 leading-tight">
                {post.title}
              </h3>

              {/* Snippet */}
              <p className="text-base md:text-[20px] text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {post.snippet}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span className="font-mono text-[18px] text-slate-600 dark:text-slate-400">
                    {post.readTime}
                  </span>
                </div>
                <span className="font-mono text-[18px] text-slate-600 dark:text-slate-400">
                  {post.date}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-12 py-4 md:py-5 glass-card text-slate-900 dark:text-slate-100 text-lg md:text-[24px] font-mono rounded-2xl hover:scale-105 transition-all duration-300"
          >
            <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
            Read All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
