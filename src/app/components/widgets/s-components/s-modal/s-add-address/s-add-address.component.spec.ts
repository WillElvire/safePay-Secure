import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAddAddressComponent } from './s-add-address.component';

describe('SAddAddressComponent', () => {
  let component: SAddAddressComponent;
  let fixture: ComponentFixture<SAddAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAddAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SAddAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
