import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import logoImage from 'figma:asset/f8e0d4fdfa99f0810ed0358a13ee96e447e08bcc.png';

export default function RouterNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-[#1A1715]/90 backdrop-blur-md shadow-lg border-b border-[#A47A2D]/20'
            : 'bg-transparent py-4'
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#A47A2D] via-[#FFA51F] to-[#A47A2D] origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center group relative">
              <div className="absolute inset-0 bg-[#A47A2D] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
              <img 
                src={logoImage} 
                alt="Josh Logo" 
                className="h-16 w-16 md:h-20 md:w-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 bg-white/50 dark:bg-[#252220]/50 p-2 rounded-full backdrop-blur-sm border border-[#A47A2D]/10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{ fontFamily: 'Michroma, sans-serif' }}
                  className={`relative px-6 py-3 text-[16px] font-bold uppercase transition-all rounded-full overflow-hidden group ${
                    isActive(link.path)
                      ? 'text-white dark:text-[#1A1715]'
                      : 'text-[#521D07] dark:text-[#E2E8F0] hover:text-[#A47A2D] dark:hover:text-[#FFA51F]'
                  }`}
                >
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#A47A2D] dark:bg-[#A47A2D] rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded-full bg-[#A47A2D] text-white hover:bg-[#FFA51F] transition-colors shadow-lg hover:shadow-[#A47A2D]/50 z-50 relative"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { 
            clipPath: "circle(150% at calc(100% - 40px) 40px)",
            transition: {
              type: "spring",
              stiffness: 20,
              restDelta: 2
            }
          },
          closed: { 
            clipPath: "circle(0% at calc(100% - 40px) 40px)",
            transition: {
              delay: 0.5,
              type: "spring",
              stiffness: 400,
              damping: 40
            }
          }
        }}
        className="fixed inset-0 z-40 bg-[#FDF5E7] dark:bg-[#1A1715] lg:hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, #A47A2D 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
            }} />
        </div>

        <div className="h-full flex flex-col justify-center items-center p-6">
          <div className="space-y-6 text-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                variants={{
                  open: { 
                    y: 0, 
                    opacity: 1,
                    transition: { delay: 0.2 + index * 0.1 }
                  },
                  closed: { 
                    y: 50, 
                    opacity: 0 
                  }
                }}
              >
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontFamily: 'Michroma, sans-serif' }}
                  className={`block text-[32px] md:text-[48px] font-black uppercase tracking-tight hover:text-[#A47A2D] transition-colors ${
                    isActive(link.path)
                      ? 'text-[#A47A2D]'
                      : 'text-[#521D07] dark:text-[#E2E8F0]'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative Footer in Menu */}
          <motion.div 
            variants={{
                open: { opacity: 1, transition: { delay: 0.8 } },
                closed: { opacity: 0 }
            }}
            className="absolute bottom-12 text-[#A47A2D] font-mono text-sm"
          >
            /// NAVIGATION SYSTEM
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}