import { NgModule } from "@angular/core";
import { UserRoutingModule } from "../routes/user.routes";
import { UhomeComponent } from '../pages/dashboard/user/uhome/uhome.component';
import { NZoroModule } from "./nzoro.module";


@NgModule({
  declarations : [
    UhomeComponent
  ],
  exports : [UhomeComponent],
  imports : [UserRoutingModule,NZoroModule],
  providers : []
})
export class UserModule {

}
