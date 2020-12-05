import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DicasPageRoutingModule } from './dicas-routing.module';

import { DicasPage } from './dicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DicasPageRoutingModule
  ],
  declarations: [DicasPage]
})
export class DicasPageModule {}
