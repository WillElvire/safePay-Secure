import { NzCardModule } from 'ng-zorro-antd/card';
import { SCarouselComponent } from './../components/widgets/s-components/s-carousel/s-carousel.component';
import { NgModule } from '@angular/core';
import { BackButtonComponent } from '../components/widgets/back-button/back-button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
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
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

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
    SCarouselComponent
  ],
  imports: [
    NzButtonModule,
    NzIconModule,
    RouterModule,
    CommonModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    CarouselModule

  ],
})
export class ComponentModule {}
