import { Category, MenuItem, CremaOption, DishExtra } from '../types/menu';

export const CATEGORIES: Category[] = [
  {
    id: 'broaster',
    name: 'Pollo Broaster',
    icon: '🍗',
    description: 'Pollo crujiente marinado en especias secretas, acompañado de arroz, papas amarillas y ensalada fresca.'
  },
  {
    id: 'hamburguesas',
    name: 'Hamburguesas',
    icon: '🍔',
    description: 'Carne artesanal a la parrilla, vegetales de huerto y queso derretido en pan brioche.'
  },
  {
    id: 'salchipapas',
    name: 'Salchipapas',
    icon: '🍟',
    description: 'Corte grueso de papas nativas doradas con embutidos seleccionados y corona de cremas.'
  },
  {
    id: 'adicionales',
    name: 'Bebidas & Extra',
    icon: '🥤',
    description: 'Refrescos helados, chicha de maiz morado casera y agregados para potenciar tu experiencia.'
  }
];

export const CREMAS_CASERAS: CremaOption[] = [
  { id: 'mayo-casa', name: 'Mayonesa Secreta Rey Ven', description: 'La receta clásica súper cremosa', isPopular: true },
  { id: 'tartara', name: 'Tártara de la Casa', description: 'Cebollín fresco y finas especias', badge: 'Favorito' },
  { id: 'aji-pollero', name: 'Ají Pollero Leyenda', description: 'Picor medio tradicional peruano con huacatay', isPopular: true },
  { id: 'rocoto-furia', name: 'Rocoto Furia Red', description: 'Solo para verdaderos valientes amantes del fuego', badge: 'Picante 🔥' },
  { id: 'mostaza-miel', name: 'Mostaza Miel Gourmet', description: 'Equilibrio agridulce suave' },
  { id: 'aceitunada', name: 'Crema Aceitunada Botija', description: 'Textura sedosa con aceitunas peruanas de Ica' }
];

export const EXTRAS_DISPONIBLES: DishExtra[] = [
  { id: 'ext-huevo', name: 'Huevo Frito a la Inglesa', price: 2.50 },
  { id: 'ext-platano', name: 'Plátano Frito Dulce', price: 3.00 },
  { id: 'ext-queso', name: 'Queso Danbo Fundido Extra', price: 3.50 },
  { id: 'ext-tocino', name: 'Tocino Ahumado Crujiente', price: 4.00 },
  { id: 'ext-papas', name: 'Porción Extra Papas Fritas', price: 7.00 },
];

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // --- POLLO BROASTER ---
  {
    id: 'broaster-ala',
    name: 'Ala Broaster',
    categoryId: 'broaster',
    description: 'Crujiente ala marinada por 24h en hierbas andinas, dorada a la perfección.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 15,
    includesDefault: 'Arroz, papas fritas, ensalada fresca y cremas al gusto'
  },
  {
    id: 'broaster-pierna',
    name: 'Broaster Pierna',
    categoryId: 'broaster',
    description: 'Pierna jugosa de pollo broaster con rebozado crujiente de la casa.',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 15,
    includesDefault: 'Arroz, papas fritas, ensalada fresca y cremas al gusto'
  },
  {
    id: 'broaster-encuentro',
    name: 'Encuentro / Muslo Broaster',
    categoryId: 'broaster',
    description: 'Corte generoso de encuentro super jugoso con cobertura hiper dorada.',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 15,
    includesDefault: 'Arroz, papas fritas, ensalada fresca y cremas al gusto'
  },
  {
    id: 'broaster-pecho',
    name: 'Pecho Broaster Supreme',
    categoryId: 'broaster',
    description: 'Pechuga magra abundante, crocancia externa e interior extraordinariamente tierno.',
    price: 17.00,
    image: 'https://images.unsplash.com/photo-1588767768106-1b20e51d9d68?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isSignature: true,
    badge: 'Recomendado',
    prepTimeMinutes: 18,
    includesDefault: 'Arroz, papas fritas, ensalada fresca y cremas al gusto'
  },
  {
    id: 'broaster-ala-doble',
    name: 'Ala Doble Broaster',
    categoryId: 'broaster',
    description: 'Doble porción de alas crocantes con sazón secreta del Rey Ven.',
    price: 20.00,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 15,
    includesDefault: 'Arroz, papas fritas, ensalada fresca y cremas al gusto'
  },
  {
    id: 'broaster-xl-pecho-ala',
    name: 'XL Pecho + Ala Broaster',
    categoryId: 'broaster',
    description: 'Combo XL de dos piezas maestras: Pecho gigante + Ala crocante.',
    price: 26.00,
    image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isSignature: true,
    badge: 'Combo Rey XL 👑',
    prepTimeMinutes: 20,
    includesDefault: 'Arroz, papas fritas, ensalada fresca y cremas al gusto'
  },
  {
    id: 'broaster-xl-pierna-encuentro',
    name: 'XL Pierna + Encuentro',
    categoryId: 'broaster',
    description: 'Doble porción jugosa con la mejor combinación de presas oscuras doradas.',
    price: 26.00,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isSignature: true,
    badge: 'Doble Sabor 👑',
    prepTimeMinutes: 20,
    includesDefault: 'Arroz, papas fritas, ensalada fresca y cremas al gusto'
  },

  // --- HAMBURGUESAS ---
  {
    id: 'burger-clasica',
    name: 'Hamburguesa Clásica',
    categoryId: 'hamburguesas',
    description: 'Carne artesanal casera 150g, jamón inglés, ensalada fresca en pan sésamo doradito.',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 12,
    includesDefault: 'Papas fritas artesanales, ensalada y cremas'
  },
  {
    id: 'burger-chorizo',
    name: 'Hamburguesa Chorizo Parrillero',
    categoryId: 'hamburguesas',
    description: 'Chorizo parrillero artesanal a las brasas con chimichurri suave y vegetales.',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 12,
    includesDefault: 'Papas fritas artesanales, ensalada y cremas'
  },
  {
    id: 'burger-pollo-deshilachado',
    name: 'Hamburguesa Pollo Deshilachado',
    categoryId: 'hamburguesas',
    description: 'Porción generosa de pechuga de pollo sazonada en hilos suculentos.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 12,
    includesDefault: 'Papas fritas artesanales, ensalada y cremas'
  },
  {
    id: 'burger-filete-pechuga',
    name: 'Hamburguesa Filete de Pechuga',
    categoryId: 'hamburguesas',
    description: 'Filete entero de pechuga de pollo a la plancha con mantequilla de hierbas y jamón inglés.',
    price: 14.00,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 15,
    includesDefault: 'Papas fritas artesanales, ensalada y cremas'
  },
  {
    id: 'burger-royal',
    name: 'Hamburguesa Royal',
    categoryId: 'hamburguesas',
    description: 'Carne artesanal, queso edam derretido, huevo frito de yema tierna y jamón inglés.',
    price: 14.00,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isSignature: true,
    badge: 'Popular',
    prepTimeMinutes: 15,
    includesDefault: 'Papas fritas artesanales, ensalada y cremas'
  },
  {
    id: 'burger-mixta',
    name: 'Hamburguesa Mixta',
    categoryId: 'hamburguesas',
    description: 'Doble proteína: Carne artesanal casera + filete de pechuga, jamón y queso derretido.',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 15,
    includesDefault: 'Papas fritas artesanales, ensalada y cremas'
  },
  {
    id: 'burger-a-lo-pobre',
    name: 'Hamburguesa a lo Pobre',
    categoryId: 'hamburguesas',
    description: 'Sabor criollo legendario: Carne artesanal, huevo frito y plátano dulce caramelizado.',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isSignature: true,
    badge: 'Criolla Star 🇵🇪',
    prepTimeMinutes: 15,
    includesDefault: 'Papas fritas artesanales, ensalada y cremas'
  },
  {
    id: 'burger-doble-muerte',
    name: 'Hamburguesa Doble Muerte',
    categoryId: 'hamburguesas',
    description: 'Doble carne artesanal casera, doble jamón inglés, doble queso fundido y doble huevo frito.',
    price: 20.00,
    image: 'https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isSignature: true,
    badge: 'Ultra Carnívora ⚡',
    prepTimeMinutes: 18,
    includesDefault: 'Papas fritas artesanales, ensalada y cremas'
  },
  {
    id: 'burger-brutal',
    name: 'Hamburguesa Brutal',
    categoryId: 'hamburguesas',
    description: 'Carne especial 200g, chuleta ahumada, filete de pechuga, tocino ahumado, huevo frito, jamón y doble queso.',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isSignature: true,
    badge: 'Plato Insignia 🔥',
    prepTimeMinutes: 20,
    includesDefault: 'Papas fritas artesanales, ensalada y cremas'
  },
  {
    id: 'burger-la-toxica',
    name: 'Hamburguesa "La Tóxica"',
    categoryId: 'hamburguesas',
    description: 'La reina indiscutible: Pollo encuentro broaster deshuesado, carne artesanal, chuleta ahumada, chorizo parrillero, tocino, huevo frito, jamón y queso.',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=800&q=80',
    isAvailable: false, // Agotado Temporal
    isSignature: true,
    badge: 'Leyenda Rey Ven ⚠️',
    prepTimeMinutes: 22,
    includesDefault: 'Papas fritas artesanales, ensalada y cremas'
  },

  // --- SALCHIPAPAS ---
  {
    id: 'salchi-clasica',
    name: 'Salchipapa Clásica',
    categoryId: 'salchipapas',
    description: 'Abundante porción de papas nativas doraditas y salchicha vianesa ahumada picadita.',
    price: 13.00,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 10,
    includesDefault: 'Papas fritas crujientes y variedad de cremas'
  },
  {
    id: 'salchi-huevo',
    name: 'Salchi Huevo',
    categoryId: 'salchipapas',
    description: 'Salchicha ahumada vianesa servida con corona de huevo frito a la plancha.',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 12,
    includesDefault: 'Papas fritas crujientes y variedad de cremas'
  },
  {
    id: 'salchi-frankfurther',
    name: 'Salchi Frankfurther',
    categoryId: 'salchipapas',
    description: 'Salchicha Frankfurther especial alemana sobre colchón de papas amarillas doradas.',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 12,
    includesDefault: 'Papas fritas crujientes y variedad de cremas'
  },
  {
    id: 'salchi-royal',
    name: 'Salchi Royal',
    categoryId: 'salchipapas',
    description: 'Salchicha vianesa ahumada, huevo frito de yema blanda y lámina gratinada de queso Danbo.',
    price: 17.00,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isSignature: true,
    badge: 'Favorito',
    prepTimeMinutes: 12,
    includesDefault: 'Papas fritas crujientes y variedad de cremas'
  },
  {
    id: 'salchi-burger',
    name: 'Salchi Burger',
    categoryId: 'salchipapas',
    description: 'Salchicha ahumada, carne de hamburguesa casera troceada a la plancha y huevo frito.',
    price: 17.00,
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 15,
    includesDefault: 'Papas fritas crujientes y variedad de cremas'
  },
  {
    id: 'salchi-filete',
    name: 'Salchi Filete',
    categoryId: 'salchipapas',
    description: 'Salchicha vianesa acompañada de tiernos trozos de filete de pechuga dorada.',
    price: 17.00,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 15,
    includesDefault: 'Papas fritas crujientes y variedad de cremas'
  },
  {
    id: 'salchi-pollo-deshilachado',
    name: 'Salchi Pollo Deshilachado',
    categoryId: 'salchipapas',
    description: 'Salchicha vianesa bañada en suculento pollo deshilachado de la casa.',
    price: 17.00,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 12,
    includesDefault: 'Papas fritas crujientes y variedad de cremas'
  },
  {
    id: 'salchi-a-lo-pobre',
    name: 'Salchi a lo Pobre',
    categoryId: 'salchipapas',
    description: 'Fusión inolvidable: Salchicha ahumada, huevo frito y plátano dulce caramelizado.',
    price: 17.00,
    image: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isSignature: true,
    badge: 'Criolla Star 🇵🇪',
    prepTimeMinutes: 15,
    includesDefault: 'Papas fritas crujientes y variedad de cremas'
  },
  {
    id: 'salchi-ala',
    name: 'Salchi Ala Broaster',
    categoryId: 'salchipapas',
    description: 'Salchicha ahumada coronada con un ala broaster ultra crocante recién salida de sartén.',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 15,
    includesDefault: 'Papas fritas crujientes y variedad de cremas'
  },
  {
    id: 'salchi-pollo-especial',
    name: 'Salchi Pollo Especial',
    categoryId: 'salchipapas',
    description: 'Salchicha vianesa, abundante pollo deshilachado, huevo frito y manto de queso edam.',
    price: 20.00,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    prepTimeMinutes: 15,
    includesDefault: 'Papas fritas crujientes y variedad de cremas'
  },
  {
    id: 'salchi-pollo-rey-ven',
    name: 'Salchi Pollo Rey Ven',
    categoryId: 'salchipapas',
    description: 'La joya gastronómica de la casa: Salchicha vianesa, trozos de filete de pechuga, pollo deshilachado y jamón inglés.',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isSignature: true,
    badge: 'Especialidad de la Casa 👑',
    prepTimeMinutes: 18,
    includesDefault: 'Papas fritas crujientes y variedad de cremas'
  },
  {
    id: 'salchi-mania',
    name: 'Salchi Manía XL',
    categoryId: 'salchipapas',
    description: 'Trilogía suprema: Salchicha vianesa ahumada, Salchicha Frankfurther y Chorizo Parrillero.',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1514944298341-9ebb6b15809c?auto=format&fit=crop&w=800&q=80',
    isAvailable: false, // Agotado Temporal
    isSignature: true,
    badge: 'Para Compartir 👥',
    prepTimeMinutes: 20,
    includesDefault: 'Papas fritas crujientes y variedad de cremas'
  },

  // --- BEBIDAS Y ADICIONALES ---
  {
    id: 'bebida-chicha-1l',
    name: 'Chicha Morada Artesanal 1 Litro',
    categoryId: 'adicionales',
    description: 'Preparada diariamente con maíz morado de los valles peruanos, clavo, canela y toques de piña.',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    badge: '100% Natural 🍇',
    includesDefault: 'Bien heladita'
  },
  {
    id: 'bebida-gaseosa-15l',
    name: 'Gaseosa Inka Kola / Coca-Cola 1.5L',
    categoryId: 'adicionales',
    description: 'Gaseosa familiar helada para acompañar tus platos favoritos.',
    price: 9.00,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    includesDefault: 'Botella de 1.5 Litros'
  },
  {
    id: 'bebida-gaseosa-personal',
    name: 'Gaseosa Personal 500ml',
    categoryId: 'adicionales',
    description: 'Inka Kola o Coca-Cola heladita de 500ml.',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'extra-papas-fritas',
    name: 'Porción Adicional de Papas Fritas',
    categoryId: 'adicionales',
    description: 'Papas doradas crocantes con sazón especial de sal marina y orégano.',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'extra-arroz',
    name: 'Porción Extra de Arroz Blanco',
    categoryId: 'adicionales',
    description: 'Arroz blanco graneadito con toque de ajo criollo.',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  }
];
