import React from 'react';
import { Leaf, Droplets, Sun } from 'lucide-react';

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <Leaf className="h-12 w-12 text-green-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Sustainable Growing</h3>
            <p className="text-gray-600">
              Learn eco-friendly growing techniques perfect for urban environments.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <Droplets className="h-12 w-12 text-blue-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Water Management</h3>
            <p className="text-gray-600">
              Optimize water usage with smart irrigation and recycling systems.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <Sun className="h-12 w-12 text-yellow-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Solar Integration</h3>
            <p className="text-gray-600">
              Harness solar energy to power your urban farming projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}