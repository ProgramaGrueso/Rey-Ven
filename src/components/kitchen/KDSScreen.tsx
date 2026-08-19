import React, { useState } from 'react';
import { Utensils, Volume2, VolumeX, Clock, CheckCircle2, Flame, RefreshCw, Layers } from 'lucide-react';
import { useOrders } from '../../context/OrderContext';
import { OrderCardKDS } from './OrderCardKDS';
import { OrderStatus } from '../../types/order';

export const KDSScreen: React.FC = () => {
  const { orders, soundEnabled, setSoundEnabled } = useOrders();
  const [activeTab, setActiveTab] = useState<OrderStatus | 'TODOS'>('TODOS');

  const pendingOrders = orders.filter(o => o.status === 'PENDIENTE');
  const prepOrders = orders.filter(o => o.status === 'EN_PREPARACION');
  const readyOrders = orders.filter(o => o.status === 'LISTO');
  const deliveredOrders = orders.filter(o => o.status === 'ENTREGADO');

  const filteredOrders = orders.filter(o => {
    if (activeTab === 'TODOS') return o.status !== 'ENTREGADO';
    return o.status === activeTab;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 min-h-[85vh]">
      
      {/* Header Bar */}
      <div className="p-6 rounded-3xl bg-[#121212] border border-emerald-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <Utensils className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="font-serif text-2xl font-bold text-slate-100">Pantalla de Cocina (KDS)</h2>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase">
                En Vivo
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Gestión reactiva de comandas, tiempos de cocción y avance de pedidos.
            </p>
          </div>
        </div>

        {/* Action Controls & Sound Toggle */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 border ${
              soundEnabled
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                : 'bg-slate-800 border-white/10 text-slate-400'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
            <span>{soundEnabled ? 'Sonido Activado' : 'Sonido Silenciado'}</span>
          </button>
        </div>
      </div>

      {/* Metrics Summary Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          onClick={() => setActiveTab('PENDIENTE')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            activeTab === 'PENDIENTE'
              ? 'bg-amber-500/20 border-amber-400 shadow-lg shadow-amber-500/10'
              : 'bg-[#121212] border-amber-500/20 hover:border-amber-500/40'
          }`}
        >
          <div className="flex items-center justify-between text-amber-400 text-xs font-semibold">
            <span>Pendientes</span>
            <Clock className="w-4 h-4" />
          </div>
          <div className="font-mono text-3xl font-black text-slate-100 mt-2">
            {pendingOrders.length}
          </div>
          <p className="text-[10px] text-slate-400 mt-1">Por ingresar a sartén</p>
        </div>

        <div
          onClick={() => setActiveTab('EN_PREPARACION')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            activeTab === 'EN_PREPARACION'
              ? 'bg-emerald-500/20 border-emerald-400 shadow-lg shadow-emerald-500/10'
              : 'bg-[#121212] border-emerald-500/20 hover:border-emerald-500/40'
          }`}
        >
          <div className="flex items-center justify-between text-emerald-400 text-xs font-semibold">
            <span>En Preparación</span>
            <Flame className="w-4 h-4" />
          </div>
          <div className="font-mono text-3xl font-black text-slate-100 mt-2">
            {prepOrders.length}
          </div>
          <p className="text-[10px] text-slate-400 mt-1">En sartén / plancha</p>
        </div>

        <div
          onClick={() => setActiveTab('LISTO')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            activeTab === 'LISTO'
              ? 'bg-blue-500/20 border-blue-400 shadow-lg shadow-blue-500/10'
              : 'bg-[#121212] border-blue-500/20 hover:border-blue-500/40'
          }`}
        >
          <div className="flex items-center justify-between text-blue-400 text-xs font-semibold">
            <span>Listos para Servir</span>
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="font-mono text-3xl font-black text-slate-100 mt-2">
            {readyOrders.length}
          </div>
          <p className="text-[10px] text-slate-400 mt-1">Esperando despacho</p>
        </div>

        <div
          onClick={() => setActiveTab('ENTREGADO')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            activeTab === 'ENTREGADO'
              ? 'bg-purple-500/20 border-purple-400 shadow-lg shadow-purple-500/10'
              : 'bg-[#121212] border-white/10 hover:border-white/20'
          }`}
        >
          <div className="flex items-center justify-between text-purple-400 text-xs font-semibold">
            <span>Entregados Hoy</span>
            <Layers className="w-4 h-4" />
          </div>
          <div className="font-mono text-3xl font-black text-slate-100 mt-2">
            {deliveredOrders.length}
          </div>
          <p className="text-[10px] text-slate-400 mt-1">Historial del turno</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 border-b border-white/10 pb-4 overflow-x-auto">
        <button
          onClick={() => setActiveTab('TODOS')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'TODOS'
              ? 'bg-slate-100 text-slate-950 font-bold'
              : 'bg-[#141414] text-slate-400 hover:text-white'
          }`}
        >
          Activos en Vivo ({pendingOrders.length + prepOrders.length + readyOrders.length})
        </button>

        <button
          onClick={() => setActiveTab('PENDIENTE')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'PENDIENTE'
              ? 'bg-amber-500 text-slate-950'
              : 'bg-[#141414] text-slate-400 hover:text-white'
          }`}
        >
          Pendientes ({pendingOrders.length})
        </button>

        <button
          onClick={() => setActiveTab('EN_PREPARACION')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'EN_PREPARACION'
              ? 'bg-emerald-500 text-slate-950'
              : 'bg-[#141414] text-slate-400 hover:text-white'
          }`}
        >
          En Preparación ({prepOrders.length})
        </button>

        <button
          onClick={() => setActiveTab('LISTO')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'LISTO'
              ? 'bg-blue-500 text-slate-950'
              : 'bg-[#141414] text-slate-400 hover:text-white'
          }`}
        >
          Listos ({readyOrders.length})
        </button>

        <button
          onClick={() => setActiveTab('ENTREGADO')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'ENTREGADO'
              ? 'bg-purple-500 text-slate-950'
              : 'bg-[#141414] text-slate-400 hover:text-white'
          }`}
        >
          Historial Entregados ({deliveredOrders.length})
        </button>
      </div>

      {/* Orders Grid Display */}
      {filteredOrders.length === 0 ? (
        <div className="p-16 rounded-3xl bg-[#121212] border border-white/5 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="font-serif text-xl font-bold text-slate-300">No hay comandas en este estado</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Las nuevas órdenes realizadas por clientes aparecerán aquí automáticamente en tiempo real.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrders.map(order => (
            <OrderCardKDS key={order.id} order={order} />
          ))}
        </div>
      )}

    </div>
  );
};
