import { Publication } from './../../core/interface/Api';
import { EntityState } from "@datorama/akita";


export interface MarketPlaceState  extends EntityState<publications, number> {

}

export function createInitialState(): MarketPlaceState {
  return {
    publication  : []
  };
}

export interface publications  {
  publication : Publication[]
}
