import { User } from 'src/app/core/interface/Api';
import { StatesFacades } from './../../../../core/services/facades/state.facades';
import { Component, OnInit } from '@angular/core';
import { Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-uaccount',
  templateUrl: './uaccount.component.html',
  styleUrls: ['./uaccount.component.scss']
})
export class UaccountComponent implements OnInit {

  user !:User;

  constructor(private statesFacades: StatesFacades){

  }
  ngOnInit(): void {
      this.statesFacades.selectUser().pipe(take(1)).subscribe((user)=> this.user = user);
  }

}
