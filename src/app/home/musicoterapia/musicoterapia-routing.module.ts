import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicoterapiaPage } from './musicoterapia.page';

const routes: Routes = [
  {
    path: '',
    component: MusicoterapiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicoterapiaPageRoutingModule {}
