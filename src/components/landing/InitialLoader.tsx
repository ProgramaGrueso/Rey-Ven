import React, { useEffect, useState } from 'react';
import { Crown, Sparkles } from 'lucide-react';

export const InitialLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1100);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col items-center justify-center transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center space-y-6 text-center">
        {/* Glowing Crown Monochromatic Logo */}
        <div className="relative flex items-center justify-center w-24 h-24 rounded-3xl bg-amber-500/10 border border-amber-500/40 p-4 shadow-2xl shadow-amber-500/20 animate-pulse">
          <Crown className="w-14 h-14 text-amber-400 stroke-[1.5]" />
        </div>

        {/* Brand Display Title */}
        <h2 className="font-display text-5xl sm:text-6xl font-black tracking-widest bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
          REY VEN
        </h2>

        {/* Loader Subtext */}
        <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-amber-400/80 uppercase">
          <Sparkles className="w-3.5 h-3.5 animate-spin" />
          <span>PREPARANDO LA COCINA REAL...</span>
        </div>
      </div>
    </div>
  );
};
