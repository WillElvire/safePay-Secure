import { EntityState } from "@datorama/akita";
import { Address } from "../../core/interface/Api";

export interface AddressState  extends EntityState<Address, number> {

}


export function createInitialState(): AddressState {
  return {

  };
}

