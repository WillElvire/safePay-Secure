import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  UntypedFormGroup,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FormToolComponent } from 'src/app/components/shared/website/form/form-tool/form-tool.component';
import { ComponentModule } from 'src/app/modules/components.module';
import { NZoroModule } from 'src/app/modules/nzoro.module';
import { AppFacades } from 'src/app/core/services/facades/app.facades';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    NZoroModule,
    ReactiveFormsModule,
    RouterModule,
    FormToolComponent,
    ComponentModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy {

  validateForm!: UntypedFormGroup;
  useWeb3: boolean = true;
  passwordVisible = false;
  countryCode: string = '';
  roleId !: string ;
  subscription = new Subscription();
  isSpinned : boolean = false;

  constructor(private fb: UntypedFormBuilder,private appFacades :AppFacades,private router : Router) {}


  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      countryCode : [null],
      roleId : [null],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  // check if all is ok before sent to the server
  submitForm(): void {

    if(this.verifyUserRole()) {
      this.setPhoneValue();
      if (!this.valideUserForm()) return this.displayErrors();
      return this.submitUserForm();
    }

  }


  //send http request to the server
  submitUserForm() {
    this.isSpinned = true;
    this.subscription = this.appFacades.registerUser({...this.validateForm.value,"roleId" :this.roleId}).subscribe(
       {
        next :  (response)=>{
          this.appFacades.mBuildSuccess(response.message);
          this.router.navigate(["/auth/login"]);
          this.isSpinned = false;
        },
        error : (err)=> {
          this.isSpinned = false;
          this.appFacades.mBuildError(err.error.message ? err.error.message : err.message);
        }
       }
     )
  }

  //set country code
  setPhoneValue() {
    if(!!this.countryCode) return this.validateForm.get("countryCode")?.setValue(this.countryCode);
    return this.appFacades.mBuildError("Veuillez choisir votre pays de residence")
  }

  verifyUserRole(){
    if(!!this.roleId) return true;
    this.appFacades.mBuildError("Veuillez choisir le type de compte souhaité");
    return false;
  }


  //check if the form is valid or not
  valideUserForm() {
    return this.validateForm.valid;
  }

  //display errors
  displayErrors() {
    Object.values(this.validateForm.controls).forEach((control) => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }
}
