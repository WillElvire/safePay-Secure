import { AppFacades } from './../../../core/services/facades/app.facades';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRoute,private appFacades : AppFacades) {
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
      amount : this.transactionAmount.toString()
    }
    this.appFacades.planSubscription(bill).subscribe((response)=>{
      console.log(response);
      this.appFacades.mBuildSuccess(response.message);
    })
   //this.appFacades.sendTransaction(this.address.value , this.transactionAmount)
  }

  getExchange(value : string) {
    this.appFacades.getCryptoExchange("USD",value).subscribe((response : CryptoExchange)=>{
      console.log(response)
      this.transactionAmount = this.transactionAmount * response.rate as number
     })
  }
}
