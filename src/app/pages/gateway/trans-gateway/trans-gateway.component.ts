import { StatesFacades } from 'src/app/core/services/facades/state.facades';
import { verifyObj } from 'src/app/core/services/data/verification';
import { delay } from 'rxjs';
import { AppFacades } from './../../../core/services/facades/app.facades';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoExchange } from 'src/app/core/types/crypto';
import { AppStateFacade } from 'src/app/core/services/facades/appState.facades';

@Component({
  selector: 't-gateway',
  templateUrl: './trans-gateway.component.html',
  styleUrls: ['./trans-gateway.component.scss'],
})
export class TransGatewayComponent implements OnInit {
  payment: string = 'electronic';
  planId !: string ;
  userId !: string;
  transactionAmount!: number;
  crypto   = new FormControl() ;
  address  = new FormControl();
  isLoading : boolean = false;


  constructor(private activatedRoute: ActivatedRoute,private router : Router,private appState : AppStateFacade) {
    this.crypto.valueChanges.subscribe((item)=> this.getExchange(item))
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.transactionAmount = Number.parseInt(params.get("amount") as string)  / 660;
      this.planId = params.get("plan") as string;
      this.userId = params.get("inc") as string;
      console.log(params);
    });
  }

  activePaymentMethod(type: string) {
    this.payment = type;
  }

  getVisaTransactionDetail($event: any) {
    console.log('parent node', $event);
  }

  makePayment() {
   this.saveTransaction();
   //this.appFacades.sendTransaction(this.address.value , this.transactionAmount)
  }

  saveTransaction() {
    const bill = {
      typeTransaction : "Billing",
      userId : this.userId ,
      planId : this.planId,
      amount : this.transactionAmount.toString(),
      mean_of_payment: this.crypto.value ,
      address : this.address.value ,
    }
    if(this.checkPaymentField(bill)) {
      this.isLoading = true;
      this.appState.AppFacades.planSubscription(bill).pipe(delay(2000)).subscribe(
        {
          next :  (response)=>{
            const data :any  = response.returnObject;
            console.log(response);
            this.router.navigate(["/transaction/success"],{queryParams : { transactionId : data.Ref}});
            this.appState.updateUser({user : data.User,token : ''});
            this.appState.AppFacades.mBuildSuccess(response.message);
            this.isLoading = false;
          },
          error : (err)=> {
            this.isLoading = false;
            this.appState.AppFacades.mBuildError(err.error.message ? err.error.message : err.message )
          }
        }
      )
    }else{
      this.appState.AppFacades.mBuildError("Veuillez renseigner tout les champs")
    }
  }



  checkPaymentField(bill : any) {
   return verifyObj(bill).count ==0 ;
  }

  getExchange(value : string) {
    this.appState.AppFacades.getCryptoExchange("USD",value).subscribe((response : CryptoExchange)=>{
      console.log(response)
      this.transactionAmount = this.transactionAmount * response.rate as number
     })
  }
}
