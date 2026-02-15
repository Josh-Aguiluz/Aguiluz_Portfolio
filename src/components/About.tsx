import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Palette, Lightbulb, Users, Zap, Server, Smartphone } from 'lucide-react';

export function About() {
  const skills = [
    { icon: Code2, name: 'React.js', color: 'blue' },
    { icon: Server, name: 'Node.js', color: 'green' },
    { icon: Database, name: 'Python', color: 'yellow' },
    { icon: Database, name: 'MongoDB', color: 'green' },
    { icon: Palette, name: 'UI/UX', color: 'purple' },
    { icon: Smartphone, name: 'React Native', color: 'blue' },
    { icon: Users, name: 'Communication', color: 'orange' },
    { icon: Lightbulb, name: 'Problem Solving', color: 'yellow' },
  ];

  return (
    <section id="about" className="min-h-screen bg-gray-900 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU1MDAxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional portrait"
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative Border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl -z-10 opacity-20 blur-xl" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl text-white">
              Passionate Full-Stack Developer
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                With over 5 years of experience in crafting exceptional digital solutions, 
                I specialize in building scalable web applications that blend cutting-edge 
                technology with user-centric design.
              </p>
              <p>
                My expertise spans the entire development stack, from creating intuitive 
                front-end experiences with React and TypeScript to architecting robust 
                back-end systems with Node.js and Python. I thrive on solving complex 
                problems and turning innovative ideas into reality.
              </p>
              <p>
                Beyond technical skills, I'm a strong communicator and collaborative team 
                player who believes in continuous learning and sharing knowledge. When I'm 
                not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring aspiring developers.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-blue-400">
                <Zap size={20} />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-orange-400">
                <Code2 size={20} />
                <span>50+ Projects Delivered</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl text-white text-center mb-12">
            Technical & Soft Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                yellow: 'from-yellow-500 to-yellow-600',
                purple: 'from-purple-500 to-purple-600',
                orange: 'from-orange-500 to-orange-600',
              };

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800 rounded-xl p-6 text-center hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${colorClasses[skill.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <p className="text-white">{skill.name}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
