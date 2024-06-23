import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { AgGridAngular } from 'ag-grid-angular';

const routes: Routes = [
  {
      path: '',
      component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    AgGridAngular],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
