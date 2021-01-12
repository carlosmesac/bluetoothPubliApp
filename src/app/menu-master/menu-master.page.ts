import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { Router, ActivatedRouteSnapshot, Params, ActivatedRoute } from '@angular/router';
import { Menu } from './menu.model';
import { Restaurant } from '../tab1/restaurant.model';
import { RestaurantService } from '../tab1/restaurant.service';

@Component({
  selector: 'app-menu-master',
  templateUrl: './menu-master.page.html',
  styleUrls: ['./menu-master.page.scss'],
})
export class MenuMasterPage implements OnInit {

  restaurantID:string;
  menus: Menu[];
  constructor(private dataStorageService:DataStorageService, private router:Router, private route:ActivatedRoute,private restaurantService:RestaurantService ) { }
  ngOnInit() {
    this.restaurantID =  this.route.snapshot.paramMap.get('uid');
    this.dataStorageService.fetchMenus(this.restaurantID).subscribe((menus:Menu[])=>{
      this.menus = menus;
      console.log(menus);
      
    })    
  }

  onSelectMenu(menu:Menu){
    this.restaurantService.setCurrentMenu(menu)
    this.router.navigate(['menu-detail'])
  }
}
