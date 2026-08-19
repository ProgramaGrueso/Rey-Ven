import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Flame, Sparkles, Plus, Clock, ChefHat, Check } from 'lucide-react';
import { CATEGORIES } from '../../data/mockMenu';
import { MenuItem, CategoryId } from '../../types/menu';
import { useOrders } from '../../context/OrderContext';

interface MenuCatalogProps {
  onSelectDish: (dish: MenuItem) => void;
}

export const MenuCatalog: React.FC<MenuCatalogProps> = ({ onSelectDish }) => {
  const { menuItems } = useOrders();
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc'>('popular');

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = selectedCategory === 'todos' || item.categoryId === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      // Default signature priority
      if (a.isSignature && !b.isSignature) return -1;
      if (!a.isSignature && b.isSignature) return 1;
      return 0;
    });
  }, [menuItems, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="menu-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-500/20 pb-6">
        <div>
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestra Carta Digital</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-100">
            Platos & Ecosistema de Sabores
          </h2>
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          
          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar plato, ingrediente..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#141414] border border-amber-500/20 text-xs text-slate-200 focus:outline-none focus:border-amber-400 transition-colors placeholder:text-slate-500"
            />
          </div>

          {/* Sort Selector */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl bg-[#141414] border border-amber-500/20 text-xs text-slate-300 focus:outline-none focus:border-amber-400 transition-colors cursor-pointer appearance-none pr-8"
            >
              <option value="popular">Ordenar: Destacados Rey Ven</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
            </select>
            <SlidersHorizontal className="w-3.5 h-3.5 absolute right-3 top-3 text-slate-400 pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('todos')}
          className={`px-5 py-3 rounded-2xl text-xs font-bold tracking-wide whitespace-nowrap transition-all flex items-center space-x-2 border ${
            selectedCategory === 'todos'
              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
              : 'bg-[#141414] text-slate-300 border-white/5 hover:border-amber-500/40 hover:bg-[#1C1C1C]'
          }`}
        >
          <span>🔥 Todo el Menú ({menuItems.length})</span>
        </button>

        {CATEGORIES.map(cat => {
          const count = menuItems.filter(i => i.categoryId === cat.id).length;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold tracking-wide whitespace-nowrap transition-all flex items-center space-x-2 border ${
                isSelected
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                  : 'bg-[#141414] text-slate-300 border-white/5 hover:border-amber-500/40 hover:bg-[#1C1C1C]'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name} ({count})</span>
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-[#121212] rounded-3xl border border-white/5">
          <p className="text-slate-400 text-sm">No se encontraron platos que coincidan con tu búsqueda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className={`group relative rounded-3xl bg-[#121212] border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                item.isAvailable
                  ? 'border-amber-500/20 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1'
                  : 'border-white/5 opacity-60 grayscale'
              }`}
            >
              
              {/* Image & Badges Container */}
              <div className="relative h-56 w-full overflow-hidden bg-[#181818]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-1.5">
                  {item.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase shadow">
                      {item.badge}
                    </span>
                  )}
                  {item.prepTimeMinutes && (
                    <span className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-slate-300 text-[10px] font-medium flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{item.prepTimeMinutes} min</span>
                    </span>
                  )}
                </div>

                {/* Stock Status Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      item.isAvailable
                        ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300'
                        : 'bg-red-950/80 border border-red-500/40 text-red-300'
                    }`}
                  >
                    {item.isAvailable ? 'Disponible' : 'Agotado'}
                  </span>
                </div>
              </div>

              {/* Item Info Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Included Items Tag */}
                  {item.includesDefault && (
                    <div className="mt-3 flex items-center space-x-1.5 text-[10px] text-slate-400">
                      <ChefHat className="w-3.5 h-3.5 text-amber-400/80 shrink-0" />
                      <span className="truncate">{item.includesDefault}</span>
                    </div>
                  )}
                </div>

                {/* Footer Controls: Price & Add Button */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Precio</span>
                    <span className="font-mono text-xl font-black text-amber-400">
                      S/ {item.price.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => item.isAvailable && onSelectDish(item)}
                    disabled={!item.isAvailable}
                    className={`px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center space-x-1.5 transition-all ${
                      item.isAvailable
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 active:scale-95'
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                    <span>{item.isAvailable ? 'Pedir' : 'Agotado'}</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      )}

    </section>
  );
};
