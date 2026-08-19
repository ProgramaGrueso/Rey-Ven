export type Role = 'CLIENTE' | 'COCINA' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  role: Role;
}
