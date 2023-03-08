import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SAddAddressComponent } from 'src/app/components/widgets/s-components/s-modal/s-add-address/s-add-address.component';


@Component({
  selector: 'u-uaddress',
  templateUrl: './uaddress.component.html',
  styleUrls: ['./uaddress.component.scss']
})
export class UAddressComponent {

  constructor(private modalService : NzModalService){

  }
  showModal(): void {
    this.modalService.create({
      nzWidth : 800,
      nzContent: SAddAddressComponent,
      nzFooter : null
    });
  }

}
