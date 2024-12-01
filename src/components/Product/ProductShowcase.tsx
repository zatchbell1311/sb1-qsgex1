import React from 'react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: "Capture",
    description: "Advanced sensors analyze molecular composition in real-time",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Digitize",
    description: "AI-powered technology converts scents into digital signatures",
    image: "https://images.unsplash.com/photo-1583445095369-9c651e7e5d34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Recreate",
    description: "Precise molecular reconstruction for perfect scent replication",
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  }
];

export function ProductShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <FeatureRow key={feature.title} {...feature} reversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}

function FeatureRow({ title, description, image, reversed }: {
  title: string;
  description: string;
  image: string;
  reversed: boolean;
}) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 py-24`}
    >
      <div 
        className={`w-full lg:w-1/2 transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">{title}</h2>
        <p className="text-xl text-amber-100/80">{description}</p>
      </div>
      
      <div 
        className={`w-full lg:w-1/2 transform transition-all duration-1000 delay-300 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="relative aspect-square rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img 
            src={image} 
            alt={title}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </div>
  );
}