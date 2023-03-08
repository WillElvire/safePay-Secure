import { UserLayoutComponent } from './../layouts/user-layout/user-layout.component';
import { NgModule } from "@angular/core";
import { UserRoutingModule } from "../routes/user.routes";
import { UhomeComponent } from '../pages/dashboard/user/uhome/uhome.component';
import { NZoroModule } from "./nzoro.module";
import { ServiceModule } from "./service.module";
import { ComponentModule } from './components.module';
import { ProfilToolsComponent } from '../components/widgets/profil-tools/profil-tools.component';
import { UAddPublicationComponent } from '../pages/dashboard/user/upublication/add-publication/add-publication.component';
import { UAddressComponent } from '../pages/dashboard/user/uaddress/uaddress.component';


@NgModule({
  declarations : [
    UhomeComponent,
    UserLayoutComponent,
    UAddPublicationComponent,
    UAddressComponent,

  ],
  exports : [UhomeComponent],
  imports : [UserRoutingModule,NZoroModule,ServiceModule,ComponentModule,ProfilToolsComponent],
  providers : []
})
export class UserModule {

}
