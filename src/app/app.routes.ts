import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'agenthub',
    loadComponent: () => import('./features/marketplace/marketplace/marketplace.component').then(m => m.AgentHubComponent)
  }, {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'publisher',
    loadComponent: () => import('./features/publisher/publisher-dashboard/publisher-dashboard.component').then(m => m.PublisherDashboardComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./features/admin/admin-panel/admin-panel.component').then(m => m.AdminPanelComponent)
  },
  { path: '**', redirectTo: '' }
];
