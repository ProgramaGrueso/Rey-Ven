export type OrderStatus = 'PENDIENTE' | 'EN_PREPARACION' | 'LISTO' | 'ENTREGADO';
export type PaymentMethod = 'YAPE' | 'PLIN' | 'EFECTIVO' | 'TARJETA_POS';
export type ServiceType = 'DELIVERY' | 'EN_LOCAL' | 'PARA_LLEVAR';

export interface CartItem {
  cartItemId: string; // unique string with selected options
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  selectedCremas: string[];
  selectedExtras: { id: string; name: string; price: number }[];
  specialInstructions?: string;
  unitTotalPrice: number;
  image?: string;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address?: string;
  reference?: string;
  tableNumber?: string;
}

export interface Order {
  id: string;
  code: string; // e.g. "RV-8042"
  createdAt: string; // ISO string or timestamp
  updatedAt: string;
  status: OrderStatus;
  items: CartItem[];
  totalAmount: number;
  paymentMethod: PaymentMethod;
  serviceType: ServiceType;
  customerDetails: CustomerDetails;
  notes?: string;
  elapsedSeconds?: number;
}
