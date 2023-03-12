import { Injectable } from '@angular/core';
import { user } from './../../core/interface/State';
import { UserState } from './user.states';
import { Query, applyTransaction } from '@datorama/akita';
import { UserStore} from './user.store';
import { verifyObj } from 'src/app/core/services/data/verification';


@Injectable()
export class UserQuery extends Query<UserState> {

  //user$   = this.select();
  isLoggedIn$ = this.select(state => !!state["user"]);
  selectUser$ = this.select('user');
  fullUser$   = this.select(['user', 'token']);
  isLoading$  = this.selectLoading();
  selectId$   = this.select(['id']);
  error$      = this.selectError();


  constructor(protected override store: UserStore) {
    super(store);
  }

  get isLoggedIn() {
    const user = this.getValue()["user"];
    return verifyObj(user).index[0] != 0 ;
  }

  get user() {
    return this.getValue()["user"];
  }

  update(user : user) {
    applyTransaction(()=>{
      this.store.update(user);
      this.store.setLoading(true);
    })
  }
}
