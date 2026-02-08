import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ModernNavigation() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Stack', href: '#stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 dark:border-slate-700/50">
      <div className="glass-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="font-mono text-[24px] font-bold text-slate-800 dark:text-slate-100 hover:opacity-70 transition-opacity">
            &lt;/&gt; Developer
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-mono text-[20px] text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-slate-100" />
            ) : (
              <Moon className="w-5 h-5 text-slate-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
