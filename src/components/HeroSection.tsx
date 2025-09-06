import React from 'react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          I'm a passionate developer building amazing web experiences
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
          Get in Touch
        </button>
      </div>
    </section>
  );
};
