import { NgModule } from "@angular/core";
import { BackButtonComponent } from '../components/widgets/back-button/back-button.component';
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NavbarComponent } from '../components/shared/navigation/navbar/navbar.component';
import { FooterComponent } from '../components/shared/navigation/footer/footer.component';
import { BannerComponent } from '../components/shared/website/banner/banner.component';
import { AboutComponent } from '../components/shared/website/about/about.component';
import { AdvantageComponent } from '../components/shared/website/advantage/advantage.component';
import { PlanComponent } from '../components/shared/website/plan/plan.component';
import { JoinComponent } from '../components/shared/website/join/join.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations : [
    BackButtonComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    AdvantageComponent,
    PlanComponent,
    JoinComponent
  ],
  exports : [
    BackButtonComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    AdvantageComponent,
    PlanComponent,
    JoinComponent
  ],
  imports :[NzButtonModule,NzIconModule,RouterModule]
})
export class ComponentModule{

}
