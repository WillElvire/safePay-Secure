import { MarketPlanComponent } from './../pages/marketplace/market-plan/market-plan.component';
import { MarketFullComponent } from './../pages/marketplace/market-full/market-full.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgModule } from '@angular/core';
import { MarketPlaceRoutingModule } from '../routes/marketplace.routes';
import { MarketComponent } from '../pages/marketplace/market/market.component';
import { ComponentModule } from './components.module';
import { ServiceModule } from './service.module';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { NZoroModule } from './nzoro.module';

@NgModule({
  declarations: [MarketComponent,MarketFullComponent,MarketPlanComponent],
  imports: [
    MarketPlaceRoutingModule,
    ComponentModule,
    CommonModule,
    NzButtonModule,
    ServiceModule,
    CarouselModule,
    NZoroModule
  ],
  exports: [MarketComponent],
})
export class MarketPlacesModule {}
