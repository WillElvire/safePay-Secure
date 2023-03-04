import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TransGatewayComponent } from '../pages/gateway/trans-gateway/trans-gateway.component';

const routes : Routes = [
  {
    path :'',
    component : TransGatewayComponent
  }
]

@NgModule({
  declarations: [],
  exports : [RouterModule],
  imports :[RouterModule.forChild(routes)]
})
export class PaymentRoutingModule {

}