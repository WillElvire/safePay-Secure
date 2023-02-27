import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'auth'
  },
  {
    path: 'auth',loadChildren: () =>import('./modules/form-layout.module').then((m) => m.FormLayoutModule),
  },
  {
    path: 'user',loadChildren: () =>import('./modules/adminDashboard.module').then((m) => m.AdminDashboard),
  },
  {
    path: 'admin',loadChildren: () =>import('./modules/adminDashboard.module').then((m) => m.AdminDashboard),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash  : false,preloadingStrategy : NoPreloading,anchorScrolling : 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
