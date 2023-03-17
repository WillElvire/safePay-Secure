import { MarketPlaceState,createInitialState } from './marketplace.state';
import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';

@Injectable({providedIn:'root'})
@StoreConfig({name : 'marketplace'})
export class marketPlaceStore extends EntityStore<MarketPlaceState> {
  constructor(){
    super(createInitialState())
  }


}
