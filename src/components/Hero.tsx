import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Navbar } from './Navbar';

export function Hero() {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80"
          alt="Urban garden" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-[calc(100vh-5rem)] flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Growing Food in Urban Spaces
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Transform your urban space into a sustainable food garden. Join the movement towards local, fresh, and environmentally conscious food production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition flex items-center justify-center">
              Start Growing <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}