import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  techStack: string[];
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web', 'Mobile', 'UI/UX'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management',
      longDescription: 'Built a comprehensive e-commerce platform featuring real-time inventory tracking, secure payment processing, and an intuitive admin dashboard. Implemented advanced search and filtering capabilities, integrated with third-party APIs for shipping and analytics, and optimized for high performance with lazy loading and caching strategies.',
      image: 'https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzY1NDI0MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Web',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      description: 'Mobile app for tracking workouts and nutrition with social features',
      longDescription: 'Developed a cross-platform mobile application that helps users track their fitness journey. Features include workout logging, nutrition tracking, progress visualization with interactive charts, social sharing capabilities, and integration with wearable devices. Implemented offline functionality and data synchronization for seamless user experience.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1NDUzMDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Mobile',
      techStack: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    },
    {
      id: 3,
      title: 'SaaS Dashboard Design',
      description: 'Modern analytics dashboard with data visualization and reporting',
      longDescription: 'Designed and developed a comprehensive SaaS dashboard that provides real-time analytics and insights. Created an intuitive interface with customizable widgets, interactive data visualizations, and advanced reporting features. Focused on accessibility, responsive design, and user experience with extensive user testing and iteration.',
      image: 'https://images.unsplash.com/photo-1764601841480-d3c8b8ee9918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NjU1MTg1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'UI/UX',
      techStack: ['Figma', 'React', 'TypeScript', 'Tailwind CSS'],
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="min-h-screen bg-gray-950 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work, demonstrating expertise across web, mobile, and design
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full text-white text-sm">
                    {project.category}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                    <span className="text-sm">View Case Study</span>
                    <ExternalLink size={16} className="ml-2" />
                  </div>
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-900/90 rounded-full text-white hover:bg-gray-800 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full text-white text-sm">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-white mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-800 text-blue-400 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
                    <ExternalLink size={20} />
                    Live Demo
                  </button>
                  <button className="px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all">
                    View Code
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
