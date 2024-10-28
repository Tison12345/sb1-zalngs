import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Impact } from './components/Impact';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Impact />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;