import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../tab1/restaurant.service';
import { Menu } from '../menu-master/menu.model';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.page.html',
  styleUrls: ['./menu-detail.page.scss'],
})
export class MenuDetailPage implements OnInit {
  menu:Menu
  constructor(private restaurantService:RestaurantService) { }

  ngOnInit() {
    this.menu = this.restaurantService.getCurrentMenu()
    
  }

}
