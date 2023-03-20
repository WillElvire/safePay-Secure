import { StatesFacades } from 'src/app/core/services/facades/state.facades';
import { Component, OnInit, inject } from '@angular/core';
import { TUI_DEFAULT_STRINGIFY } from '@taiga-ui/cdk';
import { TuiPoint } from '@taiga-ui/core';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { delay, mergeMap } from 'rxjs';
import { User } from 'src/app/core/interface/Api';
@Component({
  selector: 'app-uhome',
  templateUrl: './uhome.component.html',
  styleUrls: ['./uhome.component.scss'],
})
export class UhomeComponent implements OnInit {
  private readonly appFacades = inject(AppFacades);
  private readonly StatesFacades = inject(StatesFacades);
  user : any;
  loadSpinner: boolean = false;
  report = {
    u_address: 0,
    u_p_attente: 0,
    u_p_close: 0,
    u_p_confirmer: 0,
    u_t_count: 0,
  };
  reportForChar: number[] = [];
  value!: TuiPoint[];

  readonly stringify = TUI_DEFAULT_STRINGIFY;

  ngOnInit(): void {
    this.loadSpinner = true;
    this.StatesFacades.selectUser()
      .pipe(
        delay(2000),
        mergeMap((user) => this.getUserReport(user))
      )
      .subscribe((response) => {
        this.report = response.returnObject as any;
        this.loadSpinner = false;
        this.value =
          this.report.u_t_count > 0
            ? [
                [0, 0],
                [300, 200],
              ]
            : [[0, 0]];

        console.log(this.report);
        this.reportForChar = [
          this.report.u_p_confirmer,
          this.report.u_p_attente,
          this.report.u_p_close,
        ];
      });
  }

  getUserReport(user:User) {
    this.user = user;
    return this.appFacades.getReportById(user.id as string);
  }
}
