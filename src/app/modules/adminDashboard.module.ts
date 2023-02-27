import { ProfilToolsComponent } from './../components/widgets/profil-tools/profil-tools.component';
import { adminRoutingModule } from './../routes/admin.routes';
import { UserModule } from './user.module';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component'
import { NgModule } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations : [AdminLayoutComponent],
  imports : [
    NzLayoutModule,
    NzMenuModule,
    NzNotificationModule,
    RouterModule,
    NzIconModule,
    adminRoutingModule,
    UserModule,
    NzBadgeModule,
    NzAvatarModule,
    NzGridModule,
    NzDropDownModule,
    ProfilToolsComponent

  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR }
  ],
  exports : [AdminLayoutComponent]
})
export class AdminDashboard {}
