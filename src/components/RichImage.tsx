import React, { useState } from 'react';

interface RichImageProps {
  src: string;
  alt: string;
  className?: string;
  badgeText?: string;
  bigOutlineText?: string;
  aspectClass?: string;
}

export const RichImage: React.FC<RichImageProps> = ({
  src,
  alt,
  className = '',
  badgeText,
  bigOutlineText,
  aspectClass = 'aspect-[4/3]',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#22201D] ${aspectClass} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover block transition-opacity duration-500"
        />
      ) : (
        /* Rich panel fallback: soft gradient from ink to accent with fine film grain & huge outline serif type */
        <div className="absolute inset-0 bg-gradient-to-br from-[#22201D] via-[#2D2622] to-[#B4552D] flex items-center justify-center p-6 select-none overflow-hidden film-grain-overlay">
          {/* Subtle architectural framing lines */}
          <div className="absolute inset-4 border border-[#D9C4A3]/20 rounded-2xl pointer-events-none" />

          {/* Huge outline serif typography */}
          {bigOutlineText && (
            <span
              className="font-serif text-[120px] md:text-[180px] font-normal leading-none select-none tracking-tight text-transparent"
              style={{
                WebkitTextStroke: '2px rgba(247, 241, 230, 0.45)',
              }}
            >
              {bigOutlineText}
            </span>
          )}

          {badgeText && (
            <span className="absolute bottom-4 left-6 text-xs uppercase tracking-[0.2em] font-medium text-[#D9C4A3]/80">
              {badgeText}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
