import { Injectable } from '@angular/core';
import { Web3Services } from '../web3/web3.service';
import { MessageService } from '../../helpers/message/message.service';
import { NotificationService } from '../../helpers/notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AppFacades {
  constructor(
    private web3Services: Web3Services,
    private messageService: MessageService,
    private notificationService: NotificationService
  ) {}

  /*--------------------------------*/
  connectAccount() {
    return this.web3Services.connectAccount();
  }
  getAccount() {
    return this.web3Services.accountStatus$;
  }
  /*--------------------------------*/
  mBuildError(message : string,duration : number = 2000) {
    return this.messageService.setMessage(message).setDuration(duration).buildError();
  }
  mBuildSuccess(message : string,duration : number = 2000) {
    return this.messageService.setMessage(message).setDuration(duration).buildSuccess();
  }
  mBuildWarning(message : string,duration : number = 2000) {
    return this.messageService.setMessage(message).setDuration(duration).buildDanger();
  }
  /*--------------------------------*/
  nBuildError(message : string,title : string) {
    return this.notificationService.setMessage(message).setTitle(title).buildError();
  }
  nBuildSuccess(message : string,title : string) {
    return this.notificationService.setMessage(message).setTitle(title).buildSuccess();
  }
  nBuildWarning(message : string,title : string) {
    return this.notificationService.setMessage(message).setTitle(title).buildDanger();
  }
}
