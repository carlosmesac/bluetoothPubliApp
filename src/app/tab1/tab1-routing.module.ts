import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { RestaurantResolverService } from './restaurant-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    resolve:[RestaurantResolverService]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
