import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn :'root'
})
export class ActionSubjectService {

  private modalSubject = new Subject<boolean>();
  modalSubject$ = this.modalSubject.asObservable();

  private actionSubject = new Subject<boolean>();
  actionSubject$ = this.actionSubject.asObservable();

  constructor(){
    this.emitModalSubject(false);
  }

  emitModalSubject(val : boolean) {
    return this.modalSubject.next(val);
  }

  emitActionSubject(val : boolean) {
    return this.actionSubject.next(val);
  }


}
