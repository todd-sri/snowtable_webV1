import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../../../order/services/order.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { NotificationService } from '../../../../../../shared/services/notification.service';

interface Event {
  event_id: string;
  event_name: string;
  event_comment: string;
  table_no: number;
}

interface RequestData {
  events: Event[];
  received_count: number;
}


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  requestList: Event[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  showPopup = false;
  private subscription: Subscription | null = null;
  
  constructor(private request: OrderService, private notificationService: NotificationService) {  
  }
  ngOnInit() {
    if(this.requestList.length === 0) {
      this.getRequests()
    } 
    this.subscription = timer(0, 9000).pipe(
      switchMap(() => this.request.getRequests())
    ).subscribe(orders => {
      this.request.getRequests().subscribe((data: RequestData) => {
          if(this.requestList.length != data.events.length){
            this.notificationService.showNotification('You have new  '+ data.events[data.events.length-1].event_name+' request');
            this.requestList = data.events;
          }
      });
    });

  }
  getRequests() {
    this.request.getRequests().subscribe((data: RequestData) => {
      this.requestList = data.events; 
    });

    
  }

  nextPage(): void {
    if (this.currentPage < this.requestList.length / this.itemsPerPage) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  completeEvent(event: Event): void {
    this.request.completeEvent(event.event_id).subscribe((data)=>{
      if(data.message === 'Completed event created successfully') {
      this.showPopup = true;
      this.requestList = this.requestList.filter(e => e.event_id !== event.event_id);
      }
      // this.getRequests();
    });
  }
  handlePopupClose(): void {
    this.showPopup = false; // Hide the popup
  }




}
