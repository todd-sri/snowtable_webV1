import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './modules/order/components/orders/orders.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent }
// ];

const routes: Routes = [
  {
      path: '',
      component: OrdersComponent,
      children: [
          {
              path: '',
              redirectTo: 'order',
              pathMatch: 'full'
          },
          {
              path: 'order',
              loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule)
          },

      ]
  },
  {
    path: 'menu',
    loadChildren: () => import('./modules/menu/menu.module').then(m => m.MenuModule)
},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
