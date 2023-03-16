import { FormControl } from '@angular/forms';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'u-usolde',
  templateUrl: './usolde.component.html',
  styleUrls: ['./usolde.component.scss']
})
export class UsoldeComponent implements OnDestroy , OnInit {

  private readonly  appFacades : AppFacades = inject(AppFacades);

  address  = new FormControl();
  balance !: number;
  subscription = new Subscription();


  ngOnInit(): void {
    this.subscription = this.address.valueChanges.subscribe((response)=>{
      if(!!response) {
        this.getBalance(response)
      }
    })
  }

  getBalance(address : string){
    this.appFacades.getBalance(address).then((balance)=>{
      console.log(balance)
      this.balance = balance;
    })
    .catch((err)=>{
      console.log("error",err)
      this.balance = -1;
      this.appFacades.mBuildError(err);
    } )
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
