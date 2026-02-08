import React from 'react';

export default function RetroJournal() {
  const posts = [
    {
      id: 1,
      title: 'My Journey to Top 1%',
      snippet: 'How I achieved Academic Scholar status and ranked in the Top 1% of my Web Development track through consistent learning and a Cheetah-mindset approach.',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Building with Flutter',
      snippet: 'Lessons learned from developing my Mini Task Tracker app - from state management to persistent storage implementation.',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Backend Best Practices',
      snippet: 'Essential Node.js and PHP patterns I learned through academic projects and real-world applications.',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'WordPress Optimization Tips',
      snippet: 'SEO strategies and backend configurations that improved client site performance - HubSpot certified techniques in action.',
      readTime: '8 min'
    },
    {
      id: 5,
      title: 'CCNA Networking Fundamentals',
      snippet: 'Key networking concepts every developer should know - from my Cisco certification journey.',
      readTime: '10 min'
    },
    {
      id: 6,
      title: 'The Cheetah Mindset',
      snippet: 'How rapid learning and adaptability became my competitive advantage in tech education.',
      readTime: '4 min'
    }
  ];

  return (
    <section id="blog" className="py-32 diagonal-stripes-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 center-content">
          <div className="inline-block px-10 py-3 bg-[#CDD7DF] dark:bg-[#2D3748] rounded-full mb-6">
            <p className="font-sans text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">
              Learning & Growth
            </p>
          </div>
          <h2 className="text-[72px] md:text-[96px] text-[#4A5568] dark:text-[#E2E8F0] mb-8 text-center">
            BLOG
          </h2>
          <p className="text-[28px] font-black text-[#4A5568] dark:text-[#CBD5E1] max-w-3xl text-center">
            Documenting my journey in web development, technology, and continuous learning
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post) => (
            <article
              key={post.id}
              className="sticker-card p-8 bg-white dark:bg-[#252D3D]"
            >
              {/* Article Image Placeholder */}
              <div className="image-placeholder rounded-2xl aspect-video mb-6"></div>

              {/* Read Time Badge */}
              <div className="inline-block px-4 py-1 bg-[#CDD7DF] dark:bg-[#475569] rounded-full mb-4">
                <p className="text-[16px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">
                  {post.readTime} read
                </p>
              </div>

              {/* Content */}
              <h3 className="text-[32px] text-[#4A5568] dark:text-[#E2E8F0] mb-4 leading-tight">
                {post.title}
              </h3>
              <p className="text-[18px] font-black text-[#4A5568] dark:text-[#CBD5E1] mb-6 leading-relaxed">
                {post.snippet}
              </p>

              {/* Read More Link */}
              <a
                href="#"
                className="text-[20px] font-black text-[#7A8A9D] dark:text-[#A8B5C7] hover:underline uppercase"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="sticker-card bg-[#5A6B7A] dark:bg-[#475569] p-12 max-w-4xl mx-auto">
          <div className="center-content">
            <div className="icon-placeholder mb-6 mx-auto" style={{ width: '80px', height: '80px' }}></div>
            <h3 className="text-[48px] text-[#FFFCF9] dark:text-[#E2E8F0] mb-4 text-center">
              STAY CONNECTED
            </h3>
            <p className="text-[24px] font-black text-[#E8EDEF] dark:text-[#CBD5E1] mb-8 text-center max-w-2xl">
              Follow my journey as I document my learning experiences, project insights, and tech tips!
            </p>

            {/* Email Form */}
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-8 py-5 bg-white dark:bg-[#1A1F2E] border-4 border-[#B8C5B8] dark:border-[#4B5563] rounded-full text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] focus:outline-none focus:border-[#A8B5C7] dark:focus:border-[#7A8A9D]"
              />
              <button
                type="submit"
                className="pill-button px-12 py-5 bg-[#B8C5B8] dark:bg-[#4B5563] text-[#4A5568] dark:text-[#E2E8F0] text-[24px] whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[16px] font-black text-[#E8EDEF]/80 dark:text-[#CBD5E1]/80 mt-4 text-center">
              Join fellow developers on their learning journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
