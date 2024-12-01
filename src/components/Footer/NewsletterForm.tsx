import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg
            focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500
            text-white placeholder-gray-400"
          required
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2
            w-10 h-10 flex items-center justify-center rounded-full
            bg-gradient-to-r from-amber-500 to-purple-600
            hover:from-amber-400 hover:to-purple-500
            transition-all duration-200"
        >
          <Send className="w-5 h-5 text-white" />
        </button>
      </div>
    </form>
  );
}