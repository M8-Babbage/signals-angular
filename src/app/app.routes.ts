import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signals',
    loadChildren: () => import('./signals/pages/signals.routes'),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/pages/dashboard.routes'),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
];
