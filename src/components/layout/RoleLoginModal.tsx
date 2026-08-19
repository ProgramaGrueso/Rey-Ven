import React, { useState, useEffect } from 'react';
import { Lock, KeyRound, X, ShieldAlert, Utensils, Shield, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const RoleLoginModal: React.FC = () => {
  const { isPinModalOpen, targetRole, pinError, authenticatePin, closePinModal } = useAuth();
  const [pinInput, setPinInput] = useState('');

  useEffect(() => {
    setPinInput('');
  }, [isPinModalOpen, targetRole]);

  if (!isPinModalOpen || !targetRole) return null;

  const handleKeyPress = (num: string) => {
    if (pinInput.length < 4) {
      setPinInput(prev => prev + num);
    }
  };

  const handleDelete = () => {
    setPinInput(prev => prev.slice(0, -1));
  };

  const handleClear = () => {
    setPinInput('');
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (pinInput.length === 4) {
      const success = authenticatePin(pinInput);
      if (!success) {
        setPinInput('');
      }
    }
  };

  const quickFill = (code: string) => {
    setPinInput(code);
    setTimeout(() => {
      authenticatePin(code);
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm rounded-3xl bg-[#121212] border border-amber-500/30 p-6 sm:p-8 shadow-2xl shadow-amber-500/10">
        
        {/* Close Button */}
        <button
          onClick={closePinModal}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3">
            {targetRole === 'COCINA' ? (
              <Utensils className="w-7 h-7 text-emerald-400" />
            ) : (
              <Shield className="w-7 h-7 text-purple-400" />
            )}
          </div>
          <h3 className="font-serif text-xl font-bold text-slate-100">
            Acceso a {targetRole === 'COCINA' ? 'Cocina KDS' : 'Panel Administrador'}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Ingresa tu PIN de seguridad de 4 dígitos
          </p>
        </div>

        {/* PIN Display */}
        <div className="flex justify-center items-center space-x-3 mb-6">
          {[0, 1, 2, 3].map(index => (
            <div
              key={index}
              className={`w-12 h-14 rounded-xl border flex items-center justify-center text-xl font-bold transition-all ${
                pinInput.length > index
                  ? 'border-amber-400 bg-amber-500/15 text-amber-300 shadow-sm shadow-amber-500/20'
                  : 'border-white/10 bg-[#1A1A1A] text-transparent'
              }`}
            >
              {pinInput.length > index ? '●' : ''}
            </div>
          ))}
        </div>

        {/* Error message */}
        {pinError && (
          <div className="mb-4 p-3 rounded-xl bg-red-950/60 border border-red-500/30 flex items-start space-x-2 text-xs text-red-300">
            <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span>{pinError}</span>
          </div>
        )}

        {/* Numeric Keypad */}
        <div className="grid grid-cols-3 gap-2.5 mb-5">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(num => (
            <button
              key={num}
              onClick={() => handleKeyPress(num)}
              className="h-12 rounded-xl bg-[#1A1A1A] hover:bg-[#252525] border border-white/5 text-lg font-semibold text-slate-100 active:scale-95 transition-all flex items-center justify-center"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="h-12 rounded-xl bg-[#1A1A1A] hover:bg-red-950/40 text-xs font-semibold text-red-400 border border-white/5 active:scale-95 transition-all flex items-center justify-center"
          >
            C
          </button>
          <button
            onClick={() => handleKeyPress('0')}
            className="h-12 rounded-xl bg-[#1A1A1A] hover:bg-[#252525] border border-white/5 text-lg font-semibold text-slate-100 active:scale-95 transition-all flex items-center justify-center"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="h-12 rounded-xl bg-[#1A1A1A] hover:bg-[#252525] text-xs font-semibold text-slate-300 border border-white/5 active:scale-95 transition-all flex items-center justify-center"
          >
            ⌫
          </button>
        </div>

        {/* Submit Button */}
        <button
          onClick={() => handleSubmit()}
          disabled={pinInput.length !== 4}
          className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-all ${
            pinInput.length === 4
              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 cursor-pointer'
              : 'bg-white/5 text-slate-500 cursor-not-allowed border border-white/5'
          }`}
        >
          <span>Ingresar</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Quick Fill Testing Helper */}
        <div className="mt-4 pt-4 border-t border-white/5 text-center">
          <p className="text-[11px] text-slate-400 mb-2">💡 Modo Demo / Prueba Rápida:</p>
          <button
            onClick={() => quickFill(targetRole === 'COCINA' ? '1234' : '9999')}
            className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium hover:bg-amber-500/20 transition-all inline-flex items-center space-x-1.5"
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Auto-rellenar PIN ({targetRole === 'COCINA' ? '1234' : '9999'})</span>
          </button>
        </div>

      </div>
    </div>
  );
};
