import { getCryptoRegex } from 'src/app/core/services/utils/regex';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppFacades } from 'src/app/core/services/facades/app.facades';


@Component({
  selector: 'app-s-add-address',
  templateUrl: './s-add-address.component.html',
  styleUrls: ['./s-add-address.component.scss']
})
export class SAddAddressComponent implements OnInit {

  crypto = new FormControl();
  address : string = "" ;
  enableWeb3 : boolean  = false;
  message : string = "Renseigner une addresse";

  constructor(private appFacades : AppFacades) {

  }


  ngOnInit(): void {
    this.crypto.valueChanges.subscribe((value)=> {
      console.log(getCryptoRegex(value)?.regex)
    })
  }


  async connectWallet(){
    const wallet = await this.appFacades.connectAccount();
    console.log(wallet);
  }

  enableWeb3Function(){
    this.message = this.enableWeb3 ? "Renseigner une addresse" : "Utiliser un wallet connect";
    return this.enableWeb3 = !this.enableWeb3;
  }

}
