import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoldeComponent } from './usolde.component';

describe('UsoldeComponent', () => {
  let component: UsoldeComponent;
  let fixture: ComponentFixture<UsoldeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsoldeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsoldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
