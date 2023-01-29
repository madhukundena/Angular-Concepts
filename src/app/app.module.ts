import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { NotificationService } from './notification.service';
import { NotificationBoardComponent } from './notification-board/notification-board.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { CounterComponent } from './view-child/counter/counter.component';
import { TDFComponent } from './tdf/tdf.component';
import { FormsModule } from '@angular/forms';
import { HooksComponent } from './hooks/hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    RxjsComponent,
    NotificationBoardComponent,
    ViewChildComponent,
    CounterComponent,
    TDFComponent,
    HooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
