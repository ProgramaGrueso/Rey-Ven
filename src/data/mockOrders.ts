import { Order } from '../types/order';

export const INITIAL_MOCK_ORDERS: Order[] = [
  {
    id: 'ord-101',
    code: 'RV-8041',
    createdAt: new Date(Date.now() - 12 * 60 * 1000).toISOString(), // 12 mins ago
    updatedAt: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
    status: 'PENDIENTE',
    serviceType: 'DELIVERY',
    paymentMethod: 'YAPE',
    totalAmount: 47.00,
    customerDetails: {
      name: 'Carlos Mendoza',
      phone: '987654321',
      address: 'Av. Las Palmeras 450, Urb. El Rímac',
      reference: 'Frente al parque central'
    },
    notes: 'Por favor bien doraditas las papas y bastante ají pollero.',
    items: [
      {
        cartItemId: 'item-1',
        menuItemId: 'burger-brutal',
        name: 'Hamburguesa Brutal',
        price: 22.00,
        quantity: 1,
        selectedCremas: ['Ají Pollero Leyenda', 'Tártara de la Casa', 'Mayonesa Secreta Rey Ven'],
        selectedExtras: [{ id: 'ext-queso', name: 'Queso Danbo Fundido Extra', price: 3.50 }],
        unitTotalPrice: 25.50
      },
      {
        cartItemId: 'item-2',
        menuItemId: 'salchi-royal',
        name: 'Salchi Royal',
        price: 17.00,
        quantity: 1,
        selectedCremas: ['Ají Pollero Leyenda', 'Rocoto Furia Red'],
        selectedExtras: [],
        unitTotalPrice: 17.00
      },
      {
        cartItemId: 'item-3',
        menuItemId: 'bebida-gaseosa-personal',
        name: 'Gaseosa Personal 500ml',
        price: 4.50,
        quantity: 1,
        selectedCremas: [],
        selectedExtras: [],
        unitTotalPrice: 4.50
      }
    ]
  },
  {
    id: 'ord-102',
    code: 'RV-8042',
    createdAt: new Date(Date.now() - 6 * 60 * 1000).toISOString(), // 6 mins ago
    updatedAt: new Date(Date.now() - 4 * 60 * 1000).toISOString(),
    status: 'EN_PREPARACION',
    serviceType: 'EN_LOCAL',
    paymentMethod: 'TARJETA_POS',
    totalAmount: 51.00,
    customerDetails: {
      name: 'Lucía Benavides',
      phone: '912345678',
      tableNumber: 'Mesa 04'
    },
    notes: 'Sin ensalada en la hamburguesa a lo pobre.',
    items: [
      {
        cartItemId: 'item-4',
        menuItemId: 'salchi-pollo-rey-ven',
        name: 'Salchi Pollo Rey Ven',
        price: 25.00,
        quantity: 1,
        selectedCremas: ['Tártara de la Casa', 'Crema Aceitunada Botija'],
        selectedExtras: [],
        unitTotalPrice: 25.00
      },
      {
        cartItemId: 'item-5',
        menuItemId: 'broaster-xl-pecho-ala',
        name: 'XL Pecho + Ala Broaster',
        price: 26.00,
        quantity: 1,
        selectedCremas: ['Mayonesa Secreta Rey Ven', 'Ají Pollero Leyenda'],
        selectedExtras: [],
        unitTotalPrice: 26.00
      }
    ]
  },
  {
    id: 'ord-103',
    code: 'RV-8043',
    createdAt: new Date(Date.now() - 22 * 60 * 1000).toISOString(), // 22 mins ago
    updatedAt: new Date(Date.now() - 3 * 60 * 1000).toISOString(),
    status: 'LISTO',
    serviceType: 'PARA_LLEVAR',
    paymentMethod: 'PLIN',
    totalAmount: 36.00,
    customerDetails: {
      name: 'Jorge Huamán',
      phone: '998877665'
    },
    notes: 'Empacar cremas por separado por favor.',
    items: [
      {
        cartItemId: 'item-6',
        menuItemId: 'burger-doble-muerte',
        name: 'Hamburguesa Doble Muerte',
        price: 20.00,
        quantity: 1,
        selectedCremas: ['Rocoto Furia Red', 'Mostaza Miel Gourmet'],
        selectedExtras: [],
        unitTotalPrice: 20.00
      },
      {
        cartItemId: 'item-7',
        menuItemId: 'burger-a-lo-pobre',
        name: 'Hamburguesa a lo Pobre',
        price: 16.00,
        quantity: 1,
        selectedCremas: ['Ají Pollero Leyenda'],
        selectedExtras: [],
        unitTotalPrice: 16.00
      }
    ]
  },
  {
    id: 'ord-104',
    code: 'RV-8040',
    createdAt: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    status: 'ENTREGADO',
    serviceType: 'DELIVERY',
    paymentMethod: 'EFECTIVO',
    totalAmount: 62.00,
    customerDetails: {
      name: 'Valeria Quispe',
      phone: '944332211',
      address: 'Jr. Raul Villaran Pasquel 210'
    },
    items: [
      {
        cartItemId: 'item-8',
        menuItemId: 'broaster-xl-pierna-encuentro',
        name: 'XL Pierna + Encuentro',
        price: 26.00,
        quantity: 1,
        selectedCremas: ['Ají Pollero Leyenda', 'Tártara de la Casa'],
        selectedExtras: [],
        unitTotalPrice: 26.00
      },
      {
        cartItemId: 'item-9',
        menuItemId: 'salchi-pollo-especial',
        name: 'Salchi Pollo Especial',
        price: 20.00,
        quantity: 1,
        selectedCremas: ['Mayonesa Secreta Rey Ven'],
        selectedExtras: [],
        unitTotalPrice: 20.00
      },
      {
        cartItemId: 'item-10',
        menuItemId: 'burger-mixta',
        name: 'Hamburguesa Mixta',
        price: 16.00,
        quantity: 1,
        selectedCremas: ['Tártara de la Casa'],
        selectedExtras: [],
        unitTotalPrice: 16.00
      }
    ]
  }
];
