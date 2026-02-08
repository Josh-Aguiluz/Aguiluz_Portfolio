import { motion } from 'motion/react';
import { Radio, Calendar, Clock, ArrowRight } from 'lucide-react';

interface TacticalBlogProps {
  theme: 'stealth' | 'light';
}

export function TacticalBlog({ theme }: TacticalBlogProps) {
  const isDark = theme === 'stealth';
  
  const posts = [
    {
      id: 1,
      title: 'Blog Post Title 1',
      category: 'CATEGORY',
      timestamp: 'YEAR.MONTH.DAY - HH:MM',
      excerpt: 'Brief excerpt or description of the blog post content.',
      readTime: '5 MIN READ',
    },
    {
      id: 2,
      title: 'Blog Post Title 2',
      category: 'CATEGORY',
      timestamp: 'YEAR.MONTH.DAY - HH:MM',
      excerpt: 'Brief excerpt or description of the blog post content.',
      readTime: '8 MIN READ',
    },
    {
      id: 3,
      title: 'Blog Post Title 3',
      category: 'CATEGORY',
      timestamp: 'YEAR.MONTH.DAY - HH:MM',
      excerpt: 'Brief excerpt or description of the blog post content.',
      readTime: '6 MIN READ',
    },
    {
      id: 4,
      title: 'Blog Post Title 4',
      category: 'CATEGORY',
      timestamp: 'YEAR.MONTH.DAY - HH:MM',
      excerpt: 'Brief excerpt or description of the blog post content.',
      readTime: '10 MIN READ',
    },
  ];

  const testimonials = [
    {
      id: 1,
      client: 'Client Name 1',
      role: 'Job Title, Company',
      message: 'Client testimonial or feedback about the work and collaboration experience.',
      photo: 'https://images.unsplash.com/photo-1739377796113-a27e9cf8fede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWN0aWNhbCUyMGdhbWluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTUyMTY2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 'SUCCESS',
    },
    {
      id: 2,
      client: 'Client Name 2',
      role: 'Job Title, Company',
      message: 'Client testimonial or feedback about the work and collaboration experience.',
      photo: 'https://images.unsplash.com/photo-1739377796113-a27e9cf8fede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWN0aWNhbCUyMGdhbWluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTUyMTY2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 'COMPLETE',
    },
  ];

  return (
    <section id="blog" className={`min-h-screen py-20 relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(255, 0, 0, 0.1) 0px,
            transparent 2px,
            transparent 4px,
            rgba(255, 0, 0, 0.1) 6px
          )`
        }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <Radio className="text-red-600" size={40} />
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl tracking-wider transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-black'
            }`} style={{ fontFamily: 'Teko, sans-serif' }}>
              INTEL & UPDATES
            </h2>
            <div className="h-1 flex-1 bg-red-600/20" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className={`border-l-4 border-red-600 p-6 cut-corner-br relative overflow-hidden group cursor-pointer transition-colors duration-500 ${
                  isDark ? 'bg-zinc-900' : 'bg-white border-2 border-red-600/30'
                }`}
              >
                {/* Timestamp bar */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600/30">
                  <div className="flex items-center gap-2 text-red-600 text-xs tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                    <Calendar size={14} />
                    {post.timestamp}
                  </div>
                  <span className="px-2 py-1 bg-red-600/20 border border-red-600 text-red-600 text-xs tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-lg mb-3 tracking-wide group-hover:text-red-600 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-black'
                }`} style={{ fontFamily: 'Teko, sans-serif' }}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className={`text-sm mb-4 leading-relaxed transition-colors duration-500 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-2 text-xs transition-colors duration-500 ${
                    isDark ? 'text-gray-500' : 'text-gray-600'
                  }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                  <div className="flex items-center text-red-600 text-sm tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>
                    READ
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* After-Action Reports (Testimonials) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-16 bg-red-600" />
            <h3 className={`text-3xl lg:text-4xl tracking-wider transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-black'
            }`} style={{ fontFamily: 'Teko, sans-serif' }}>
              AFTER-ACTION REPORTS
            </h3>
            <div className="h-1 flex-1 bg-red-600/20" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`border-2 border-red-600/30 p-8 cut-corner relative overflow-hidden transition-colors duration-500 ${
                  isDark ? 'bg-zinc-900' : 'bg-white'
                }`}
              >
                {/* Quote marks */}
                <div className="text-6xl text-red-600 opacity-20 absolute top-4 left-4" style={{ fontFamily: 'Teko, sans-serif' }}>
                  "
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Message */}
                  <p className={`mb-6 leading-relaxed transition-colors duration-500 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {testimonial.message}
                  </p>

                  {/* Client info */}
                  <div className="flex items-center gap-4 pt-6 border-t-2 border-red-600/30">
                    <div className="relative">
                      <div className="w-16 h-16 overflow-hidden relative">
                        <div className="absolute inset-0" style={{
                          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                        }}>
                          <img
                            src={testimonial.photo}
                            alt={testimonial.client}
                            className="w-full h-full object-cover"
                            style={{
                              filter: 'grayscale(100%) contrast(1.1)',
                            }}
                          />
                          <div className="absolute inset-0 bg-red-600/30" />
                        </div>
                      </div>
                      <div className="absolute -inset-1 border-2 border-red-600" style={{
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                      }} />
                    </div>
                    <div>
                      <div className={`tracking-wide mb-1 transition-colors duration-500 ${
                        isDark ? 'text-white' : 'text-black'
                      }`} style={{ fontFamily: 'Teko, sans-serif', fontSize: '1.2rem' }}>
                        {testimonial.client}
                      </div>
                      <div className={`text-sm mb-2 transition-colors duration-500 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {testimonial.role}
                      </div>
                      <div className="px-3 py-1 bg-red-600 text-white text-xs tracking-wider inline-block" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>
                        {testimonial.rating}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-600/30" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-8 w-32 h-32 border-2 border-red-600/10 rotate-45 hidden xl:block" />
      <div className="absolute bottom-1/4 left-8 w-24 h-24 border-2 border-red-600/10 hidden xl:block" />
    </section>
  );
}