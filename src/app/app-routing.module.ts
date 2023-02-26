import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  {path : 'welcome' , component : WelcomeComponent},
  { path: 'admin', loadChildren: () => import('./modules/adminDashboard.module').then(m => m.AdminDashboard) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
