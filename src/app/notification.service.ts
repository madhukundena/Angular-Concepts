import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  // public notificationsubject = new Subject<string>();  //normal subject
  public notificationsubject = new BehaviorSubject<string>('greetings from behaviour subject');
  constructor() { }
  sendNotification(data:any){
    this.notificationsubject.next(data);
  }
}
