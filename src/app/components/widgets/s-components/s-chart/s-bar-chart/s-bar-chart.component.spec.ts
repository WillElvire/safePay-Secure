import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBarChartComponent } from './s-bar-chart.component';

describe('SBarChartComponent', () => {
  let component: SBarChartComponent;
  let fixture: ComponentFixture<SBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
