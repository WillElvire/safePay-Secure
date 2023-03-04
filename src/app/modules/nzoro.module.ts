import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [],
  imports: [
    NzIconModule,
    NzBadgeModule,
    NzAvatarModule,
    NzGridModule,
    NzDropDownModule,
    NzButtonModule,
    NzMenuModule,
    NzNotificationModule,
    NzSelectModule,
    NzCardModule,
    NzTableModule
  ],
  exports: [
    NzIconModule,
    NzBadgeModule,
    NzAvatarModule,
    NzGridModule,
    NzDropDownModule,
    NzButtonModule,
    NzMenuModule,
    NzNotificationModule,
    NzSelectModule,
    NzCardModule,
    NzTableModule

  ],
})
export class NZoroModule {}