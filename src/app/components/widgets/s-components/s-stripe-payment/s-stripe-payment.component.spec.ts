import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SStripePaymentComponent } from './s-stripe-payment.component';

describe('SStripePaymentComponent', () => {
  let component: SStripePaymentComponent;
  let fixture: ComponentFixture<SStripePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SStripePaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SStripePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
