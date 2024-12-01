import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkSectionProps {
  title: string;
  links: FooterLink[];
}

export function FooterLinkSection({ title, links }: FooterLinkSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-amber-300 transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}