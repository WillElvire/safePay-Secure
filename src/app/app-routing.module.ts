import { NotFoundComponent } from './pages/simple/error/not-found/not-found.component';
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
    path: 'user',loadChildren: () =>import('./modules/user.module').then((m) => m.UserModule),
  },
  {
    path : 'payment', loadChildren : ()=> import('./modules/payment.module').then((m)=> m.PaymentModule)
  },
  {
    path : 'marketplace' , loadChildren : ()=> import('./modules/marketplaces.modules').then((m)=> m.MarketPlacesModule)
  },
  {
    path: 'admin',loadChildren: () =>import('./modules/adminDashboard.module').then((m) => m.AdminDashboard),
  },
  {
    path : 'transaction',
    children : [
      { path : 'success' , loadComponent : ()=> import('./pages/simple/payment/success/success.component').then((c)=> c.SuccessComponent)},
      { path : 'failed' , loadComponent : ()=> import('./pages/simple/payment/failed/failed.component').then((c)=> c.FailedComponent)}
    ]
  },
  {
    path : '**',
    loadComponent : ()=> import('./pages/simple/error/not-found/not-found.component').then((c)=> c.NotFoundComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash  : true,preloadingStrategy : NoPreloading,anchorScrolling : 'disabled', scrollPositionRestoration : 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
