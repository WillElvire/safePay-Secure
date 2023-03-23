import { Transaction, User } from './../../../../core/interface/Api';
import { Component, OnInit, inject } from '@angular/core';
import { mergeMap, take } from 'rxjs';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { StatesFacades } from 'src/app/core/services/facades/state.facades';

@Component({
  selector: 'app-utransaction',
  templateUrl: './utransaction.component.html',
  styleUrls: ['./utransaction.component.scss']
})
export class UtransactionComponent implements OnInit {

  isLoad : boolean = false;
  private readonly stateFacade  = inject(StatesFacades);
  private readonly appFacades   = inject(AppFacades);
  user !: User;
  transactions :Transaction[] = [];
  pageSize : number = 3;
  pageIndex = 1;
  total = 1;


  ngOnInit(): void {
   this.stateFacade.selectUser().pipe(take(1)).subscribe((user)=> this.user = user);
   this.getUserConnected();
  }

  getUserConnected() {
    this.isLoad = true;
    this.stateFacade.selectUser().pipe(mergeMap((user)=>this.getUserTransaction(user.id)))
    .subscribe((response)=> {
      this.transactions = response.returnObject as Transaction[];
      console.log(this.transactions)
      this.isLoad = false;
    },(error)=> this.isLoad = false)
  }

  getUserTransaction(id  : string) {
    return this.appFacades.getTransactionHistory(id)
  }

  formatTransaction(transaction: Transaction) {

    const childTransaction =   {
      firstname : this.user.firstname,
      lastname  : this.user.lastname,
      email : this.user.email,
      transaction
    }
    console.log(childTransaction)

    return childTransaction;
  }

  getPublication(index : number , value : any) {

  }

}
