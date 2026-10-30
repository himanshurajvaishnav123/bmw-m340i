import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-bmw-darker border-t border-bmw-border text-center text-sm text-gray-500">
   <div className="flex justify-center mb-6">
        <div className="h-1 w-24 bg-bmw-m-gradient rounded-full"></div>
  </div>
      <p>© {new Date().getFullYear()} BMW AG. Powered by React, Tailwind CSS, & Three.js</p>
    </footer>
  );
}
