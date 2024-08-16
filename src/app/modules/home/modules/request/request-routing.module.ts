import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgGridAngular } from 'ag-grid-angular';
import { RequestComponent } from './components/request/request.component';

const routes: Routes = [
  {
      path: '',
      component: RequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    AgGridAngular],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
