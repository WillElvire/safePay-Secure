import { userState } from './store/user$/user.state';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [userState]
})
export class AppComponent{
  constructor(private userState : userState) {
    //this.userState.isConnected$.subscribe((response)=>console.log("from parent : " + response));
  }
}
