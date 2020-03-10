import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from "rxjs/Observable";
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public data1: Observable<any[]>;
  public data2: Promise<any>;
  public data3: Promise<any>;

  constructor(private firestore: AngularFirestore) {
  //  this.data= this.firestore.collection("coffeeOrders").valueChanges();

  //   console.log("ddd", this.data);
   }

  form = new FormGroup({        
    customerName: new FormControl(''),
    courseName: new FormControl(''),
    coffeeOrder: new FormControl(''), 
    completed: new FormControl(false)
})

createCoffeeOrder(data) {
  return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("course")
          .add(data)
          .then(res => {}, err => reject(err));
  });
}


getCoffeeOrders() { 
  this.data1=
   this.firestore.collection("course").snapshotChanges();
  
 return this.data1;
}

updateCoffeeOrder(data) {
  this.data2=
      this.firestore
      .collection("course")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
      return this.data2;
}
deleteCoffeeOrder(data) {
   this.data3=
       this.firestore
       .collection("course")
       .doc(data.payload.doc.id)
       .delete();
       return this.data3;

}
}
