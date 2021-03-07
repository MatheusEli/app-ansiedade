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
        loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'treino-resp',
        loadChildren: () => import('./treino-resp/treino-resp.module').then(m => m.TreinoRespPageModule)
      },
      {
        path: 'ajudamedica',
        loadChildren: () => import('./ajudamedica/ajudamedica.module').then(m => m.AjudamedicaPageModule)
      },
      {
        path: 'dicas',
        loadChildren: () => import('./dicas/dicas.module').then(m => m.DicasPageModule)
      }
    ]
  },  {
    path: 'teleatendimento',
    loadChildren: () => import('./teleatendimento/teleatendimento.module').then( m => m.TeleatendimentoPageModule)
  }











];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
