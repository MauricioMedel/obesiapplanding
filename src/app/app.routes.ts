import { Routes } from '@angular/router';

export const routes: Routes = [

  // Landing pública
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/pages/landing-page/landing-page.component').then(
        m => m.LandingPageComponent
      ),
  },

  // Login Admin
  {
    path: 'login',
    loadComponent: () =>
      import('./admin/pages/login/login.component').then(
        m => m.LoginComponent
      ),
  },

   // Panel
  {
    path: 'panel',
    loadComponent: () =>
      import('./panel/pages/panel/panel.component')
      .then(m => m.PanelComponent),
  },


  // Ruta no encontrada
  {
    path: '**',
    redirectTo: '',
  }

];