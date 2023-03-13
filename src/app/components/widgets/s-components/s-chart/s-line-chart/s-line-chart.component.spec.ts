import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SLineChartComponent } from './s-line-chart.component';

describe('SLineChartComponent', () => {
  let component: SLineChartComponent;
  let fixture: ComponentFixture<SLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SLineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
