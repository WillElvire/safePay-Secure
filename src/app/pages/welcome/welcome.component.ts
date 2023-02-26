import { Web3Services } from './../../core/services/web3/web3.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  address : string = "";
  constructor(private web3Services : Web3Services) { }

  ngOnInit() {
    this.web3Services.accountStatus$.subscribe((response)=>{
      console.log(response);
      this.address = response;
    })
  }

  connect(){
    this.web3Services.connectAccount();
  }

}
