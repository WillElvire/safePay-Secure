import { TableFilterPipe } from './../pipes/data/table-filter.pipe';
import { UserLayoutComponent } from './../layouts/user-layout/user-layout.component';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from '../routes/user.routes';
import { UhomeComponent } from '../pages/dashboard/user/uhome/uhome.component';
import { NZoroModule } from './nzoro.module';
import { ServiceModule } from './service.module';
import { ComponentModule } from './components.module';
import { ProfilToolsComponent } from '../components/widgets/profil-tools/profil-tools.component';
import { UAddPublicationComponent } from '../pages/dashboard/user/upublication/add-publication/add-publication.component';
import { UAddressComponent } from '../pages/dashboard/user/uaddress/uaddress.component';
import { CommonModule } from '@angular/common';
import { UaccountComponent } from '../pages/dashboard/user/uaccount/uaccount.component';
import { UcompteComponent } from '../pages/dashboard/user/ucompte/ucompte.component';
import { UnotificationComponent } from '../pages/dashboard/user/unotification/unotification.component';

@NgModule({
  declarations: [
    UhomeComponent,
    UserLayoutComponent,
    UAddPublicationComponent,
    UAddressComponent,
    UaccountComponent,
    UcompteComponent,
    UnotificationComponent,
    TableFilterPipe
  ],
  exports: [UhomeComponent],
  imports: [
    UserRoutingModule,
    NZoroModule,
    ServiceModule,
    CommonModule,
    ComponentModule,
    ProfilToolsComponent,
  ],
  providers: [],
})
export class UserModule {}
