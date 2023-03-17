import { publications } from './../../../store/marketplace$/marketplace.state';
import { Publication } from './../../interface/Api';
import { take} from 'rxjs';
import { MarketPlaceQuery } from './../../../store/marketplace$/marketplace.query';
import { Injectable, inject } from '@angular/core';
import { apiFunctionService } from './api.function';

@Injectable()
export class ProcessFunction {
  private readonly api = inject(apiFunctionService);
  private readonly MarketPlaceQuery = inject(MarketPlaceQuery);

  constructor() {
    this.getPublications();
  }

  getPublications() {
    return this.MarketPlaceQuery.selectPublication$.subscribe((element) => {
      console.log(element);
      this.updateStateOrNot(element);
    });
  }

  updateStateOrNot(makertPlace: []) {
    if (makertPlace == null) {
     this.api
        .getLastPublication()
        .pipe(take(1))
        .subscribe((response) => {
          console.log(response);
          const obj: publications = {
            publication: response.returnObject as Publication[],
          };
          this.MarketPlaceQuery.update(obj);
        });
    }
  }
}
