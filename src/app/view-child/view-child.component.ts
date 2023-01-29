import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild,ViewChildren } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit,AfterViewInit {
  @ViewChild('childview')
  private chview ={} as CounterComponent;
  
  // 1 import
  @ViewChild('highlight')
  private ele = {} as ElementRef;

  // 2_1
  @ViewChildren('highlight_1')
  private ele_1 ={} as QueryList<any>;
  
  // private ele_1 = {} as ElementRef;
  constructor() { 
    //we are printing before the view got initalized so value is undefined.
    console.log(this.ele);
  }
  ngAfterViewInit(): void {
    console.log(this.ele);// 2
    this.ele.nativeElement.style.backgroundColor = 'cyan';
		this.ele.nativeElement.style.color = 'red';
    
    // 2_2
    console.log(this.ele_1);
    this.ele_1.first.nativeElement.style.color='blue'; //first ele
    this.ele_1.last.nativeElement.style.color='blue'; //last ele
    this.ele_1.get(1).nativeElement.style.color='blue'; //ele at index
  
  
  }

  ngOnInit(): void {
  }

  inc(){  
    this.chview.increment();
  }
  dec(){
    this.chview.decrement();
  }


} 
