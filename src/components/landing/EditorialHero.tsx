import React from 'react';
import { Crown, ArrowRight, Flame, Sparkles, ChevronDown } from 'lucide-react';
import { HERO_PRODUCT_IMAGE, FLOATING_INGREDIENTS } from '../../data/mockAssets';

interface EditorialHeroProps {
  onOrderClick: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onOrderClick }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0A0A0A] border-b border-amber-500/20 pt-8 pb-12">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Ingredient Elements (CRAV Parallax style) */}
      {FLOATING_INGREDIENTS.map(ing => (
        <div
          key={ing.id}
          style={{
            ...ing.initialPos,
            transform: `rotate(${ing.rotation}deg) scale(${ing.scale})`,
          }}
          className="absolute z-10 hidden md:block pointer-events-none transition-transform duration-1000 hover:scale-125"
        >
          <div className="relative group">
            <img
              src={ing.image}
              alt={ing.name}
              className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-2xl border border-amber-500/30 shadow-2xl shadow-black/80 backdrop-blur-sm opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded bg-black/80 border border-amber-500/30 text-[9px] font-mono text-amber-300">
              {ing.name}
            </div>
          </div>
        </div>
      ))}

      {/* Hero Header Microcopy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between z-20">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest">
          <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Est. 1998 — Lima, Perú</span>
        </div>

        <div className="text-right text-[11px] text-slate-400 font-mono tracking-widest uppercase hidden sm:block">
          Fast Casual & Broaster Haute Level
        </div>
      </div>

      {/* Main Giant CRAV Typography & Product Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 my-auto text-center relative py-8">
        
        {/* CRAV Style Echo Typography Line 1 */}
        <div className="relative select-none">
          {/* Echo background text offset */}
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter uppercase leading-none text-transparent stroke-amber-500/20 absolute -top-2 left-1/2 -translate-x-1/2 w-full opacity-40">
            EL BROASTER REY
          </h1>

          {/* Main solid typography */}
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter uppercase leading-none bg-gradient-to-b from-amber-100 via-amber-400 to-amber-600 bg-clip-text text-transparent relative drop-shadow-2xl">
            EL BROASTER REY
          </h1>
        </div>

        {/* CRAV Style Echo Typography Line 2 */}
        <div className="relative select-none -mt-3 sm:-mt-6 md:-mt-10">
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black tracking-tighter uppercase leading-none text-transparent stroke-white/10 absolute -top-1 left-1/2 -translate-x-1/2 w-full opacity-30">
            EL CRUJIDO REAL
          </h2>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black tracking-tighter uppercase leading-none text-slate-100/90 relative">
            EL CRUJIDO REAL
          </h2>
        </div>

        {/* Central High Impact Product Visual */}
        <div className="relative max-w-lg mx-auto -mt-8 sm:-mt-14 z-30 group">
          <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl shadow-amber-500/20 bg-[#121212] transition-transform duration-500 group-hover:scale-105">
            <img
              src={HERO_PRODUCT_IMAGE}
              alt="Hamburguesa Brutal Rey Ven"
              className="w-full h-64 sm:h-80 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-left">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase">
                  Plato Insignia
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100 mt-1">
                  Hamburguesa "La Tóxica" & Brutal
                </h3>
              </div>
              <div className="text-right">
                <span className="font-mono text-xl font-black text-amber-400">S/ 22.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button & Subtext */}
        <div className="mt-8 flex flex-col items-center space-y-4 z-30 relative">
          <button
            onClick={onOrderClick}
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-display text-2xl font-black tracking-wider shadow-2xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all flex items-center space-x-3 group"
          >
            <span>PEDIR AHORA</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-xs text-slate-400 font-sans max-w-sm text-center">
            Envío directo a WhatsApp y recepción reactiva en nuestra Cocina KDS en vivo.
          </p>
        </div>

      </div>

      {/* Bottom Scroll Cue */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center z-20">
        <button
          onClick={onOrderClick}
          className="flex flex-col items-center space-y-1 text-slate-400 hover:text-amber-400 transition-colors"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest">Desliza para ver la experiencia</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

    </section>
  );
};
