import { MarketComponent } from './../pages/marketplace/market/market.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MarketFullComponent } from '../pages/marketplace/market-full/market-full.component';

const routes: Routes = [
  {
    path: 'new',
    component: MarketComponent,
  },
  {
    path: 'index',
    component: MarketFullComponent,
    pathMatch : 'prefix',
    children : [
      {
        path :'?q:id',
        component : MarketFullComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  entryComponents: [],
})
export class MarketPlaceRoutingModule {}
