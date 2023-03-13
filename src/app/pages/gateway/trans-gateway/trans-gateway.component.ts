import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 't-gateway',
  templateUrl: './trans-gateway.component.html',
  styleUrls: ['./trans-gateway.component.scss'],
})
export class TransGatewayComponent implements OnInit {
  payment: string = 'electronic';
  transactionAmount!: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.transactionAmount = params.get("amount") as string
      console.log(params);
    });
  }

  activePaymentMethod(type: string) {
    this.payment = type;
  }

  getVisaTransactionDetail($event: any) {
    console.log('parent node', $event);
  }
}
