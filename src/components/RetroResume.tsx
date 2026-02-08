import React from 'react';

export default function RetroResume() {
  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'Holy Angel University',
      location: 'Angeles City, Pampanga',
      year: '2022 - 2026',
      details: 'Academic Scholar | Top 1% - Web Development Track'
    }
  ];

  const experience = [
    {
      title: 'Backend Development Intern',
      company: 'Seeking Opportunities',
      period: '2024 - Present',
      description: 'Currently seeking internship opportunities to apply my backend development skills (Node.js, PHP, MySQL) and contribute to real-world projects while gaining professional experience in agile development environments.'
    },
    {
      title: 'Web Optimization Specialist',
      company: 'Freelance Project',
      period: '2023 - 2024',
      description: 'Managed backend configuration and SEO strategy for client WordPress site. Applied HubSpot-certified techniques to improve site indexing and achieved significant load speed performance improvements.'
    },
    {
      title: 'Mobile App Developer',
      company: 'Academic Project',
      period: '2023',
      description: 'Engineered cross-platform mobile app using Flutter with persistent local storage. Implemented full CRUD architecture demonstrating proficiency in mobile development and state management.'
    }
  ];

  const certifications = [
    { name: 'Introduction to PHP Basics', issuer: 'Simplilearn', year: '2024' },
    { name: 'JavaScript Essentials 1', issuer: 'Cisco Networking Academy', year: '2024' },
    { name: 'CCNA: Introduction to Networks', issuer: 'Cisco Networking Academy', year: '2023' },
    { name: 'CompTIA IT Fundamentals (ITF+)', issuer: 'CompTIA', year: '2023' },
    { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2023' },
    { name: 'Digital Marketing', issuer: 'HubSpot Academy', year: '2023' }
  ];

  const testimonials = [
    {
      name: 'Prof. Maria Santos',
      role: 'IT Department Head',
      company: 'Holy Angel University',
      text: 'Josh is an exceptional student who consistently demonstrates top-tier technical skills and a remarkable aptitude for backend development. His "Cheetah-mindset" for rapid learning sets him apart from his peers.'
    },
    {
      name: 'Client Representative',
      role: 'Project Manager',
      company: 'Web Optimization Project',
      text: 'Working with Josh on our WordPress optimization was fantastic. He applied advanced SEO techniques and significantly improved our site performance. His technical knowledge and professionalism are outstanding.'
    },
    {
      name: 'Academic Peer',
      role: 'Group Project Leader',
      company: 'HAU Development Team',
      text: 'Josh brings both technical expertise and excellent collaboration skills to every project. His problem-solving ability and willingness to help team members learn makes him an invaluable asset to any development team.'
    }
  ];

  return (
    <section id="resume" className="py-32 graph-paper-bg relative overflow-hidden">
      {/* Floating Shapes */}
      <div className="floating-sticker top-20 left-20">
        <div className="w-24 h-24 bg-[#A8B5C7]/15 dark:bg-[#7A8A9D]/15 rounded-3xl"></div>
      </div>
      <div className="floating-sticker bottom-20 right-20" style={{ animationDelay: '3s' }}>
        <div className="w-28 h-28 border-8 border-[#B8C5B8]/30 dark:border-[#7A8F7A]/30 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 center-content">
          <div className="inline-block px-10 py-3 bg-[#D4DDD4] dark:bg-[#4B5563] rounded-full mb-6">
            <p className="font-sans text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">
              My Journey
            </p>
          </div>
          <h2 className="text-[72px] md:text-[96px] text-[#4A5568] dark:text-[#E2E8F0] mb-8 text-center">
            RESUME
          </h2>
          <a
            href="#contact"
            className="pill-button px-12 py-5 bg-[#5A6B7A] dark:bg-[#7A8A9D] text-[#FFFCF9] dark:text-[#E2E8F0] text-[28px] inline-flex items-center gap-3"
          >
            Request Full Resume
          </a>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="icon-placeholder"></div>
            <h3 className="text-[56px] text-[#4A5568] dark:text-[#E2E8F0] uppercase">Education</h3>
          </div>
          <div className="grid gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="sticker-card bg-white dark:bg-[#252D3D] p-8 border-6 border-[#A8B5C7] dark:border-[#7A8A9D]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#A8B5C7] to-[#B8C5B8] dark:from-[#7A8A9D] dark:to-[#7A8F7A] rounded-2xl mb-4"></div>
                <h4 className="text-[32px] text-[#4A5568] dark:text-[#E2E8F0] mb-3 leading-tight">
                  {edu.degree}
                </h4>
                <p className="text-[24px] font-black text-[#7A8A9D] dark:text-[#A8B5C7] mb-2">
                  {edu.school}
                </p>
                <p className="text-[20px] font-black text-[#4A5568] dark:text-[#CBD5E1] mb-4">
                  {edu.location}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="chunky-tag bg-[#CDD7DF] dark:bg-[#2D3748] text-[#4A5568] dark:text-[#E2E8F0] text-[18px]">
                    {edu.year}
                  </span>
                  <span className="chunky-tag bg-[#D4DDD4] dark:bg-[#4B5563] text-[#4A5568] dark:text-[#E2E8F0] text-[18px]">
                    {edu.details}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="icon-placeholder"></div>
            <h3 className="text-[56px] text-[#4A5568] dark:text-[#E2E8F0] uppercase">Experience</h3>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="sticker-card bg-white dark:bg-[#252D3D] p-10 border-6 border-[#B8C5B8] dark:border-[#7A8F7A]"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#B8C5B8] to-[#A8B5C7] dark:from-[#7A8F7A] dark:to-[#7A8A9D] rounded-2xl shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-[36px] text-[#4A5568] dark:text-[#E2E8F0] mb-2 leading-tight">
                      {job.title}
                    </h4>
                    <p className="text-[24px] font-black text-[#7A8A9D] dark:text-[#A8B5C7] mb-3">
                      {job.company}
                    </p>
                    <div className="inline-block px-6 py-2 bg-[#E8EDEF] dark:bg-[#475569] rounded-full mb-4">
                      <p className="text-[18px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">
                        {job.period}
                      </p>
                    </div>
                    <p className="text-[20px] font-black text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="icon-placeholder"></div>
            <h3 className="text-[56px] text-[#4A5568] dark:text-[#E2E8F0] uppercase">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="sticker-card bg-[#CDD7DF] dark:bg-[#2D3748] p-8 center-content wiggle-hover"
              >
                <div className="w-16 h-16 bg-white/50 dark:bg-white/20 rounded-2xl mb-4"></div>
                <h4 className="text-[20px] text-[#4A5568] dark:text-[#E2E8F0] mb-2 text-center leading-tight font-black">
                  {cert.name}
                </h4>
                <p className="text-[16px] font-black text-[#7A8A9D] dark:text-[#A8B5C7] mb-3 text-center">
                  {cert.issuer}
                </p>
                <div className="inline-block px-4 py-1 bg-white dark:bg-[#1A1F2E] rounded-full">
                  <p className="text-[16px] font-black text-[#4A5568] dark:text-[#E2E8F0]">
                    {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="center-content mb-12">
            <div className="inline-block px-10 py-3 bg-[#B8C5B8] dark:bg-[#4B5563] rounded-full mb-6">
              <p className="font-sans text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">
                Recommendations
              </p>
            </div>
            <h2 className="text-[72px] md:text-[96px] text-[#4A5568] dark:text-[#E2E8F0] mb-8 text-center">
              TESTIMONIALS
            </h2>
            <p className="text-[28px] font-black text-[#4A5568] dark:text-[#CBD5E1] max-w-3xl text-center">
              What professors, clients, and peers say about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="sticker-card bg-white dark:bg-[#252D3D] p-8"
              >
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-full bg-[#CDD7DF] dark:bg-[#475569] mb-6"></div>

                {/* Stars */}
                <div className="flex gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-[#E8C547] dark:bg-[#D4AF37] rounded-full"></div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[20px] font-black text-[#4A5568] dark:text-[#E2E8F0] leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t-4 border-[#4A5568] dark:border-[#E2E8F0]">
                  <h4 className="text-[24px] text-[#4A5568] dark:text-[#E2E8F0] leading-tight font-black">
                    {testimonial.name}
                  </h4>
                  <p className="text-[18px] font-black text-[#7A8A9D] dark:text-[#A8B5C7]">
                    {testimonial.role}
                  </p>
                  <p className="text-[16px] font-black text-[#4A5568] dark:text-[#CBD5E1]">
                    {testimonial.company}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="sticker-card bg-[#5A6B7A] dark:bg-[#475569] p-8 center-content">
              <div className="text-[64px] text-[#B8C5B8] dark:text-[#7A8F7A] font-black mb-2">Top 1%</div>
              <p className="text-[24px] font-black text-[#FFFCF9] dark:text-[#E2E8F0] uppercase">
                Class Ranking
              </p>
            </div>
            <div className="sticker-card bg-[#5A6B7A] dark:bg-[#475569] p-8 center-content">
              <div className="text-[64px] text-[#B8C5B8] dark:text-[#7A8F7A] font-black mb-2">6+</div>
              <p className="text-[24px] font-black text-[#FFFCF9] dark:text-[#E2E8F0] uppercase">
                Certifications
              </p>
            </div>
            <div className="sticker-card bg-[#5A6B7A] dark:bg-[#475569] p-8 center-content">
              <div className="text-[64px] text-[#B8C5B8] dark:text-[#7A8F7A] font-black mb-2">15+</div>
              <p className="text-[24px] font-black text-[#FFFCF9] dark:text-[#E2E8F0] uppercase">
                Projects Completed
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="sticker-card bg-[#5A6B7A] dark:bg-[#475569] p-12 center-content">
          <div className="icon-placeholder mb-6 mx-auto" style={{ width: '100px', height: '100px' }}></div>
          <h3 className="text-[56px] text-[#FFFCF9] dark:text-[#E2E8F0] mb-6 text-center">
            READY TO COLLABORATE?
          </h3>
          <p className="text-[24px] font-black text-[#E8EDEF] dark:text-[#CBD5E1] mb-8 text-center max-w-3xl">
            I'm actively seeking Backend/Full-Stack Developer internship opportunities. 
            Let's discuss how I can contribute to your team!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="pill-button px-12 py-5 bg-[#B8C5B8] dark:bg-[#4B5563] text-[#4A5568] dark:text-[#E2E8F0] text-[28px]"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="pill-button px-12 py-5 bg-[#A8B5C7] dark:bg-[#2D3748] text-[#FFFCF9] dark:text-[#E2E8F0] text-[28px]"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
