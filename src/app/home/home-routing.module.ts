import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [

      {
        path: 'sobre',
        loadChildren: () => import('./sobre/sobre.module').then(m => m.SobrePageModule)
      },
      {
        path: 'forum',
        loadChildren: () => import('./forum/forum.module').then(m => m.ForumPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./forum/forum.module').then(m => m.ForumPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'musicoterapia',
        loadChildren: () => import('./musicoterapia/musicoterapia.module').then( m => m.MusicoterapiaPageModule)
      },

    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
