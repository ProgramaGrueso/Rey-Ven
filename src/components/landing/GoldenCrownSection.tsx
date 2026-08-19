import React from 'react';
import { Crown, Sparkles, ShieldCheck, Flame, ArrowRight } from 'lucide-react';
import { ATMOSPHERE_IMAGES } from '../../data/mockAssets';

interface GoldenCrownSectionProps {
  onOrderClick: () => void;
}

export const GoldenCrownSection: React.FC<GoldenCrownSectionProps> = ({ onOrderClick }) => {
  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-amber-500/20 relative overflow-hidden">
      
      {/* Ambient background blur */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Filosofía REY VEN</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl font-black text-slate-100 uppercase tracking-tight leading-none">
            CORONA DORADA: <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent italic">
              JUICY, CRISPY & FULLY LOADED
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-light">
            No creemos en la comida rápida genérica. Cada presa de pollo se marina individualmente durante 24 horas en una mezcla maestra de hierbas andinas, ajo criollo y pimienta negra de molino antes de ingresar al freidor de alta presión.
          </p>
        </div>

        {/* Atmosphere Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="relative rounded-3xl overflow-hidden bg-[#141414] border border-amber-500/20 group h-80">
            <img
              src={ATMOSPHERE_IMAGES.crispyDetail}
              alt="Crocancia Broaster"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block">Técnica Broaster</span>
              <h3 className="font-serif text-xl font-bold text-slate-100 mt-0.5">Rebozado Crujiente 24h</h3>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-[#141414] border border-amber-500/20 group h-80">
            <img
              src={ATMOSPHERE_IMAGES.kitchenFlame}
              alt="Fuego y brasas"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block">Parrilla Artesanal</span>
              <h3 className="font-serif text-xl font-bold text-slate-100 mt-0.5">Carne a las Brasas</h3>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-[#141414] border border-amber-500/20 group h-80">
            <img
              src={ATMOSPHERE_IMAGES.tableExperience}
              alt="Experiencia Salchipapas"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block">Sabor Peruano</span>
              <h3 className="font-serif text-xl font-bold text-slate-100 mt-0.5">Salchipapas de Autor</h3>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="text-center pt-4">
          <button
            onClick={onOrderClick}
            className="px-8 py-4 rounded-xl bg-[#181818] hover:bg-[#222222] border border-amber-500/40 text-amber-400 font-bold text-sm tracking-wide transition-all inline-flex items-center space-x-2 group"
          >
            <span>DESCUBRIR CARTA Y PEDIR</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
