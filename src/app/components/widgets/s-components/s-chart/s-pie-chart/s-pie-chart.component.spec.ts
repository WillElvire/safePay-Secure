import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPieChartComponent } from './s-pie-chart.component';

describe('SPieChartComponent', () => {
  let component: SPieChartComponent;
  let fixture: ComponentFixture<SPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
