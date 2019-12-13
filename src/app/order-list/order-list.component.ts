import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../shared/orders.service";
// import { Observable } from "rxjs/";
// import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  coffeeOrders;
  constructor(public ordersService:OrdersService) {

   // this.coffeeOrders= this.firestore.collection("coffeeOrders").valueChanges();
   }

  ngOnInit() {

    this.getCoffeeOrders();
    //console.log("ddd", this.coffeeOrders);
  }

  getCoffeeOrders = () =>
      this.ordersService
      .getCoffeeOrders()
      .subscribe(res =>{this.coffeeOrders = res});
      


    //   markCompleted = data => 
    //   this.ordersService.updateCoffeeOrder(data);
      
    //   updateCoffeeOrder(data) {
    //     return
    //         this.firestore
    //         .collection("coffeeOrders")
    //         .doc(data.payload.doc.id)
    //         .set({ completed: true }, { merge: true });
    //  }


    markCompleted = (data) => 
    this.ordersService.updateCoffeeOrder(data);

    deleteOrder = (data) => this.ordersService.deleteCoffeeOrder(data);
}
