import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreinoRespPageRoutingModule } from './treino-resp-routing.module';

import { TreinoRespPage } from './treino-resp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinoRespPageRoutingModule
  ],
  declarations: [TreinoRespPage]
})
export class TreinoRespPageModule {}
