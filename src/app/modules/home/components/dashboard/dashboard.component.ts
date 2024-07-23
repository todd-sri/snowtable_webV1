import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  showHandBurger = false;
  menuList: any = [];
  selectedMenu: string = '';

  constructor() {
    this.menuList = [
      {name: 'ORDERS', routerLink: 'order', count: 0},
      {name: 'MENU', routerLink: 'menu', count: 0},
      {name: 'SALES', routerLink: 'sales', count: 0}
    ]; 
  }

  showmenu() {
    this.showHandBurger = !this.showHandBurger;
  }

  selectMenu(menuName: string) {
    this.selectedMenu = menuName;
  }
}
