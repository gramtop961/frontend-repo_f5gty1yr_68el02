import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import AppShowcase from './components/AppShowcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0d12] antialiased">
      <Hero />
      <Features />
      <AppShowcase />
      <CTA />
      <footer className="w-full bg-[#05070b] py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} PulseFlow — Built for athletes, creators, and anyone chasing momentum.
      </footer>
    </div>
  );
}

export default App;
