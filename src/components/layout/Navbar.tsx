import React, { useState } from 'react';
import { Crown, ShoppingBag, Utensils, Shield, ChevronDown, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { Role } from '../../types/user';

export const Navbar: React.FC = () => {
  const { role, switchRoleRequest } = useAuth();
  const { itemCount, totalAmount, openCart } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleRoleSelect = (targetRole: Role) => {
    switchRoleRequest(targetRole);
    setIsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-500/20 bg-[#0A0A0A]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => switchRoleRequest('CLIENTE')}>
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-[1px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0A0A0A] rounded-[11px] flex items-center justify-center">
              <Crown className="w-6 h-6 text-amber-400 animate-pulse-slow" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-serif text-2xl font-extrabold tracking-wider bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow">
                REY VEN
              </h1>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 tracking-widest uppercase">
                Lima • PERÚ
              </span>
            </div>
            <p className="text-[10px] tracking-widest text-slate-400 font-sans uppercase">
              Broaster & Salchipapería
            </p>
          </div>
        </div>

        {/* Center Live Status Indicator (Hidden on small mobile) */}
        <div className="hidden lg:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>Cocina Abierta • Pedidos en Vivo</span>
        </div>

        {/* Controls Right Section */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          
          {/* Role Switcher Combo Box */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-[#141414] border border-amber-500/30 text-xs font-medium text-slate-200 hover:border-amber-400 hover:bg-[#1C1C1C] transition-all shadow-md"
            >
              {role === 'CLIENTE' && <ShoppingBag className="w-4 h-4 text-amber-400" />}
              {role === 'COCINA' && <Utensils className="w-4 h-4 text-emerald-400" />}
              {role === 'ADMIN' && <Shield className="w-4 h-4 text-purple-400" />}
              <span className="font-semibold text-slate-200">
                {role === 'CLIENTE' ? 'Vista Cliente' : role === 'COCINA' ? 'Cocina KDS' : 'Admin'}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#121212] border border-amber-500/30 shadow-2xl shadow-black/80 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-2 border-b border-white/5">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Entorno de Trabajo</p>
                </div>

                <button
                  onClick={() => handleRoleSelect('CLIENTE')}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left transition-colors ${
                    role === 'CLIENTE' ? 'bg-amber-500/15 text-amber-300 font-semibold' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <ShoppingBag className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="font-medium">Carta Digital Cliente</div>
                      <div className="text-[10px] text-slate-400">Hacer pedidos & WhatsApp</div>
                    </div>
                  </div>
                  {role === 'CLIENTE' && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                </button>

                <button
                  onClick={() => handleRoleSelect('COCINA')}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left transition-colors ${
                    role === 'COCINA' ? 'bg-emerald-500/15 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Utensils className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="font-medium">Cocina KDS (Comandas)</div>
                      <div className="text-[10px] text-slate-400">PIN: 1234</div>
                    </div>
                  </div>
                  {role === 'COCINA' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </button>

                <button
                  onClick={() => handleRoleSelect('ADMIN')}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left transition-colors ${
                    role === 'ADMIN' ? 'bg-purple-500/15 text-purple-300 font-semibold' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="font-medium">Panel Administrador</div>
                      <div className="text-[10px] text-slate-400">PIN: 9999 • Ventas & Stock</div>
                    </div>
                  </div>
                  {role === 'ADMIN' && <CheckCircle2 className="w-4 h-4 text-purple-400" />}
                </button>
              </div>
            )}
          </div>

          {/* Cart Button (Only on Cliente role) */}
          {role === 'CLIENTE' && (
            <button
              onClick={openCart}
              className="relative flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/25 active:scale-95 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Carrito</span>
              {itemCount > 0 && (
                <>
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-950 text-amber-400 text-[10px] font-extrabold ml-1">
                    {itemCount}
                  </span>
                  <span className="hidden md:inline-block ml-1 border-l border-slate-950/30 pl-2 font-mono">
                    S/ {totalAmount.toFixed(2)}
                  </span>
                </>
              )}
            </button>
          )}

        </div>

      </div>
    </header>
  );
};
