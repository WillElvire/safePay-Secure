import { Injectable } from '@angular/core';
import { user } from './../../core/interface/State';
import { UserState } from './user.states';
import { Query, applyTransaction } from '@datorama/akita';
import { UserStore} from './user.store';


@Injectable()
export class UserQuery extends Query<UserState> {

  //user$   = this.select();
  isLoggedIn$ = this.select(state => !!state["token"]);
  selectUser$ = this.select('user');
  fullUser$   = this.select(['user', 'token']);
  isLoading$  = this.selectLoading();
  error$      = this.selectError();

  constructor(protected override store: UserStore) {
    super(store);
  }

  get isLoggedIn() {
    return !!this.getValue()["token"];
  }

  get user() {
    return this.getValue()["user"];
  }

  update(user : user) {
    applyTransaction(()=>{
      this.store.update(user);
      this.store.setLoading(false);
    })
  }
}
