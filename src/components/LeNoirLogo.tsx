import React from 'react';

export default function LeNoirLogo({ className = '', variant = 'horizontal' }: { className?: string; variant?: 'horizontal' | 'badge' }) {
  if (variant === 'badge') {
    return (
      <div className={`flex flex-col items-center select-none ${className}`}>
        {/* Render official logo image with proper styling */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          <img
            src="https://www.lenoirfoundation.com/lenoir-logo.png"
            alt="LeNoir Foundation Logo  Hope in Motion"
            className="w-full h-full object-contain filter drop-shadow-md transition-transform hover:scale-105 duration-300"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            width={160}
            height={160}
          />
        </div>
      </div>
    );
  }

  // Horizontal/Header variant
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <img
        src="https://www.lenoirfoundation.com/lenoir-logo.png"
        alt="LeNoir Foundation Logo"
        className="h-12 sm:h-14 w-auto object-contain transition-transform hover:scale-102 duration-200"
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
        width={420}
        height={140}
      />
    </div>
  );
}

