import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'auth'
  },
  {
    path: 'auth',loadChildren: () =>import('./modules/form-layout.module').then((m) => m.FormLayoutModule),
  },
  {
    path: 'admin',loadChildren: () =>import('./modules/adminDashboard.module').then((m) => m.AdminDashboard),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
