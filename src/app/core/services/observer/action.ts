import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn :'root'
})
export class ActionSubjectService {

  private modalSubject = new Subject<boolean>();
  modalSubject$ = this.modalSubject.asObservable();

  constructor(){
    this.emitModalSubject(false);
  }

  emitModalSubject(val : boolean) {
    return this.modalSubject.next(val);
  }


}
