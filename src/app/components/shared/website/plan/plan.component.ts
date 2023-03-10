import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Plan } from 'src/app/core/interface/Api';
import { AppFacades } from 'src/app/core/services/facades/app.facades';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent  implements OnInit {
  plans: Plan[] = [];
  isSpinning: boolean = false;
  constructor(private appFacades: AppFacades) {

  }

  ngOnInit(): void {
    this.isSpinning = true
    this.appFacades
    .getAllPlans()
    .pipe(take(1))
    .subscribe(
      (response) => {
        this.plans = response.returnObject as Plan[];
        this.isSpinning = false;
      },
      (err) => (this.isSpinning = false)
    );
  }

  formatData(field: string) {
    return field;
  }
}
