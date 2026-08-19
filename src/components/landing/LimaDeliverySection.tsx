import React from 'react';
import { Bike, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { LIMA_DELIVERY_ZONES } from '../../data/mockAssets';

interface LimaDeliverySectionProps {
  onOrderClick: () => void;
}

export const LimaDeliverySection: React.FC<LimaDeliverySectionProps> = ({ onOrderClick }) => {
  return (
    <section id="delivery-zones" className="py-24 bg-[#0D0D0D] border-b border-amber-500/20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Bike className="w-3.5 h-3.5" />
              <span>QUALITY THAT TRAVELS • LIMA COBERTURA REAL</span>
            </div>

            <h2 className="font-display text-5xl sm:text-7xl font-black text-slate-100 uppercase tracking-tight">
              DELIVERY REAL EN LIMA
            </h2>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm max-w-md font-light">
            Empacado térmico hermético de doble sellado para mantener el crujido broaster y la temperatura perfecta desde nuestra cocina hasta tu mesa.
          </p>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LIMA_DELIVERY_ZONES.map(zone => (
            <div
              key={zone.id}
              className="group relative rounded-3xl bg-[#141414] border border-amber-500/20 hover:border-amber-400 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 w-full overflow-hidden bg-[#1A1A1A]">
                <img
                  src={zone.image}
                  alt={zone.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/30 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/90 text-slate-950 font-bold text-[10px] uppercase shadow">
                    {zone.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-slate-100 flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>{zone.name}</span>
                  </h3>
                  
                  <div className="flex items-center space-x-1 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    <Clock className="w-3 h-3" />
                    <span>{zone.timeEstimate}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Despacho activo hoy</span>
                  <button
                    onClick={onOrderClick}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1 group/btn"
                  >
                    <span>Pedir a esta zona</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
