import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, ChefHat, Bike, Utensils, ShoppingBag, ArrowRight, Phone, MapPin, AlertTriangle } from 'lucide-react';
import { Order, OrderStatus } from '../../types/order';
import { useOrders } from '../../context/OrderContext';

interface OrderCardKDSProps {
  order: Order;
}

export const OrderCardKDS: React.FC<OrderCardKDSProps> = ({ order }) => {
  const { updateOrderStatus } = useOrders();
  const [elapsedMinutes, setElapsedMinutes] = useState(0);

  useEffect(() => {
    const calculateElapsed = () => {
      const created = new Date(order.createdAt).getTime();
      const now = Date.now();
      const diffMins = Math.floor((now - created) / (1000 * 60));
      setElapsedMinutes(diffMins);
    };

    calculateElapsed();
    const interval = setInterval(calculateElapsed, 30000); // update every 30s
    return () => clearInterval(interval);
  }, [order.createdAt]);

  const getTimerBadgeStyle = () => {
    if (order.status === 'ENTREGADO') return 'bg-slate-800 text-slate-400 border-white/10';
    if (elapsedMinutes > 20) return 'bg-red-950 border border-red-500/50 text-red-300 animate-pulse';
    if (elapsedMinutes > 10) return 'bg-amber-950 border border-amber-500/50 text-amber-300';
    return 'bg-emerald-950 border border-emerald-500/50 text-emerald-300';
  };

  const getStatusNextAction = (status: OrderStatus) => {
    switch (status) {
      case 'PENDIENTE':
        return { label: 'Iniciar Preparación 🍳', nextStatus: 'EN_PREPARACION' as OrderStatus, color: 'bg-amber-500 text-slate-950 hover:bg-amber-400' };
      case 'EN_PREPARACION':
        return { label: 'Marcar como Listo ✅', nextStatus: 'LISTO' as OrderStatus, color: 'bg-emerald-500 text-slate-950 hover:bg-emerald-400' };
      case 'LISTO':
        return { label: 'Marcar Entregado 🚚', nextStatus: 'ENTREGADO' as OrderStatus, color: 'bg-blue-500 text-slate-950 hover:bg-blue-400' };
      default:
        return null;
    }
  };

  const nextAction = getStatusNextAction(order.status);

  return (
    <div className={`rounded-2xl bg-[#141414] border transition-all flex flex-col justify-between shadow-xl ${
      order.status === 'PENDIENTE'
        ? 'border-amber-500/40 shadow-amber-500/5'
        : order.status === 'EN_PREPARACION'
        ? 'border-emerald-500/40 shadow-emerald-500/5'
        : order.status === 'LISTO'
        ? 'border-blue-500/40 shadow-blue-500/5'
        : 'border-white/5 opacity-60'
    }`}>
      
      {/* Header Info */}
      <div className="p-4 bg-[#181818] border-b border-white/5 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-lg font-black text-amber-400">
              {order.code}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold flex items-center space-x-1 ${getTimerBadgeStyle()}`}>
              <Clock className="w-3 h-3" />
              <span>{elapsedMinutes} min</span>
            </span>
          </div>

          {/* Modality Icon */}
          <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-xs font-semibold text-slate-300 flex items-center space-x-1.5">
            {order.serviceType === 'DELIVERY' && <><Bike className="w-3.5 h-3.5 text-amber-400" /><span>Delivery</span></>}
            {order.serviceType === 'EN_LOCAL' && <><Utensils className="w-3.5 h-3.5 text-emerald-400" /><span>Mesa</span></>}
            {order.serviceType === 'PARA_LLEVAR' && <><ShoppingBag className="w-3.5 h-3.5 text-purple-400" /><span>Llevar</span></>}
          </span>
        </div>

        {/* Customer & Location */}
        <div className="text-xs text-slate-300 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-semibold">{order.customerDetails.name}</span>
          {order.customerDetails.phone && <span className="text-slate-400 font-mono">📱 {order.customerDetails.phone}</span>}
          {order.customerDetails.tableNumber && (
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
              {order.customerDetails.tableNumber}
            </span>
          )}
          {order.customerDetails.address && (
            <span className="text-slate-400 truncate max-w-[200px]" title={order.customerDetails.address}>
              📍 {order.customerDetails.address}
            </span>
          )}
        </div>
      </div>

      {/* Items Breakdown */}
      <div className="p-4 space-y-3 flex-1 overflow-y-auto max-h-64 custom-scrollbar">
        {order.items.map(item => (
          <div key={item.cartItemId} className="p-2.5 rounded-xl bg-[#1A1A1A] border border-white/5 text-xs">
            <div className="flex items-center justify-between font-bold text-slate-100">
              <span className="text-amber-300 font-mono text-sm mr-2">{item.quantity}x</span>
              <span className="flex-1">{item.name}</span>
            </div>

            {/* Cremas Breakdown */}
            {item.selectedCremas.length > 0 && (
              <div className="mt-1 text-[11px] text-amber-400 font-medium pl-6">
                🌶️ Cremas: {item.selectedCremas.join(', ')}
              </div>
            )}

            {/* Extras */}
            {item.selectedExtras.length > 0 && (
              <div className="mt-0.5 text-[11px] text-slate-400 font-medium pl-6">
                🧀 Extras: {item.selectedExtras.map(e => e.name).join(', ')}
              </div>
            )}

            {/* Special prep notes */}
            {item.specialInstructions && (
              <div className="mt-1 p-1.5 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-300 pl-2">
                📝 {item.specialInstructions}
              </div>
            )}
          </div>
        ))}

        {/* Global Notes */}
        {order.notes && (
          <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300 flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Observación General:</span> {order.notes}
            </div>
          </div>
        )}
      </div>

      {/* Footer Controls */}
      <div className="p-4 bg-[#181818] border-t border-white/5 flex items-center justify-between gap-2">
        <div className="text-[11px] text-slate-400">
          Total: <span className="font-mono text-amber-400 font-bold">S/ {order.totalAmount.toFixed(2)}</span> ({order.paymentMethod})
        </div>

        {nextAction && (
          <button
            onClick={() => updateOrderStatus(order.id, nextAction.nextStatus)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 flex items-center space-x-1.5 ${nextAction.color}`}
          >
            <span>{nextAction.label}</span>
          </button>
        )}
      </div>

    </div>
  );
};
