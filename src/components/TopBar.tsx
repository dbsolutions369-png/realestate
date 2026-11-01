import React, { useEffect, useState } from 'react';
import { MagneticButton } from './MagneticButton';

interface TopBarProps {
  bookingLink: string;
}

export const TopBar: React.FC<TopBarProps> = ({ bookingLink }) => {
  const [theme, setTheme] = useState<'transparent' | 'cream' | 'ink'>('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 40) {
        setTheme('transparent');
        return;
      }

      // Check if the top bar (around y = 30) is currently over any ink section
      const inkSections = document.querySelectorAll<HTMLElement>('[data-theme="ink"]');
      let isOverInk = false;

      for (const section of inkSections) {
        const rect = section.getBoundingClientRect();
        // Check if the top bar (0 to 70px) overlaps the section
        if (rect.top <= 64 && rect.bottom >= 30) {
          isOverInk = true;
          break;
        }
      }

      if (isOverInk) {
        setTheme('ink');
      } else {
        setTheme('cream');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isInk = theme === 'ink';
  const isTransparent = theme === 'transparent';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isTransparent
          ? 'bg-transparent text-[#22201D]'
          : isInk
          ? 'bg-[#22201D] text-[#F7F1E6] border-b border-[#F7F1E6]/12'
          : 'bg-[#F7F1E6] text-[#22201D] border-b border-[#22201D]/12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Logo */}
        <a
          href="#"
          className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B4552D] rounded-lg"
          aria-label="Dream Property Sorter Home"
        >
          {isInk ? (
            <div className="bg-[#F7F1E6] rounded-xl px-2.5 py-1.5 flex items-center justify-center transition-colors shadow-sm">
              <img
                src="/logo.png"
                alt="Dream Property Sorter logo"
                className="h-7 w-auto object-contain block"
              />
            </div>
          ) : (
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Dream Property Sorter logo"
                className="h-8 w-auto object-contain block"
              />
            </div>
          )}
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a
            href="#what-i-do"
            className={`transition-colors whitespace-nowrap hover:opacity-100 ${
              isInk
                ? 'text-[#F7F1E6]/75 hover:text-[#F7F1E6]'
                : 'text-[#22201D]/75 hover:text-[#22201D]'
            }`}
          >
            What I do
          </a>
          <a
            href="#how-we-start"
            className={`transition-colors whitespace-nowrap hover:opacity-100 ${
              isInk
                ? 'text-[#F7F1E6]/75 hover:text-[#F7F1E6]'
                : 'text-[#22201D]/75 hover:text-[#22201D]'
            }`}
          >
            How it works
          </a>
          <a
            href="#about"
            className={`transition-colors whitespace-nowrap hover:opacity-100 ${
              isInk
                ? 'text-[#F7F1E6]/75 hover:text-[#F7F1E6]'
                : 'text-[#22201D]/75 hover:text-[#22201D]'
            }`}
          >
            About
          </a>
        </nav>

        {/* Zone 3: CTA Pill */}
        <div className="flex items-center shrink-0">
          <MagneticButton
            href={bookingLink}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide rounded-full bg-[#B4552D] text-[#22201D] shadow-sm hover:brightness-105 active:brightness-95 whitespace-nowrap"
          >
            Book a call
          </MagneticButton>
        </div>
      </div>
    </header>
  );
};
