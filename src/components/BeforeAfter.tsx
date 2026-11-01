import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const WITHOUT_LINES = [
  'Opening unread messages across chats late into the evening.',
  'Asking the same budget and location questions again and again.',
  'Sifting through notebooks and chat threads to match a buyer to a property.',
  'Calling down an unsorted list while serious buyers move on to other agents.',
];

const WITH_LINES = [
  'One board with every new enquiry already organized by budget and area.',
  'Clear buyer requirements in front of you before you dial.',
  'Direct focus on matching buyers who are ready to view and close.',
  'Ending your workday on time with every enquiry in its place.',
];

export const BeforeAfter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'without' | 'with'>('without');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Section Kicker & Title */}
      <div className="text-center mb-10 md:mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B4552D] block mb-2">
          Your evening
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#22201D] tracking-tight">
          Before and after
        </h2>
      </div>

      {/* Two-position switch */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 rounded-full bg-[#EFE7D8] border border-[#22201D]/12">
          <button
            type="button"
            onClick={() => setActiveTab('without')}
            className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 select-none cursor-pointer whitespace-nowrap ${
              activeTab === 'without'
                ? 'bg-[#22201D] text-[#F7F1E6] shadow-sm'
                : 'text-[#22201D]/70 hover:text-[#22201D]'
            }`}
          >
            Without Dream Property Sorter
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('with')}
            className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 select-none cursor-pointer whitespace-nowrap ${
              activeTab === 'with'
                ? 'bg-[#B4552D] text-[#22201D] shadow-sm'
                : 'text-[#22201D]/70 hover:text-[#22201D]'
            }`}
          >
            With Dream Property Sorter
          </button>
        </div>
      </div>

      {/* Stacked lists that crossfade with no empty moment */}
      <div className="bg-[#F7F1E6] border border-[#22201D]/12 rounded-[28px] p-8 sm:p-12 relative overflow-hidden shadow-sm min-h-[300px]">
        <div className="grid grid-cols-1 grid-rows-1">
          {/* Without list */}
          <motion.div
            initial={false}
            animate={{
              opacity: activeTab === 'without' ? 1 : 0,
              pointerEvents: activeTab === 'without' ? 'auto' : 'none',
            }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeInOut' }}
            className="col-start-1 row-start-1 space-y-6"
          >
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#22201D]/50 mb-2">
              An evening without Dream Property Sorter
            </div>
            {WITHOUT_LINES.map((line, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#22201D]/30 mt-2.5 shrink-0" />
                <p className="text-base sm:text-lg leading-[1.6] text-[#22201D]/80">
                  {line}
                </p>
              </div>
            ))}
          </motion.div>

          {/* With list */}
          <motion.div
            initial={false}
            animate={{
              opacity: activeTab === 'with' ? 1 : 0,
              pointerEvents: activeTab === 'with' ? 'auto' : 'none',
            }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeInOut' }}
            className="col-start-1 row-start-1 space-y-6"
          >
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B4552D] mb-2">
              An evening with Dream Property Sorter
            </div>
            {WITH_LINES.map((line, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#B4552D] mt-2.5 shrink-0" />
                <p className="text-base sm:text-lg leading-[1.6] text-[#22201D] font-medium">
                  {line}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
