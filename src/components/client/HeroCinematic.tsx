import React, { useState } from 'react';
import { Flame, Sparkles, Award, ArrowDown, ChevronRight, Star, HeartHandshake } from 'lucide-react';
import { MenuItem } from '../../types/menu';

interface HeroProps {
  onExploreClick: () => void;
  onSelectDish: (dish: MenuItem) => void;
  signatureDishes: MenuItem[];
}

export const HeroCinematic: React.FC<HeroProps> = ({ onExploreClick, onSelectDish, signatureDishes }) => {
  const [activeTab, setActiveTab] = useState(0);

  const activeDish = signatureDishes[activeTab] || signatureDishes[0];

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-amber-500/20 bg-[#0A0A0A]">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
              <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Gastronomía Fast Casual • Lima, Perú</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1]">
              Fuego, Crujido & <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent italic">
                Pasión Limeña
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-light">
              Donde el marinado andino de 24 horas se encuentra con el crujido broaster perfecto, carnes artesanales a las brasas y salchipapas de autor con cremas secreta.
            </p>

            {/* Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#141414] border border-amber-500/20 flex items-center space-x-2.5">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-slate-300">Crujido 24h Marinado</span>
              </div>
              <div className="p-3 rounded-xl bg-[#141414] border border-amber-500/20 flex items-center space-x-2.5">
                <Star className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-slate-300">Carne 100% Artesanal</span>
              </div>
              <div className="p-3 rounded-xl bg-[#141414] border border-amber-500/20 flex items-center space-x-2.5 col-span-2 sm:col-span-1">
                <HeartHandshake className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-slate-300">6 Cremas Caseras</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={onExploreClick}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-extrabold text-sm tracking-wide shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Explorar la Carta</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {activeDish && (
                <button
                  onClick={() => onSelectDish(activeDish)}
                  className="px-6 py-4 rounded-xl bg-[#181818] hover:bg-[#222222] border border-amber-500/30 text-slate-200 font-semibold text-sm transition-all flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Ordenar {activeDish.name.split(' ')[0]}</span>
                </button>
              )}
            </div>

          </div>

          {/* Right Showcase Card - Signature Dishes Slider */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Interactive Dish Showcase Card */}
            {activeDish && (
              <div className="relative rounded-3xl overflow-hidden bg-[#121212] border border-amber-500/30 shadow-2xl shadow-black group">
                
                {/* Image background with gradient overlay */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src={activeDish.image}
                    alt={activeDish.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-xs shadow-lg uppercase tracking-wider">
                      {activeDish.badge || 'Plato Insignia'}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      activeDish.isAvailable
                        ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300'
                        : 'bg-red-950/80 border border-red-500/40 text-red-300'
                    }`}>
                      {activeDish.isAvailable ? 'Disponible Hoy' : 'Agotado Temporal'}
                    </span>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-slate-100">
                        {activeDish.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {activeDish.description}
                      </p>
                    </div>
                    <div className="text-right pl-4">
                      <span className="text-2xl font-extrabold font-mono text-amber-400">
                        S/ {activeDish.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Tabs Selector for Signature Dishes */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <div className="flex space-x-2 overflow-x-auto py-1 max-w-full">
                      {signatureDishes.map((dish, idx) => (
                        <button
                          key={dish.id}
                          onClick={() => setActiveTab(idx)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                            activeTab === idx
                              ? 'bg-amber-500 text-slate-950 font-bold shadow'
                              : 'bg-white/5 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {dish.name.split(' ')[0]} {dish.name.includes('Tóxica') ? '🐍' : ''}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectDish(activeDish)}
                      disabled={!activeDish.isAvailable}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                        activeDish.isAvailable
                          ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                          : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      }`}
                    >
                      {activeDish.isAvailable ? 'Personalizar' : 'Agotado'}
                    </button>
                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={onExploreClick}
            className="flex flex-col items-center space-y-2 text-slate-400 hover:text-amber-400 transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase font-semibold">Ver Carta Completa</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
};
