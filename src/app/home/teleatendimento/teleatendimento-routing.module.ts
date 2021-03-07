import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeleatendimentoPage } from './teleatendimento.page';

const routes: Routes = [
  {
    path: '',
    component: TeleatendimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeleatendimentoPageRoutingModule {}
