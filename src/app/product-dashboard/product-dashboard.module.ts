import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import {  RouterModule, Routes } from '@angular/router';
import { ProductWidgetComponent } from './product-widget/product-widget.component';

const routes:Routes=[
  {path:'',component:ProductDashboardComponent}
];

@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductWidgetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) //RouterModule.forRoot(routes) in routingmodule.ts file
  ],
  exports:[ProductDashboardComponent]
})
export class ProductDashboardModule { 
  constructor(){
    console.log('product Dashboard');
  }
}

