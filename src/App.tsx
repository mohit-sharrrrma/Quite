import React from 'react';
import { motion } from 'motion/react';
import { slides } from './slides';

export default function App() {
  return (
    <div className="w-full bg-zinc-950 text-zinc-50 font-sans selection:bg-amber-500/30">
      {/* Scrolling Website View */}
      <div className="flex flex-col w-full">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          return (
            <section 
              key={slide.id} 
              id={slide.id}
              className="w-full min-h-screen relative border-b border-zinc-900 last:border-b-0"
            >
              <SlideComponent />
            </section>
          );
        })}
      </div>
    </div>
  );
}
