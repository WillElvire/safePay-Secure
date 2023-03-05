import { apiFunctionService } from './../function/api.function';
import { HttpService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { Web3Services } from '../web3/web3.service';
import { MessageService } from '../../helpers/message/message.service';
import { NotificationService } from '../../helpers/notification/notification.service';
import { mapUser } from '../../mapper/user.mapper';

@Injectable({
  providedIn: 'root',
})
export class AppFacades {
  constructor(
    private web3Services: Web3Services,
    private messageService: MessageService,
    private notificationService: NotificationService,
    private HttpService : HttpService,
    private apiFunctionService : apiFunctionService
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
  /*--------------------------------*/
  get(endpoint : string ,apiType = "rest"){
    this.HttpService.setApiType(apiType);
    return this.HttpService.get(endpoint);
  }
  post(endpoint : string, data : any ,apiType = "rest"){
    this.HttpService.setApiType(apiType);
    return this.HttpService.post({endpoint,data});
  }
  delete(endpoint : string ,apiType = "rest"){
    this.HttpService.setApiType(apiType);
    return this.HttpService.delete(endpoint);
  }
  put(endpoint : string ,data : any,apiType = "rest"){
    this.HttpService.setApiType(apiType);
    return this.HttpService.put({endpoint,data});
  }
  /*--------------------------------*/

  getCryptoIcons() {
    return this.apiFunctionService.cryptoIcons$;
  }

  getCoutryDialCode() {
    return this.apiFunctionService.countryCode$;
  }

  getCryptoExchange(currency1 : string , currency2 : string) {
    return this.apiFunctionService.cryptoExchange$(currency1,currency2);
  }

  getAllRoles() {
    return this.apiFunctionService.allRoles$;
  }
  registerUser(data : any) {
    const user = mapUser(data);
    return this.apiFunctionService.registerUser(user);
  }

  loginUser(data : Required<{email : string , password : string}>){
    return this.apiFunctionService.loginUser(data);
  }
}
