import { Routes } from '@angular/router';

const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import('./change-detection/change-detection.component'),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./control-flow/control-flow.component'),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () => import('./defer-options/defer-options.component'),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./defer-views/defer-views.component'),
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () => import('./user/user.component'),
      },
      {
        path: 'users',
        title: 'Users',
        loadComponent: () => import('./users/users.component'),
      },
      {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: () =>
          import('./view-transition/view-transition.component'),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'change-detection',
      },
    ],
  },
];

export default DASHBOARD_ROUTES;
