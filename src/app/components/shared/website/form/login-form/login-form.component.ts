import { user } from './../../../../../core/interface/State';
import { environment } from './../../../../../../environments/environment.prod';
import { Subscription } from 'rxjs';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { UserQuery } from 'src/app/store/user$/user.query';
import { MResultMessage, User } from 'src/app/core/interface/Api';
import { NZoroModule } from 'src/app/modules/nzoro.module';
import { Router } from '@angular/router';
import { AppStateFacade } from 'src/app/core/services/facades/appState.facades';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    NZoroModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers : [UserQuery]
})

/**
 * @author willelvire
 */
export class LoginFormComponent implements OnInit , OnDestroy {

  //declaration of variable
  @Output() connectionState = new EventEmitter<any>();
  subscription  = new Subscription();
  validateForm!: UntypedFormGroup;
  isSpinned : boolean = false;
  passwordVisible : boolean  = false;


  constructor(
    private fb: UntypedFormBuilder,
    private appState : AppStateFacade,
    private userQuery : UserQuery,
    private router : Router
  ) {
  }


  ngOnInit(): void {
    // build the form
    this.validateForm = this.fb.group({
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required,Validators.minLength(6)]],
    });
  }

  // submit the form
  submitForm(): void {
   if(!this.verifyUserData()) return this.displayError();
   return this.loginUser();
  }

  //login user
  loginUser() {
    this.isSpinned  = true;
    this.subscription =  this.appState.AppFacades.loginUser(this.validateForm.value).subscribe(this.processAfterLogin())
  }

  // the proccess launched after the login
  processAfterLogin() {
   return { next : (response : MResultMessage )=>{
      //verify the code
      if(response.code == "ACCEPTED") {
        const user : user = {user : response.returnObject as User, token : '' };
        //console.log(user);
        //update the user state
        this.appState.updateUser(user);
        this.router.navigate(["/"]);
      }
      this.isSpinned = false;
    //console.log(response)
    },
    error : (err : any)=>{
      this.isSpinned = false;
      this.appState.AppFacades.mBuildError(err.error.message ? err.error.message : err.message);
      console.log(err);
    }
   }
  }


  //display error
  displayError() {
    Object.values(this.validateForm.controls).forEach((control) => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }

  //verify form
  verifyUserData() {
    return this.validateForm.valid;
  }

  //destroy everything
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
