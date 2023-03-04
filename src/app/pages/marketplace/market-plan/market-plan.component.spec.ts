import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPlanComponent } from './market-plan.component';

describe('MarketPlanComponent', () => {
  let component: MarketPlanComponent;
  let fixture: ComponentFixture<MarketPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
