import React from 'react';

export default function ElegantNavigation() {
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Stack', href: '#stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F6F0]/95 backdrop-blur-sm border-b border-[#E8E4D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-mono text-[24px] font-bold text-[#333333] hover:opacity-70 transition-opacity">
          &lt;/&gt; Dev
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-mono text-[20px] text-[#333333] hover:text-[#666666] transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#333333] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#333333] text-[24px]">
          ☰
        </button>
      </div>
    </nav>
  );
}
