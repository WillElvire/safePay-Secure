import { NgModule } from "@angular/core";
import { UserRoutingModule } from "../routes/user.routes";
import { UhomeComponent } from '../pages/dashboard/user/uhome/uhome.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
@NgModule({
  declarations : [
    UhomeComponent
  ],
  exports : [UhomeComponent],
  imports : [UserRoutingModule,NzCardModule,NzGridModule],
  providers : []
})
export class UserModule {

}
