import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, CustomerDetails, PaymentMethod, ServiceType } from '../types/order';
import { MenuItem, DishExtra } from '../types/menu';

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  serviceType: ServiceType;
  paymentMethod: PaymentMethod;
  customerDetails: CustomerDetails;
  notes: string;
  subtotal: number;
  deliveryFee: number;
  totalAmount: number;
  itemCount: number;
  openCart: () => void;
  closeCart: () => void;
  setServiceType: (type: ServiceType) => void;
  setPaymentMethod: (method: PaymentMethod) => void;
  setCustomerDetails: React.Dispatch<React.SetStateAction<CustomerDetails>>;
  setNotes: (notes: string) => void;
  addToCart: (
    item: MenuItem,
    selectedCremas: string[],
    selectedExtras: DishExtra[],
    specialInstructions?: string,
    quantity?: number
  ) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  buildWhatsAppMessage: () => string;
  buildWhatsAppUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [serviceType, setServiceType] = useState<ServiceType>('DELIVERY');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('YAPE');
  const [notes, setNotes] = useState<string>('');
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: '',
    phone: '',
    address: '',
    reference: '',
    tableNumber: ''
  });

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (
    item: MenuItem,
    selectedCremas: string[],
    selectedExtras: DishExtra[],
    specialInstructions: string = '',
    quantity: number = 1
  ) => {
    const extrasTotal = selectedExtras.reduce((acc, curr) => acc + curr.price, 0);
    const unitPrice = item.price + extrasTotal;
    
    // Create unique identifier for cart item based on customizations
    const sortedCremas = [...selectedCremas].sort().join('|');
    const sortedExtras = selectedExtras.map(e => e.id).sort().join('|');
    const cartItemId = `${item.id}-${sortedCremas}-${sortedExtras}-${specialInstructions}`;

    setCartItems(prev => {
      const existingIndex = prev.findIndex(ci => ci.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [
        ...prev,
        {
          cartItemId,
          menuItemId: item.id,
          name: item.name,
          price: item.price,
          quantity,
          selectedCremas,
          selectedExtras,
          specialInstructions,
          unitTotalPrice: unitPrice,
          image: item.image
        }
      ];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.cartItemId === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.unitTotalPrice * item.quantity, 0);
  const deliveryFee = serviceType === 'DELIVERY' && subtotal > 0 ? 5.00 : 0;
  const totalAmount = subtotal + deliveryFee;
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const buildWhatsAppMessage = (): string => {
    const lines: string[] = [];
    lines.push(`👑 *NUEVO PEDIDO — REY VEN FAST CASUAL* 👑`);
    lines.push(`----------------------------------------`);
    lines.push(`📍 *Modalidad:* ${serviceType === 'DELIVERY' ? '🛵 A Domicilio' : serviceType === 'EN_LOCAL' ? '🍽️ Para Consumo en Local' : '🛍️ Para Llevar'}`);
    lines.push(`💳 *Método de Pago:* ${paymentMethod}`);
    lines.push(``);
    lines.push(`👤 *Cliente:* ${customerDetails.name || 'Sin especificar'}`);
    lines.push(`📞 *Teléfono:* ${customerDetails.phone || 'Sin especificar'}`);
    
    if (serviceType === 'DELIVERY') {
      lines.push(`🏠 *Dirección:* ${customerDetails.address || 'No indicada'}`);
      if (customerDetails.reference) {
        lines.push(`🔎 *Ref:* ${customerDetails.reference}`);
      }
    } else if (serviceType === 'EN_LOCAL' && customerDetails.tableNumber) {
      lines.push(`🪑 *Mesa:* ${customerDetails.tableNumber}`);
    }

    lines.push(``);
    lines.push(`🛒 *DETALLE DEL PEDIDO:*`);
    cartItems.forEach((item, index) => {
      lines.push(`${index + 1}. *${item.quantity}x ${item.name}* — S/ ${(item.unitTotalPrice * item.quantity).toFixed(2)}`);
      if (item.selectedCremas.length > 0) {
        lines.push(`   🌶️ *Cremas:* ${item.selectedCremas.join(', ')}`);
      }
      if (item.selectedExtras.length > 0) {
        lines.push(`   🧀 *Extras:* ${item.selectedExtras.map(e => e.name).join(', ')}`);
      }
      if (item.specialInstructions) {
        lines.push(`   📝 *Nota:* ${item.specialInstructions}`);
      }
    });

    lines.push(``);
    lines.push(`----------------------------------------`);
    lines.push(`Subtotal: S/ ${subtotal.toFixed(2)}`);
    if (deliveryFee > 0) {
      lines.push(`Costo de Envío: S/ ${deliveryFee.toFixed(2)}`);
    }
    lines.push(`💰 *TOTAL A PAGAR: S/ ${totalAmount.toFixed(2)}*`);

    if (notes) {
      lines.push(``);
      lines.push(`📌 *Observaciones Generales:* ${notes}`);
    }

    lines.push(``);
    lines.push(`¡Gracias por preferir la experiencia REY VEN! 🍗🔥`);

    return lines.join('\n');
  };

  const buildWhatsAppUrl = (): string => {
    const rawMessage = buildWhatsAppMessage();
    const encoded = encodeURIComponent(rawMessage);
    // WhatsApp contact for Rey Ven Lima
    const phone = '51987654321';
    return `https://wa.me/${phone}?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        serviceType,
        paymentMethod,
        customerDetails,
        notes,
        subtotal,
        deliveryFee,
        totalAmount,
        itemCount,
        openCart,
        closeCart,
        setServiceType,
        setPaymentMethod,
        setCustomerDetails,
        setNotes,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        buildWhatsAppMessage,
        buildWhatsAppUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
