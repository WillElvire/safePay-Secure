import { Subscription } from 'rxjs';
import { AppFacades } from './../../../../core/services/facades/app.facades';
import { Component, OnDestroy, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Role } from 'src/app/core/interface/Api';
import { FormControl } from '@angular/forms';

@Component({
  selector: 's-role-select',
  templateUrl: './s-role-select.component.html',
  styleUrls: ['./s-role-select.component.scss']
})
export class SRoleSelectComponent implements OnInit , OnDestroy {

  allRoles : Role[] = [];
  subcription = new Subscription();
  role = new FormControl();

  @Output() userRoleChange = new EventEmitter<string>();
  @Input()  userRole !: string;

  constructor(private appFacades : AppFacades){
    this.role.valueChanges.subscribe((response)=> { if(!!response) return this.userRoleChange.emit(response)});
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  ngOnInit(): void {
    this.subcription =  this.appFacades.getAllRoles().subscribe((response)=>{
      var roles = response.returnObject as Role[];
      this.allRoles = roles.filter((el)=> el.name != "staff" && el.name != "admin") as Role[];
    });
  }
}
