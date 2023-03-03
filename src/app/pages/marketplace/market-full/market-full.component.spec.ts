import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketFullComponent } from './market-full.component';

describe('MarketFullComponent', () => {
  let component: MarketFullComponent;
  let fixture: ComponentFixture<MarketFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
