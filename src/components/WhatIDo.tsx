import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { RichImage } from './RichImage';

interface WorkItem {
  number: string;
  title: string;
  image: string;
  today: string;
  withSorter: string;
}

const ITEMS: WorkItem[] = [
  {
    number: '01',
    title: 'One small enquiry form',
    image: '/work-1.jpg',
    today: 'Enquiries arrive across scattered chats, calls, and loose notes with missing budgets and locations.',
    withSorter:
      'Every buyer and tenant completes one short form with their budget, preferred Hyderabad area, and move-in timeline before you speak.',
  },
  {
    number: '02',
    title: 'Budget and area sorting board',
    image: '/work-2.jpg',
    today: 'Your enquiries sit in one mixed pile, leaving you to guess which lead fits your active property.',
    withSorter:
      'Every enquiry sorts onto a single board by budget and area, so every contact is organized the moment it arrives.',
  },
  {
    number: '03',
    title: 'The right buyer called first',
    image: '/work-3.jpg',
    today: 'Serious buyers wait while you spend your time answering enquiries outside your active listings.',
    withSorter:
      'You open the top of your board, see the direct match for your active listing, and call the right person first.',
  },
];

export const WhatIDo: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // 3 cards: translate from 0 to -66.66% so all cards pass through
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.66%']);

  return (
    <section id="what-i-do" className="relative bg-[#F7F1E6] text-[#22201D]">
      {/* Laptop & Large Screens: Pinned Section */}
      {!shouldReduceMotion ? (
        <div ref={targetRef} className="hidden md:block relative h-[300vh]">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-8 lg:px-16">
            {/* Pinned Heading */}
            <div className="max-w-7xl mx-auto w-full mb-8 pt-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B4552D] block mb-2">
                What I set up
              </span>
              <h2 className="font-serif text-5xl lg:text-6xl text-[#22201D] tracking-tight">
                What I do
              </h2>
            </div>

            {/* Horizontal sliding track */}
            <div className="max-w-7xl mx-auto w-full overflow-hidden">
              <motion.div style={{ x }} className="flex gap-8 w-[300%]">
                {ITEMS.map((item) => (
                  <div
                    key={item.number}
                    className="w-[70vw] max-w-[920px] shrink-0 bg-[#F7F1E6] border border-[#22201D]/12 rounded-[28px] overflow-hidden shadow-sm flex flex-col"
                  >
                    {/* Top 60%: Work picture */}
                    <div className="h-[340px] lg:h-[400px] w-full relative bg-[#22201D] overflow-hidden">
                      <RichImage
                        src={item.image}
                        alt={item.title}
                        aspectClass="h-full w-full"
                        bigOutlineText={item.number}
                        badgeText={item.title}
                        className="h-full w-full"
                      />
                    </div>

                    {/* Bottom Content */}
                    <div className="p-8 lg:p-10 flex-1 flex flex-col justify-between">
                      <div className="flex items-baseline justify-between mb-4">
                        <span className="font-serif text-3xl font-normal text-[#B4552D]">
                          {item.number}
                        </span>
                        <h3 className="font-serif text-3xl text-[#22201D]">
                          {item.title}
                        </h3>
                      </div>

                      <div className="space-y-3 pt-2 border-t border-[#22201D]/10">
                        <p className="text-base leading-[1.6] text-[#22201D]/75">
                          <strong className="text-[#22201D] font-semibold mr-1">
                            Today:
                          </strong>
                          {item.today}
                        </p>
                        <p className="text-base leading-[1.6] text-[#22201D]">
                          <strong className="text-[#B4552D] font-semibold mr-1">
                            With Dream Property Sorter:
                          </strong>
                          {item.withSorter}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Phone / Reduced Motion: Stacked and swipeable cards */}
      <div
        className={`${
          !shouldReduceMotion ? 'md:hidden' : 'block'
        } py-16 px-4 sm:px-6 max-w-5xl mx-auto`}
      >
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B4552D] block mb-2">
            What I set up
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#22201D] tracking-tight">
            What I do
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {ITEMS.map((item) => (
            <div
              key={item.number}
              className="bg-[#F7F1E6] border border-[#22201D]/12 rounded-[28px] overflow-hidden shadow-sm"
            >
              {/* Picture filling top 60% approx */}
              <div className="h-[220px] sm:h-[280px] w-full relative bg-[#22201D] overflow-hidden">
                <RichImage
                  src={item.image}
                  alt={item.title}
                  aspectClass="h-full w-full"
                  bigOutlineText={item.number}
                  badgeText={item.title}
                  className="h-full w-full"
                />
              </div>

              {/* Bottom text */}
              <div className="p-6 sm:p-8">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-serif text-2xl font-normal text-[#B4552D]">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#22201D]">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-3 pt-2 border-t border-[#22201D]/10">
                  <p className="text-sm sm:text-base leading-[1.6] text-[#22201D]/75">
                    <strong className="text-[#22201D] font-semibold mr-1">
                      Today:
                    </strong>
                    {item.today}
                  </p>
                  <p className="text-sm sm:text-base leading-[1.6] text-[#22201D]">
                    <strong className="text-[#B4552D] font-semibold mr-1">
                      With Dream Property Sorter:
                    </strong>
                    {item.withSorter}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
