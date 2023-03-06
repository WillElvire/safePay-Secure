import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class userState {
  private isConnected = new Subject<any>();
  isConnected$ = this.isConnected.asObservable();
  emit(value : any) {
    console.log(value);
    this.isConnected.next(value)
  }
}
