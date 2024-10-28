import React from 'react';

export function Impact() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-gray-600 mb-8">
              We've helped transform over 1,000 urban spaces into productive food gardens, reducing carbon footprint and providing fresh food access to communities.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-green-500">1,000+</p>
                <p className="text-gray-600">Gardens Created</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-500">50,000+</p>
                <p className="text-gray-600">Pounds of Food</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-500">5,000+</p>
                <p className="text-gray-600">People Impacted</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-500">30%</p>
                <p className="text-gray-600">Carbon Reduced</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80"
              alt="Urban garden impact" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}