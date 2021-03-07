import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeleatendimentoPageRoutingModule } from './teleatendimento-routing.module';

import { TeleatendimentoPage } from './teleatendimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeleatendimentoPageRoutingModule
  ],
  declarations: [TeleatendimentoPage]
})
export class TeleatendimentoPageModule {}
