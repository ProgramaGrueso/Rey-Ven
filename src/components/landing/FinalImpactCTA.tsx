import React from 'react';
import { Crown, ArrowRight, Sparkles } from 'lucide-react';
import { HERO_PRODUCT_IMAGE } from '../../data/mockAssets';

interface FinalImpactCTAProps {
  onOrderClick: () => void;
}

export const FinalImpactCTA: React.FC<FinalImpactCTAProps> = ({ onOrderClick }) => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-amber-500/20 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-10">
        
        {/* Echo Typography Headline */}
        <div className="relative select-none">
          <h2 className="font-display text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight text-transparent stroke-amber-500/20 absolute -top-2 left-1/2 -translate-x-1/2 w-full opacity-40">
            VEN POR TU CORONA
          </h2>
          <h2 className="font-display text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight bg-gradient-to-r from-amber-100 via-amber-400 to-amber-500 bg-clip-text text-transparent relative">
            VEN POR TU CORONA
          </h2>
        </div>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
          Sabor verdadero, crujido absoluto y la verdadera experiencia fast casual en Lima. Elige tus cremas caseras y recíbelo en minutos.
        </p>

        {/* Feature Macro Image */}
        <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl shadow-amber-500/20 group">
          <img
            src={HERO_PRODUCT_IMAGE}
            alt="Corona de Sabor Rey Ven"
            className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Action Button */}
        <div className="pt-4 flex flex-col items-center space-y-3">
          <button
            onClick={onOrderClick}
            className="px-12 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-display text-2xl font-black tracking-wider shadow-2xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center space-x-3 group"
          >
            <span>PEDIR AHORA EN LA CARTA</span>
            <Crown className="w-6 h-6 text-slate-950 group-hover:rotate-12 transition-transform" />
          </button>

          <span className="text-xs text-slate-400 font-mono">
            Atención en Vivo: Lunes a Domingo 5:00 PM - 11:30 PM
          </span>
        </div>

      </div>
    </section>
  );
};
