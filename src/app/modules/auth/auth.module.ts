import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from '../home/components/dashboard/dashboard.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HomeModule
  ]
})
export class AuthModule { }
