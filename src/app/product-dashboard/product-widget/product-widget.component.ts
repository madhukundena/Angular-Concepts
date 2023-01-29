import { Component, OnInit, Input ,ContentChild,ElementRef,AfterContentInit,ContentChildren} from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.css']
})
export class ProductWidgetComponent implements OnInit,AfterContentInit {
  @Input() products:any;
  constructor() { }

  @ContentChild('head')contenthead:ElementRef | undefined;
  // @ContentChildren('head')contenthead:ElementRef | undefined;
  ngAfterContentInit(): void {
    console.log(this.contenthead);
    this.contenthead?.nativeElement.setAttribute('style','color:red');
  }

  ngOnInit(): void {
    //console.log(this.contenthead);
    //output is undefiend as it is not loaded
  }

  

}
