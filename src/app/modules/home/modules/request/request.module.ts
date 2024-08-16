import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './request-routing.module';
import { RequestComponent } from './components/request/request.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SuccessPopupComponent } from '../../../../shared/success-popup/success-popup.component';


@NgModule({
  declarations: [
    RequestComponent,
    SuccessPopupComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    AgGridModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,



  ]
})
export class RequestModule { }
