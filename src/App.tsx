import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { OrderProvider } from './context/OrderContext';
import { CartProvider } from './context/CartContext';

import { Navbar } from './components/layout/Navbar';
import { RoleLoginModal } from './components/layout/RoleLoginModal';
import { InitialLoader } from './components/landing/InitialLoader';
import { EditorialHero } from './components/landing/EditorialHero';
import { GoldenCrownSection } from './components/landing/GoldenCrownSection';
import { IngredientsParallaxSection } from './components/landing/IngredientsParallaxSection';
import { LimaDeliverySection } from './components/landing/LimaDeliverySection';
import { FinalImpactCTA } from './components/landing/FinalImpactCTA';
import { EditorialFooter } from './components/landing/EditorialFooter';

import { MenuCatalog } from './components/client/MenuCatalog';
import { DishCustomizerModal } from './components/client/DishCustomizerModal';
import { CartDrawer } from './components/client/CartDrawer';
import { KDSScreen } from './components/kitchen/KDSScreen';
import { AdminDashboard } from './components/admin/AdminDashboard';

import { MenuItem } from './types/menu';

const MainAppContent: React.FC = () => {
  const { role } = useAuth();
  const [selectedDishForModal, setSelectedDishForModal] = useState<MenuItem | null>(null);

  const scrollToCatalog = () => {
    const catalogElem = document.getElementById('menu-catalog');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-slate-100 selection:bg-amber-500 selection:text-black">
      
      {/* Preloader */}
      <InitialLoader />

      {/* Global Navbar */}
      <Navbar />

      {/* Modals & Drawers */}
      <RoleLoginModal />
      <CartDrawer />
      <DishCustomizerModal
        dish={selectedDishForModal}
        onClose={() => setSelectedDishForModal(null)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {role === 'CLIENTE' && (
          <div className="animate-in fade-in duration-300">
            {/* CRAV Style One-Page Editorial Landing */}
            <EditorialHero onOrderClick={scrollToCatalog} />
            <GoldenCrownSection onOrderClick={scrollToCatalog} />
            <IngredientsParallaxSection />
            <LimaDeliverySection onOrderClick={scrollToCatalog} />
            <FinalImpactCTA onOrderClick={scrollToCatalog} />

            {/* Pedidos Carta Interactive Catalog */}
            <MenuCatalog onSelectDish={dish => setSelectedDishForModal(dish)} />

            {/* CRAV Style Editorial Footer */}
            <EditorialFooter />
          </div>
        )}

        {role === 'COCINA' && (
          <div className="animate-in fade-in duration-300">
            <KDSScreen />
          </div>
        )}

        {role === 'ADMIN' && (
          <div className="animate-in fade-in duration-300">
            <AdminDashboard />
          </div>
        )}
      </main>

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <OrderProvider>
        <CartProvider>
          <MainAppContent />
        </CartProvider>
      </OrderProvider>
    </AuthProvider>
  );
};

export default App;
