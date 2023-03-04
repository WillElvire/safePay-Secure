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

@NgModule({
  declarations : [AdminLayoutComponent],
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
