import React from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  return (
    <div className="relative group">
      <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium group">
        {label}
        <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 dark:bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </button>
      
      <div className="absolute left-0 w-64 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
        <div className="relative top-0">
          <div className="absolute -top-2 left-8 w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-t border-l border-gray-200 dark:border-gray-700" />
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="font-medium text-gray-900 dark:text-gray-100">{item.label}</div>
                {item.description && (
                  <div className="text-sm text-gray-500 dark:text-gray-400">{item.description}</div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}