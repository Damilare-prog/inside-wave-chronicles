'use client';

import { ReactNode } from 'react';

interface CyberButtonProps {
  onClick?: () => void;
  children: ReactNode;
  variant?: 'blue' | 'red' | 'solid';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export default function CyberButton({
  onClick,
  children,
  variant = 'blue',
  className = '',
  disabled = false,
  type = 'button',
}: CyberButtonProps) {
  const baseClasses =
    'font-cyber tracking-wider px-8 py-4 rounded-none relative overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    blue: 'bg-transparent neon-border text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]',
    red: 'bg-transparent neon-border-red text-red-400 hover:bg-red-400/10 hover:shadow-[0_0_30px_rgba(255,0,64,0.3)]',
    solid:
      'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
    </button>
  );
}
