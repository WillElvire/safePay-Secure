import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UaddressComponent } from './uaddress.component';

describe('UaddressComponent', () => {
  let component: UaddressComponent;
  let fixture: ComponentFixture<UaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UaddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
