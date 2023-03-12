import { NgModule } from "@angular/core";
import { PaymentRoutingModule } from "../routes/payment.routes";
import { TransGatewayComponent } from '../pages/gateway/trans-gateway/trans-gateway.component';
import { ComponentModule } from "./components.module";
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  declarations: [
    TransGatewayComponent
  ],
  exports : [TransGatewayComponent],
  imports :[PaymentRoutingModule,ComponentModule,NzRadioModule]
})
export class PaymentModule {

}
