import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'A 20 minute call',
    description:
      'We talk through your real estate enquiries, how you collect them today, and what you need on your board.',
  },
  {
    number: '02',
    title: 'A plan for your real estate business',
    description:
      'I map out your enquiry form and your sorting columns based on your typical budgets and Hyderabad areas.',
  },
  {
    number: '03',
    title: 'I set it up and show your team',
    description:
      'I build the form, connect the sorting board, test every step, and walk you through how to use it.',
  },
];

export const HowWeStart: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.7', 'end 0.75'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section
      id="how-we-start"
      ref={containerRef}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <div className="text-center mb-16 md:mb-20">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B4552D] block mb-2">
          Clear and simple
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#22201D] tracking-tight">
          How we start
        </h2>
      </div>

      <div className="relative pl-8 sm:pl-16">
        {/* Background thin vertical track */}
        <div className="absolute left-3.5 sm:left-7 top-4 bottom-12 w-[2px] bg-[#22201D]/12" />

        {/* Dynamic accent fill line */}
        <motion.div
          style={shouldReduceMotion ? { scaleY: 1 } : { scaleY }}
          className="absolute left-3.5 sm:left-7 top-4 bottom-12 w-[2px] bg-[#B4552D] origin-top"
        />

        {/* Steps */}
        <div className="space-y-16 sm:space-y-20">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative flex items-start group">
              {/* Step indicator node */}
              <div className="absolute -left-8 sm:-left-16 flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#F7F1E6] border-2 border-[#B4552D] text-[#22201D] font-serif text-sm sm:text-base font-bold shadow-sm z-10">
                {index + 1}
              </div>

              {/* Step content */}
              <div className="pt-0.5 sm:pt-1">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B4552D] block mb-1">
                  Step {step.number}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#22201D] mb-3">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg leading-[1.6] text-[#22201D]/75 max-w-[62ch]">
                  {step.description}
                </p>

                {/* The price appears once, exactly as written in Price, inside the How we start section under step 3 */}
                {index === 2 && (
                  <div className="mt-8 pt-6 border-t border-[#22201D]/12 inline-block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#22201D]/60 block mb-1">
                      Price
                    </span>
                    <p className="font-serif text-2xl sm:text-3xl text-[#22201D]">
                      Rs 15,000 setup + Rs 5,000 a month
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
