import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HooksComponent } from './hooks/hooks.component';
import { ProductDashboardModule } from './product-dashboard/product-dashboard.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TDFComponent } from './tdf/tdf.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'contact', component:ContactComponent},
  { 
    path: 'product',
    loadChildren: () => import('./product-dashboard/product-dashboard.module').then(x => x.ProductDashboardModule)
 },
 { path:'rxjs', component:RxjsComponent },
 { path:'ViewChild', component:ViewChildComponent },
 {path:'tdf',component:TDFComponent},
 {path:'hooks',component:HooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
