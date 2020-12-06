import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjudamedicaPage } from './ajudamedica.page';

const routes: Routes = [
  {
    path: '',
    component: AjudamedicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjudamedicaPageRoutingModule {}
