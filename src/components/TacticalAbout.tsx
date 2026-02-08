import { motion } from 'motion/react';
import { Code, Database, Palette, Cpu, Globe, Smartphone, MessageSquare, Lightbulb, Award, TrendingUp, Users, Zap } from 'lucide-react';

interface TacticalAboutProps {
  theme: 'stealth' | 'light';
}

export function TacticalAbout({ theme }: TacticalAboutProps) {
  const isDark = theme === 'stealth';
  
  const stats = [
    { label: 'YEARS ACTIVE', value: 'X+', icon: TrendingUp },
    { label: 'PROJECTS COMPLETED', value: 'XX+', icon: Award },
    { label: 'CODE COMMITS', value: 'XXK+', icon: Zap },
    { label: 'CLIENT SATISFACTION', value: '100%', icon: Users },
  ];

  const skills = [
    { icon: Code, name: 'REACT.JS', category: 'FRONTEND', color: 'red' },
    { icon: Database, name: 'NODE.JS', category: 'BACKEND', color: 'red' },
    { icon: Database, name: 'MONGODB', category: 'DATABASE', color: 'red' },
    { icon: Cpu, name: 'PYTHON', category: 'BACKEND', color: 'red' },
    { icon: Smartphone, name: 'REACT NATIVE', category: 'MOBILE', color: 'red' },
    { icon: Globe, name: 'TYPESCRIPT', category: 'FRONTEND', color: 'red' },
    { icon: Palette, name: 'UI/UX DESIGN', category: 'CREATIVE', color: 'white' },
    { icon: MessageSquare, name: 'COMMUNICATION', category: 'SOFT SKILL', color: 'white' },
    { icon: Lightbulb, name: 'PROBLEM SOLVING', category: 'SOFT SKILL', color: 'white' },
  ];

  return (
    <section id="about" className={`min-h-screen py-12 md:py-20 relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(255, 0, 0, 0.1) 0px,
            transparent 1px,
            transparent 2px,
            rgba(255, 0, 0, 0.1) 3px
          )`
        }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
            <div className="h-1 w-8 md:w-16 bg-red-600" />
            <h2 className={`text-3xl sm:text-5xl lg:text-6xl tracking-wider transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-black'
            }`} style={{ fontFamily: 'Teko, sans-serif' }}>
              PROFILE
            </h2>
            <div className="h-1 flex-1 bg-red-600/20" />
          </div>
          <p className={`text-base md:text-lg max-w-3xl transition-colors duration-500 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            OPERATIVE CREDENTIALS AND TACTICAL SPECIFICATIONS
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`border-2 border-red-600/30 p-4 md:p-6 cut-corner-br relative overflow-hidden group cursor-pointer transition-colors duration-500 ${
                  isDark ? 'bg-zinc-900' : 'bg-gray-100'
                }`}
              >
                <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon size={48} className="text-red-600 w-8 h-8 md:w-12 md:h-12" />
                </div>
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl lg:text-5xl text-red-600 mb-1 md:mb-2" style={{ fontFamily: 'Teko, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className={`text-[10px] md:text-xs tracking-widest transition-colors duration-500 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`} style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                    {stat.label}
                  </div>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-red-600"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className={`relative aspect-square cut-corner-br overflow-hidden border-4 border-red-600 transition-colors duration-500 ${
                isDark ? 'bg-zinc-900' : 'bg-gray-200'
              }`}>
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="text-red-600 opacity-20" size={120} />
                </div>
                
                {/* Photo overlay grid */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `repeating-linear-gradient(
                    0deg,
                    rgba(255, 0, 0, 0.3) 0px,
                    transparent 2px,
                    transparent 4px,
                    rgba(255, 0, 0, 0.3) 6px
                  ), repeating-linear-gradient(
                    90deg,
                    rgba(255, 0, 0, 0.3) 0px,
                    transparent 2px,
                    transparent 4px,
                    rgba(255, 0, 0, 0.3) 6px
                  )`
                }} />
                
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-red-600" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-red-600" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-red-600" />
                
                {/* Label */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 transition-colors duration-500 ${
                  isDark ? 'bg-black/80' : 'bg-white/80'
                }`}>
                  <div className="text-red-600 tracking-wider text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>
                    OPERATIVE PHOTO
                  </div>
                  <div className={`text-xs tracking-wider transition-colors duration-500 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    CLEARANCE: AUTHORIZED
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission Statement */}
            <div className="lg:col-span-2">
              <div className={`border-l-4 border-red-600 p-6 md:p-8 lg:p-12 cut-corner-br transition-colors duration-500 h-full ${
                isDark ? 'bg-zinc-900' : 'bg-gray-100'
              }`}>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="text-4xl md:text-6xl text-red-600" style={{ fontFamily: 'Teko, sans-serif' }}>
                    "
                  </div>
                  <div>
                    <h3 className={`text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 tracking-wide transition-colors duration-500 ${
                      isDark ? 'text-white' : 'text-black'
                    }`} style={{ fontFamily: 'Teko, sans-serif' }}>
                      MISSION STATEMENT
                    </h3>
                    <div className={`space-y-4 md:space-y-6 transition-colors duration-500 text-base md:text-xl leading-relaxed md:leading-loose ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <p>
                        I'm a dedicated full-stack developer with proven experience building 
                        powerful websites and applications. I specialize in creating solutions that are both 
                        highly functional and beautifully designed.
                      </p>
                      <p>
                        I work with modern technologies to build everything from sleek, fast-loading websites to robust backend 
                        systems that handle your business needs. I don't just write code—I create solutions that 
                        help your business grow and succeed.
                      </p>
                      <p>
                        I'm a strategic problem-solver and reliable team player who delivers results even when facing tight deadlines. 
                        When you need someone who can turn your vision into reality, I'm the developer you can count on.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Signature line */}
                <div className="flex flex-col sm:flex-row items-end sm:items-center justify-end gap-4 mt-6 md:mt-8 pt-6 border-t border-red-600/20">
                  <div className="text-right">
                    <div className={`tracking-wider transition-colors duration-500 text-xl md:text-2xl ${
                      isDark ? 'text-white' : 'text-black'
                    }`} style={{ fontFamily: 'Teko, sans-serif' }}>
                      JOSH ANDREI AGUILUZ
                    </div>
                    <div className="text-red-600 text-sm tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                      FULL STACK OPERATIVE
                    </div>
                  </div>
                  <div className="w-16 h-16 border-2 border-red-600 flex items-center justify-center">
                    <Award className="text-red-600" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 md:gap-4 mb-6 md:mb-8">
            <div className="h-1 w-8 md:w-16 bg-red-600" />
            <h3 className={`text-2xl md:text-3xl lg:text-4xl tracking-wider transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-black'
            }`} style={{ fontFamily: 'Teko, sans-serif' }}>
              SKILL LOADOUT
            </h3>
            <div className="h-1 flex-1 bg-red-600/20" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const isHighlight = skill.color === 'red';
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`relative border-2 p-4 md:p-6 ${
                    isHighlight ? 'border-red-600' : isDark ? 'border-white/30' : 'border-gray-400'
                  } cut-corner-tl overflow-hidden group cursor-pointer transition-colors duration-500 ${
                    isDark ? 'bg-zinc-900' : 'bg-gray-100'
                  }`}
                >
                  {/* Background icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon size={80} className={`${isHighlight ? 'text-red-600' : isDark ? 'text-white' : 'text-black'} w-16 h-16 md:w-20 md:h-20`} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <Icon 
                      className={`mb-2 md:mb-3 transition-colors duration-500 w-6 h-6 md:w-7 md:h-7 ${
                        isHighlight ? 'text-red-600' : isDark ? 'text-white' : 'text-black'
                      }`} 
                    />
                    <div className={`text-base md:text-lg mb-1 tracking-wide transition-colors duration-500 ${
                      isHighlight ? 'text-red-600' : isDark ? 'text-white' : 'text-black'
                    }`} style={{ fontFamily: 'Teko, sans-serif' }}>
                      {skill.name}
                    </div>
                    <div className={`text-xs tracking-wider transition-colors duration-500 ${
                      isDark ? 'text-gray-500' : 'text-gray-600'
                    }`} style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                      {skill.category}
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 transition-colors duration-500 ${
                    isHighlight ? 'border-red-600' : isDark ? 'border-white/30' : 'border-gray-400'
                  }`} />

                  {/* Hover effect */}
                  <motion.div
                    className={`absolute inset-0 ${isHighlight ? 'bg-red-600' : isDark ? 'bg-white' : 'bg-black'} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Decorative tactical elements */}
        <div className="absolute top-32 right-8 w-32 h-32 border-2 border-red-600/20 rotate-45 hidden xl:block" />
        <div className="absolute bottom-32 left-8 w-24 h-24 border-2 border-red-600/20 hidden xl:block" />
      </div>
    </section>
  );
}