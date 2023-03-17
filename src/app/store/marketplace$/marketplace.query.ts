import { Injectable } from '@angular/core';
import { MarketPlaceState, publications } from './marketplace.state';
import {Query,applyTransaction, dispatchUpdate} from "@datorama/akita";
import { marketPlaceStore } from './marketplace.store';
import { Publication } from '../../core/interface/Api';


@Injectable()
export class MarketPlaceQuery  extends Query<MarketPlaceState> {

  selectPublication$ = this.select("publication");
  isLoading$  = this.selectLoading();

  constructor(protected override readonly  store: marketPlaceStore){
    super(store);
  }


  update(publication : publications) {
    applyTransaction(()=>{
      this.store.update(publication);
      this.store.setLoading(true);
    })
  }



}
