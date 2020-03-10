import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../shared/orders.service";
import {toastr} from 'angular-toastr';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  coffees = ["Arts & Humanities", "Business", "Computer Science", "Data Science", "Information Technology", "Health", "Math & Logic", "Personal Development", "Social Science","Language Learning"];

  constructor(public ordersService:OrdersService) { }

  coffeeOrder = [];
addCoffee = coffee => this.coffeeOrder.push(coffee);
removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
};


  ngOnInit() {
  }


  onSubmit(){
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.ordersService.form.value;
    
   this.ordersService.createCoffeeOrder(data)
       .then(res => {
         //console.log("success");
  
        //  toastr.success('Hello world!', 'Toastr fun!');
        
       });
  }


  

}
