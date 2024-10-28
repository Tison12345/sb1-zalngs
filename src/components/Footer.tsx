import React from 'react';
import { Sprout } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sprout className="h-6 w-6 text-green-400" />
              <span className="text-xl font-bold">Urban Food Prints</span>
            </div>
            <p className="text-gray-400">
              Transforming urban spaces into sustainable food gardens.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#impact" className="hover:text-white transition">Impact</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
              <li><a href="#guides" className="hover:text-white transition">Guides</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#support" className="hover:text-white transition">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#twitter" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#instagram" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#linkedin" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#facebook" className="hover:text-white transition">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Urban Food Prints. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}