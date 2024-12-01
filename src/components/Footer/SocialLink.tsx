import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full
        bg-gray-800 hover:bg-gray-700 transition-colors duration-200
        group"
    >
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-amber-300 transition-colors duration-200" />
    </a>
  );
}