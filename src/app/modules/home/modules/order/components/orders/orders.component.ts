import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, switchMap, timer } from 'rxjs';
import { OrderService } from '../../services/order.service';
import { NotificationService } from '../../../../../../shared/services/notification.service';

interface Order {
  id: number;
  tableNumber: number;
  items: { item: string, quantity: number }[];
  customerName: string;
  customerPhone: string;
  status: string; // 'active' or 'inactive'
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  currentPage: number = 1;
  ordersPerPage: number = 8;
  private subscription: Subscription | null = null;
  realList: any[] = [];
  showPopup = false;

  constructor(private orderService: OrderService, private notificationService: NotificationService) {}

  ngOnInit() {
    if(this.orders.length === 0) {
      this.orderService.getOrders().subscribe(orders => {
        this.orders = orders.reverse();
        this.realList = [...orders];
        this.received();
      });
    }
    this.subscription = timer(0, 9000).pipe(
      switchMap(() => this.orderService.getOrders())
    ).subscribe(orders => {
      this.orderService.getOrders().subscribe(orders => {
        if(this.realList.length != orders.length){
           this.notificationService.showNotification('New order received');
           this.orders = orders.reverse();
           this.realList = [...orders];
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get paginatedOrders(): Order[] {
    const startIndex = (this.currentPage - 1) * this.ordersPerPage;
    const endIndex = startIndex + this.ordersPerPage;
    return this.orders.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.orders.length / this.ordersPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  updateOrderStatus(order: any) {
    this.orderService.updateOrderStatus(order.id, 'inactive').subscribe((response) => {
      if(response.message === "Order status updated successfully") {
        
        const res = this.orders.filter(o => o.id === order.id);
        res[0].status = "served";
        this.orders = this.orders.filter(x => x.status === 'received');
        this.showPopup = true; 
      }
    });
  }

  served() {
    this.orders = this.realList.filter(x => x.status === "served");
  }

  received() {
    this.orders = this.realList.filter(x => x.status === "received");
  }
  handlePopupClose(): void {
    this.showPopup = false; // Hide the popup
  }


}
