import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjudamedicaPageRoutingModule } from './ajudamedica-routing.module';

import { AjudamedicaPage } from './ajudamedica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjudamedicaPageRoutingModule
  ],
  declarations: [AjudamedicaPage]
})
export class AjudamedicaPageModule {}
