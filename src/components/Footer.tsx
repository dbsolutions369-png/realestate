import React from 'react';

interface FooterProps {
  bookingLink: string;
  whatsappNumber: string;
  email: string;
}

export const Footer: React.FC<FooterProps> = ({
  bookingLink,
  whatsappNumber,
  email,
}) => {
  return (
    <footer
      id="footer"
      data-theme="ink"
      className="w-full bg-[#22201D] text-[#F7F1E6] border-t border-[#F7F1E6]/10 py-16 px-4 sm:px-6 lg:px-8 film-grain-overlay"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Left: Logo on cream panel and City */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="bg-[#F7F1E6] rounded-xl p-2.5 inline-block shadow-sm">
            <img
              src="/logo.png"
              alt="Dream Property Sorter logo"
              className="h-8 w-auto object-contain block"
            />
          </div>
          <span className="text-sm font-medium text-[#D9C4A3]">Hyderabad</span>
        </div>

        {/* Center: The three contact links */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-sm text-[#F7F1E6]/80 font-medium">
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7F1E6] transition-colors"
          >
            Book a 20 minute call
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7F1E6] transition-colors"
          >
            Message me on WhatsApp
          </a>
          <a
            href={`mailto:${email}`}
            className="hover:text-[#F7F1E6] transition-colors"
          >
            {email}
          </a>
        </div>

        {/* Right: Year and Business name */}
        <div className="text-sm text-[#F7F1E6]/60">
          © 2026 Dream Property Sorter
        </div>
      </div>
    </footer>
  );
};
