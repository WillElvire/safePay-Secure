import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 's-stripe-payment',
  templateUrl: './s-stripe-payment.component.html',
  styleUrls: ['./s-stripe-payment.component.scss']
})
export class SStripePaymentComponent implements OnInit , OnDestroy {

  paymentHandler: any = null;

  @Output() transactionDetail  : EventEmitter<any> = new EventEmitter();

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: environment.STRIPE_PUBLIC_KEY,
      locale: 'fr',
      token:  (stripeToken: any) => {
        this.transactionDetail.emit(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'SafePay Secure',
      description: 'Checkout',
      amount: amount * 100,
    });
  }


  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: "sk_test_51MkViLLBXl8JUOh83RWGIM6ragfLsaIkiENURTtnbkBDwHdCEXA84NQ5hpvhrCS9fDh4UgyHjjAp3QgL5SU8jkKv005p4EdwRW",
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
  ngOnInit(): void {
    this.invokeStripe();
  }
  ngOnDestroy(): void {

  }
}

