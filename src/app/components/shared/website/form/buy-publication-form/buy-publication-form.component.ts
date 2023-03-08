import { FormControl, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { getCryptoRegex } from 'src/app/core/services/utils/regex';
import { CryptoExchange } from 'src/app/core/types/crypto';
import { take, takeWhile, Subscription } from 'rxjs';

@Component({
  selector: 'app-buy-publication-form',
  templateUrl: './buy-publication-form.component.html',
  styleUrls: ['./buy-publication-form.component.scss'],
})
export class BuyPublicationFormComponent implements OnInit  , OnDestroy{

  currency_to_buy: FormControl = new FormControl([Validators.required]);
  mean_of_payment: FormControl = new FormControl([Validators.required]);
  quantity       : FormControl<number> = new FormControl(1,[Validators.required]) as FormControl<number>;
  currencyRate   !: CryptoExchange ;
  subscriptions  : Subscription[] = [];


  constructor(private appFacades: AppFacades) {

    const  subcription1 : Subscription = this.mean_of_payment.valueChanges.subscribe((values) => {
      if (!!this.currency_to_buy.value && !!values) return this.getRate();
    });
    const  subcription2 : Subscription=  this.currency_to_buy.valueChanges.subscribe((values) => {
      if (!!this.mean_of_payment.value && !!values) return this.getRate();
    });

    this.subscriptions.push(subcription1);
    this.subscriptions.push(subcription2);

  }
  ngOnInit(): void {
    const regex = getCryptoRegex("BTC");
    console.log(regex);
  }

  getRate() {
    this.appFacades
      .getCryptoExchange(this.mean_of_payment.value,this.currency_to_buy.value)
      .pipe(take(1))
      .subscribe((rate) => this.currencyRate = rate);
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach((subscription) => subscription.unsubscribe);
  }
}

