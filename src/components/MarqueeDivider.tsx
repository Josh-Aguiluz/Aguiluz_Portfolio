import React from 'react';

export default function MarqueeDivider() {
  const text = '/// FULL STACK /// DESIGN /// CODE ///';
  
  // Duplicate the text many times to create seamless loop
  const repeatedText = Array(20).fill(text).join(' ');

  return (
    <div className="marquee-divider">
      <div className="marquee-content">
        <span className="marquee-text">{repeatedText}</span>
        <span className="marquee-text">{repeatedText}</span>
      </div>
    </div>
  );
}
