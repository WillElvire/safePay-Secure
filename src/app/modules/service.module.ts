import { StorageService } from './../core/services/storage/storage.service';
import { SessionService } from './../core/services/storage/session.service';
import { UserQuery } from './../store/user$/user.query';
import { apiFunctionService } from './../core/services/function/api.function';
import { HttpService } from './../core/services/api/api.service';
import { AppFacades } from './../core/services/facades/app.facades';
import { StatesFacades } from './../core/services/facades/state.facades';
import { Web3Services } from './../core/services/web3/web3.service';
import { ModalService } from './../core/helpers/modal/modal.service';
import { NotificationService } from './../core/helpers/notification/notification.service';
import { MessageService } from './../core/helpers/message/message.service';
import { NgModule } from '@angular/core';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { UserService } from '../core/services/storage/user.service';
@NgModule({
  declarations: [],
  providers: [
    MessageService,
    NotificationService,
    ModalService,
    Web3Services,
    AppFacades,
    HttpService,
    apiFunctionService,
    UserQuery,
    StatesFacades,
    SessionService,
    StorageService,
    UserService
  ],
  imports: [NzMessageModule],
})
export class ServiceModule {}
