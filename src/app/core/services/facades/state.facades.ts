import { AddressQuery } from './../../../store/address$/address.query';
import { UserQuery } from 'src/app/store/user$/user.query';
import { Injectable } from "@angular/core";
import { User } from '../../interface/Api';
import { user } from '../../interface/State';

@Injectable({
  providedIn: 'root',
})
export class StatesFacades {



  constructor(private UserQuery : UserQuery , private addressQuery : AddressQuery ) {

  }

  selectUser () {
    return  this.UserQuery.selectUser$;
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

  dispatchUser(user : user){
    return this.UserQuery.update(user);
  }
}
