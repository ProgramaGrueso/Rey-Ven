export interface FloatingIngredient {
  id: string;
  name: string;
  image: string;
  initialPos: { top?: string; bottom?: string; left?: string; right?: string };
  rotation: number;
  scale: number;
}

export interface DeliveryZone {
  id: string;
  name: string;
  timeEstimate: string;
  badge: string;
  image: string;
}

export const HERO_PRODUCT_IMAGE = "https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=1200&q=90"; // Signature Brutal / Tóxica

export const ATMOSPHERE_IMAGES = {
  crispyDetail: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1000&q=80",
  kitchenFlame: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
  tableExperience: "https://images.unsplash.com/photo-1514944298341-9ebb6b15809c?auto=format&fit=crop&w=1000&q=80",
  cremasTrio: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1000&q=80"
};

// High resolution transparent cutouts & ingredient elements (CRAV style)
export const FLOATING_INGREDIENTS: FloatingIngredient[] = [
  {
    id: 'ing-aji',
    name: 'Ají Pollero Leyenda',
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=500&q=80',
    initialPos: { top: '15%', left: '8%' },
    rotation: -15,
    scale: 1.1
  },
  {
    id: 'ing-pollo',
    name: 'Presa Broaster Marinada',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=500&q=80',
    initialPos: { top: '25%', right: '10%' },
    rotation: 20,
    scale: 1.2
  },
  {
    id: 'ing-papa',
    name: 'Papa Amarilla Nativa',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80',
    initialPos: { bottom: '20%', left: '12%' },
    rotation: -25,
    scale: 1.0
  },
  {
    id: 'ing-crema',
    name: 'Crema Tártara Casera',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80',
    initialPos: { bottom: '15%', right: '14%' },
    rotation: 12,
    scale: 1.15
  }
];

export const LIMA_DELIVERY_ZONES: DeliveryZone[] = [
  {
    id: 'zone-san-isidro',
    name: 'San Isidro',
    timeEstimate: '25 - 35 min',
    badge: 'Cobertura Directa 🛵',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'zone-miraflores',
    name: 'Miraflores',
    timeEstimate: '25 - 40 min',
    badge: 'Zona Express 🔥',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'zone-surco',
    name: 'Santiago de Surco',
    timeEstimate: '30 - 45 min',
    badge: 'Cobertura Completa 👑',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'zone-san-borja',
    name: 'San Borja',
    timeEstimate: '20 - 35 min',
    badge: 'Entrega Prioritaria ⚡',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'zone-la-molina',
    name: 'La Molina',
    timeEstimate: '35 - 50 min',
    badge: 'Zona Gourmet 🍔',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'zone-rimac-lince',
    name: 'Lince & El Rímac',
    timeEstimate: '15 - 30 min',
    badge: 'Local Central 📍',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80'
  }
];
