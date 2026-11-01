import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MagneticButton } from './MagneticButton';
import { RichImage } from './RichImage';

interface HeroProps {
  bookingLink: string;
  whatsappNumber: string;
}

export const Hero: React.FC<HeroProps> = ({ bookingLink, whatsappNumber }) => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallax for arch image: moves slower than page scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const archY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Headline & Copy */}
        <div className="order-2 md:order-1 md:col-span-7 flex flex-col items-start">
          {/* Small line */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#B4552D] mb-4 md:mb-6"
          >
            For Real estate in Hyderabad
          </motion.div>

          {/* Headline in Instrument Serif, very large: >=72px on laptop, >=44px on phone, tight line-height */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={shouldReduceMotion ? false : { y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[44px] sm:text-[60px] md:text-[76px] lg:text-[88px] leading-[0.98] tracking-[-0.02em] text-[#22201D] text-balance"
            >
              The right buyer, called{' '}
              <span className="italic text-[#B4552D] font-normal">first</span>.
            </motion.h1>
          </div>

          {/* Plain line under it saying what I set up in a sentence */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-[18px] leading-[1.6] text-[#22201D]/80 max-w-[56ch] mb-8 md:mb-10"
          >
            Dream Property Sorter builds one small enquiry form and one board that sorts every buyer and tenant by budget and area, so you call the right person first.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <MagneticButton
              href={bookingLink}
              className="px-7 py-4 rounded-full bg-[#B4552D] text-[#22201D] font-bold text-base shadow-sm hover:brightness-105 active:brightness-95 whitespace-nowrap text-center"
            >
              Book a 20 minute call
            </MagneticButton>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-[#22201D]/15 text-[#22201D] font-medium text-base hover:bg-[#22201D]/5 transition-colors whitespace-nowrap text-center"
            >
              Message me on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right: me.jpg in tall arch frame (on phone sits above words) */}
        <div className="order-1 md:order-2 md:col-span-5 flex justify-center w-full">
          <motion.div
            style={shouldReduceMotion ? {} : { y: archY }}
            initial={
              shouldReduceMotion
                ? false
                : { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }
            }
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px]"
          >
            {/* Tall arch frame: rounded top, square bottom */}
            <div className="relative rounded-t-[160px] md:rounded-t-[200px] rounded-b-none overflow-hidden border border-[#22201D]/12 shadow-md bg-[#22201D]">
              <RichImage
                src="/me.jpg"
                alt="Samba Siva, founder of Dream Property Sorter"
                aspectClass="aspect-[3/4]"
                bigOutlineText="SS"
                badgeText="Samba Siva · Hyderabad"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Floating corner card */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-5 -left-3 sm:-left-5 bg-[#F7F1E6] border border-[#22201D]/15 rounded-2xl px-4 py-3 shadow-lg max-w-[240px] z-10"
            >
              <p className="text-xs sm:text-sm font-semibold text-[#22201D] leading-snug">
                Samba Siva, founder of Dream Property Sorter
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
