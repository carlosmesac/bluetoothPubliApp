import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Restaurant } from "./restaurant.model";
import { Menu } from '../menu-master/menu.model';

@Injectable({
  providedIn: "root",
})
export class RestaurantService {
    private menu:Menu
  restaurantChanged = new Subject<Restaurant[]>();
  private restaurants: Restaurant[] = [];
  private currentRestaurant: Restaurant;
  constructor() {}

  getRestaurants() {
    return this.restaurants.slice();
  }
  getRestaurantFromID(id: number) {
    return this.restaurants[id];
  }
  setRestaurant(restaurants: Restaurant[]) {
    this.restaurants = restaurants;
    this.restaurantChanged.next(this.restaurants.slice());
  }
  setCurrentRestaurant(restaurant: Restaurant) {
    this.currentRestaurant = restaurant;
  }
  setCurrentMenu(menu:Menu){
      this.menu = menu
  }
  getCurrentMenu(){
      return this.menu;
  }
}

