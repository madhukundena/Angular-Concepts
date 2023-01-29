import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  constructor() {
    console.log('constructor called');
   }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

}
