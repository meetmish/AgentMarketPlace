export type UserRole = 'USER' | 'PUBLISHER' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  subscription?: 'BASIC' | 'PREMIUM' | 'ENTERPRISE';
  avatar?: string;
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  features: string[];
  publisherId: string;
  rating: number;
  revenue?: number; // Report requirement
  isApproved: boolean; // Admin requirement
}
