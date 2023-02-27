import { AppFacades } from './../../../../core/services/facades/app.facades';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-web3-form',
  standalone: true,
  imports: [CommonModule, NzButtonModule],
  templateUrl: './web3-form.component.html',
  styleUrls: ['./web3-form.component.scss'],
})
export class Web3FormComponent {

  constructor(private AppFacades: AppFacades) {}

  Web3Connect() {
    this.AppFacades.connectAccount()
      .then((response) => {
        this.AppFacades.getAccount().subscribe((response) => {
          if (!!response) {
            this.AppFacades.nBuildSuccess(response[0], 'Connection reussi');
          }
        });
      })
      .catch((err) => {
        this.AppFacades.mBuildError(err.message);
      });
  }
}
