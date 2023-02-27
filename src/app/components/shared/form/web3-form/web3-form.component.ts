import { AppFacades } from './../../../../core/services/facades/app.facades';
import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() connectionState = new EventEmitter<any>();

  constructor(private AppFacades: AppFacades) {}

  Web3Connect() {
    this.AppFacades.connectAccount()
      .then((response: any) => {
        this.connectionState.emit({ code: 'success', response: 'connected' });
      })
      .catch((err) => {
        this.connectionState.emit({ code: 'error', response: err });
      });
  }
}
