import { getCryptoRegex } from 'src/app/core/services/utils/regex';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { StatesFacades } from 'src/app/core/services/facades/state.facades';
import { ActionSubjectService } from 'src/app/core/services/observer/action';
import { take } from 'rxjs';


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
  userId : string = "";

  constructor(private appFacades : AppFacades,private stateFacade : StatesFacades , private actionSubject : ActionSubjectService) {
    this.getUserId();
  }


  ngOnInit(): void {

  }

  getUserId() {
    this.stateFacade.selectUser().pipe(take(1)).subscribe((user)=> this.userId = user.id);
  }


  async connectWallet(){
    const wallet = await this.appFacades.connectAccount();
    console.log(wallet);
  }

  enableWeb3Function(){
    this.message = this.enableWeb3 ? "Renseigner une addresse" : "Utiliser un wallet connect";
    return this.enableWeb3 = !this.enableWeb3;
  }

  addNewAddress() {
    const data = {address : this.address,name :this.crypto.value};
    if(!this.address && !this.crypto.value)  return this.appFacades.nBuildError("Veuillez renseigner tout les champs");
    return this.appFacades.addUserAddress(data,this.userId).pipe(take(1)).subscribe(
      {
        next : (response)=> {
          this.actionSubject.emitModalSubject(true);
          this.appFacades.mBuildSuccess(response.message)
        },
        error:  (err)=> this.appFacades.mBuildError(err.error.message ? err.error.message : err.message)
      }
    );
  }
}
