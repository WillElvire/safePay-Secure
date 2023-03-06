import { user } from 'src/app/core/interface/State';
import { UserService } from './../../core/services/storage/user.service';
import { EntityStore,StoreConfig } from '@datorama/akita';
import { UserState, createInitialState } from './user.states';
import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Injectable({providedIn:'root'})
@StoreConfig({name : 'user'})
export class UserStore extends EntityStore<UserState> {

  user !: UserState;
  constructor() {
    super(defaultUserService.getInstance().getUser());
  }

}

export class userStateAdapter   {
  user$ !: user;
  constructor(private user : user) {
    this.user = user;
  }

}

@Injectable()
class defaultUserService {

  private static INSTANCE :defaultUserService;

  private constructor(private userService : UserService){

  }
  public static  getInstance() : defaultUserService
  {
    if(defaultUserService.INSTANCE == null)
    {
      return new defaultUserService(new UserService(new StorageService()));
    }
    return defaultUserService.INSTANCE;
  }

  getUser() {
    return (!!this.userService.user ) ? new userStateAdapter(this.userService.user) : createInitialState();
  }
}
