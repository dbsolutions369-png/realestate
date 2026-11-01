import React from 'react';
import { MagneticButton } from './MagneticButton';

interface FinalInvitationProps {
  bookingLink: string;
  whatsappNumber: string;
  email: string;
}

export const FinalInvitation: React.FC<FinalInvitationProps> = ({
  bookingLink,
  whatsappNumber,
  email,
}) => {
  return (
    <section
      id="final-invitation"
      data-theme="ink"
      className="relative w-full bg-[#22201D] text-[#F7F1E6] py-28 sm:py-36 md:py-44 px-4 sm:px-6 lg:px-8 film-grain-overlay overflow-hidden text-center"
    >
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Big serif line adapted to real estate clients */}
        <h2 className="font-serif text-[42px] sm:text-[60px] md:text-[76px] leading-[1.05] tracking-[-0.02em] mb-10 text-balance text-[#F7F1E6]">
          Let&apos;s give your evenings back.
        </h2>

        {/* Booking button in the accent colour */}
        <div className="mb-8">
          <MagneticButton
            href={bookingLink}
            className="px-9 py-4 rounded-full bg-[#B4552D] text-[#22201D] font-bold text-lg shadow-md hover:brightness-105 active:brightness-95 whitespace-nowrap"
          >
            Book a 20 minute call
          </MagneticButton>
        </div>

        {/* WhatsApp and email under it as plain links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-base text-[#D9C4A3]">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7F1E6] transition-colors underline underline-offset-4 decoration-[#D9C4A3]/40"
          >
            Message me on WhatsApp
          </a>
          <span className="hidden sm:inline opacity-30">·</span>
          <a
            href={`mailto:${email}`}
            className="hover:text-[#F7F1E6] transition-colors underline underline-offset-4 decoration-[#D9C4A3]/40"
          >
            {email}
          </a>
        </div>
      </div>
    </section>
  );
};
