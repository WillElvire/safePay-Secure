import { FormControl, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { CryptoExchange } from 'src/app/core/types/crypto';
import { take,Subscription } from 'rxjs';
import { PublicationPayload } from 'src/app/core/interface/Api';
import { StatesFacades } from 'src/app/core/services/facades/state.facades';
import { VerificationService } from 'src/app/core/services/data/verification';
import { ActionSubjectService } from 'src/app/core/services/observer/action';

@Component({
  selector: 'app-sell-publication-form',
  templateUrl: './sell-publication-form.component.html',
  styleUrls: ['./sell-publication-form.component.scss']
})
export class SellPublicationFormComponent implements OnInit,OnDestroy {

  currency_to_sell : FormControl = new FormControl([Validators.required]);
  mean_of_payment : FormControl = new FormControl([Validators.required]);
  quantity        : FormControl<number> = new FormControl(1,[Validators.required]) as FormControl<number>;
  currencyRate   !: CryptoExchange ;
  price           : number = 0;
  subscriptions   : Subscription[] = [];
  address         : FormControl<string> = new FormControl();
  description     : FormControl<string> = new FormControl();
  loadSpinner     : boolean = false;
  id !:string;

  constructor(
   private appFacades: AppFacades,
   private stateFacade : StatesFacades,
   private verificationService : VerificationService,
   private  actionSubject : ActionSubjectService
  ) {



  }
  ngOnInit(): void {
    this.subscriptionToValues();
    this.getUserConnected();
  }

  subscriptionToValues() {
    const  subcription1 : Subscription = this.mean_of_payment.valueChanges.subscribe((values) => {
      if (!!this.currency_to_sell.value && !!values) return this.getRate();
    });
    const  subcription2 : Subscription=  this.currency_to_sell.valueChanges.subscribe((values) => {
      if (!!this.mean_of_payment.value && !!values) return this.getRate();
    });
    this.subscriptions.push(subcription1);
    this.subscriptions.push(subcription2);
  }

  getUserConnected() {
    this.stateFacade.selectUser().pipe(take(1)).subscribe((user)=> this.id = user.id);
  }

  getRate() {
    this.appFacades
      .getCryptoExchange(this.mean_of_payment.value,this.currency_to_sell.value)
      .pipe(take(1))
      .subscribe((rate) => this.currencyRate = rate);
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach((subscription) => subscription.unsubscribe);
  }

  addPublication(){
    const formIsValid =  this.validateUserForm();
    if(formIsValid)return this.sendAddRequest();
    return this.appFacades.mBuildError("Veuillez renseigner tout les champs");
  }

  sendAddRequest() {
    this.loadSpinner = true;
    this.appFacades.addPublication(this.buildPublicationObject()).subscribe(
      {
        next :  (response)=>{
          this.loadSpinner = false;
          this.actionSubject.emitModalSubject(true);
          this.appFacades.mBuildSuccess(response.message);
          this.actionSubject.emitActionSubject(true);
        },
        error : (err)=> {
          this.loadSpinner = false;
          this.appFacades.mBuildError(err.error.message ? err.error.message : err.message);
        }
      }
    )
  }
  buildPublicationObject() {
    const publication : PublicationPayload = {
      monnaie_a_recevoir : this.currency_to_sell.value ,
      price : this.price ,
      quantity : this.quantity.value ,
      title :  "VENTE " + this.currency_to_sell.value,
      monnaie_echange : this.mean_of_payment.value,
      userId : this.id,
      description :  this.description.value,
      address : this.address.value
    }
    console.log(publication);
    return publication;
  }


  validateUserForm()  {
    const countFieldInvalid =  this.verificationService.verifyObj(this.buildPublicationObject());
    if(countFieldInvalid.count == 0) return true;
    return false;
  }
}
