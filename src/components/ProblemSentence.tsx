import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

const SENTENCE =
  'You spend your evenings opening the same enquiry messages again and again, scrolling through mixed budgets and scattered locations, while serious buyers wait and look elsewhere.';

interface WordProps {
  word: string;
  index: number;
  total: number;
  progress: any;
  shouldReduceMotion: boolean | null;
}

const Word: React.FC<WordProps> = ({ word, index, total, progress, shouldReduceMotion }) => {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(progress, [start, end], [0.22, 1]);
  const color = useTransform(
    progress,
    [start, end],
    ['rgba(247, 241, 230, 0.22)', 'rgba(247, 241, 230, 1)']
  );

  if (shouldReduceMotion) {
    return <span className="inline-block mr-[0.28em] text-[#F7F1E6]">{word}</span>;
  }

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.28em] transition-colors"
    >
      {word}
    </motion.span>
  );
};

export const ProblemSentence: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.35'],
  });

  const words = SENTENCE.split(' ');

  return (
    <section
      id="the-problem"
      ref={containerRef}
      data-theme="ink"
      className="relative w-full bg-[#22201D] text-[#F7F1E6] py-24 sm:py-32 md:py-44 px-4 sm:px-6 lg:px-8 film-grain-overlay overflow-hidden select-none"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-serif text-[32px] sm:text-[46px] md:text-[62px] lg:text-[72px] leading-[1.12] tracking-[-0.015em] text-balance">
          {words.map((word, i) => (
            <Word
              key={i}
              word={word}
              index={i}
              total={words.length}
              progress={scrollYProgress}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </p>
      </div>
    </section>
  );
};
