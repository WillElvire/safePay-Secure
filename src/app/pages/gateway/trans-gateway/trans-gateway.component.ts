import { verifyObj } from 'src/app/core/services/data/verification';
import { delay } from 'rxjs';
import { AppFacades } from './../../../core/services/facades/app.facades';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoExchange } from 'src/app/core/types/crypto';

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


  constructor(private activatedRoute: ActivatedRoute,private appFacades : AppFacades ,private router : Router) {
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
      this.appFacades.planSubscription(bill).pipe(delay(2000)).subscribe(
        {
          next :  (response)=>{
            console.log(response);
            this.router.navigate(["/transaction/success"],{queryParams : { transactionId : response.returnObject}});
            this.appFacades.mBuildSuccess(response.message);
            this.isLoading = false;
          },
          error : (err)=> {
            this.isLoading = false;
            this.appFacades.mBuildError(err.error.message ? err.error.message : err.message )
          }
        }
      )
    }else{
      this.appFacades.mBuildError("Veuillez renseigner tout les champs")
    }

   //this.appFacades.sendTransaction(this.address.value , this.transactionAmount)
  }

  checkPaymentField(bill : any) {
   return verifyObj(bill).count ==0 ;
  }

  getExchange(value : string) {
    this.appFacades.getCryptoExchange("USD",value).subscribe((response : CryptoExchange)=>{
      console.log(response)
      this.transactionAmount = this.transactionAmount * response.rate as number
     })
  }
}
