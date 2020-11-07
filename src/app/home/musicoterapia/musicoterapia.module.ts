import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicoterapiaPageRoutingModule } from './musicoterapia-routing.module';

import { MusicoterapiaPage } from './musicoterapia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicoterapiaPageRoutingModule
  ],
  declarations: [MusicoterapiaPage]
})
export class MusicoterapiaPageModule {}
