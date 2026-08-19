import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Check, Flame, Sparkles, ChefHat } from 'lucide-react';
import { MenuItem, DishExtra } from '../../types/menu';
import { CREMAS_CASERAS, EXTRAS_DISPONIBLES } from '../../data/mockMenu';
import { useCart } from '../../context/CartContext';

interface CustomizerModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const DishCustomizerModal: React.FC<CustomizerModalProps> = ({ dish, onClose }) => {
  const { addToCart } = useCart();
  const [selectedCremas, setSelectedCremas] = useState<string[]>([]);
  const [selectedExtras, setSelectedExtras] = useState<DishExtra[]>([]);
  const [instructions, setInstructions] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (dish) {
      // Default select popular cremas (Ají Pollero & Tártara)
      setSelectedCremas(['Ají Pollero Leyenda', 'Tártara de la Casa']);
      setSelectedExtras([]);
      setInstructions('');
      setQuantity(1);
    }
  }, [dish]);

  if (!dish) return null;

  const toggleCrema = (cremaName: string) => {
    setSelectedCremas(prev =>
      prev.includes(cremaName)
        ? prev.filter(c => c !== cremaName)
        : [...prev, cremaName]
    );
  };

  const toggleExtra = (extra: DishExtra) => {
    setSelectedExtras(prev =>
      prev.some(e => e.id === extra.id)
        ? prev.filter(e => e.id !== extra.id)
        : [...prev, extra]
    );
  };

  const extrasPriceTotal = selectedExtras.reduce((acc, curr) => acc + curr.price, 0);
  const unitPrice = dish.price + extrasPriceTotal;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addToCart(dish, selectedCremas, selectedExtras, instructions, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-xl my-8 rounded-3xl bg-[#121212] border border-amber-500/30 shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header Image */}
        <div className="relative h-48 sm:h-56 w-full shrink-0">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black/80 backdrop-blur-sm transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[10px] font-bold tracking-widest uppercase border border-amber-500/30">
              Personalizador Rey Ven
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
              {dish.name}
            </h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar flex-1">
          
          {/* Included Defaults */}
          {dish.includesDefault && (
            <div className="p-3.5 rounded-xl bg-[#181818] border border-amber-500/20 text-xs text-slate-300 flex items-center space-x-2">
              <ChefHat className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>Incluye de la casa:</strong> {dish.includesDefault}</span>
            </div>
          )}

          {/* Cremas Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-base font-bold text-slate-100 flex items-center space-x-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Selecciona tus Cremas Caseras</span>
              </h3>
              <span className="text-xs text-amber-400/80 font-mono">
                {selectedCremas.length} seleccionadas
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Hechas a diario con insumos frescos. Marca las que deseas en tu plato:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {CREMAS_CASERAS.map(crema => {
                const isSelected = selectedCremas.includes(crema.name);
                return (
                  <button
                    key={crema.id}
                    onClick={() => toggleCrema(crema.name)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-400 text-slate-100 shadow-md shadow-amber-500/10'
                        : 'bg-[#181818] border-white/5 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-xs font-bold">{crema.name}</span>
                        {crema.badge && (
                          <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-amber-500/20 text-amber-300">
                            {crema.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                        {crema.description}
                      </p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ml-2 ${
                        isSelected
                          ? 'bg-amber-500 border-amber-400 text-slate-950'
                          : 'border-slate-600 bg-black/20'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Extras Selection */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <h3 className="font-serif text-base font-bold text-slate-100 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Adicionales & Coronaciones (Opcional)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {EXTRAS_DISPONIBLES.map(extra => {
                const isSelected = selectedExtras.some(e => e.id === extra.id);
                return (
                  <button
                    key={extra.id}
                    onClick={() => toggleExtra(extra)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-400 text-slate-100'
                        : 'bg-[#181818] border-white/5 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold">{extra.name}</div>
                      <div className="text-xs font-mono text-amber-400 mt-0.5">
                        + S/ {extra.price.toFixed(2)}
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ml-2 ${
                        isSelected
                          ? 'bg-amber-500 border-amber-400 text-slate-950'
                          : 'border-slate-600 bg-black/20'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Special Instructions */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <label className="block text-xs font-bold text-slate-200">
              Instrucciones de Preparación para Cocina
            </label>
            <textarea
              value={instructions}
              onChange={e => setInstructions(e.target.value)}
              placeholder="Ej: Papas bien doradas, ensalada sin mayonesa..."
              rows={2}
              className="w-full p-3 rounded-xl bg-[#181818] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-amber-400 transition-colors placeholder:text-slate-500 resize-none"
            />
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-6 bg-[#161616] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          
          {/* Quantity Counter */}
          <div className="flex items-center space-x-3 bg-[#0A0A0A] p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-9 h-9 rounded-lg bg-[#1F1F1F] text-slate-300 hover:text-white hover:bg-[#2A2A2A] flex items-center justify-center transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-mono font-bold text-slate-100 text-base">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-9 rounded-lg bg-[#1F1F1F] text-slate-300 hover:text-white hover:bg-[#2A2A2A] flex items-center justify-center transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart Submit */}
          <button
            onClick={handleAddToCart}
            className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-between"
          >
            <span>Agregar al Carrito</span>
            <span className="font-mono text-base font-black">
              S/ {totalPrice.toFixed(2)}
            </span>
          </button>

        </div>

      </div>
    </div>
  );
};
