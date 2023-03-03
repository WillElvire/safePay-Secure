import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'landing'
  },
  {
    path: 'auth',loadChildren: () =>import('./modules/form-layout.module').then((m) => m.FormLayoutModule),
  },
  {
    path : 'landing',loadComponent : ()=> import('./pages/simple/landing/landing.component').then((m)=> m.LandingComponent)
  },
  {
    path: 'user',loadChildren: () =>import('./modules/adminDashboard.module').then((m) => m.AdminDashboard),
  },
  {
    path : 'marketplace' , loadChildren : ()=> import('./modules/marketplaces.modules').then((m)=> m.MarketPlacesModule)
  },
  {
    path: 'admin',loadChildren: () =>import('./modules/adminDashboard.module').then((m) => m.AdminDashboard),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash  : true,preloadingStrategy : NoPreloading,anchorScrolling : 'enabled', scrollPositionRestoration : 'disabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
