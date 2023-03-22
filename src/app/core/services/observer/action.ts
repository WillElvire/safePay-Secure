import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn :'root'
})
export class ActionSubjectService {

  private modalSubject = new Subject<boolean>();
  modalSubject$ = this.modalSubject.asObservable();

  private actionSubject = new Subject<boolean>();
  actionSubject$ = this.actionSubject.asObservable();

  private ratingSubject = new BehaviorSubject<boolean>(false);
  ratingSubject$ = this.actionSubject.asObservable();

  constructor(){
    this.emitModalSubject(false);
  }

  emitModalSubject(val : boolean) {
    return this.modalSubject.next(val);
  }

  emitActionSubject(val : boolean) {
    return this.actionSubject.next(val);
  }

  emitRatingSubject(val : boolean) {
    return this.ratingSubject.next(val);
  }


}
