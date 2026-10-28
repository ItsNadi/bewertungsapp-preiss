import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full',
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.page').then((m) => m.ProjectsPage),
  },
  {
    path: 'project-detail/:id',
    loadComponent: () => import('./pages/project-detail/project-detail.page').then((m) => m.ProjectDetailPage),
  },
];