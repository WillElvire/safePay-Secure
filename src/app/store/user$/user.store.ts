import { UserState } from '../../core/interface/State';
import { Store, StoreConfig } from '@datorama/akita';


export function createInitialState(): UserState {
  return {
    token: '',
    user: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      countryCode: '',
      role: {
        id: '',
      },
    },
  };
}

@StoreConfig({name : 'userStore'})
export class UserStore extends Store<UserState> {
  constructor() {
    super(createInitialState());
  }
}
