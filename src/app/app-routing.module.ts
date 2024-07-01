import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { DashboardComponent } from './modules/home/components/dashboard/dashboard.component';
import { SnowtableComponent } from './modules/auth/components/snowtable/snowtable.component';
import { RegistrationComponent } from './modules/auth/components/registration/registration.component';

const routes: Routes = [
  { path: '', component: SnowtableComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'home', component: DashboardComponent, loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
