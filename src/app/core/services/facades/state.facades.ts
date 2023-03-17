import { Publication } from './../../interface/Api';
import { MarketPlaceQuery } from './../../../store/marketplace$/marketplace.query';
import { user } from 'src/app/core/interface/State';
import { AddressQuery } from './../../../store/address$/address.query';
import { UserQuery } from 'src/app/store/user$/user.query';
import { Injectable } from '@angular/core';
import { publications } from 'src/app/store/marketplace$/marketplace.state';

@Injectable({
  providedIn: 'root',
})
export class StatesFacades {
  constructor(
    private UserQuery: UserQuery,
    private addressQuery: AddressQuery,
    private marketPlaceQuery : MarketPlaceQuery
  ) {}

  selectUser() {
    return this.UserQuery.selectUser$;
  }

  get marketPlace$() {
    return this.marketPlaceQuery.selectPublication$;
  }

  get isLoggedIn() {
    return this.UserQuery.isLoggedIn;
  }

  get logout() {
    return this.UserQuery.logout();
  }

  updateUserState(user : user) {
    return this.UserQuery.update(user)
  }

  selectAddresses() {
    return this.addressQuery.selectAddress$;
  }

  selectId() {
    return this.UserQuery.selectId$;
  }

  fullUser() {
    return this.UserQuery.fullUser$;
  }

  dispatchUser(user: user) {
    return this.UserQuery.update(user);
  }

  dispatchMarketPlace(marketPlace : publications) {
   return this.marketPlaceQuery.update(marketPlace);
  }
}
