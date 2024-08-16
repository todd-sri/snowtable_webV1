import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() menuList: any;
  @Output() routeNavigation = new EventEmitter<string>();

  constructor(private router: Router) {}

  navigateaRoute(event: any) {
    this.routeNavigation.emit();
  }

  getMenuIcon(menuName: string): string {
    switch(menuName) {
      case 'ORDERS':
        return 'fa fa-pen-to-square'; 
      case 'MENU':
        return 'fa fa-list';
      case 'SALES':
        return 'fa fa-chart-line';
      case 'REQUESTS':
        return 'fa-solid fa-phone';
      default:
        return '';
    }
  }
}
