import { Routes } from '@angular/router';
import { SignalsLayoutComponent } from '../layout/signals-layout/signals-layout.component';

const SIGNALS_ROUTES: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      {
        path: 'counter',
        loadComponent: () => import('./counter-page/counter-page.component'),
      },
      {
        path: 'user-info',
        loadComponent: () =>
          import('./user-info-page/user-info-page.component'),
      },
      {
        path: 'properties',
        loadComponent: () =>
          import('./properties-page/properties-page.component'),
      },
      { path: '**', redirectTo: 'counter', pathMatch: 'full' },
    ],
  },
];

export default SIGNALS_ROUTES;
