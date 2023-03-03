import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgModule } from '@angular/core';
import { MarketPlaceRoutingModule } from '../routes/marketplace.routes';
import { MarketComponent } from '../pages/marketplace/market/market.component';
import { ComponentModule } from './components.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ServiceModule } from './service.module';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [MarketComponent],
  imports: [
    MarketPlaceRoutingModule,
    ComponentModule,
    CommonModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    ServiceModule,
    CarouselModule,
  ],
  exports: [MarketComponent],
})
export class MarketPlacesModule {}
