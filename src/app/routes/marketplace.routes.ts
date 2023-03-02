import { MarketComponent } from './../pages/marketplace/market/market.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'new',
    component: MarketComponent,
  },
  {
    path: '',
    redirectTo: 'new',
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
