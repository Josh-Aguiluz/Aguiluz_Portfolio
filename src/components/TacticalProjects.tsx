import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  codeName: string;
  description: string;
  mission: string;
  image: string;
  category: string;
  techStack: string[];
  status: 'DEPLOYED' | 'ACTIVE' | 'CLASSIFIED';
  deployments: number;
}

interface TacticalProjectsProps {
  theme: 'stealth' | 'light';
}

export function TacticalProjects({ theme }: TacticalProjectsProps) {
  const isDark = theme === 'stealth';
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['ALL', 'WEB', 'MOBILE', 'DESIGN'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'SAMPLE PROJECT #1',
      codeName: 'OPERATION: PROJECT ONE',
      description: 'Brief description of project one with key features and technologies',
      mission: 'Detailed project description goes here. Explain the problem, solution, technologies used, and results achieved. Add specific metrics and achievements.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080',
      category: 'WEB',
      techStack: ['REACT', 'NODE.JS', 'MONGODB', 'API'],
      status: 'DEPLOYED',
      deployments: 15,
    },
    {
      id: 2,
      title: 'SAMPLE PROJECT #2',
      codeName: 'OPERATION: PROJECT TWO',
      description: 'Brief description of project two with key features and technologies',
      mission: 'Detailed project description goes here. Explain the problem, solution, technologies used, and results achieved. Add specific metrics and achievements.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080',
      category: 'MOBILE',
      techStack: ['REACT NATIVE', 'FIREBASE', 'REDUX', 'API'],
      status: 'ACTIVE',
      deployments: 22,
    },
    {
      id: 3,
      title: 'SAMPLE PROJECT #3',
      codeName: 'OPERATION: PROJECT THREE',
      description: 'Brief description of project three with key features and technologies',
      mission: 'Detailed project description goes here. Explain the problem, solution, technologies used, and results achieved. Add specific metrics and achievements.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1080',
      category: 'DESIGN',
      techStack: ['FIGMA', 'REACT', 'TYPESCRIPT', 'TAILWIND'],
      status: 'DEPLOYED',
      deployments: 8,
    },
    {
      id: 4,
      title: 'SAMPLE PROJECT #4',
      codeName: 'OPERATION: PROJECT FOUR',
      description: 'Brief description of project four with key features and technologies',
      mission: 'Detailed project description goes here. Explain the problem, solution, technologies used, and results achieved. Add specific metrics and achievements.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1080',
      category: 'WEB',
      techStack: ['VUE.JS', 'EXPRESS', 'POSTGRESQL', 'AWS'],
      status: 'CLASSIFIED',
      deployments: 30,
    },
  ];

  const filteredProjects = selectedCategory === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className={`min-h-screen py-20 relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Aggressive grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.5) 2px, transparent 2px),
                           linear-gradient(90deg, rgba(255, 0, 0, 0.5) 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
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
            <Target className="text-red-600" size={40} />
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl tracking-wider transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-black'
            }`} style={{ fontFamily: 'Teko, sans-serif' }}>
              PROJECT DEPLOYMENTS
            </h2>
            <div className="h-1 flex-1 bg-red-600" />
          </div>
          <p className={`text-lg transition-colors duration-500 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            TACTICAL OPERATIONS / MISSION ARCHIVE
          </p>
        </motion.div>

        {/* Category Filter - Tactical Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-6 py-3 tracking-wider transition-all cut-corner-tl ${
                selectedCategory === category
                  ? 'bg-red-600 text-white border-2 border-red-600'
                  : 'bg-zinc-900 text-gray-400 border-2 border-red-600/30 hover:border-red-600 hover:text-white'
              }`}
              style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
            >
              {category}
              {selectedCategory === category && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                  layoutId="categoryIndicator"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-zinc-900 border-2 border-red-600/30 cut-corner overflow-hidden group cursor-pointer relative"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      filter: 'grayscale(100%) contrast(1.1)',
                    }}
                  />
                  
                  {/* Red gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-red-600/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Status badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 text-xs tracking-wider ${
                    project.status === 'DEPLOYED' ? 'bg-green-600 text-white' :
                    project.status === 'ACTIVE' ? 'bg-red-600 text-white' :
                    'bg-gray-600 text-white'
                  }`} style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>
                    {project.status}
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/90 border border-red-600 text-red-600 text-xs tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>
                    {project.category}
                  </div>

                  {/* Halftone overlay */}
                  <div className="absolute inset-0 halftone pointer-events-none" />
                </div>

                {/* Project Info */}
                <div className="p-6 relative">
                  {/* Code name */}
                  <div className="text-xs text-red-600 mb-2 tracking-widest" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                    {project.codeName}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl text-white mb-3 tracking-wide group-hover:text-red-600 transition-colors" style={{ fontFamily: 'Teko, sans-serif' }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-black border border-red-600/30 text-red-600 text-xs tracking-wider"
                        style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View button */}
                  <div className="flex items-center text-white group-hover:text-red-600 transition-colors">
                    <span className="text-sm tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>
                      VIEW MISSION
                    </span>
                    <Target size={16} className="ml-2" />
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-600/30 group-hover:border-red-600 transition-colors" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-zinc-900 border-4 border-red-600 cut-corner max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Modal Header Image */}
              <div className="relative h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'grayscale(100%) contrast(1.1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                <div className="absolute inset-0 bg-red-600/30" />
                
                {/* Status overlay */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-black/90 border-2 border-red-600 text-red-600 tracking-widest" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>
                  {selectedProject.status}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 lg:p-12">
                {/* Code Name */}
                <div className="text-sm text-red-600 mb-3 tracking-widest" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                  {selectedProject.codeName}
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl text-white mb-2 tracking-wide" style={{ fontFamily: 'Teko, sans-serif' }}>
                  {selectedProject.title}
                </h3>

                {/* Category */}
                <div className="inline-block px-3 py-1 mb-6 bg-black border border-red-600 text-red-600 text-xs tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>
                  {selectedProject.category}
                </div>

                {/* Mission Brief */}
                <div className="mb-8 border-l-4 border-red-600 pl-6">
                  <h4 className="text-xl text-white mb-3 tracking-wide" style={{ fontFamily: 'Teko, sans-serif' }}>
                    MISSION BRIEF
                  </h4>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {selectedProject.mission}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-xl text-white mb-3 tracking-wide" style={{ fontFamily: 'Teko, sans-serif' }}>
                    TACTICAL LOADOUT
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-black border-2 border-red-600 text-red-600 tracking-wider"
                        style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t-2 border-red-600/30">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-red-600 text-white tracking-wider cut-corner-tl flex items-center gap-2"
                    style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
                  >
                    <ExternalLink size={20} />
                    LIVE DEMO
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border-2 border-white text-white tracking-wider hover:bg-white hover:text-black transition-colors flex items-center gap-2"
                    style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
                  >
                    <Github size={20} />
                    VIEW CODE
                  </motion.button>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-red-600" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-red-600" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}