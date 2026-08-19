export type CategoryId = 'broaster' | 'hamburguesas' | 'salchipapas' | 'adicionales';

export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
  description: string;
}

export interface CremaOption {
  id: string;
  name: string;
  description: string;
  badge?: string;
  isPopular?: boolean;
}

export interface DishExtra {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  categoryId: CategoryId;
  description: string;
  price: number;
  image: string;
  isAvailable: boolean;
  isSignature?: boolean;
  badge?: string;
  prepTimeMinutes?: number;
  includesDefault?: string; // e.g. "Arroz, papas fritas, ensalada y cremas"
  allowedCremasMax?: number;
}
