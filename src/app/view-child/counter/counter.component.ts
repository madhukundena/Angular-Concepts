import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  // 1
  public counter: number=0;
  constructor() { }

  ngOnInit(): void {
  }
  // 2
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }

}
