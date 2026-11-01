import React from 'react';
import { MagneticButton } from './MagneticButton';
import { RichImage } from './RichImage';

interface AboutLetterProps {
  bookingLink: string;
}

export const AboutLetter: React.FC<AboutLetterProps> = ({ bookingLink }) => {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="bg-[#F7F1E6] border border-[#22201D]/12 rounded-[28px] p-8 sm:p-14 shadow-sm">
        {/* Header with me.jpg small and round & Heading */}
        <div className="flex items-center gap-5 mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border border-[#22201D]/15 bg-[#22201D]">
            <RichImage
              src="/me.jpg"
              alt="Samba Siva"
              aspectClass="h-full w-full"
              bigOutlineText="SS"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B4552D] block mb-1">
              About me
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#22201D]">
              A note from Samba Siva
            </h2>
          </div>
        </div>

        {/* Letter Body in slightly larger reading size */}
        <div className="space-y-4 mb-10 text-lg sm:text-[20px] leading-[1.7] text-[#22201D]/85">
          <p>
            My name is Siva, and I am based in Hyderabad. I work with data and
            automation, and I help busy agents and small businesses handle their
            daily enquiries with less effort. My aim is simple: to give you more
            time for your customers and less time for paperwork.
          </p>
        </div>

        {/* Signature in Caveat */}
        <div className="mb-10">
          <span className="font-handwriting text-5xl sm:text-6xl text-[#B4552D] block select-none">
            Siva
          </span>
        </div>

        {/* Action Button: Book a 20 minute call with Siva */}
        <div>
          <MagneticButton
            href={bookingLink}
            className="px-7 py-3.5 rounded-full bg-[#B4552D] text-[#22201D] font-bold text-base shadow-sm hover:brightness-105 active:brightness-95 whitespace-nowrap"
          >
            Book a 20 minute call with Siva
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
