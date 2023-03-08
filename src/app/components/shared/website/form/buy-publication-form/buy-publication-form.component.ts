import { FormControl, FormRecord, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { CryptoExchange } from 'src/app/core/types/crypto';
import { take } from 'rxjs';

@Component({
  selector: 'app-buy-publication-form',
  templateUrl: './buy-publication-form.component.html',
  styleUrls: ['./buy-publication-form.component.scss'],
})
export class BuyPublicationFormComponent implements OnInit {

  currency_to_buy: FormControl = new FormControl([Validators.required]);
  mean_of_payment: FormControl = new FormControl([Validators.required]);
  currencyRate   !: CryptoExchange ;


  constructor(private appFacades: AppFacades) {
    this.mean_of_payment.valueChanges.subscribe((values) => {
      if (!!this.currency_to_buy.value && !!values) return this.getRate();
    });
  }
  ngOnInit(): void {}

  getRate() {
    this.appFacades
      .getCryptoExchange(this.mean_of_payment.value,this.currency_to_buy.value)
      .pipe(take(1))
      .subscribe((rate) => this.currencyRate = rate);
  }
}
