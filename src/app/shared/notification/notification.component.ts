import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  showNotification: boolean = false;
  message: string = '';

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotification().subscribe((message) => {
      if(message != "") {
        this.playNotificationSound();
        this.message = message;
        this.showNotification = true;
        setTimeout(() => {
          this.showNotification = false;
          this.message = "";
        }, 10000);
      }
    });
  }
  private playNotificationSound() {
    const audio = new Audio();
    audio.src = 'assets/level.mp3'; 
    audio.load();
    audio.play();
  }

}
