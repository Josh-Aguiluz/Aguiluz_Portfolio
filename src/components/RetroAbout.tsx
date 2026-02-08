import React from 'react';

export default function RetroAbout() {
  const softSkills = [
    { name: 'Adaptability & Speed' },
    { name: 'Problem Solving' },
    { name: 'Continuous Learning' },
    { name: 'Time Management' },
    { name: 'Team Collaboration' },
    { name: 'Critical Thinking' }
  ];

  const technicalSkills = [
    { name: 'Node.js & Backend', level: 90 },
    { name: 'Flutter Development', level: 85 },
    { name: 'MySQL & Firebase', level: 80 },
    { name: 'PHP & WordPress', level: 75 },
    { name: 'Angular & RxJS', level: 70 },
    { name: 'Networking (CCNA)', level: 75 }
  ];

  const techCategories = [
    { 
      name: 'Backend', 
      tags: ['Node.js', 'PHP', 'MySQL', 'Firebase', 'REST APIs'] 
    },
    { 
      name: 'Frontend', 
      tags: ['Flutter', 'Angular', 'HTML5', 'CSS3', 'RxJS'] 
    },
    { 
      name: 'Tools & Platforms', 
      tags: ['Git/GitHub', 'VS Code', 'WordPress', 'Postman', 'Android Studio'] 
    },
    { 
      name: 'Infrastructure', 
      tags: ['Cisco CCNA', 'PC Hardware', 'CompTIA ITF+', 'Networking'] 
    }
  ];

  return (
    <section id="about" className="py-32 mesh-gradient-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 center-content">
          <div className="inline-block px-10 py-3 bg-[#A8B5C7] dark:bg-[#475569] rounded-full mb-6">
            <p className="font-sans text-[24px] font-black text-[#FFFCF9] dark:text-[#E2E8F0] uppercase">
              About Me
            </p>
          </div>
          <h2 className="text-[72px] md:text-[96px] text-[#4A5568] dark:text-[#E2E8F0] mb-8 text-center">
            WHO I AM
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Photo & Bio */}
          <div className="sticker-card bg-white dark:bg-[#252D3D] p-10 border-8 border-[#5A6B7A] dark:border-[#7A8A9D]">
            {/* Photo Placeholder */}
            <div className="w-full aspect-square image-placeholder rounded-3xl mb-8">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="45" r="20" fill="rgba(255,255,255,0.3)"/>
                <path d="M30 95C30 75 45 65 60 65C75 65 90 75 90 95" stroke="rgba(255,255,255,0.3)" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Bio */}
            <h3 className="text-[40px] text-[#4A5568] dark:text-[#E2E8F0] mb-4 text-center">
              Josh Andrei Aguiluz
            </h3>
            <div className="inline-block px-6 py-2 bg-[#B8C5B8] dark:bg-[#4B5563] rounded-full mb-6 mx-auto block w-fit">
              <p className="font-sans text-[20px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">
                Backend / Full-Stack Developer
              </p>
            </div>
            <p className="text-[20px] font-black text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed text-center mb-6">
              Motivated BS Information Technology student and Academic Scholar seeking a Backend/Full-Stack Developer internship. 
              Ranked Top 1% in Web Development track, I combine strong backend logic (Node.js, PHP) with frontend adaptability 
              (Flutter, Angular). Passionate about building efficient, scalable systems with a "Cheetah-mindset" for rapid learning.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <div className="chunky-tag bg-[#CDD7DF] dark:bg-[#2D3748] text-[#4A5568] dark:text-[#E2E8F0] text-[18px]">
                Magalang, Pampanga
              </div>
              <div className="chunky-tag bg-[#D4DDD4] dark:bg-[#4B5563] text-[#4A5568] dark:text-[#E2E8F0] text-[18px]">
                BS IT @ HAU
              </div>
              <div className="chunky-tag bg-[#E8EDEF] dark:bg-[#475569] text-[#4A5568] dark:text-[#E2E8F0] text-[18px]">
                Academic Scholar
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="space-y-6">
            <div className="sticker-card bg-[#CDD7DF] dark:bg-[#2D3748] p-8">
              <div className="flex items-center gap-6">
                <div className="icon-placeholder shrink-0"></div>
                <div>
                  <h4 className="text-[32px] text-[#4A5568] dark:text-[#E2E8F0] mb-2">Mission</h4>
                  <p className="text-[20px] font-black text-[#4A5568] dark:text-[#CBD5E1]">
                    Building efficient, scalable backend systems that solve real-world problems
                  </p>
                </div>
              </div>
            </div>

            <div className="sticker-card bg-[#D4DDD4] dark:bg-[#4B5563] p-8">
              <div className="flex items-center gap-6">
                <div className="icon-placeholder shrink-0"></div>
                <div>
                  <h4 className="text-[32px] text-[#4A5568] dark:text-[#E2E8F0] mb-2">Mindset</h4>
                  <p className="text-[20px] font-black text-[#4A5568] dark:text-[#CBD5E1]">
                    Cheetah-mindset for rapid technology adoption and agile development
                  </p>
                </div>
              </div>
            </div>

            <div className="sticker-card bg-[#E8EDEF] dark:bg-[#475569] p-8">
              <div className="flex items-center gap-6">
                <div className="icon-placeholder shrink-0"></div>
                <div>
                  <h4 className="text-[32px] text-[#4A5568] dark:text-[#E2E8F0] mb-2">Goals</h4>
                  <p className="text-[20px] font-black text-[#4A5568] dark:text-[#CBD5E1]">
                    Secure a Backend/Full-Stack internship and contribute to impactful projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Soft Skills */}
          <div className="sticker-card bg-white dark:bg-[#252D3D] p-10 border-8 border-[#B8C5B8] dark:border-[#7A8F7A]">
            <h3 className="text-[48px] text-[#4A5568] dark:text-[#E2E8F0] mb-8 text-center uppercase">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="sticker-card bg-[#D4DDD4] dark:bg-[#4B5563] p-6 center-content wiggle-hover"
                >
                  <div className="w-12 h-12 bg-white/60 dark:bg-white/20 rounded-full mb-3"></div>
                  <p className="text-[18px] font-black text-[#4A5568] dark:text-[#E2E8F0] text-center uppercase">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills with Progress Bars */}
          <div className="sticker-card bg-white dark:bg-[#252D3D] p-10 border-8 border-[#A8B5C7] dark:border-[#7A8A9D]">
            <h3 className="text-[48px] text-[#4A5568] dark:text-[#E2E8F0] mb-8 text-center uppercase">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-3">
                    <span className="text-[20px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">
                      {skill.name}
                    </span>
                    <span className="text-[20px] font-black text-[#7A8A9D] dark:text-[#A8B5C7]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-6 bg-[#E8EDEF] dark:bg-[#475569] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#A8B5C7] to-[#B8C5B8] dark:from-[#7A8A9D] dark:to-[#7A8F7A] rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20">
          <div className="center-content mb-12">
            <div className="inline-block px-10 py-3 bg-[#E8EDEF] dark:bg-[#2D3748] rounded-full mb-6">
              <p className="font-sans text-[24px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase">
                Technology Stack
              </p>
            </div>
            <h2 className="text-[72px] md:text-[96px] text-[#4A5568] dark:text-[#E2E8F0] mb-8">
              TECH STACK
            </h2>
          </div>

          {/* Tech Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {techCategories.map((category) => (
              <div
                key={category.name}
                className="sticker-card p-10 bg-white dark:bg-[#252D3D]"
              >
                <h3 className="text-[48px] text-[#4A5568] dark:text-[#E2E8F0] mb-8 center-content uppercase">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="chunky-tag bg-[#5A6B7A] dark:bg-[#1A1F2E] text-[#FFFCF9] dark:text-[#E2E8F0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div className="mb-20">
          <div className="center-content mb-12">
            <h2 className="text-[56px] text-[#4A5568] dark:text-[#E2E8F0] mb-4 uppercase">
              Hobbies & Interests
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="sticker-card bg-[#CDD7DF] dark:bg-[#2D3748] p-8 center-content">
              <div className="icon-placeholder mb-4 mx-auto"></div>
              <h4 className="text-[28px] text-[#4A5568] dark:text-[#E2E8F0] mb-3 uppercase">PC Building</h4>
              <p className="text-[18px] font-black text-[#4A5568] dark:text-[#CBD5E1] text-center">
                Custom hardware optimization, overclocking & cooling systems
              </p>
            </div>
            <div className="sticker-card bg-[#D4DDD4] dark:bg-[#4B5563] p-8 center-content">
              <div className="icon-placeholder mb-4 mx-auto"></div>
              <h4 className="text-[28px] text-[#4A5568] dark:text-[#E2E8F0] mb-3 uppercase">Strategy Gaming</h4>
              <p className="text-[18px] font-black text-[#4A5568] dark:text-[#CBD5E1] text-center">
                Quick decision-making and resource management skills
              </p>
            </div>
            <div className="sticker-card bg-[#E8EDEF] dark:bg-[#475569] p-8 center-content">
              <div className="icon-placeholder mb-4 mx-auto"></div>
              <h4 className="text-[28px] text-[#4A5568] dark:text-[#E2E8F0] mb-3 uppercase">Fitness</h4>
              <p className="text-[18px] font-black text-[#4A5568] dark:text-[#CBD5E1] text-center">
                Disciplined weightlifting for physical & mental endurance
              </p>
            </div>
          </div>
        </div>

        {/* Personal Statement */}
        <div className="sticker-card bg-[#5A6B7A] dark:bg-[#475569] p-12 center-content">
          <div className="icon-placeholder mb-6 mx-auto" style={{ width: '100px', height: '100px' }}></div>
          <h3 className="text-[48px] text-[#FFFCF9] dark:text-[#E2E8F0] mb-6 text-center">
            WHY WORK WITH ME?
          </h3>
          <p className="text-[24px] font-black text-[#E8EDEF] dark:text-[#CBD5E1] max-w-4xl text-center leading-relaxed">
            As an Academic Scholar ranked in the Top 1% of my Web Development track, I bring a proven track record 
            of excellence combined with a passion for backend development. My "Cheetah-mindset" enables rapid learning 
            and adaptation to new technologies, while my logical approach ensures clean, efficient, and scalable code. 
            I balance academic excellence with continuous self-improvement through professional certifications and 
            hands-on projects. Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}
