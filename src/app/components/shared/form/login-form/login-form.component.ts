import { Subscription } from 'rxjs';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppFacades } from 'src/app/core/services/facades/app.facades';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit , OnDestroy {

  @Output() connectionState = new EventEmitter<any>();
  subscription  = new Subscription();
  validateForm!: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private appFacades : AppFacades
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required,Validators.minLength(6)]],
    });
  }

  submitForm(): void {
   if(!this.verifyUserData()) return this.displayError();
   return this.loginUser();
  }

  loginUser() {
    this.subscription =  this.appFacades.loginUser(this.validateForm.value).subscribe({
      next : (response)=>{
        if(response.code == "ACCEPTED") {

        }
        console.log(response)
      },
      error : (err)=>{
        this.appFacades.mBuildError(err.error.message ? err.error.message : err.message);
        console.log(err);
      }
    })
  }


  displayError() {
    Object.values(this.validateForm.controls).forEach((control) => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }

  verifyUserData() {
    return this.validateForm.valid;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
