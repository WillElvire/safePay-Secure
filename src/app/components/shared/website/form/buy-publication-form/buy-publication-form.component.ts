import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { getCryptoRegex } from 'src/app/core/services/utils/regex';
import { CryptoExchange } from 'src/app/core/types/crypto';
import { take, takeWhile } from 'rxjs';

@Component({
  selector: 'app-buy-publication-form',
  templateUrl: './buy-publication-form.component.html',
  styleUrls: ['./buy-publication-form.component.scss'],
})
export class BuyPublicationFormComponent implements OnInit {

  currency_to_buy: FormControl = new FormControl([Validators.required]);
  mean_of_payment: FormControl = new FormControl([Validators.required]);
  quantity       : FormControl<number> = new FormControl(1,[Validators.required]) as FormControl<number>;
  currencyRate   !: CryptoExchange ;


  constructor(private appFacades: AppFacades) {
    this.mean_of_payment.valueChanges.pipe(takeWhile((value)=> true)).subscribe((values) => {
      if (!!this.currency_to_buy.value && !!values) return this.getRate();
    });
    this.currency_to_buy.valueChanges.pipe(takeWhile((value)=> true)).subscribe((values) => {
      if (!!this.mean_of_payment.value && !!values) return this.getRate();
    });
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
}

