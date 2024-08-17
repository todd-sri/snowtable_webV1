import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SuccessPopupComponent } from '../../../../shared/success-popup/success-popup.component';
import { SharedModule } from '../../../../sharedModule';


@NgModule({
  declarations: [
    OrdersComponent

  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    AgGridModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    SharedModule


  ]
})
export class OrderModule { }
