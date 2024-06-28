import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'agents' },
  {
    path: 'agents',
    loadChildren: () => import('./agents/agents.module').then(m => m.AgentsModule)
  }
];
