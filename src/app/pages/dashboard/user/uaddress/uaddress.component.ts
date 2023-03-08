import { Address } from './../../../../core/interface/Api';
import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SAddAddressComponent } from 'src/app/components/widgets/s-components/s-modal/s-add-address/s-add-address.component';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { StatesFacades } from 'src/app/core/services/facades/state.facades';


@Component({
  selector: 'u-uaddress',
  templateUrl: './uaddress.component.html',
  styleUrls: ['./uaddress.component.scss']
})
export class UAddressComponent implements OnInit , OnDestroy {

  addresses : Address[] = [];
  subscription1 = new Subscription();
  subscription2 = new Subscription();


  constructor(private modalService : NzModalService,private appFacades : AppFacades , private stateFacades : StatesFacades){

  }
  showModal(): void {
    this.modalService.create({
      nzWidth : 800,
      nzContent: SAddAddressComponent,
      nzFooter : null
    });
  }

  ngOnInit(): void {
      this.getUserAddress();
  }
  getUserAddress() {
    this.stateFacades.selectUser().subscribe((user)=>{
      this.appFacades.getUserAddress(user.id).subscribe((response)=>{
        this.addresses = response.returnObject as Address[];
      });
    })
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
