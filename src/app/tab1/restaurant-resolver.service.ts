import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantService } from './restaurant.service';
import { DataStorageService } from '../data-storage.service';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantResolverService {
  restaurants:Restaurant[];
  constructor(private restaurantService:RestaurantService, private dataStorageService:DataStorageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Restaurant[] | Observable<Restaurant[]> | Promise<Restaurant[]> {
    let restaurants = this.restaurantService.getRestaurants()
    if(restaurants.length===0){
      this.dataStorageService.fetchRestaurants().subscribe((restaurants:Restaurant[])=>{
        this.restaurants = restaurants;
      })
      restaurants = this.restaurants;
      return restaurants;

    }else{
      return restaurants
    }
  }
}
