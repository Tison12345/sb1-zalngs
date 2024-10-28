import React from 'react';
import { Sprout } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="relative z-10 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sprout className="h-8 w-8 text-green-400" />
          <span className="text-white text-2xl font-bold">Urban Food Prints</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-green-400 transition">About</a>
          <a href="#services" className="text-white hover:text-green-400 transition">Services</a>
          <a href="#impact" className="text-white hover:text-green-400 transition">Impact</a>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}