import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Role } from '../types/user';

interface AuthContextType {
  role: Role;
  isPinModalOpen: boolean;
  targetRole: Role | null;
  pinError: string | null;
  switchRoleRequest: (newRole: Role) => void;
  authenticatePin: (pin: string) => boolean;
  closePinModal: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const PINS: Record<'COCINA' | 'ADMIN', string> = {
  COCINA: '1234',
  ADMIN: '9999'
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<Role>('CLIENTE');
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [targetRole, setTargetRole] = useState<Role | null>(null);
  const [pinError, setPinError] = useState<string | null>(null);

  const switchRoleRequest = (newRole: Role) => {
    if (newRole === 'CLIENTE') {
      setRole('CLIENTE');
      setIsPinModalOpen(false);
      setTargetRole(null);
      setPinError(null);
    } else {
      setTargetRole(newRole);
      setPinError(null);
      setIsPinModalOpen(true);
    }
  };

  const authenticatePin = (pin: string): boolean => {
    if (!targetRole || targetRole === 'CLIENTE') return false;

    const expectedPin = PINS[targetRole as 'COCINA' | 'ADMIN'];
    if (pin === expectedPin) {
      setRole(targetRole);
      setIsPinModalOpen(false);
      setTargetRole(null);
      setPinError(null);
      return true;
    } else {
      setPinError(`PIN incorrecto para acceso de ${targetRole}. Intenta de nuevo.`);
      return false;
    }
  };

  const closePinModal = () => {
    setIsPinModalOpen(false);
    setTargetRole(null);
    setPinError(null);
  };

  const logout = () => {
    setRole('CLIENTE');
    setIsPinModalOpen(false);
    setTargetRole(null);
  };

  return (
    <AuthContext.Provider
      value={{
        role,
        isPinModalOpen,
        targetRole,
        pinError,
        switchRoleRequest,
        authenticatePin,
        closePinModal,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
