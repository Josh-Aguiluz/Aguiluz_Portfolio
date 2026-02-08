import React from 'react';
import logoImage from 'figma:asset/f8e0d4fdfa99f0810ed0358a13ee96e447e08bcc.png';

export default function RetroNavigation() {
  const navItems = ['Home', 'About', 'Projects', 'Resume', 'Blog', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 dark:bg-[#1A1F2E]/95 backdrop-blur-sm border-b-8 border-[#B8C5B8] dark:border-[#475569]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img 
            src={logoImage} 
            alt="Josh Logo" 
            className="h-20 w-20 transition-transform hover:scale-105"
            style={{
              filter: 'brightness(0) saturate(100%) invert(78%) sepia(8%) saturate(652%) hue-rotate(76deg) brightness(94%) contrast(87%)'
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="font-sans text-[20px] font-black text-[#4A5568] dark:text-[#E2E8F0] uppercase hover:text-[#7A8A9D] dark:hover:text-[#CBD5E1] transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#A8B5C7] dark:bg-[#7A8A9D] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="hidden md:block pill-button px-8 py-3 bg-[#B8C5B8] dark:bg-[#4B5563] text-[#4A5568] dark:text-[#E2E8F0] text-[20px]"
        >
          Hire Me
        </a>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-[32px] font-black text-[#4A5568] dark:text-[#E2E8F0]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}