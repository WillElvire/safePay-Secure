import { NgModule } from "@angular/core";
import { PaymentRoutingModule } from "../routes/payment.routes";
import { NZoroModule } from "./nzoro.module";
import { TransGatewayComponent } from '../pages/gateway/trans-gateway/trans-gateway.component';

@NgModule({
  declarations: [
    TransGatewayComponent
  ],
  exports : [TransGatewayComponent],
  imports :[NZoroModule,PaymentRoutingModule]
})
export class PaymentModule {

}
