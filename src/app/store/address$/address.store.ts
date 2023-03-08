import { AddressState, createInitialState } from './address.state';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
@StoreConfig({name : 'address'})
export class AddressStore extends EntityStore<AddressState> {

  constructor() {
    super(createInitialState());
  }

}
