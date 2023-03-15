import { user } from 'src/app/core/interface/State';
import { AddressQuery } from './../../../store/address$/address.query';
import { UserQuery } from 'src/app/store/user$/user.query';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatesFacades {
  constructor(
    private UserQuery: UserQuery,
    private addressQuery: AddressQuery
  ) {}

  selectUser() {
    return this.UserQuery.selectUser$;
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
}
