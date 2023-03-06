import { EntityState } from "@datorama/akita";
import { user } from "../../core/interface/State";

export interface UserState  extends EntityState<user, number> {

}


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


export function defaultUserState() : user {
  return {
    token: '',
    user: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password : '',
      countryCode: '',
      role: {
        id: '',
      },
    },
  };
}
