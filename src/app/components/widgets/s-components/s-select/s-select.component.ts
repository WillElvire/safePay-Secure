import { apiFunctionService } from './../../../../core/services/function/api.function';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, of, take } from 'rxjs';
import { CryptoIcon } from 'src/app/core/types/crypto';

@Component({
  selector: 's-select',
  templateUrl: './s-select.component.html',
  styleUrls: ['./s-select.component.scss'],
  providers : [apiFunctionService]
})
export class SSelectComponent {

  @Output() cryptoChange  = new EventEmitter();
  @Input() crypto  = new FormControl();
  @Input() typeTransaction = "Achat";
  @Input() typeOfPaymentMethod = "Full";

  cryptos$  : Observable<CryptoIcon[]> = of([]);


  constructor(private apiFunctionService : apiFunctionService){

  }

  ngOnInit(): void {

    switch(this.typeOfPaymentMethod) {
      case  "crypto" :
        this.cryptos$ = this.apiFunctionService.cryptoIconsSelf$.pipe(
          map((element)=> {return element}),
          take(1)
        )
      break;

      case  "electronic" :
        this.cryptos$ = this.apiFunctionService.localCurreny$.pipe(
          map((element)=> {return element}),
          take(1)
        )
      break;

      default :
        this.cryptos$ = this.apiFunctionService.cryptoIcons$.pipe(
          map((element)=> {return element}),
          take(1)
        )
      break;
    }

  }




}
