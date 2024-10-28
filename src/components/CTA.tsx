import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="bg-green-500 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Your Urban Garden?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join our community of urban farmers and start growing your own food today.
        </p>
        <button className="bg-white text-green-500 px-8 py-3 rounded-full hover:bg-gray-100 transition inline-flex items-center">
          Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
}