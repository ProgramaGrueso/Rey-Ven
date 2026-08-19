import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Order, OrderStatus, PaymentMethod, ServiceType, CartItem, CustomerDetails } from '../types/order';
import { MenuItem } from '../types/menu';
import { INITIAL_MOCK_ORDERS } from '../data/mockOrders';
import { INITIAL_MENU_ITEMS } from '../data/mockMenu';

interface OrderContextType {
  orders: Order[];
  menuItems: MenuItem[];
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  createOrder: (
    items: CartItem[],
    totalAmount: number,
    serviceType: ServiceType,
    paymentMethod: PaymentMethod,
    customerDetails: CustomerDetails,
    notes?: string
  ) => Order;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  toggleItemAvailability: (itemId: string) => void;
  updateItemPrice: (itemId: string, price: number) => void;
  // Metrics for Admin & KDS
  totalSalesPen: number;
  activeOrdersCount: number;
  completedOrdersCount: number;
  averageTicketPen: number;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>(INITIAL_MOCK_ORDERS);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(INITIAL_MENU_ITEMS);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Play audio signal when a new order comes or status changes if sound is enabled
  const playNotificationSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5 note
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch {
      // Ignore web audio policy errors if un-interacted
    }
  };

  const createOrder = (
    items: CartItem[],
    totalAmount: number,
    serviceType: ServiceType,
    paymentMethod: PaymentMethod,
    customerDetails: CustomerDetails,
    notes?: string
  ): Order => {
    const randomCodeNum = Math.floor(1000 + Math.random() * 9000);
    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      code: `RV-${randomCodeNum}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: 'PENDIENTE',
      items,
      totalAmount,
      serviceType,
      paymentMethod,
      customerDetails,
      notes
    };

    setOrders(prev => [newOrder, ...prev]);
    playNotificationSound();
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders(prev =>
      prev.map(order => {
        if (order.id === orderId) {
          return {
            ...order,
            status: newStatus,
            updatedAt: new Date().toISOString()
          };
        }
        return order;
      })
    );
    playNotificationSound();
  };

  const toggleItemAvailability = (itemId: string) => {
    setMenuItems(prev =>
      prev.map(item => {
        if (item.id === itemId) {
          return { ...item, isAvailable: !item.isAvailable };
        }
        return item;
      })
    );
  };

  const updateItemPrice = (itemId: string, newPrice: number) => {
    setMenuItems(prev =>
      prev.map(item => {
        if (item.id === itemId) {
          return { ...item, price: newPrice };
        }
        return item;
      })
    );
  };

  // Live metrics calculations
  const totalSalesPen = orders.reduce((acc, order) => acc + order.totalAmount, 0);
  const activeOrdersCount = orders.filter(o => o.status !== 'ENTREGADO').length;
  const completedOrdersCount = orders.filter(o => o.status === 'ENTREGADO').length;
  const averageTicketPen = orders.length > 0 ? totalSalesPen / orders.length : 0;

  return (
    <OrderContext.Provider
      value={{
        orders,
        menuItems,
        soundEnabled,
        setSoundEnabled,
        createOrder,
        updateOrderStatus,
        toggleItemAvailability,
        updateItemPrice,
        totalSalesPen,
        activeOrdersCount,
        completedOrdersCount,
        averageTicketPen
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};
