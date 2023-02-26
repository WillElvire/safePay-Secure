import { IBuilder } from './../../interface/IBuilder';
import { Injectable } from '@angular/core';
import { NzMessageDataOptions, NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService implements IBuilder<MessageService> {

  private message !: string;
  private duration  : number = 1000;

  constructor(private nzMessage: NzMessageService) {}

  setMessage(message : string) {
    this.message = message;
    return this;
  }

  setDuration(duration : number) {
    this.duration = duration;
    return this;
  }

  build<NzMessageRef>(nzMessageRef : NzMessageRef) {
    return nzMessageRef;
  }

  buildError() {
   return  this.build(this.nzMessage.error(this.message,this.getOptions()));
  }
  buildSuccess() {
    return  this.build(this.nzMessage.success(this.message,this.getOptions()));
  }
  buildDanger() {
    return  this.build(this.nzMessage.warning(this.message,this.getOptions()));
  }

  getOptions() : NzMessageDataOptions{
    return {
      nzDuration : this.duration,
      nzPauseOnHover : true,
      nzAnimate : true
    }
  }

}
