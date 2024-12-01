import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import { SocialLink } from './SocialLink';
import { FooterLinkSection } from './FooterLinkSection';
import { NewsletterForm } from './NewsletterForm';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-purple-400 bg-clip-text text-transparent">
              Brahmastra
            </h2>
            <p className="text-gray-400">
              Revolutionizing the world of scent through digital innovation and molecular precision.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={Facebook} label="Facebook" />
              <SocialLink href="#" icon={Twitter} label="Twitter" />
              <SocialLink href="#" icon={Instagram} label="Instagram" />
              <SocialLink href="#" icon={Youtube} label="YouTube" />
            </div>
          </div>

          {/* Quick Links */}
          <FooterLinkSection
            title="Quick Links"
            links={[
              { label: 'About Us', href: '#about' },
              { label: 'Technology', href: '#technology' },
              { label: 'Products', href: '#products' },
              { label: 'Support', href: '#support' },
            ]}
          />

          {/* Legal */}
          <FooterLinkSection
            title="Legal"
            links={[
              { label: 'Privacy Policy', href: '#privacy' },
              { label: 'Terms of Service', href: '#terms' },
              { label: 'Cookie Policy', href: '#cookies' },
              { label: 'Contact Us', href: '#contact' },
            ]}
          />

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Brahmastra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}