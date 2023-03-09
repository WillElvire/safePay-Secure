import { SNavbarAccountWidgetComponent } from './../components/widgets/s-components/s-navbar-account-widget/s-navbar-account-widget.component';
import { SNavbarWidgetComponent } from './../components/widgets/s-components/s-navbar-widget/s-navbar-widget.component';
import { GlowButtonComponent } from './../components/shared/website/glow-button/glow-button.component';
import { SCarouselComponent } from './../components/widgets/s-components/s-carousel/s-carousel.component';
import { NgModule } from '@angular/core';
import { BackButtonComponent } from '../components/widgets/back-button/back-button.component';
import { NavbarComponent } from '../components/shared/navigation/navbar/navbar.component';
import { FooterComponent } from '../components/shared/navigation/footer/footer.component';
import { BannerComponent } from '../components/shared/website/banner/banner.component';
import { AboutComponent } from '../components/shared/website/about/about.component';
import { AdvantageComponent } from '../components/shared/website/advantage/advantage.component';
import { PlanComponent } from '../components/shared/website/plan/plan.component';
import { JoinComponent } from '../components/shared/website/join/join.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SSelectComponent } from '../components/widgets/s-components/s-select/s-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MarketNavComponent } from '../components/shared/navigation/market-nav/market-nav.component';
import { NZoroModule } from './nzoro.module';
import { STableComponent } from '../components/widgets/s-components/s-table/s-table.component';
import { MarketBannerComponent } from '../components/shared/website/market-banner/market-banner.component';
import { SCountrySelectComponent } from '../components/widgets/s-components/s-country-select/s-country-select.component';
import { ServiceModule } from './service.module';
import { SRoleSelectComponent } from '../components/widgets/s-components/s-role-select/s-role-select.component';
import { SAddPublicationComponent } from '../components/widgets/s-components/s-modal/s-add-publication/s-add-publication.component';
import { SellPublicationFormComponent } from '../components/shared/website/form/sell-publication-form/sell-publication-form.component';
import { BuyPublicationFormComponent } from '../components/shared/website/form/buy-publication-form/buy-publication-form.component';
import { SAddAddressComponent } from '../components/widgets/s-components/s-modal/s-add-address/s-add-address.component';
import { SSafeConnectComponent } from '../components/widgets/s-components/s-safe-connect/s-safe-connect.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    BackButtonComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    AdvantageComponent,
    PlanComponent,
    JoinComponent,
    SSelectComponent,
    SCarouselComponent,
    GlowButtonComponent,
    MarketNavComponent,
    STableComponent,
    MarketBannerComponent,
    SCountrySelectComponent,
    SRoleSelectComponent,
    SNavbarWidgetComponent,
    SNavbarAccountWidgetComponent,
    SAddPublicationComponent,
    SellPublicationFormComponent,
    BuyPublicationFormComponent,
    SAddAddressComponent,
    SSafeConnectComponent,


  ],
  exports: [
    BackButtonComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    AdvantageComponent,
    PlanComponent,
    JoinComponent,
    SSelectComponent,
    SCarouselComponent,
    GlowButtonComponent,
    MarketNavComponent,
    STableComponent,
    MarketBannerComponent,
    SCountrySelectComponent,
    SRoleSelectComponent,
    SSafeConnectComponent,
    NgxPaginationModule

  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    ServiceModule,
    NZoroModule,
    NgxPaginationModule


  ],
})
export class ComponentModule {}
