import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent implements OnInit {
  country = ["India", "UK", "USA"];
  user;
  constructor() {
    this.user ={
      firstname:'madhu',
      lastname:'kundena',
      address : {
        city:'sample city'
      }
    };
   }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm){
    console.log(data.value);  
  }
  formReset(userdata:NgForm){
    console.log('reset called');
    userdata.resetForm({
      firstname:'test',
      lastname:'old city'
    });
    console.log(userdata.value);
  }
}
