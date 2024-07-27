import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { OrderService } from '../../services/order.service';

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
  ordersPerPage: number = 5;
  private subscription: Subscription | null = null;
  realList: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    // this.subscription = timer(0, 5000).pipe(
    //   switchMap(() => this.orderService.getOrders())
    // ).subscribe(orders => {
    //   this.orders = orders.filter(order => order.status === 'active');
    // });
  this.orderService.getOrders().subscribe(orders => {
    debugger
      this.orders = orders
      this.realList = [...orders]
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

  nextPage() {
    if ((this.currentPage * this.ordersPerPage) < this.orders.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  updateOrderStatus(order: any) {
    debugger
    this.orderService.updateOrderStatus(order.id, 'inactive').subscribe((response) => {
      if(response.message === "Order status updated successfully") {
        const res = this.orders.filter(o => o.id === order.id);
        res[0].status = "served";
      }
    });
  }
  served() {
   this.orders = this.realList.filter(x=>x.status === "served");
  }
  received() {
    this.orders = this.realList.filter(x=>x.status === "received");
  }
}
