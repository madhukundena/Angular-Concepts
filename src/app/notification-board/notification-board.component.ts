import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification-board',
  templateUrl: './notification-board.component.html',
  styleUrls: ['./notification-board.component.css']
})
export class NotificationBoardComponent implements OnInit {
  notificationmsg: string='';

  constructor(private ns:NotificationService) { }

  ngOnInit(): void {
    this.ns.notificationsubject.subscribe(d =>{
      this.notificationmsg = d;
      // console.log(d);
    });
  }

}
