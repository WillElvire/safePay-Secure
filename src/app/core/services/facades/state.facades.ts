import { UserQuery } from 'src/app/store/user$/user.query';
import { Injectable } from "@angular/core";
import { User } from '../../interface/Api';
import { user } from '../../interface/State';

@Injectable({
  providedIn: 'root',
})
export class StatesFacades {



  constructor(private UserQuery : UserQuery) {

  }

  selectUser () {
    return  this.UserQuery.selectUser$;
  }

  fullUser() {
    return this.UserQuery.fullUser$;
  }

  dispatchUser(user : user){
    return this.UserQuery.update(user);
  }
}
