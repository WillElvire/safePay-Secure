import { StatesFacades } from 'src/app/core/services/facades/state.facades';
import { Component, OnInit, inject } from '@angular/core';
import { TUI_DEFAULT_STRINGIFY } from '@taiga-ui/cdk';
import { TuiPoint } from '@taiga-ui/core';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { delay, mergeMap } from 'rxjs';
@Component({
  selector: 'app-uhome',
  templateUrl: './uhome.component.html',
  styleUrls: ['./uhome.component.scss'],
})
export class UhomeComponent implements OnInit {
  private readonly appFacades = inject(AppFacades);
  private readonly StatesFacades = inject(StatesFacades);
  loadSpinner: boolean = false;
  report = {
    u_address: 0,
    u_p_attente: 0,
    u_p_close: 0,
    u_p_confirmer: 0,
  };
  reportForChar : number[] = [];
  readonly value: readonly TuiPoint[] = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
  ];
  readonly stringify = TUI_DEFAULT_STRINGIFY;

  ngOnInit(): void {
    this.loadSpinner = true;
    this.StatesFacades.selectUser()
      .pipe(
        delay(2000),
        mergeMap((user) => this.getUserReport(user.id))
      )
      .subscribe((response) => {
        this.report = response.returnObject as any;
        this.loadSpinner = false;
        this.reportForChar = [this.report.u_p_confirmer,this.report.u_p_attente,this.report.u_p_close]
      });
  }

  getUserReport(id: string) {
    return this.appFacades.getReportById(id);
  }
}
