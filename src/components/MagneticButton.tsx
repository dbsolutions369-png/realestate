import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  isExternal?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  href,
  className = '',
  isExternal = true,
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (shouldReduceMotion || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) * 0.22;
    const deltaY = (clientY - centerY) * 0.22;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={shouldReduceMotion ? { x: 0, y: 0 } : { x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.15 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
      className={`inline-flex items-center justify-center cursor-pointer transition-colors duration-200 select-none ${className}`}
    >
      {children}
    </motion.a>
  );
};
