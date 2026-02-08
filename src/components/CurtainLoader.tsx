import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from 'figma:asset/f8e0d4fdfa99f0810ed0358a13ee96e447e08bcc.png';

export default function CurtainLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // After 1 second, lift the curtain (FASTER!)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ 
            duration: 1.2, 
            ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for heavy curtain feel
          }}
          className="fixed inset-0 z-[200] bg-[#521D07] flex items-center justify-center"
        >
          {/* Pulsing Logo */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="flex flex-col items-center gap-8"
          >
            <img 
              src={logoImage} 
              alt="Josh Logo" 
              className="w-40 h-40 md:w-48 md:h-48"
              style={{ filter: 'brightness(0) saturate(100%) invert(60%) sepia(88%) saturate(435%) hue-rotate(359deg) brightness(91%) contrast(86%)' }}
            />
            
            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ fontFamily: 'Michroma, sans-serif' }}
              className="text-[#A47A2D] text-[24px] md:text-[32px] font-black uppercase tracking-wider"
            >
              Loading Portfolio...
            </motion.p>

            {/* Loading Bar */}
            <div className="w-64 h-2 bg-[#A47A2D]/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                className="h-full bg-[#A47A2D] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}