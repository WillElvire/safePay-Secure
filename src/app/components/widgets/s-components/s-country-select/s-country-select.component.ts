import { FormControl } from '@angular/forms';
import { Observable, Subscription, of, take } from 'rxjs';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { Component, AfterViewInit, OnDestroy, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { CountryDialCode } from 'src/app/core/interface/Api';

@Component({
  selector: 's-country-select',
  templateUrl: './s-country-select.component.html',
  styleUrls: ['./s-country-select.component.scss']
})
export class SCountrySelectComponent implements OnInit  {

  @Output() dialCodeChange = new EventEmitter<string>();
  @Input() dialCode !: string;


  countryCode$  : Observable<CountryDialCode[]> = of([]);
  country  =  new FormControl() ;

  constructor(private AppFacades : AppFacades){
   this.country.valueChanges.subscribe((value)=>{
    if(!!value) return this.dialCodeChange.emit(value);
   })
  }

  ngOnInit(): void {
    this.countryCode$ = this.AppFacades.getCoutryDialCode().pipe(take(1));
  }
}
