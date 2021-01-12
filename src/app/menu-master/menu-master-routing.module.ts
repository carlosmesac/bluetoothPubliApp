import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuMasterPage } from './menu-master.page';

const routes: Routes = [
  {
    path: '',
    component: MenuMasterPage,
    children:[{
      path:':id',
      component:MenuMasterPage
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuMasterPageRoutingModule {}
