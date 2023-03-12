import { PaymentGuard } from './../guards/payment/payment.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TransGatewayComponent } from '../pages/gateway/trans-gateway/trans-gateway.component';

const routes: Routes = [
  {
    path: '',
    component: TransGatewayComponent,
  },
  {
    path: 'transaction',
    component: TransGatewayComponent,
    canActivate: [PaymentGuard],
    children: [
      {
        path: 'checkout/:id',
        component: TransGatewayComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class PaymentRoutingModule {}
