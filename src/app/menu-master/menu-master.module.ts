import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuMasterPageRoutingModule } from './menu-master-routing.module';

import { MenuMasterPage } from './menu-master.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuMasterPageRoutingModule
  ],
  declarations: [MenuMasterPage]
})
export class MenuMasterPageModule {}
