import React from 'react';
import { Shield, TrendingUp, DollarSign, ShoppingBag, Clock, ArrowUpRight, PieChart, Users, CheckCircle2 } from 'lucide-react';
import { useOrders } from '../../context/OrderContext';
import { StockManagerTable } from './StockManagerTable';

export const AdminDashboard: React.FC = () => {
  const { orders, totalSalesPen, activeOrdersCount, completedOrdersCount, averageTicketPen } = useOrders();

  // Payment methods breakdown
  const paymentStats = orders.reduce((acc, order) => {
    acc[order.paymentMethod] = (acc[order.paymentMethod] || 0) + order.totalAmount;
    return acc;
  }, {} as Record<string, number>);

  // Modality stats
  const deliveryCount = orders.filter(o => o.serviceType === 'DELIVERY').length;
  const localCount = orders.filter(o => o.serviceType === 'EN_LOCAL').length;
  const takeawayCount = orders.filter(o => o.serviceType === 'PARA_LLEVAR').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 min-h-[85vh]">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-[#121212] border border-purple-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
            <Shield className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="font-serif text-2xl font-bold text-slate-100">Panel de Administración REY VEN</h2>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase">
                Administrador
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Control de métricas financieras, volumen de ventas y gestión instantánea de inventario.
            </p>
          </div>
        </div>

        <div className="text-right font-mono">
          <span className="text-[10px] text-slate-400 block uppercase font-sans">Turno Actual • Lima</span>
          <span className="text-xs font-bold text-amber-400">
            {new Date().toLocaleDateString('es-PE', { weekday: 'long', day: 'numeric', month: 'long' })}
          </span>
        </div>
      </div>

      {/* Main KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Total Sales */}
        <div className="p-6 rounded-3xl bg-[#121212] border border-amber-500/20 shadow-xl relative overflow-hidden group">
          <div className="flex items-center justify-between text-amber-400 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Ventas del Turno</span>
            <DollarSign className="w-5 h-5" />
          </div>
          <div className="font-mono text-3xl font-black text-slate-100">
            S/ {totalSalesPen.toFixed(2)}
          </div>
          <div className="flex items-center space-x-1 text-emerald-400 text-xs mt-2 font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+18.4% vs turno anterior</span>
          </div>
        </div>

        {/* Average Ticket */}
        <div className="p-6 rounded-3xl bg-[#121212] border border-white/10 shadow-xl">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Ticket Promedio</span>
            <PieChart className="w-5 h-5 text-amber-400" />
          </div>
          <div className="font-mono text-3xl font-black text-slate-100">
            S/ {averageTicketPen.toFixed(2)}
          </div>
          <p className="text-xs text-slate-400 mt-2">Por pedido realizado</p>
        </div>

        {/* Total Orders */}
        <div className="p-6 rounded-3xl bg-[#121212] border border-white/10 shadow-xl">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Comandas Recibidas</span>
            <ShoppingBag className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="font-mono text-3xl font-black text-slate-100">
            {orders.length}
          </div>
          <div className="text-xs text-slate-400 mt-2 flex items-center space-x-2">
            <span>{completedOrdersCount} entregadas</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">{activeOrdersCount} activas</span>
          </div>
        </div>

        {/* Service Modality Distribution */}
        <div className="p-6 rounded-3xl bg-[#121212] border border-white/10 shadow-xl">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Modalidades</span>
            <Users className="w-5 h-5 text-purple-400" />
          </div>
          <div className="space-y-1.5 pt-1 text-xs">
            <div className="flex justify-between text-slate-300">
              <span>🛵 Delivery:</span>
              <span className="font-mono font-bold text-amber-400">{deliveryCount}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>🍽️ En Local:</span>
              <span className="font-mono font-bold text-emerald-400">{localCount}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>🛍️ Para Llevar:</span>
              <span className="font-mono font-bold text-purple-400">{takeawayCount}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Payment Method Distribution */}
      <div className="p-6 rounded-3xl bg-[#121212] border border-white/10 shadow-xl space-y-4">
        <h3 className="font-serif text-lg font-bold text-slate-100">Ingresos por Método de Pago</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['YAPE', 'PLIN', 'EFECTIVO', 'TARJETA_POS'].map(method => {
            const amount = paymentStats[method] || 0;
            const percentage = totalSalesPen > 0 ? (amount / totalSalesPen) * 100 : 0;
            return (
              <div key={method} className="p-4 rounded-2xl bg-[#161616] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">{method === 'TARJETA_POS' ? 'POS Tarjeta' : method}</span>
                  <span className="text-[10px] font-mono text-amber-400">{percentage.toFixed(0)}%</span>
                </div>
                <div className="font-mono text-xl font-black text-slate-100">
                  S/ {amount.toFixed(2)}
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                    style={{ width: `${Math.min(100, percentage)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Embedded Stock Manager Table */}
      <StockManagerTable />

    </div>
  );
};
