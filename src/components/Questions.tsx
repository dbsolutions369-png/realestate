import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface QA {
  question: string;
  answer: string;
}

const FAQS: QA[] = [
  {
    question: 'Who is this for?',
    answer:
      'This is for real estate agents and small businesses in Hyderabad who handle daily buyer and tenant enquiries and want to spend less time on paperwork.',
  },
  {
    question: 'What exactly do you set up?',
    answer:
      'Dream Property Sorter builds one small enquiry form and one board that sorts every buyer and tenant by budget and area, so the agent calls the right person first.',
  },
  {
    question: 'How long does setup take?',
    answer: 'We agree on the timeline during our call.',
  },
  {
    question: 'What does it cost?',
    answer: 'Setup is Rs 15,000 and the monthly retainer is Rs 5,000.',
  },
  {
    question: 'How do we start?',
    answer:
      'Book a 20 minute call using the booking link, message me on WhatsApp, or send an email to dbsolutions369@gmail.com. We discuss your enquiries and take it from there.',
  },
];

export const Questions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B4552D] block mb-2">
          Clear answers
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#22201D] tracking-tight">
          Questions
        </h2>
      </div>

      <div className="border-t border-[#22201D]/12">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border-b border-[#22201D]/12 transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full py-6 sm:py-8 flex items-center justify-between gap-6 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B4552D] rounded-lg"
              >
                <span className="font-serif text-[22px] sm:text-[28px] leading-[1.2] text-[#22201D] group-hover:text-[#B4552D] transition-colors">
                  {faq.question}
                </span>

                {/* Plus that turns into a cross */}
                <motion.span
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { rotate: isOpen ? 45 : 0 }
                  }
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="w-8 h-8 rounded-full border border-[#22201D]/15 flex items-center justify-center shrink-0 text-[#22201D] text-lg font-light"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1V13M1 7H13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pr-12 text-base sm:text-lg leading-[1.6] text-[#22201D]/80">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
