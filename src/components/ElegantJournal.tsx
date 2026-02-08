import React from 'react';
import Masonry from 'react-responsive-masonry';

export default function ElegantJournal() {
  const posts = [
    {
      id: 1,
      title: 'The Art of Clean Code',
      snippet: 'Exploring principles of maintainable software development and why readability matters more than cleverness in production environments.',
      readTime: '8 min read',
      date: 'Jan 15, 2024',
      category: 'Best Practices'
    },
    {
      id: 2,
      title: 'TypeScript Deep Dive',
      snippet: 'Advanced type patterns and generics that will elevate your TypeScript game and catch bugs before they reach production.',
      readTime: '12 min read',
      date: 'Jan 10, 2024',
      category: 'Technical'
    },
    {
      id: 3,
      title: 'React Performance',
      snippet: 'Optimization techniques for React applications: memoization, code splitting, and strategic re-rendering.',
      readTime: '6 min read',
      date: 'Jan 5, 2024',
      category: 'Performance'
    },
    {
      id: 4,
      title: 'Design Systems at Scale',
      snippet: 'Building and maintaining component libraries that grow with your product. Lessons learned from real-world implementations and team collaboration.',
      readTime: '10 min read',
      date: 'Dec 28, 2023',
      category: 'Design'
    },
    {
      id: 5,
      title: 'API Design Philosophy',
      snippet: 'Crafting intuitive RESTful and GraphQL APIs that developers love to use. Consistency, documentation, and versioning strategies.',
      readTime: '7 min read',
      date: 'Dec 20, 2023',
      category: 'Backend'
    },
    {
      id: 6,
      title: 'Testing Pyramid Explained',
      snippet: 'Understanding the balance between unit, integration, and e2e tests for confident deployments.',
      readTime: '5 min read',
      date: 'Dec 15, 2023',
      category: 'Testing'
    }
  ];

  return (
    <section id="journal" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Code watermarks */}
      <div className="code-watermark top-5 right-5 md:top-10 md:right-10 text-4xl md:text-base">[ ]</div>
      <div className="code-watermark bottom-10 left-5 md:bottom-20 md:left-10" style={{ fontSize: '60px' }}>;</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <p className="font-mono text-lg md:text-[24px] text-[#999999] mb-2 md:mb-4">// Engineering Log</p>
          <h2 className="text-4xl md:text-[56px] md:text-[72px] text-[#333333] mb-4 md:mb-6">Dev Thoughts</h2>
          <p className="text-lg md:text-[24px] text-[#666666] max-w-3xl leading-relaxed">
            Technical insights, development patterns, and lessons learned from building modern web applications.
          </p>
        </div>

        {/* Masonry Grid */}
        <Masonry columnsCount={3} gutter="24px" className="hidden lg:block">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-[#F9F6F0] border border-[#E8E4D9] p-8 hover:border-[#333333] transition-all duration-300 group cursor-pointer"
            >
              {/* Category Tag */}
              <div className="mb-6">
                <span className="font-mono text-[16px] text-[#999999] uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[32px] text-[#333333] mb-4 group-hover:text-[#555555] transition-colors leading-tight">
                {post.title}
              </h3>

              {/* Snippet */}
              <p className="text-[20px] text-[#666666] leading-relaxed mb-6">
                {post.snippet}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E8E4D9]">
                <span className="font-mono text-[18px] text-[#999999]">
                  {post.readTime}
                </span>
                <span className="font-mono text-[18px] text-[#999999]">
                  {post.date}
                </span>
              </div>
            </article>
          ))}
        </Masonry>

        {/* Mobile/Tablet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-[#F9F6F0] border border-[#E8E4D9] p-6 md:p-8 hover:border-[#333333] transition-all duration-300 group cursor-pointer"
            >
              {/* Category Tag */}
              <div className="mb-6">
                <span className="font-mono text-[16px] text-[#999999] uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-[32px] text-[#333333] mb-4 group-hover:text-[#555555] transition-colors leading-tight">
                {post.title}
              </h3>

              {/* Snippet */}
              <p className="text-base md:text-[20px] text-[#666666] leading-relaxed mb-6">
                {post.snippet}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E8E4D9]">
                <span className="font-mono text-[18px] text-[#999999]">
                  {post.readTime}
                </span>
                <span className="font-mono text-[18px] text-[#999999]">
                  {post.date}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="#"
            className="inline-block px-8 md:px-12 py-4 md:py-5 border-2 border-[#333333] text-[#333333] text-lg md:text-[24px] font-mono hover:bg-[#333333] hover:text-[#F9F6F0] transition-all duration-300"
          >
            Read All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
