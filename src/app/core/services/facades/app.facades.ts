import { environment } from 'src/environments/environment.prod';
import { mapAddress } from './../../mapper/user.mapper';
import { apiFunctionService } from './../function/api.function';
import { HttpService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { Web3Services } from '../web3/web3.service';
import { MessageService } from '../../helpers/message/message.service';
import { NotificationService } from '../../helpers/notification/notification.service';
import { mapUser } from '../../mapper/user.mapper';
import { SessionService } from '../storage/session.service';
import { StorageService } from '../storage/storage.service';
import { Address, PublicationPayload } from '../../interface/Api';
import { ProcessFunction } from '../function/process.function';

@Injectable({
  providedIn: 'root',
})
export class AppFacades {
  constructor(
    private web3Services: Web3Services,
    private messageService: MessageService,
    private notificationService: NotificationService,
    private HttpService : HttpService,
    private apiFunctionService : apiFunctionService,
    private sessionService : SessionService,
    private storageService : StorageService,
    private proccessFunction : ProcessFunction
  ) {}

  /*--------------------------------*/
  connectAccount() {
    return this.web3Services.connectAccount();
  }
  getAccount() {
    return this.web3Services.accountStatus$;
  }
  getBalance(address : string) {
    return this.web3Services.getBalance(address);
  }

  sendTransaction(from : string , amount : number , to ?: string  ) {
    return this.web3Services.sendTransaction(from,amount,environment.ADDRESS_OF_TRANSACTION);
  }

  /*--------------------------------*/

  setStorage(data  : {key : string ,value : any}) {
    return this.storageService.set(data);
  }
  getStorage(key : string) {
    return this.storageService.get(key);
  }
  deleteStorage(key : string) {
    return this.storageService.delete(key);
  }
  /*--------------------------------*/

  setSession(data  : {key : string ,value : string}) {
    return this.sessionService.set(data);
  }
  getSession(key : string) {
    return this.sessionService.get(key);
  }
  deleteSession(key : string) {
    return this.sessionService.delete(key);
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

  nBuildError(message : string,title ?: string) {
    return this.notificationService.setMessage(message).setTitle(title as string).buildError();
  }
  nBuildSuccess(message : string,title : string) {
    return this.notificationService.setMessage(message).setTitle(title as string).buildSuccess();
  }
  nBuildWarning(message : string,title : string) {
    return this.notificationService.setMessage(message).setTitle(title as string).buildDanger();
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

  getUserAddress(id : string) {
    return this.apiFunctionService.getUserAddress(id);
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

  deleteUserAddress(id : string){
    return this.apiFunctionService.deleteUserAddress(id);
  }

  addUserAddress(data : any,id : string) {
    data["id"] = id;
    const address = mapAddress(data);
    return this.apiFunctionService.addUserAddress(address);
  }

  addPublication(publication : PublicationPayload) {
    return this.apiFunctionService.addPublication(publication);
  }

  getPublicationById(id :string) {
    return this.apiFunctionService.getPublicationById(id);
  }

  deletePublication(id : string) {
    return this.apiFunctionService.deletePublication(id);
  }

  getLastPublication(){
    return this.proccessFunction.getPublications();
  }

  getPublications() {
    return this.apiFunctionService.getAllPublication();
  }

  getAllPlans()  {
    return this.apiFunctionService.getAllPlans();
  }

  getNotification() {
    return this.apiFunctionService.getNotification();
  }

  planSubscription(data : any) {
    return this.apiFunctionService.planSubscription(data);
  }
  getReportById(id : string) {
   return this.apiFunctionService.getReportById(id)
  }

  getTransactionHistory(id : string)  {
    return this.apiFunctionService.getTransactionHistory(id);
  }

  activePublication(id : string) {
    return this.apiFunctionService.activePublication(id);
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
   /*--------------------------------*/

}
