import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function PrimaryButton({ children, href, variant = 'primary' }: PrimaryButtonProps) {
  const baseStyles = "inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    primary: "bg-gradient-to-r from-amber-500 to-purple-600 text-white hover:from-amber-400 hover:to-purple-500 shadow-lg hover:shadow-purple-500/25",
    secondary: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 shadow-lg hover:shadow-indigo-500/25",
    outline: "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </a>
  );
}