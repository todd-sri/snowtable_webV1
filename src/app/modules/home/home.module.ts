import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { ProfilePopupComponent } from '../../shared/profile-popup/profile-popup.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    PageHeaderComponent,
    ProfilePopupComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
