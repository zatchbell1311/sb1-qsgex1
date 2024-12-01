import React from 'react';
import { Navbar } from './components/Navigation/Navbar';
import { Hero } from './components/Hero/Hero';
import { ProductShowcase } from './components/Product/ProductShowcase';
import { FeatureSection } from './components/Features/FeatureSection';
import { Footer } from './components/Footer/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <Hero />
        <ProductShowcase />
        <FeatureSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;