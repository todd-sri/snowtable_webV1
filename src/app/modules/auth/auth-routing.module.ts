import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../home/components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SnowtableComponent } from './components/snowtable/snowtable.component';

const routes: Routes = [
  { path: '', component: SnowtableComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: DashboardComponent, loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
