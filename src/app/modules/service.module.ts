import { Web3Services } from './../core/services/web3/web3.service';
import { ModalService } from './../core/helpers/modal/modal.service';
import { NotificationService } from './../core/helpers/notification/notification.service';
import { MessageService } from './../core/helpers/message/message.service';
import { NgModule } from "@angular/core";
import { NzMessageModule } from 'ng-zorro-antd/message';
@NgModule({
  declarations : [],
  providers : [MessageService,NotificationService,ModalService,Web3Services],
  imports :[NzMessageModule]
})
export class ServiceModule {

}
