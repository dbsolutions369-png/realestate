import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface MobileStickyBarProps {
  bookingLink: string;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ bookingLink }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after hero has scrolled away (approx 450px)
      if (window.scrollY > 480) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#F7F1E6]/95 backdrop-blur-sm border-t border-[#22201D]/12 p-2.5 px-4 flex items-center justify-center shadow-lg"
          style={{ maxHeight: '12vh' }}
        >
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm py-3 px-6 rounded-full bg-[#B4552D] text-[#22201D] font-bold text-sm tracking-wide text-center shadow-sm active:scale-[0.98] transition-transform"
          >
            Book a 20 minute call
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
