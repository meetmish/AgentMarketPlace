import { Injectable, signal, computed } from '@angular/core';
import { User, UserRole } from '../models/agenthub.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Signals are perfect for scalable state management
  currentUser = signal<User | null>(null);

  isAuthenticated = computed(() => !!this.currentUser());
  isAdmin = computed(() => this.currentUser()?.role === 'ADMIN');
  isPublisher = computed(() => this.currentUser()?.role === 'PUBLISHER');
  isUser = computed(() => this.currentUser()?.role === 'USER');

  constructor() {
    // Initial check for a session (safe for Server-Side Rendering)
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('agent_session');
      if (saved) {
        this.currentUser.set(JSON.parse(saved));
      }
    }
  }

  login(role: UserRole) {
    const mockUser: User = {
      id: Math.random().toString(36).substring(7),
      name: `${role.charAt(0).toUpperCase() + role.slice(1).toLowerCase()} User`,
      email: `${role.toLowerCase()}@agenthub.io`,
      role: role,
      subscription: role === 'PUBLISHER' ? 'PREMIUM' : 'BASIC'
    };
    
    this.currentUser.set(mockUser);
    localStorage.setItem('agent_session', JSON.stringify(mockUser));
  }

  logout() {
    this.currentUser.set(null);
    localStorage.removeItem('agent_session');
  }
}
