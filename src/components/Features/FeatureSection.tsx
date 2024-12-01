import React from 'react';
import { Brain, Fingerprint, Zap, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced neural networks analyze molecular composition with unprecedented accuracy"
  },
  {
    icon: Fingerprint,
    title: "Unique Scent DNA",
    description: "Create and store your personal scent profile with our proprietary technology"
  },
  {
    icon: Zap,
    title: "Instant Recreation",
    description: "Real-time scent synthesis using our quantum-inspired molecular assembler"
  },
  {
    icon: Sparkles,
    title: "Perfect Precision",
    description: "99.9% accuracy in scent recreation, verified by expert perfumers"
  }
];

export function FeatureSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-black to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-purple-400">
            The Science Behind Brahmastra
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-8 rounded-xl bg-gray-900 border border-gray-800 transform transition-transform duration-300 group-hover:-translate-y-2">
                <feature.icon className="w-12 h-12 text-amber-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}