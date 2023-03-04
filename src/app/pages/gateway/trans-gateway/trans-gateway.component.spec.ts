import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransGatewayComponent } from './trans-gateway.component';

describe('TransGatewayComponent', () => {
  let component: TransGatewayComponent;
  let fixture: ComponentFixture<TransGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransGatewayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
