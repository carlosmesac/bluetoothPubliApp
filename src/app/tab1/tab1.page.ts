import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../data-storage.service';
import { Restaurant } from './restaurant.model';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
 restaurants: Restaurant[];
  constructor(private router:Router, private dataStorageService: DataStorageService, private restaurantService: RestaurantService) {}
  
  ngOnInit() {
    this.dataStorageService.fetchRestaurants().subscribe((restaurants:Restaurant[])=>{
      this.restaurantService.setRestaurant(restaurants);  

      this.restaurants=restaurants
    })
  }


  onClick(uid:string){
    console.log("pulsar boton");
 
    this.router.navigate(['menu-master',{uid:uid}]);
    
  }
}
