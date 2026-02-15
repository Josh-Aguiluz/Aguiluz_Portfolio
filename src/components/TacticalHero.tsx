import { motion } from 'framer-motion';
import { Target, Zap, Shield } from 'lucide-react';
import bgImageDark from 'figma:asset/56e417b118a23871f1b870fa873fff84b6f0d52b.png';
import heroPortrait from 'figma:asset/916057e4d784a6f22523da6d03e95bf8726dd99b.png';

interface TacticalHeroProps {
  onNavigate: (section: string) => void;
  theme: 'stealth' | 'light';
}

export function TacticalHero({ onNavigate, theme }: TacticalHeroProps) {
  const isDark = theme === 'stealth';
  
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Background Image/Pattern */}
      {isDark ? (
        // Dark mode - use the provided image
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImageDark})`,
          }}
        />
      ) : (
        // Light mode - white with red geometric pattern
        <div className="absolute inset-0 bg-white">
          {/* Red geometric shapes for light mode */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
            {/* Top left angular shape */}
            <path d="M 0,0 L 300,0 L 150,150 L 0,100 Z" fill="#FF0000" opacity="0.15" />
            <path d="M 0,0 L 300,0 L 150,150 L 0,100 Z" fill="none" stroke="#FF0000" strokeWidth="3" />
            
            {/* Top right angular shape */}
            <path d="M 1000,0 L 700,0 L 850,150 L 1000,100 Z" fill="#FF0000" opacity="0.15" />
            <path d="M 1000,0 L 700,0 L 850,150 L 1000,100 Z" fill="none" stroke="#FF0000" strokeWidth="3" />
            
            {/* Bottom left angular shape */}
            <path d="M 0,600 L 300,600 L 150,450 L 0,500 Z" fill="#FF0000" opacity="0.15" />
            <path d="M 0,600 L 300,600 L 150,450 L 0,500 Z" fill="none" stroke="#FF0000" strokeWidth="3" />
            
            {/* Bottom right angular shape */}
            <path d="M 1000,600 L 700,600 L 850,450 L 1000,500 Z" fill="#FF0000" opacity="0.15" />
            <path d="M 1000,600 L 700,600 L 850,450 L 1000,500 Z" fill="none" stroke="#FF0000" strokeWidth="3" />
            
            {/* Center diagonal lines */}
            <line x1="200" y1="0" x2="400" y2="600" stroke="#FF0000" strokeWidth="2" opacity="0.3" />
            <line x1="600" y1="0" x2="800" y2="600" stroke="#FF0000" strokeWidth="2" opacity="0.3" />
          </svg>
        </div>
      )}

      {/* Aggressive grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 0, 0, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ y: ['0%', '200%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30" />
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-0 w-32 h-32 border-t-4 border-l-4 border-red-600/50" />
      <div className="absolute top-20 right-0 w-32 h-32 border-t-4 border-r-4 border-red-600/50" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-red-600/50" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-red-600/50" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-red-600/10 border-2 border-red-600 px-4 py-2 cut-corner-tl"
            >
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <span className="text-red-600 tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                STATUS: ACTIVE / AVAILABLE FOR DEPLOYMENT
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-4 leading-none tracking-tight transition-colors duration-500 ${
                isDark ? 'text-white' : 'text-black'
              }`} style={{ fontFamily: 'Teko, sans-serif' }}>
                FULL STACK
                <br />
                <span className="text-red-600 relative inline-block">
                  OPERATIVE
                  <motion.div
                    className="absolute -inset-2 border-2 border-red-600 opacity-30"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="border-l-4 border-red-600 pl-6"
            >
              <p className={`text-xl sm:text-2xl tracking-wide transition-colors duration-500 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                MISSION: <span className={`transition-colors duration-500 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>Transforming Complex Problems Into Elegant Solutions</span>
              </p>
              <p className={`text-lg mt-2 transition-colors duration-500 ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                CODE NAME: Josh Andrei Aguiluz
              </p>
            </motion.div>

            {/* Stats Quick View */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: Target, value: 'XX+', label: 'MISSIONS' },
                { icon: Zap, value: 'XY', label: 'ACTIVE' },
                { icon: Shield, value: '100%', label: 'SUCCESS' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-zinc-900 border-2 border-red-600/30 p-4 cut-corner-br relative overflow-hidden group hover:border-red-600 transition-colors">
                    <Icon className="text-red-600 mb-2" size={24} />
                    <div className="text-2xl text-white mb-1" style={{ fontFamily: 'Teko, sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {stat.label}
                    </div>
                    <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                onClick={() => onNavigate('projects')}
                className="relative px-8 py-4 bg-red-600 text-white tracking-wider cut-corner overflow-hidden group"
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Target size={20} />
                  VIEW LOADOUT / PROJECTS
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                  style={{ opacity: 0.1 }}
                />
              </motion.button>

              <motion.button
                onClick={() => onNavigate('contact')}
                className={`px-8 py-4 border-2 tracking-wider cut-corner-tl transition-colors ${
                  isDark 
                    ? 'border-white text-white hover:bg-white hover:text-black' 
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT
              </motion.button>
            </motion.div>

            {/* Tactical info bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 text-xs text-gray-600 pt-8 border-t border-red-600/20"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              <span>LAT: 37.7749° N</span>
              <span>LONG: 122.4194° W</span>
              <span>STATUS: READY</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Glitch Photo */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              {/* Main Image with Duotone Effect */}
              <div className="relative w-full h-full cut-corner overflow-hidden tactical-border">
                <img
                  src={heroPortrait}
                  alt="Developer operative"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'grayscale(100%) contrast(1.2)',
                    mixBlendMode: 'screen',
                  }}
                />
                
                {/* Red duotone overlay */}
                <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-60" />
                
                {/* Glitch layers */}
                <motion.div
                  className="absolute inset-0 opacity-70"
                  animate={{ clipPath: ['inset(0 0 0 0)', 'inset(40% 0 60% 0)', 'inset(0 0 0 0)'] }}
                  transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <img
                    src={heroPortrait}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'grayscale(100%) contrast(1.2)',
                      transform: 'translateX(5px)',
                      mixBlendMode: 'screen',
                    }}
                  />
                  <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-60" />
                </motion.div>
              </div>

              {/* HUD Elements */}
              <div className="absolute top-4 left-4 bg-black/90 border-2 border-red-600 px-3 py-2 text-xs text-red-600 tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                ID: FSO-2025
              </div>

              <div className="absolute bottom-4 right-4 bg-black/90 border-2 border-red-600 px-3 py-2 text-xs text-green-500 tracking-wider flex items-center gap-2" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                ONLINE
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-red-600" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-red-600" />

              {/* Halftone overlay */}
              <div className="absolute inset-0 halftone pointer-events-none" />
            </div>

            {/* Red glow effect */}
            <div className="absolute inset-0 bg-red-600/20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Bottom HUD bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/90 border-2 border-red-600/50 px-6 py-3 text-xs text-gray-400 tracking-widest hidden lg:block"
        style={{ fontFamily: 'Rajdhani, sans-serif' }}
      >
        SCROLL TO ENGAGE ▼
      </motion.div>
    </section>
  );
}