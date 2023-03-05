import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCountrySelectComponent } from './s-country-select.component';

describe('SCountrySelectComponent', () => {
  let component: SCountrySelectComponent;
  let fixture: ComponentFixture<SCountrySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SCountrySelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SCountrySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
