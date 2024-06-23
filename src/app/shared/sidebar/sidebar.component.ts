import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
@Input() menuList:any;
@Output() routeNavigation = new EventEmitter<string>();
  constructor(private router: Router) {
    
  }

  handleButtonClick(item: any) {

  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  navigateaRoute(event: any) {
    this.routeNavigation.emit();
  }
}
