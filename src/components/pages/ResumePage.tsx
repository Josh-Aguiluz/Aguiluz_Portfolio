import React from 'react';
import { Award, Briefcase, GraduationCap, Star, Download } from 'lucide-react';
import { motion } from 'motion/react';
import SpotlightCard from '../SpotlightCard';
import MagneticButton from '../MagneticButton';
import InfiniteMarquee from '../InfiniteMarquee';

export default function ResumePage() {
  const timeline = [
    {
      year: '2024',
      title: 'Backend Development Intern',
      subtitle: 'Seeking Opportunities',
      type: 'work',
      description: 'Looking for internship opportunities to apply backend development skills in real-world projects.',
    },
    {
      year: '2023',
      title: 'Web Optimization Specialist',
      subtitle: 'Freelance',
      type: 'work',
      description: 'Provided SEO optimization and backend configuration services for WordPress sites.',
    },
    {
      year: '2022',
      title: 'BS Information Technology',
      subtitle: 'Holy Angel University',
      type: 'education',
      description: 'Top 1% in Web Development track. Academic Scholar with focus on backend systems.',
    },
  ];

  const certifications = [
    'HubSpot SEO Certification',
    'Cisco CCNA: Introduction to Networks',
    'CompTIA IT Fundamentals+',
    'Google Digital Marketing',
    'Meta Frontend Developer',
    'AWS Cloud Practitioner Essentials',
  ];

  const skills = [
    { name: 'Node.js', level: 'Expert' },
    { name: 'Express', level: 'Expert' },
    { name: 'MongoDB', level: 'Advanced' },
    { name: 'SQL', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Flutter', level: 'Intermediate' },
  ];

  const testimonials = [
    {
      name: 'Dr. Maria Santos',
      role: 'Web Development Professor',
      quote: 'Josh consistently demonstrates exceptional problem-solving skills and a deep understanding of backend architecture. Top performer in the cohort.',
    },
    {
      name: 'Client Testimonial',
      role: 'WordPress Site Owner',
      quote: 'The optimization work Josh did on our site was outstanding. Load times improved dramatically and our search rankings increased significantly.',
    },
  ];

  return (
    <div className="w-full min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-[#FDF5E7] dark:bg-[#1A1715]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-8 md:px-10 py-3 md:py-4 bg-[#A47A2D] rounded-full mb-8"
          >
            <p className="font-mono text-[20px] md:text-[24px] font-bold text-white uppercase tracking-wider">
              // Resume & Experience
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Michroma, sans-serif' }}
            className="text-[56px] sm:text-6xl lg:text-7xl leading-tight font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-8"
          >
            My Journey
          </motion.h1>
          
          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MagneticButton className="px-10 py-5 bg-[#A47A2D] hover:bg-[#FFA51F] text-white rounded-full text-[24px] font-black inline-flex items-center gap-3 transition-all border-none">
              <Download className="w-6 h-6" />
              Download Resume
            </MagneticButton>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[48px] md:text-[64px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-12 text-center">
            Timeline
          </h2>
          
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#252220] p-8 md:p-10 border-4 border-[#A47A2D] rounded-[24px] shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Year Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-[#A47A2D] rounded-[24px] flex items-center justify-center">
                      <span className="font-mono text-[32px] font-black text-white">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      {item.type === 'work' ? (
                        <Briefcase className="w-8 h-8 text-[#A47A2D] flex-shrink-0" />
                      ) : (
                        <GraduationCap className="w-8 h-8 text-[#A47A2D] flex-shrink-0" />
                      )}
                      <div>
                        <h3 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[28px] md:text-[36px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">
                          {item.title}
                        </h3>
                        <p className="text-[18px] md:text-[20px] font-bold text-[#A47A2D] mb-4">
                          {item.subtitle}
                        </p>
                        <p className="text-[18px] md:text-[22px] font-bold text-[#521D07] dark:text-[#B8B0A6]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Skills */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Michroma, sans-serif' }}
            className="text-[48px] md:text-[64px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-12 text-center"
          >
            Tech Stack
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SpotlightCard className="bg-white dark:bg-[#252220] p-8 border-4 border-[#A47A2D] rounded-[24px] shadow-lg hover:shadow-xl transition-shadow">
                  <p style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[24px] md:text-[28px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-2">
                    {skill.name}
                  </p>
                  <p className="text-[16px] md:text-[18px] font-bold text-[#A47A2D]">
                    {skill.level}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[48px] md:text-[64px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-12 text-center">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#252220] p-6 md:p-8 border-4 border-[#A47A2D] rounded-[24px] shadow-lg flex items-center gap-6"
              >
                <div className="w-16 h-16 bg-[#A47A2D] rounded-[16px] flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <p style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[18px] md:text-[22px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[48px] md:text-[64px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-12 text-center">
            Testimonials
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F5EBD9] dark:bg-[#252220] p-8 md:p-10 border-4 border-[#A47A2D] rounded-[24px] shadow-lg"
              >
                <div className="flex gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-[#A47A2D] text-[#A47A2D]" />
                  ))}
                </div>
                <p className="text-[18px] md:text-[22px] font-bold text-[#521D07] dark:text-[#B8B0A6] italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[22px] md:text-[24px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">
                    {testimonial.name}
                  </p>
                  <p className="text-[16px] md:text-[18px] font-bold text-[#A47A2D]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}