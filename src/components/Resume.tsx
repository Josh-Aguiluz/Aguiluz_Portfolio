import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Briefcase, GraduationCap, Award, ChevronDown } from 'lucide-react';

export function Resume() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Stanford University',
      period: '2015 - 2019',
      details: 'Graduated with honors. Specialized in Software Engineering and AI.',
    },
    {
      degree: 'Full-Stack Web Development Certificate',
      institution: 'freeCodeCamp',
      period: '2018',
      details: 'Comprehensive curriculum covering front-end and back-end technologies.',
    },
  ];

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      period: '2021 - Present',
      responsibilities: [
        'Lead development of enterprise-level web applications using React and Node.js',
        'Architected microservices infrastructure serving 100K+ daily active users',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization techniques',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupHub Inc.',
      period: '2019 - 2021',
      responsibilities: [
        'Developed and maintained multiple client projects using MERN stack',
        'Implemented RESTful APIs and integrated third-party services',
        'Collaborated with design team to create responsive user interfaces',
        'Participated in agile development processes and sprint planning',
      ],
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      year: '2022',
    },
    {
      name: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      year: '2021',
    },
    {
      name: 'Google UX Design Certificate',
      issuer: 'Google',
      year: '2020',
    },
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section id="resume" className="min-h-screen bg-gray-900 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
          backgroundSize: '25px 25px'
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-8" />
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all"
          >
            <Download size={20} />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div 
            className="flex items-center gap-3 mb-6 cursor-pointer md:cursor-default"
            onClick={() => toggleSection('education')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="text-2xl text-white flex-1">Education</h3>
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
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg text-white">{edu.degree}</h4>
                        <span className="text-blue-400 text-sm">{edu.period}</span>
                      </div>
                      <p className="text-orange-400 mb-2">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.details}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div 
            className="flex items-center gap-3 mb-6 cursor-pointer md:cursor-default"
            onClick={() => toggleSection('experience')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Briefcase className="text-white" size={24} />
            </div>
            <h3 className="text-2xl text-white flex-1">Work Experience</h3>
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
                <div className="relative space-y-8">
                  {/* Timeline Line */}
                  <div className="hidden sm:block absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 to-orange-500" />

                  {experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative bg-gray-800 rounded-lg p-6 sm:ml-16 hover:shadow-lg hover:shadow-orange-500/10 transition-all"
                    >
                      {/* Timeline Dot */}
                      <div className="hidden sm:block absolute -left-[4.5rem] top-6 w-3 h-3 bg-orange-500 rounded-full ring-4 ring-gray-900" />

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-lg text-white">{exp.title}</h4>
                        <span className="text-orange-400 text-sm">{exp.period}</span>
                      </div>
                      <p className="text-blue-400 mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
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
            className="flex items-center gap-3 mb-6 cursor-pointer md:cursor-default"
            onClick={() => toggleSection('certifications')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="text-2xl text-white flex-1">Certifications</h3>
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
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500/10 transition-all cursor-pointer"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="text-white" size={28} />
                      </div>
                      <h4 className="text-white mb-2">{cert.name}</h4>
                      <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                      <p className="text-purple-400 text-sm">{cert.year}</p>
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
