import React, { useState } from 'react';
import { Search, CheckCircle2, XCircle, Edit2, Check, Save } from 'lucide-react';
import { useOrders } from '../../context/OrderContext';

export const StockManagerTable: React.FC = () => {
  const { menuItems, toggleItemAvailability, updateItemPrice } = useOrders();
  const [search, setSearch] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingPrice, setEditingPrice] = useState<string>('');

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.categoryId.toLowerCase().includes(search.toLowerCase())
  );

  const startEditPrice = (id: string, currentPrice: number) => {
    setEditingId(id);
    setEditingPrice(currentPrice.toString());
  };

  const savePrice = (id: string) => {
    const num = parseFloat(editingPrice);
    if (!isNaN(num) && num > 0) {
      updateItemPrice(id, num);
    }
    setEditingId(null);
  };

  return (
    <div className="rounded-3xl bg-[#121212] border border-amber-500/20 overflow-hidden shadow-xl space-y-4">
      
      {/* Table Controls */}
      <div className="p-6 bg-[#161616] border-b border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl font-bold text-slate-100">Gestor de Stock & Carta en Vivo</h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Activa o desactiva platos agotados en tiempo real. Los cambios se reflejan inmediatamente en la carta del cliente.
          </p>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Filtrar plato o categoría..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-xl bg-[#1D1D1D] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-[#1A1A1A] text-slate-400 uppercase font-bold text-[10px] tracking-wider border-b border-white/5">
            <tr>
              <th className="px-6 py-3.5">Plato</th>
              <th className="px-6 py-3.5">Categoría</th>
              <th className="px-6 py-3.5">Precio (PEN)</th>
              <th className="px-6 py-3.5">Estado en Carta</th>
              <th className="px-6 py-3.5 text-right">Acción Stock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredItems.map(item => (
              <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                
                {/* Dish Name & Thumbnail */}
                <td className="px-6 py-4 flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-lg object-cover shrink-0"
                  />
                  <div>
                    <span className="font-semibold text-slate-100">{item.name}</span>
                    {item.isSignature && (
                      <span className="ml-2 px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[9px] font-bold">
                        Insignia
                      </span>
                    )}
                  </div>
                </td>

                {/* Category */}
                <td className="px-6 py-4 uppercase font-mono text-[11px] text-slate-400">
                  {item.categoryId}
                </td>

                {/* Price Edit */}
                <td className="px-6 py-4 font-mono">
                  {editingId === item.id ? (
                    <div className="flex items-center space-x-1.5">
                      <span className="text-amber-400 font-bold">S/</span>
                      <input
                        type="number"
                        step="0.5"
                        value={editingPrice}
                        onChange={e => setEditingPrice(e.target.value)}
                        className="w-20 px-2 py-1 rounded bg-[#252525] border border-amber-400 text-xs font-bold text-slate-100 focus:outline-none"
                      />
                      <button
                        onClick={() => savePrice(item.id)}
                        className="p-1 rounded bg-amber-500 text-slate-950 hover:bg-amber-400"
                      >
                        <Save className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 group">
                      <span className="font-bold text-amber-400">S/ {item.price.toFixed(2)}</span>
                      <button
                        onClick={() => startEditPrice(item.id, item.price)}
                        className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-white transition-opacity p-1"
                        title="Editar Precio"
                      >
                        <Edit2 className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </td>

                {/* Live Status Badge */}
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold inline-flex items-center space-x-1.5 ${
                    item.isAvailable
                      ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300'
                      : 'bg-red-950/80 border border-red-500/40 text-red-300'
                  }`}>
                    {item.isAvailable ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <XCircle className="w-3.5 h-3.5 text-red-400" />}
                    <span>{item.isAvailable ? 'Disponible' : 'Agotado (Bloqueado)'}</span>
                  </span>
                </td>

                {/* Toggle Button */}
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => toggleItemAvailability(item.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                      item.isAvailable
                        ? 'bg-red-950/40 border-red-500/30 text-red-300 hover:bg-red-900/60'
                        : 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60'
                    }`}
                  >
                    {item.isAvailable ? 'Marcar Agotado' : 'Reactivar Stock'}
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};
