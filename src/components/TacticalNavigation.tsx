import { useState } from 'react';
import { Menu, X, Crosshair, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  theme: 'stealth' | 'light';
  onThemeToggle: () => void;
}

export function TacticalNavigation({ activeSection, onNavigate, theme, onThemeToggle }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'resume', label: 'RESUME' },
    { id: 'blog', label: 'BLOG' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const isDark = theme === 'stealth';

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isDark ? 'bg-black border-red-600' : 'bg-white border-red-600'
      } border-b-4`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Crosshair className="text-red-600 group-hover:text-red-500 transition-colors" size={32} />
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Crosshair className="text-red-600 opacity-30" size={32} />
              </motion.div>
            </div>
            <span className={`text-xl md:text-2xl tracking-wider transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-black'
            }`} style={{ fontFamily: 'Teko, sans-serif' }}>
              NAME/LOGO OF PORTFOLIO
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`relative transition-colors tracking-wider ${
                  isDark ? 'text-white hover:text-red-600' : 'text-black hover:text-red-600'
                } ${activeSection === link.id ? 'text-red-600' : ''}`}
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                    layoutId="activeSection"
                  />
                )}
              </button>
            ))}
            
            {/* Theme Toggle - Desktop */}
            <button
              onClick={onThemeToggle}
              className={`p-2 border-2 border-red-600 hover:bg-red-600/10 transition-colors ${
                isDark ? 'text-white' : 'text-black'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Stealth Mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Hire Me Button */}
            <motion.button
              onClick={() => onNavigate('contact')}
              className="hidden md:block px-6 py-2 bg-red-600 text-white tracking-wider cut-corner-tl hover:bg-red-700 transition-colors relative overflow-hidden group"
              style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">HIRE ME</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
                style={{ opacity: 0.1 }}
              />
            </motion.button>

            {/* Mobile Hire Me */}
            <motion.button
              onClick={() => onNavigate('contact')}
              className="md:hidden px-4 py-2 bg-red-600 text-white text-sm tracking-wider"
              style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
              whileTap={{ scale: 0.95 }}
            >
              HIRE
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 border-2 border-red-600 hover:bg-red-600/10 transition-colors ${
                isDark ? 'text-white' : 'text-black'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Theme Toggle - Mobile */}
            <button
              onClick={onThemeToggle}
              className={`lg:hidden p-2 border-2 border-red-600 hover:bg-red-600/10 transition-colors ${
                isDark ? 'text-white' : 'text-black'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Stealth Mode'}
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-16 md:top-20 bg-black z-40 overflow-y-auto lg:hidden"
          >
            <div className="min-h-full flex flex-col items-center justify-center p-8 space-y-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setIsMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-4xl tracking-wider relative group ${
                    activeSection === link.id ? 'text-red-600' : 'text-white'
                  }`}
                  style={{ fontFamily: 'Teko, sans-serif' }}
                >
                  <span className="relative">
                    {link.label}
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-red-600"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                  {activeSection === link.id && (
                    <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-red-600 rotate-45" />
                  )}
                </motion.button>
              ))}

              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-red-600/30" />
              <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-red-600/30" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tactical scan line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
    </motion.nav>
  );
}