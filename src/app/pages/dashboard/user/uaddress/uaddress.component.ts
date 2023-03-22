import { Address } from './../../../../core/interface/Api';
import {Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SAddAddressComponent } from 'src/app/components/widgets/s-components/s-modal/s-add-address/s-add-address.component';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { StatesFacades } from 'src/app/core/services/facades/state.facades';
import { ActionSubjectService } from 'src/app/core/services/observer/action';


@Component({
  selector: 'u-uaddress',
  templateUrl: './uaddress.component.html',
  styleUrls: ['./uaddress.component.scss']
})
export class UAddressComponent implements OnInit , OnDestroy {

  addresses : Address[] = [];
  subscription1 = new Subscription();
  subscription2 = new Subscription();
  subscription3 = new Subscription();
  p: number = 1;
  isLoad : boolean = false;

  constructor(
     private modalService : NzModalService,
     private appFacades : AppFacades ,
     private stateFacades : StatesFacades,
     private actionSubject : ActionSubjectService
  ){

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
    this.subscription3 = this.actionSubject.modalSubject$.subscribe((val)=> {
      if(!!val) this.getUserAddress()
    })
  }

  getUserAddress() {
    this.isLoad = true;
   this.subscription1 =  this.stateFacades.selectUser().subscribe((user)=>{
      this.subscription2 = this.appFacades.getUserAddress(user.id).subscribe((response)=>{
        this.addresses = response.returnObject as Address[];
        this.isLoad = false;
      },(err)=> this.isLoad = false);
    })
  }

  changeSort(event :any) {
    console.log(event);
  }

  deleteAddress(id : any){
    this.appFacades.deleteUserAddress(id).subscribe((response)=>{
      console.log(response);
      this.appFacades.mBuildSuccess(response.message);
      this.actionSubject.emitModalSubject(true);
    })
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

  delete(id : any): void {
    this.modalService.confirm({
      nzTitle: 'Voulez vous vraiment supprimer cette addresse ?',
      nzContent: '<b style="color: red;">Cette action est irreversible</b>',
      nzOkText: 'Supprimer',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () =>{
        this.deleteAddress(id)
      },
      nzCancelText: 'Annuler',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
