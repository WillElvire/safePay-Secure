import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Plan } from 'src/app/core/interface/Api';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { StatesFacades } from 'src/app/core/services/facades/state.facades';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent  implements OnInit {
  plans: Plan[] = [];
  isSpinning: boolean = false;
  userId : string = "";
  constructor(private appFacades: AppFacades,private stateFacades : StatesFacades,private router : Router) {
    this.stateFacades.selectUser().pipe(take(1)).subscribe((user)=> this.userId = user.id)
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

  navigate(id : string){
   this.router.navigate(["/payment/transaction/checkout/plan"],{queryParams : { plan : id , inc : this.userId}})
  }
}
