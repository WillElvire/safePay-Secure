import { AuthRoutingModule } from './../routes/auth.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLayoutComponent } from '../layouts/form-layout/form-layout.component';
import { ComponentModule } from './components.module';

@NgModule({
  declarations: [FormLayoutComponent],
  exports: [],
  imports: [CommonModule, AuthRoutingModule,ComponentModule]
})
export class FormLayoutModule {
  constructor() {}
}
