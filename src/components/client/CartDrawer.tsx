import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, Phone, MapPin, User, Utensils, Bike, ShoppingBag, CreditCard, DollarSign, CheckCircle2, MessageSquare } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useOrders } from '../../context/OrderContext';
import confetti from 'canvas-confetti';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    serviceType,
    setServiceType,
    paymentMethod,
    setPaymentMethod,
    customerDetails,
    setCustomerDetails,
    notes,
    setNotes,
    subtotal,
    deliveryFee,
    totalAmount,
    buildWhatsAppUrl
  } = useCart();

  const { createOrder } = useOrders();
  const [orderSubmittedSuccess, setOrderSubmittedSuccess] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Fallback if confetti fails
    }
  };

  const handleSendToWhatsAppAndKitchen = () => {
    if (!customerDetails.name || !customerDetails.phone) {
      alert('Por favor completa tu Nombre y Teléfono antes de confirmar el pedido.');
      return;
    }

    if (serviceType === 'DELIVERY' && !customerDetails.address) {
      alert('Por favor ingresa tu Dirección de Entrega.');
      return;
    }

    // 1. Create order in live OrderContext (Syncs with KDS & Admin in real-time!)
    const createdOrder = createOrder(
      cartItems,
      totalAmount,
      serviceType,
      paymentMethod,
      customerDetails,
      notes
    );

    // 2. Trigger celebration confetti
    triggerConfetti();
    setOrderSubmittedSuccess(createdOrder.code);

    // 3. Open WhatsApp link after 500ms
    setTimeout(() => {
      const waUrl = buildWhatsAppUrl();
      window.open(waUrl, '_blank');
      clearCart();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="absolute inset-0" onClick={closeCart} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121212] border-l border-amber-500/30 text-slate-100 flex flex-col shadow-2xl">
          
          {/* Drawer Header */}
          <div className="p-6 bg-[#161616] border-b border-amber-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-slate-100">Tu Pedido</h2>
                <p className="text-xs text-slate-400">{cartItems.length} producto(s) en tu orden</p>
              </div>
            </div>
            
            <button
              onClick={closeCart}
              className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Success Banner if just ordered */}
          {orderSubmittedSuccess ? (
            <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-100">¡Pedido {orderSubmittedSuccess} Enviado!</h3>
              <p className="text-xs text-slate-300 max-w-xs">
                Tu comanda se ha registrado en nuestra cocina en tiempo real y se ha redirigido a WhatsApp.
              </p>
              <button
                onClick={() => {
                  setOrderSubmittedSuccess(null);
                  closeCart();
                }}
                className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
              >
                Volver a la Carta
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            /* Empty Cart View */
            <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-slate-500" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-300">Tu carrito está vacío</h3>
              <p className="text-xs text-slate-400 max-w-xs">
                Explora nuestras deliciosas opciones de Pollo Broaster, Hamburguesas y Salchipapas y agrégalas.
              </p>
            </div>
          ) : (
            /* Cart Items & Form Scrollable Area */
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              
              {/* Item List */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase font-bold tracking-widest text-slate-400">Items Seleccionados</h3>
                {cartItems.map(item => (
                  <div
                    key={item.cartItemId}
                    className="p-3.5 rounded-2xl bg-[#181818] border border-white/5 flex space-x-3 items-start"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                    )}
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-bold text-slate-100 truncate">{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-slate-500 hover:text-red-400 p-1 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Selected Cremas badge list */}
                      {item.selectedCremas.length > 0 && (
                        <p className="text-[10px] text-amber-400 mt-1 line-clamp-1">
                          🌶️ {item.selectedCremas.join(', ')}
                        </p>
                      )}

                      {/* Selected Extras */}
                      {item.selectedExtras.length > 0 && (
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          🧀 {item.selectedExtras.map(e => e.name).join(', ')}
                        </p>
                      )}

                      {/* Item Price and Quantity controls */}
                      <div className="flex items-center justify-between mt-2.5">
                        <span className="font-mono text-xs font-bold text-slate-200">
                          S/ {(item.unitTotalPrice * item.quantity).toFixed(2)}
                        </span>

                        <div className="flex items-center space-x-2 bg-[#0A0A0A] px-2 py-1 rounded-lg border border-white/10">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="text-slate-400 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="text-slate-400 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {/* Service Type Selector */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                <label className="text-xs font-bold text-slate-200 block">Modalidad de Servicio</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setServiceType('DELIVERY')}
                    className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all flex flex-col items-center space-y-1 ${
                      serviceType === 'DELIVERY'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'bg-[#181818] border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <Bike className="w-4 h-4" />
                    <span>Delivery</span>
                  </button>

                  <button
                    onClick={() => setServiceType('EN_LOCAL')}
                    className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all flex flex-col items-center space-y-1 ${
                      serviceType === 'EN_LOCAL'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'bg-[#181818] border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <Utensils className="w-4 h-4" />
                    <span>En Local</span>
                  </button>

                  <button
                    onClick={() => setServiceType('PARA_LLEVAR')}
                    className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all flex flex-col items-center space-y-1 ${
                      serviceType === 'PARA_LLEVAR'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'bg-[#181818] border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Para Llevar</span>
                  </button>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-slate-200 block">Método de Pago</label>
                <div className="grid grid-cols-2 gap-2">
                  {(['YAPE', 'PLIN', 'EFECTIVO', 'TARJETA_POS'] as const).map(method => (
                    <button
                      key={method}
                      onClick={() => setPaymentMethod(method)}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all flex items-center justify-between ${
                        paymentMethod === method
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'bg-[#181818] border-white/5 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <span>{method === 'TARJETA_POS' ? 'POS Tarjeta' : method}</span>
                      {paymentMethod === method && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Customer Info Form */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h3 className="text-xs uppercase font-bold tracking-widest text-slate-400">Datos de Entrega / Contacto</h3>

                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Tu Nombre completo *"
                    value={customerDetails.name}
                    onChange={e => setCustomerDetails(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                  <input
                    type="tel"
                    placeholder="Teléfono / WhatsApp *"
                    value={customerDetails.phone}
                    onChange={e => setCustomerDetails(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {serviceType === 'DELIVERY' && (
                  <>
                    <div className="relative">
                      <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                      <input
                        type="text"
                        placeholder="Dirección exacta de entrega *"
                        value={customerDetails.address || ''}
                        onChange={e => setCustomerDetails(prev => ({ ...prev, address: e.target.value }))}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Referencia (ej: frente al parque, portón negro)"
                      value={customerDetails.reference || ''}
                      onChange={e => setCustomerDetails(prev => ({ ...prev, reference: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </>
                )}

                {serviceType === 'EN_LOCAL' && (
                  <input
                    type="text"
                    placeholder="Número de Mesa (ej: Mesa 04)"
                    value={customerDetails.tableNumber || ''}
                    onChange={e => setCustomerDetails(prev => ({ ...prev, tableNumber: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                )}

                <div className="relative">
                  <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Observaciones generales para el pedido"
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

              </div>

              {/* Order Math Summary */}
              <div className="p-4 rounded-2xl bg-[#181818] border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal:</span>
                  <span className="font-mono text-slate-200">S/ {subtotal.toFixed(2)}</span>
                </div>
                {serviceType === 'DELIVERY' && (
                  <div className="flex justify-between text-slate-400">
                    <span>Costo de Delivery:</span>
                    <span className="font-mono text-slate-200">S/ {deliveryFee.toFixed(2)}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-white/10 flex justify-between font-bold text-sm text-slate-100">
                  <span>Total a Pagado / Pendiente:</span>
                  <span className="font-mono text-amber-400 text-base">S/ {totalAmount.toFixed(2)}</span>
                </div>
              </div>

            </div>
          )}

          {/* Drawer Footer Actions */}
          {cartItems.length > 0 && !orderSubmittedSuccess && (
            <div className="p-6 bg-[#161616] border-t border-white/10 space-y-2">
              <button
                onClick={handleSendToWhatsAppAndKitchen}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 active:scale-95 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirmar & Enviar por WhatsApp</span>
              </button>
              <p className="text-[10px] text-center text-slate-400">
                ⚡ Al hacer clic, el pedido se enviará al WhatsApp de REY VEN y aparecerá en vivo en la pantalla de la Cocina KDS.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
