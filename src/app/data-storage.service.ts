import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor( private fireDB: AngularFireDatabase
    ) { }

  fetchRestaurants() {
    return this.fireDB
    .list('users', (ref) => {
      return ref.orderByChild('restaurantName'); //Filtro
    })
    .valueChanges();

  }
  fetchMenus(uid) {
    return this.fireDB
    .list('menus', (ref) => {
      return ref.orderByChild('uid').equalTo(uid); //Filtro
    })
    .valueChanges();

  }
}
