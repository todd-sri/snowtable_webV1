import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { DashboardComponent } from './modules/home/components/dashboard/dashboard.component';
import { RegistrationComponent } from './modules/auth/components/registration/registration.component';
import { SnowtableV1Component } from './modules/auth/components/snowtable-v1/snowtable-v1.component';
import { ConfirmationComponent } from './modules/auth/components/confirmation/confirmation.component';
import { OrdersComponent } from './modules/home/modules/order/components/orders/orders.component';
import { MenuComponent } from './modules/home/modules/menu/components/menu/menu.component';

const routes: Routes = [
  // { path: '', component: SnowtableComponent},
  { path: '', component: SnowtableV1Component},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'home', component: DashboardComponent, loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'confirm', component: ConfirmationComponent},
  { path: 'home/order', component: OrdersComponent },
  { path: 'home/menu', component: MenuComponent },
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
