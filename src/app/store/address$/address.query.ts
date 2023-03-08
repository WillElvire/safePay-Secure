import { AddressState } from './address.state';
import { Injectable } from '@angular/core';
import { Query, applyTransaction } from '@datorama/akita';
import { Address } from '../../core/interface/Api';
import { AddressStore } from './address.store';



@Injectable()
export class AddressQuery extends Query<AddressState> {

  //user$   = this.select();
  selectAddress$ = this.select();
  isLoading$  = this.selectLoading();
  error$      = this.selectError();

  constructor(protected override readonly  store: AddressStore) {
    super(store)
  }

  get address() {
    return this.getValue();
  }

  update(address : Address[]) {
    applyTransaction(()=>{
      this.store.update(address);
      this.store.setLoading(true);
    })
  }
}
