import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  showHandBurger = false;
  menuList: any = [];
  
  constructor() {
    this.menuList = [
      {name: 'ORDERS', routerLink: 'order', count: 0},
      {name: 'MENU', routerLink: 'menu', count: 0},
      {name: 'SALES', routerLink: 'menu', count: 0}
    ]; 
  }

  showmenu() {
    this.showHandBurger = !this.showHandBurger;
  }
}
