import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from '../home/components/dashboard/dashboard.component';
import { HomeModule } from '../home/home.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    RegistrationComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HomeModule,
    FormsModule,
    CommonModule
  ]
})
export class AuthModule { }
