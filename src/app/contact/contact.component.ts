import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ns:NotificationService) { }

  ngOnInit(): void {
  }
  sendMessage(message:string){
    // alert('sending value'+message)
    this.ns.sendNotification(message);
  }
}
