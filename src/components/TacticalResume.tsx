import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, GraduationCap, Briefcase, Award, ChevronDown, FileText } from 'lucide-react';

interface TacticalResumeProps {
  theme: 'stealth' | 'light';
}

export function TacticalResume({ theme }: TacticalResumeProps) {
  const isDark = theme === 'stealth';
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const education = [
    {
      rank: 'SPECIALIST',
      degree: 'Bachelor Degree',
      institution: 'University Name',
      period: '2015 - 2019',
      details: 'Degree details and achievements',
      classification: 'HONORS',
    },
    {
      rank: 'OPERATIVE',
      degree: 'Certification Name',
      institution: 'Institution Name',
      period: 'YEAR',
      details: 'Certification details',
      classification: 'CERTIFIED',
    },
  ];

  const experience = [
    {
      rank: 'SENIOR OPERATIVE',
      title: 'Job Title 1',
      company: 'Company Name 1',
      period: 'YEAR - PRESENT',
      status: 'ACTIVE',
      missions: [
        'Key responsibility or achievement',
        'Key responsibility or achievement',
        'Key responsibility or achievement',
        'Key responsibility or achievement',
      ],
    },
    {
      rank: 'FIELD OPERATIVE',
      title: 'Job Title 2',
      company: 'Company Name 2',
      period: 'YEAR - YEAR',
      status: 'COMPLETED',
      missions: [
        'Key responsibility or achievement',
        'Key responsibility or achievement',
        'Key responsibility or achievement',
        'Key responsibility or achievement',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Certification Name 1',
      rank: 'ASSOCIATE',
      issuer: 'Issuing Organization',
      year: 'YEAR',
      classification: 'ACTIVE',
    },
    {
      name: 'Certification Name 2',
      rank: 'LEVEL I',
      issuer: 'Issuing Organization',
      year: 'YEAR',
      classification: 'ACTIVE',
    },
    {
      name: 'Certification Name 3',
      rank: 'CERTIFICATE',
      issuer: 'Issuing Organization',
      year: 'YEAR',
      classification: 'ACTIVE',
    },
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section id="resume" className={`min-h-screen py-20 relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <FileText className="text-red-600" size={40} />
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl tracking-wider transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-black'
            }`} style={{ fontFamily: 'Teko, sans-serif' }}>
              SERVICE RECORD
            </h2>
            <div className="h-1 flex-1 bg-red-600" />
          </div>
          <p className={`text-lg mb-8 transition-colors duration-500 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            OPERATIONAL HISTORY / TACTICAL CREDENTIALS
          </p>

          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-red-600 text-white tracking-wider cut-corner relative overflow-hidden group"
            style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Download size={20} />
              EXTRACT RESUME [PDF]
              <div className="ml-2 flex gap-1">
                <div className="w-1 h-4 bg-white/50" />
                <div className="w-1 h-4 bg-white/70" />
                <div className="w-1 h-4 bg-white" />
              </div>
            </span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
              style={{ opacity: 0.1 }}
            />
          </motion.button>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div 
            className="flex items-center gap-4 mb-6 cursor-pointer md:cursor-default"
            onClick={() => toggleSection('experience')}
          >
            <div className="w-12 h-12 bg-red-600 flex items-center justify-center cut-corner-tl">
              <Briefcase className="text-white" size={24} />
            </div>
            <h3 className={`text-3xl tracking-wider flex-1 transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-black'
            }`} style={{ fontFamily: 'Teko, sans-serif' }}>
              COMBAT EXPERIENCE
            </h3>
            <ChevronDown 
              className={`text-gray-400 md:hidden transition-transform ${
                expandedSection === 'experience' ? 'rotate-180' : ''
              }`}
              size={24}
            />
          </div>

          <AnimatePresence initial={false}>
            {(expandedSection === 'experience' || window.innerWidth >= 768) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="relative">
                  {/* Timeline line */}
                  <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-red-600" />

                  <div className="space-y-8">
                    {experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                        className="relative md:ml-16"
                      >
                        {/* Timeline dot */}
                        <div className="hidden md:block absolute -left-[4.75rem] top-8 w-6 h-6 bg-red-600 rotate-45" />

                        <div className={`border-2 border-red-600/30 cut-corner p-6 lg:p-8 hover:border-red-600 transition-colors ${
                          isDark ? 'bg-zinc-900' : 'bg-white'
                        }`}>
                          {/* Header */}
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4 pb-4 border-b-2 border-red-600/30">
                            <div>
                              <div className="text-xs text-red-600 mb-1 tracking-widest" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                                {exp.rank}
                              </div>
                              <h4 className={`text-2xl tracking-wide mb-2 transition-colors duration-500 ${
                                isDark ? 'text-white' : 'text-black'
                              }`} style={{ fontFamily: 'Teko, sans-serif' }}>
                                {exp.title}
                              </h4>
                              <p className={`tracking-wider transition-colors duration-500 ${
                                isDark ? 'text-white/80' : 'text-black/80'
                              }`} style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                                {exp.company}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className={`mb-2 transition-colors duration-500 ${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                              }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                                {exp.period}
                              </div>
                              <span className={`px-3 py-1 text-xs tracking-wider ${
                                exp.status === 'ACTIVE' 
                                  ? 'bg-red-600 text-white' 
                                  : 'bg-gray-700 text-gray-300'
                              }`} style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>
                                {exp.status}
                              </span>
                            </div>
                          </div>

                          {/* Missions */}
                          <div>
                            <div className={`mb-3 tracking-wider transition-colors duration-500 ${
                              isDark ? 'text-white' : 'text-black'
                            }`} style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                              MISSION OBJECTIVES:
                            </div>
                            <ul className="space-y-3">
                              {exp.missions.map((mission, i) => (
                                <li key={i} className={`flex items-start gap-3 text-sm transition-colors duration-500 ${
                                  isDark ? 'text-gray-400' : 'text-gray-600'
                                }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                                  <div className="w-2 h-2 bg-red-600 mt-2 flex-shrink-0" />
                                  <span>{mission}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div 
            className="flex items-center gap-4 mb-6 cursor-pointer md:cursor-default"
            onClick={() => toggleSection('education')}
          >
            <div className="w-12 h-12 bg-red-600 flex items-center justify-center cut-corner-tl">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className={`text-3xl tracking-wider flex-1 transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-black'
            }`} style={{ fontFamily: 'Teko, sans-serif' }}>
              TACTICAL TRAINING
            </h3>
            <ChevronDown 
              className={`text-gray-400 md:hidden transition-transform ${
                expandedSection === 'education' ? 'rotate-180' : ''
              }`}
              size={24}
            />
          </div>

          <AnimatePresence initial={false}>
            {(expandedSection === 'education' || window.innerWidth >= 768) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`border-l-4 border-red-600 p-6 cut-corner-br transition-colors ${
                        isDark ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-xs text-red-600 tracking-widest" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                          {edu.rank}
                        </div>
                        <span className="px-2 py-1 bg-red-600/20 border border-red-600 text-red-600 text-xs tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>
                          {edu.classification}
                        </span>
                      </div>
                      <h4 className={`text-xl mb-2 tracking-wide transition-colors duration-500 ${
                        isDark ? 'text-white' : 'text-black'
                      }`} style={{ fontFamily: 'Teko, sans-serif' }}>
                        {edu.degree}
                      </h4>
                      <p className={`mb-2 tracking-wider transition-colors duration-500 ${
                        isDark ? 'text-white/80' : 'text-black/80'
                      }`} style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                        {edu.institution}
                      </p>
                      <p className={`text-sm mb-3 transition-colors duration-500 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {edu.period}
                      </p>
                      <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {edu.details}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="flex items-center gap-4 mb-6 cursor-pointer md:cursor-default"
            onClick={() => toggleSection('certifications')}
          >
            <div className="w-12 h-12 bg-red-600 flex items-center justify-center cut-corner-tl">
              <Award className="text-white" size={24} />
            </div>
            <h3 className={`text-3xl tracking-wider flex-1 transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-black'
            }`} style={{ fontFamily: 'Teko, sans-serif' }}>
              CERTIFICATIONS & BADGES
            </h3>
            <ChevronDown 
              className={`text-gray-400 md:hidden transition-transform ${
                expandedSection === 'certifications' ? 'rotate-180' : ''
              }`}
              size={24}
            />
          </div>

          <AnimatePresence initial={false}>
            {(expandedSection === 'certifications' || window.innerWidth >= 768) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`border-2 border-red-600/30 p-6 cut-corner text-center hover:border-red-600 transition-colors cursor-pointer ${
                        isDark ? 'bg-zinc-900' : 'bg-white'
                      }`}
                    >
                      <div className="w-20 h-20 mx-auto mb-4 bg-red-600 flex items-center justify-center rotate-45">
                        <Award className="text-white -rotate-45" size={36} />
                      </div>
                      <div className="text-xs text-red-600 mb-2 tracking-widest" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                        {cert.rank}
                      </div>
                      <h4 className={`text-lg mb-2 tracking-wide transition-colors duration-500 ${
                        isDark ? 'text-white' : 'text-black'
                      }`} style={{ fontFamily: 'Teko, sans-serif' }}>
                        {cert.name}
                      </h4>
                      <p className={`text-sm mb-2 transition-colors duration-500 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {cert.issuer}
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-red-600" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>
                          {cert.year}
                        </span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>
                          {cert.classification}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}