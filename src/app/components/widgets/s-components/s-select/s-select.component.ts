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

  @Output() data  = new EventEmitter();
  @Input() typeTransaction = "Achat";
  cryptos$  : Observable<CryptoIcon[]> = of([]);
  crypto  = new FormControl() ;

  constructor(private apiFunctionService : apiFunctionService){
   this.crypto.valueChanges.subscribe((value)=>{
    if(!!value) return this.data.emit(value);
   })
  }

  ngOnInit(): void {
    this.cryptos$ = this.apiFunctionService.cryptoIcons$.pipe(
      map((element)=> {return element}),
      take(1)
     )
  }




}
