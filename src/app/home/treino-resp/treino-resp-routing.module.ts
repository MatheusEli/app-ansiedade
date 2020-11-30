import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreinoRespPage } from './treino-resp.page';

const routes: Routes = [
  {
    path: '',
    component: TreinoRespPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreinoRespPageRoutingModule {}
