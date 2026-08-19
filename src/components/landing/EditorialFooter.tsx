import React from 'react';
import { Crown, MapPin, Phone, Instagram, Facebook, Heart } from 'lucide-react';

export const EditorialFooter: React.FC = () => {
  return (
    <footer className="border-t border-amber-500/20 bg-[#060606] text-slate-400 py-16 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Giant CRAV Style Repeated Brand Logo */}
        <div className="text-center overflow-hidden py-4 select-none">
          <h2 className="font-display text-7xl sm:text-9xl md:text-[13rem] font-black uppercase tracking-widest text-white/[0.04] leading-none whitespace-nowrap">
            REY VEN • LIMA • PERÚ
          </h2>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-6 border-t border-white/5">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400 flex items-center justify-center">
                <Crown className="w-5 h-5 text-amber-400" />
              </div>
              <span className="font-serif text-2xl font-bold text-slate-100 tracking-wider">REY VEN</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              La experiencia fast casual de mayor impacto gastronómico en Lima. Pollo Broaster, Hamburguesas Artesanales y Salchipapas Legendarias.
            </p>
          </div>

          {/* Location */}
          <div className="space-y-2 text-xs">
            <h4 className="font-serif text-sm font-bold text-slate-200 uppercase tracking-wider">Ubicación Central</h4>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Raul Villaran Pasquel 136, Lima 15021, Perú</span>
            </div>
            <div className="flex items-center space-x-2 pt-1">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>+51 987 654 321</span>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-2 text-xs">
            <h4 className="font-serif text-sm font-bold text-slate-200 uppercase tracking-wider">Horario de Cocina</h4>
            <p className="text-slate-300">Lunes a Domingo: 5:00 PM – 11:30 PM</p>
            <p className="text-amber-400 font-mono">En Local • Delivery • Para Llevar</p>
          </div>

          {/* Social & Signature */}
          <div className="space-y-4 text-xs">
            <h4 className="font-serif text-sm font-bold text-slate-200 uppercase tracking-wider">Redes Sociales</h4>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-amber-500/20 hover:text-amber-400 border border-white/10 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-amber-500/20 hover:text-amber-400 border border-white/10 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Visual Ingredient Icons Signature Bar (CRAV Style) */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="flex items-center space-x-4 text-xl">
            <span title="Pollo Broaster">🍗</span>
            <span title="Hamburguesa Artesanal">🍔</span>
            <span title="Salchipapa Nátiva">🍟</span>
            <span title="Ají Pollero Leyenda">🌶️</span>
            <span title="Chicha Morada">🍇</span>
          </div>

          <div className="text-[11px] text-slate-500 flex items-center space-x-1">
            <span>© 2026 REY VEN — Fast Casual & Broaster, Lima. Todos los derechos reservados.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
