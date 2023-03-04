import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketBannerComponent } from './market-banner.component';

describe('MarketBannerComponent', () => {
  let component: MarketBannerComponent;
  let fixture: ComponentFixture<MarketBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
