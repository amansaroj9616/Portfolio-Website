import React from 'react';

const PlaceholderSection = ({ title }: { title: string }) => (
  <section className="min-h-screen flex items-center justify-center bg-slate-800 text-white">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-xl text-slate-300">This section is coming soon!</p>
    </div>
  </section>
);

export default PlaceholderSection;
