import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
//import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit,  OnDestroy{
  private mySubsription:any;
  constructor() { }

  ngOnInit(): void {
    //promise
  const promise = new Promise(resolve =>{
    console.log('promise is working.....')
    setInterval(()=>{
      resolve('promise is working');
      resolve('promise is working1');
      resolve('promise is working2');
    },1000)
  })
  //promise.then(result =>console.log(result));
  
  //observable
  const obserable = new Observable(sub =>{
    console.log('obserable is working....')
    let counter = 0;
    setInterval(()=>{
      counter= counter+1;
      sub.next(counter);
    },1000)
  })
  //this.mySubsription = obserable.subscribe(result=>console.log('subscriber count'+result))

  //operators
  // obserable.pipe(
  //   filter(d =>d == 'observable is working1')
  // ).subscribe(result => console.log(result));

}
ngOnDestroy(){
  this.mySubsription.unsubscribe();
}
public salesProducts = [
  {id:1, name: 'Acs',price:'100'},
  {id:2, name: 'Phones',price:'2000'},
  {id:3, name: 'Fashion',price:'5000'},
  {id:4, name: 'Electronics',price:'3000'}
];

public topProducts = [
  {id:1, name: 'Phone',price:'2000'},
  {id:2, name: 'Laptop',price:'2000'},
  {id:3, name: 'Decor',price:'5000'},
  {id:4, name: 'Electronics',price:'3000'}
]




}