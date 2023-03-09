import { FormControl } from '@angular/forms';
import { Address } from './../../../../core/interface/Api';
import { StatesFacades } from './../../../../core/services/facades/state.facades';
import { take } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppFacades } from 'src/app/core/services/facades/app.facades';

@Component({
  selector: 's-s-safe-connect',
  templateUrl: './s-safe-connect.component.html',
  styleUrls: ['./s-safe-connect.component.scss']
})
export class SSafeConnectComponent implements OnInit {

  @Input() address : FormControl<string> = new FormControl();
  @Output() addressChange =  new EventEmitter<FormControl<string>>;

  addresses : Address[] = [];

  constructor(private appFacades : AppFacades,private stateFacade : StatesFacades){

  }
  ngOnInit(): void {
    this.stateFacade.selectUser().pipe(take(1)).subscribe((user)=>{
      this.appFacades.getUserAddress(user?.id).pipe(take(1)).subscribe((response)=>{
         this.addresses = response.returnObject as Address[];
      })
    })

  }
}
