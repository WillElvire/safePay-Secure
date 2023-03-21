import { NZoroModule } from './nzoro.module';
import { ProfilToolsComponent } from './../components/widgets/profil-tools/profil-tools.component';
import { adminRoutingModule } from './../routes/admin.routes';
import { UserModule } from './user.module';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component'
import { NgModule } from '@angular/core';
import { NZ_I18N, fr_FR } from 'ng-zorro-antd/i18n';
import { ComponentModule } from './components.module';
import { AhomeComponent } from '../pages/dashboard/admin/ahome/ahome.component';
import { ApublicationComponent } from '../pages/dashboard/admin/apublication/apublication.component';
import { AtransactionComponent } from '../pages/dashboard/admin/atransaction/atransaction.component';
import { AroleComponent } from '../pages/dashboard/admin/arole/arole.component';
import { AtransactiontypeComponent } from '../pages/dashboard/admin/atransactiontype/atransactiontype.component';

@NgModule({
  declarations : [AdminLayoutComponent, AhomeComponent, ApublicationComponent, AtransactionComponent, AroleComponent, AtransactiontypeComponent],
  imports : [
    NzLayoutModule,
    RouterModule,
    NZoroModule,
    adminRoutingModule,
    UserModule,
    ComponentModule,
    ProfilToolsComponent

  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR }
  ],
  exports : [AdminLayoutComponent]
})
export class AdminDashboard {}
