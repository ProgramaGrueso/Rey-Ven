import React from 'react';
import { Sparkles, Check, Flame, Award, Clock } from 'lucide-react';
import { CREMAS_CASERAS } from '../../data/mockMenu';

export const IngredientsParallaxSection: React.FC = () => {
  return (
    <section id="nuestras-cremas" className="py-24 bg-[#0A0A0A] border-b border-amber-500/20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-amber-400 text-xs font-mono uppercase tracking-widest block mb-2">
              FOOD THAT FEELS GOOD • INSUMOS DE ORIGEN
            </span>
            <h2 className="font-display text-5xl sm:text-7xl font-black text-slate-100 uppercase tracking-tight">
              INGREDIENTES & PROCESO REAL
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md font-light">
            En REY VEN nos tomamos la comida rápida en serio. Cada ingrediente pasa por un estricto control de frescura antes de llegar a la plancha.
          </p>
        </div>

        {/* Stats & Quality Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-[#121212] border border-amber-500/20 space-y-4 hover:border-amber-400 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Clock className="w-6 h-6" />
            </div>
            <div className="font-display text-5xl font-black text-amber-400">24 HORAS</div>
            <h3 className="font-serif text-xl font-bold text-slate-100">Marinado Secreto</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pechugas y presas maceradas en reposo en hierbas andinas, ajíes peruanos y especies aromáticas para garantizar jugosidad total.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#121212] border border-amber-500/20 space-y-4 hover:border-amber-400 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <div className="font-display text-5xl font-black text-amber-400">100% FRESCO</div>
            <h3 className="font-serif text-xl font-bold text-slate-100">Sin Congelados</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Carne de hamburguesa 100% vacuna moldeada a mano y pechugas de pollo fresco entregadas diariamente al amanecer.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#121212] border border-amber-500/20 space-y-4 hover:border-amber-400 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Flame className="w-6 h-6" />
            </div>
            <div className="font-display text-5xl font-black text-amber-400">6 CREMAS</div>
            <h3 className="font-serif text-xl font-bold text-slate-100">Cremas Caseras</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Desde nuestro icónico Ají Pollero Leyenda hasta la Tártara de cebollín y el Rocoto Furia Red preparado diariamente.
            </p>
          </div>

        </div>

        {/* Cremas Showcase Bar */}
        <div className="p-8 rounded-3xl bg-[#141414] border border-amber-500/30 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-slate-100 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Nuestras 6 Cremas de Firma Casera</span>
            </h3>
            <span className="text-xs font-mono text-amber-400 font-bold uppercase">Hechas en Casa Hoy</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {CREMAS_CASERAS.map(crema => (
              <div key={crema.id} className="p-4 rounded-2xl bg-[#1B1B1B] border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-slate-100">
                  <span>{crema.name}</span>
                  {crema.badge && <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[9px] font-bold">{crema.badge}</span>}
                </div>
                <p className="text-[11px] text-slate-400">{crema.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
