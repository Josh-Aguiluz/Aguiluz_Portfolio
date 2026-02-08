import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF8F5] dark:bg-[#1A1F2E]">
      <div className="text-center">
        <div className="inline-block w-24 h-24 border-8 border-[#B8C5B8] dark:border-[#4B5563] border-t-[#A8B5C7] dark:border-t-[#7A8A9D] rounded-full animate-spin"></div>
        <p className="mt-6 font-mono text-[24px] font-bold text-[#4A5568] dark:text-[#E2E8F0] uppercase tracking-wider">
          Loading...
        </p>
      </div>
    </div>
  );
}
