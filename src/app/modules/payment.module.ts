import { NgModule } from "@angular/core";
import { PaymentRoutingModule } from "../routes/payment.routes";
import { NZoroModule } from "./nzoro.module";
import { TransGatewayComponent } from '../pages/gateway/trans-gateway/trans-gateway.component';
import { ComponentModule } from "./components.module";
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    TransGatewayComponent
  ],
  exports : [TransGatewayComponent],
  imports :[NZoroModule,PaymentRoutingModule,ComponentModule,NzRadioModule,FormsModule]
})
export class PaymentModule {

}
