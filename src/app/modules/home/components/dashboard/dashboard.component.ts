import { Component } from '@angular/core';
import { OrderService } from '../../modules/order/services/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  showHandBurger = false;
  menuList: any = [];
  selectedMenu: string = '';

  constructor(private orderService: OrderService) {
    
    this.menuList = [
      {name: 'ORDERS', routerLink: 'order', count: 0, display: 1},
      {name: 'MENU', routerLink: 'menu', count: 0, display : 1},
      {name: 'REQUESTS', routerLink: 'request', count: 0, display: localStorage.getItem('hotelStatus') === "0"? 0 : 1},
    ]; 
  }
  ngOnInit(): void {
    this.fetchMenuCounts();
  }

  fetchMenuCounts(): void {
    this.orderService.getMenuCounts().subscribe(
      (data: any) => {
        this.menuList[0].count = data.unique_order_count;
        this.menuList[2].count = data.unique_event_count;
      },
      error => {
        console.error('Error fetching menu counts:', error);
      }
    );
  }

  showmenu() {
    this.showHandBurger = !this.showHandBurger;
  }

  selectMenu(menuName: string) {
    this.selectedMenu = menuName;
  }
}
