import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Premium perfume background with parallax effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center transform scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_100%)]" />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200">
          The Future of Scent
        </h1>
        
        <p className="text-xl sm:text-2xl text-amber-100/90 max-w-3xl mx-auto mb-12">
          Revolutionizing how you experience aromas, one molecule at a time.
        </p>
        
        <a 
          href="#discover"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-amber-900 bg-gradient-to-r from-amber-200 to-amber-400 rounded-full hover:from-amber-300 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
        >
          Discover More
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-amber-200/70" />
      </div>
    </div>
  );
}