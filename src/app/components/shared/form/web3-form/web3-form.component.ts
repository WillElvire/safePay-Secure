import { Web3Services } from 'src/app/core/services/web3/web3.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';


@Component({
  selector: 'app-web3-form',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule
  ],
  providers: [Web3Services],
  templateUrl: './web3-form.component.html',
  styleUrls: ['./web3-form.component.scss'],
})
export class Web3FormComponent {
  constructor(private web3Services : Web3Services) {

  }

  Web3Connect() {

  }
}
