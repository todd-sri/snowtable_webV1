import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../../../order/services/order.service';

interface Event {
  event_id: string;
  event_name: string;
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

  constructor(private request: OrderService) {
    
  }

  ngOnInit() {
   this.getRequests()
  }
  getRequests() {
    this.request.getRequests().subscribe((data: RequestData) => {
      debugger
      this.requestList = data.events; // Correctly accessing 'events' array
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
    debugger
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
