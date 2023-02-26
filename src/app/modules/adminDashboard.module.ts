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

@NgModule({
  declarations : [AdminLayoutComponent],
  imports : [
    NzLayoutModule,
    NzMenuModule,
    NzNotificationModule,
    RouterModule,
    NzIconModule,
    adminRoutingModule,
    UserModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR }
  ],
  exports : [AdminLayoutComponent]
})
export class AdminDashboard {}
