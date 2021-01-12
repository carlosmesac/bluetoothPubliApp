export class Restaurant {
    public MAC:string;
    public email:string;
    public creationDate:string;
    public restaurantName:string;
    public userID:string;
   
    constructor(MAC:string,email:string,creationDate:string,restaurantName:string,userID:string) {
      this.email = email;
      this.creationDate = creationDate;
      this.restaurantName = restaurantName;
      this.userID = userID;
      this.MAC = MAC;
    }
  }
  