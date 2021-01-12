import { Component, NgZone, OnInit } from "@angular/core";
import { BackgroundMode } from "@ionic-native/background-mode/ngx";
import { BLE } from "@ionic-native/ble/ngx";
import { RestaurantService } from "../tab1/restaurant.service";
import { Restaurant } from "../tab1/restaurant.model";
import { Router } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  allRestaurants: Restaurant[];
  devices: any[] = [];
  matchingDevices: Restaurant[] = [];
  isAndroid:boolean
  firstScan:boolean = false
  constructor(
    private ble: BLE,
    private ngZone: NgZone,
    private backgroundMode: BackgroundMode,
    private restaurantService: RestaurantService,
    private router:Router,
    private localNotifications:LocalNotifications,
    public platform: Platform
  ) {
    this.backgroundMode.on("activate").subscribe((s) => {
      console.log("Background mode activated");
      setInterval(()=>{
        this.Scan()
      },30000)
    });
    this.backgroundMode.enable();
  }

  ngOnInit() {
    this.isAndroid = this.platform.is("android")
    this.allRestaurants = this.restaurantService.getRestaurants();
    setTimeout(() => {
      this.Scan();
      this.firstScan = true
    }, 15);
  }

  Scan() {
    this.matchingDevices=[]
    this.devices = [];
    this.ble.scan([], 15).subscribe((device) => {
      this.onDeviceDiscover(device);
    });
  }
  onDeviceDiscover(device) {
    console.log("Discovered" + JSON.stringify(device, null));
    this.ngZone.run(async () => {
      this.devices.push(device);
      console.log(device);
      await this.compareDevices(device);
      console.log(this.matchingDevices);
    });
  }

  compareDevices(device) {
    this.allRestaurants.forEach((restaurant) => {
      if (device.id == restaurant.MAC) {
        this.matchingDevices.push(restaurant);
        this.localNotifications.schedule({
          id: 1,
          text: 'Tiene el restaurante '+restaurant.restaurantName+' cerca',
          sound: this.isAndroid? 'file://sound.mp3': 'file://beep.caf',
        });
      }
    });
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.Scan();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 4000);
  }
  onClick(uid: string) {
    console.log("pulsar boton");

    this.router.navigate(["menu-master", { uid: uid }]);
  }
}
